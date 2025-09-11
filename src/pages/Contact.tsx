import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Mon-Sat, 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@amritaahar.com", "support@amritaahar.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Ayurveda Street", "New Delhi - 110001, India"],
      description: "Open for consultations"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
      description: "Sunday: Closed"
    }
  ];

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can easily place an order through WhatsApp by clicking on any product and sending us your requirements."
    },
    {
      question: "What is your shipping policy?",
      answer: "We offer free shipping on orders above ₹500. Standard delivery takes 3-5 business days across India."
    },
    {
      question: "Are your products certified?",
      answer: "Yes, all our products are certified organic and tested for purity by authorized Ayurvedic institutions."
    },
    {
      question: "Can I return products?",
      answer: "We accept returns within 7 days of delivery if products are unopened and in original condition."
    },
    {
      question: "Do you provide Ayurvedic consultations?",
      answer: "Yes, we offer consultations with certified Ayurvedic practitioners. Contact us to schedule an appointment."
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
                <MessageCircle className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about our products or need Ayurvedic guidance? 
                We're here to help you on your wellness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border card-hover text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-foreground font-medium mb-1">{detail}</p>
                    ))}
                    <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  Find <span className="gradient-text">Us</span>
                </h2>
                
                {/* Map Placeholder */}
                <div className="bg-muted/50 h-64 rounded-lg mb-8 flex items-center justify-center border border-border">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <WhatsAppButton 
                    className="w-full justify-center" 
                    message="Hi! I have a question about your Ayurvedic products."
                  />
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our products and services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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

export default Contact;