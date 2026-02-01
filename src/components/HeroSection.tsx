import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Building2, Shield } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/923339998436?text=Hello! I'm interested in learning more about AA Aman Developers investment opportunities.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Since Years</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Invest in Real Estate,{" "}
            <span className="text-primary">Secure Your Future</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Generate monthly passive income with guaranteed returns of{" "}
            <span className="text-primary font-semibold">4% to 8%</span> through our trusted real estate investment plans.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 py-6"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 text-lg px-8 py-6"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Building2 className="w-5 h-5" />
              View Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: TrendingUp, label: "Monthly Returns", value: "4-8%" },
              { icon: Building2, label: "Active Projects", value: "2+" },
              { icon: Shield, label: "Years Experience", value: "10+" },
              { icon: MessageCircle, label: "Happy Investors", value: "500+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
