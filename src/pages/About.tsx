import { Leaf, Award, Users, Heart, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import traditionImage from "@/assets/traditional-preparation.jpg";

const About = () => {
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
    {
      icon: Shield,
      title: "Certified Authentic",
      description: "Verified by Ayurvedic experts and quality control standards.",
    },
    {
      icon: Star,
      title: "Customer Trusted",
      description: "Thousands of satisfied customers trust our products daily.",
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Ayurvedic Products" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Natural Ingredients" }
  ];

  const team = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Chief Ayurvedic Consultant",
      experience: "25+ years in traditional medicine",
      image: traditionImage
    },
    {
      name: "Priya Patel", 
      role: "Quality Assurance Head",
      experience: "Certified in herbal product testing",
      image: traditionImage
    },
    {
      name: "Amit Kumar",
      role: "Sourcing & Procurement",
      experience: "Expert in organic farming networks",
      image: traditionImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-muted/30 hero-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                About <span className="gradient-text">Amrit Aahar</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Rooted in ancient wisdom, dedicated to modern wellness. We bring you 
                the finest Ayurvedic products with unwavering commitment to purity and authenticity.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Amrit Aahar was born from a deep respect for Ayurveda's timeless wisdom 
                  and a vision to make authentic healing accessible to modern lives. We believe 
                  that nature holds the perfect solutions for optimal health and wellness.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Every product in our collection represents a commitment to purity, potency, 
                  and traditional preparation methods. We work directly with certified organic 
                  farmers and traditional processors to ensure authenticity from source to shelf.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
                      <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={traditionImage}
                  alt="Traditional Ayurvedic preparation"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-elevated"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do, from sourcing to delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-xl mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate experts dedicated to bringing you the finest Ayurvedic products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-card border-border card-hover">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-serif font-semibold text-lg mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
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

export default About;