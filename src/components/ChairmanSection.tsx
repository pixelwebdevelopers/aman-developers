import { Quote } from "lucide-react";

const ChairmanSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Chairman's Message
            </h2>
          </div>

          {/* Chairman Card */}
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Quote */}
            <Quote className="absolute top-6 left-6 w-16 h-16 text-primary/10" />

            <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
              {/* Chairman Photo Placeholder */}
              <div className="md:col-span-1">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-4xl text-primary font-bold">A</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Photo Placeholder</p>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2">
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  "At AA Aman Developers, we are committed to building not just properties, 
                  but lasting relationships with our investors. Our vision is to provide 
                  transparent, profitable, and Halal investment opportunities that help 
                  our community grow and prosper together. Trust is the foundation of our 
                  business, and we strive to earn it every single day."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <div className="text-right">
                    <p className="font-semibold text-foreground">Chairman</p>
                    <p className="text-sm text-muted-foreground">AA Aman Developers (Pvt) Ltd.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
