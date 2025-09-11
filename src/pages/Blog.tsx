import { Calendar, User, Clock, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import traditionImage from "@/assets/traditional-preparation.jpg";

const Blog = () => {
  const featuredPost = {
    title: "The Science Behind Turmeric: Ancient Wisdom Meets Modern Research",
    excerpt: "Discover how modern science validates the traditional uses of turmeric, one of Ayurveda's most revered golden spices.",
    author: "Dr. Rajesh Sharma",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Research",
    image: traditionImage
  };

  const blogPosts = [
    {
      title: "5 Morning Ayurvedic Rituals for Better Health",
      excerpt: "Start your day the Ayurvedic way with these simple yet powerful morning practices that promote overall wellness.",
      author: "Priya Patel",
      date: "March 12, 2024",
      readTime: "5 min read",
      category: "Lifestyle",
      image: traditionImage
    },
    {
      title: "Understanding Your Dosha: A Beginner's Guide",
      excerpt: "Learn about the three doshas in Ayurveda and how understanding your constitution can improve your health.",
      author: "Dr. Rajesh Sharma",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Education",
      image: traditionImage
    },
    {
      title: "Seasonal Eating According to Ayurveda",
      excerpt: "Discover how to align your diet with the seasons for optimal health and natural immunity.",
      author: "Meera Joshi",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Nutrition",
      image: traditionImage
    },
    {
      title: "The Healing Power of Ashwagandha",
      excerpt: "Explore the incredible benefits of this adaptogenic herb and how it can help manage stress in modern life.",
      author: "Dr. Rajesh Sharma",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Herbs",
      image: traditionImage
    },
    {
      title: "Ayurvedic Skincare: Natural Beauty Secrets",
      excerpt: "Learn time-tested Ayurvedic approaches to achieving radiant, healthy skin using natural ingredients.",
      author: "Priya Patel",
      date: "March 3, 2024",
      readTime: "8 min read",
      category: "Beauty",
      image: traditionImage
    },
    {
      title: "Digital Detox: Ayurvedic Approach to Mental Wellness",
      excerpt: "How ancient Ayurvedic principles can help us navigate the challenges of our digital age.",
      author: "Amit Kumar",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Wellness",
      image: traditionImage
    }
  ];

  const categories = ["All", "Research", "Lifestyle", "Education", "Nutrition", "Herbs", "Beauty", "Wellness"];

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
                Ayurvedic Wisdom
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Our <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the ancient wisdom of Ayurveda through our expert articles, 
                research insights, and practical wellness guides.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <Card className="bg-card border-border overflow-hidden mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl font-serif font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="w-fit group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-card border-border card-hover group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-lg mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="ghost" size="sm" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Blog;