import { ArrowRight, Leaf, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ayurvedic-herbs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-pattern">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Ayurvedic herbs and spices arranged beautifully"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">100% Natural Ayurvedic Products</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="gradient-text">Nature's Nectar</span>
            <br />
            <span className="text-foreground">for Holistic</span>
            <br />
            <span className="text-foreground">Wellness</span>
          </h1>

          {/* Hindi Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-serif">
            प्राकृतिक स्वास्थ्य का खजाना
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Discover the ancient wisdom of Ayurveda with our premium collection of 
            100% natural herbs, spices, and traditional remedies. Each product is 
            carefully sourced and processed to maintain its natural potency and purity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="hero" size="lg" className="group">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn About Ayurveda
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Certified Authentic</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-primary" />
              <span>5000+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="w-4 h-4 text-primary" />
              <span>No Chemicals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;