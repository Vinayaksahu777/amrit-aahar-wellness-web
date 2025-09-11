import { Leaf, Users, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import traditionImage from "@/assets/traditional-preparation.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure, chemical-free products sourced directly from nature's bounty.",
    },
    {
      icon: Users,
      title: "Traditional Wisdom",
      description: "Ancient Ayurvedic knowledge passed down through generations.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous testing and certification for purity and potency.",
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Supporting complete physical, mental, and spiritual health.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About <span className="gradient-text">Amrit Aahar</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Amrit Aahar is rooted in the ancient science of Ayurveda, bringing you 
              the finest collection of natural herbs, spices, and traditional remedies. 
              Our mission is to make authentic Ayurvedic wellness accessible to modern lives.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each product in our collection is carefully sourced from certified organic 
              farms and processed using traditional methods to preserve their natural 
              healing properties. We believe that nature holds the key to optimal health 
              and wellbeing.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={traditionImage}
              alt="Traditional Ayurvedic preparation with mortar and pestle"
              className="w-full h-[600px] object-cover rounded-2xl shadow-elevated"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            
            {/* Floating Stats */}
            <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
            
            <div className="absolute top-8 right-8 bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Ayurvedic Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;