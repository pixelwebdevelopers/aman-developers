import { Shield, TrendingUp, Wallet, Eye, Award, Users } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Halal Business Practices",
      description: "All our investments and operations strictly adhere to Islamic principles and Shariah compliance.",
    },
    {
      icon: TrendingUp,
      title: "Trusted & Reliable Profits",
      description: "Consistent monthly returns ranging from 4% to 8% based on your investment tier.",
    },
    {
      icon: Wallet,
      title: "Easy Investment Start",
      description: "Start investing with as low as 1 Lac PKR and grow your wealth step by step.",
    },
    {
      icon: Eye,
      title: "Transparent Operations",
      description: "Complete transparency in all dealings with regular updates and clear documentation.",
    },
    {
      icon: Award,
      title: "Profitable Opportunities",
      description: "Access to premium real estate projects in prime locations across Pakistan.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Years of experience in real estate with a dedicated team to guide your investments.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              The AA Aman Advantage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover what makes AA Aman Developers the trusted choice for real estate investment in Pakistan.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
