import { MapPin, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import imperialValley from "@/assets/project-imperial-valley.jpeg";
import taqwaVillage from "@/assets/project-taqwa-village.jpeg";

const ProjectsSection = () => {
  const handleWhatsAppClick = (projectName: string) => {
    window.open(
      `https://wa.me/923339998436?text=Hello! I'm interested in ${projectName}. Please share more details.`,
      "_blank"
    );
  };

  const projects = [
    {
      name: 'Imperial Valley "Aman Block"',
      image: imperialValley,
      location: "Expressway Mila Chhamri",
      features: [
        "30% Down Payment",
        "Prime Location",
        "Registry Transfer Available",
        "Premium Residential Plots",
      ],
      badge: "Featured Project",
      badgeVariant: "default" as const,
    },
    {
      name: "Taqwa Village",
      image: taqwaVillage,
      location: "Near New International Airport Islamabad (0 KM)",
      features: [
        "4, 5 & 10 Marla Plots",
        "Residential & Commercial",
        "Cash & Easy Installments",
        "Prime Airport Location",
      ],
      badge: "Hot Location",
      badgeVariant: "destructive" as const,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Premium Investment Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our carefully selected projects offering the best returns and location advantages.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={project.badgeVariant} className="text-sm">
                      {project.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-primary-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.location}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleWhatsAppClick(project.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
