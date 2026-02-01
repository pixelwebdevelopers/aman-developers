import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Building2, Shield } from "lucide-react";
import bannerDesktop from "@/assets/banner-desktop.jpg";
import bannerMobile from "@/assets/banner-mobile.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/923339998436?text=Hello! I'm interested in learning more about Aman Developers investment opportunities.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Desktop Background Image */}
      <div 
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerDesktop})` }}
      />
      
      {/* Mobile Background Image */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerMobile})` }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100/90 text-primary px-5 py-2.5 rounded-full mb-6 animate-fade-in shadow-sm">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Since Years</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Invest in Real Estate,{" "}
            <span className="text-primary">Secure Your Future</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" , color: '#000000' }}>
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
              className="bg-white border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 text-lg px-8 py-6"
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
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
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
