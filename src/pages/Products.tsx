import { Leaf, Filter, Star, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import productsImage from "@/assets/products-collection.jpg";

const Products = () => {
  const categories = [
    "All Products",
    "Herbs & Roots", 
    "Spices & Seasonings",
    "Dry Fruits",
    "Essential Oils",
    "Herbal Teas"
  ];

  const products = [
    {
      id: 1,
      name: "Organic Turmeric Powder",
      hindiName: "हल्दी पाउडर",
      price: "₹299",
      originalPrice: "₹399",
      image: productsImage,
      rating: 4.8,
      reviews: 156,
      category: "Spices & Seasonings",
      benefits: "Anti-inflammatory, Immunity booster",
      forms: ["Raw", "Powder"]
    },
    {
      id: 2,
      name: "Pure Ashwagandha Root",
      hindiName: "अश्वगंधा जड़",
      price: "₹459",
      originalPrice: "₹599",
      image: productsImage,
      rating: 4.9,
      reviews: 203,
      category: "Herbs & Roots",
      benefits: "Stress relief, Energy enhancement",
      forms: ["Raw", "Powder", "Capsules"]
    },
    {
      id: 3,
      name: "Premium Neem Leaves",
      hindiName: "नीम पत्ती",
      price: "₹199",
      originalPrice: "₹249",
      image: productsImage,
      rating: 4.7,
      reviews: 89,
      category: "Herbs & Roots",
      benefits: "Blood purification, Skin health",
      forms: ["Dried", "Powder"]
    },
    {
      id: 4,
      name: "Himalayan Saffron",
      hindiName: "केसर",
      price: "₹2999",
      originalPrice: "₹3499",
      image: productsImage,
      rating: 5.0,
      reviews: 67,
      category: "Spices & Seasonings",
      benefits: "Mood enhancement, Antioxidant",
      forms: ["Premium Threads"]
    },
    {
      id: 5,
      name: "Organic Amla Powder",
      hindiName: "आंवला पाउडर",
      price: "₹249",
      originalPrice: "₹319",
      image: productsImage,
      rating: 4.6,
      reviews: 124,
      category: "Dry Fruits",
      benefits: "Vitamin C, Hair health",
      forms: ["Dried", "Powder"]
    },
    {
      id: 6,
      name: "Pure Brahmi Extract",
      hindiName: "ब्राह्मी",
      price: "₹379",
      originalPrice: "₹459",
      image: productsImage,
      rating: 4.8,
      reviews: 91,
      category: "Herbs & Roots",
      benefits: "Memory enhancement, Mental clarity",
      forms: ["Powder", "Oil"]
    }
  ];

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
                    variant={category === "All Products" ? "default" : "outline"}
                    size="sm"
                    className="mb-2"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="card-hover group bg-card border-border">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={`${product.name} - Premium Ayurvedic product`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                      {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}% OFF
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-serif font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.hindiName}</p>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{product.benefits}</p>

                    {/* Forms */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.forms.map((form) => (
                        <span
                          key={form}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {form}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Products;