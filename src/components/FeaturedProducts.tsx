import { Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import productsImage from "@/assets/products-collection.jpg";

const FeaturedProducts = () => {
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
      benefits: "Mood enhancement, Antioxidant",
      forms: ["Premium Threads"]
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular Ayurvedic products, carefully selected for their 
            purity, potency, and traditional healing properties.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="rounded-full">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Product Name */}
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

                {/* Benefits */}
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

                {/* Add to Cart */}
                <Button className="w-full group" variant="default">
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;