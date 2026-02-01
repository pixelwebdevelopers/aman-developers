import { Building, Users, Target, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Building,
      title: "Real Estate & Construction",
      description: "Premium residential and commercial development across Pakistan",
    },
    {
      icon: Users,
      title: "Trusted Partnerships",
      description: "Building lasting relationships with investors and clients",
    },
    {
      icon: Target,
      title: "Transparent Operations",
      description: "Complete transparency in all business dealings",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Years of successful project delivery and investor satisfaction",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Aman Developers (Pvt) Ltd.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A well-known group of companies specializing in Real Estate & Construction, 
              committed to delivering excellence and value to our investors.
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Your Trusted Partner in Real Estate Investment
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Aman Developers, we believe in creating opportunities for everyone to invest 
                in real estate and build wealth. Our mission is to provide secure, transparent, and 
                profitable investment options that align with halal business practices.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With projects strategically located near key landmarks like the New International 
                Airport Islamabad, we ensure our investors get the best value for their investment 
                with guaranteed monthly returns.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-1 w-16 bg-primary rounded-full" />
                <span className="text-primary font-medium">Building Dreams, Delivering Trust</span>
              </div>
            </div>

            {/* Right - Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
