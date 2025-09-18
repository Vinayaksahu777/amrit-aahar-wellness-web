import { useState, useEffect } from "react";
import { Leaf, Filter, Star, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/hooks/useCart";
import productsImage from "@/assets/products-collection.jpg";

const Products = () => {
  const { addToCart, loading: cartLoading } = useCart();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  
  const categories = [
    "All Products",
    "Herbs & Spices", 
    "Essential Oils",
    "Supplements",
    "Teas & Beverages",
    "Beauty & Skincare",
    "Health Products"
  ];

  useEffect(() => {
    fetchProducts();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('products-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'products'
        },
        () => {
          fetchProducts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('availability_status', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-muted/30 hero-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Leaf className="w-4 h-4 mr-2" />
                Premium Ayurvedic Collection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Our <span className="gradient-text">Products</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover our comprehensive collection of authentic Ayurvedic products, 
                carefully sourced and processed to maintain their natural healing properties.
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-between mb-12">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    className="mb-2"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" size="sm">
                  <Grid className="w-4 h-4 mr-2" />
                  Sort
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="card-hover group bg-card border-border">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image_url || productsImage}
                        alt={`${product.name} - Premium Ayurvedic product`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      
                      <h3 className="font-serif font-semibold text-lg mb-3">{product.name}</h3>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-primary">${product.price}</span>
                        </div>
                      </div>

                      <Button 
                        className="w-full"
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image_url || productsImage
                        })}
                        disabled={cartLoading}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Products;