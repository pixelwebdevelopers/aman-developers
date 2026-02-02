import { MapPin, CheckCircle, MessageCircle, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import imperialValley from "@/assets/project-imperial-valley.jpeg";
import taqwaVillage from "@/assets/project-taqwa-village.jpeg";
import completedZainAzam from "@/assets/completed-zain-azam-1.jpg";
import completedTaqwaVillage from "@/assets/completed-taqwa-village-1.jpg";

const ProjectsSection = () => {
  const handleWhatsAppClick = (projectName: string) => {
    window.open(
      `https://wa.me/923339998436?text=Hello! I'm interested in ${projectName}. Please share more details.`,
      "_blank"
    );
  };

  const ongoingProjects = [
    {
      name: 'Imperial Valley "Aman Block"',
      image: imperialValley,
      location: "Expressway Way Murree",
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
      name: "Taqwa Village Phase 2",
      image: taqwaVillage,
      location: "Near Chakri",
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

  const completedProjects = [
    {
      name: "Zain-e-Azam Town",
      image: completedZainAzam,
      location: "Near New International Airport Islamabad (0 KM)",
      features: [
        "5, 6 & 10 Marla Plots",
        "Residential & Commercial Plots",
        "Registry Transfer (No File System)",
        "PHATA Approved Project",
      ],
      status: "Successfully Delivered",
      description: "Build your dream homes in this premium location. All plots have been successfully allocated and transferred to owners with complete documentation.",
    },
    {
      name: "Taqwa Village Phase 1",
      image: completedTaqwaVillage,
      location: "Near New International Airport Islamabad (0 KM)",
      features: [
        "3 & 5 Marla Plots",
        "Affordable Pricing",
        "Cash & Easy Installments",
        "PHATA Approved Project",
      ],
      status: "Successfully Delivered",
      description: "Live a prosperous life with your dream home. All plots have been delivered with complete registry transfer and documentation.",
    },
  ];

  return (
    <>
      {/* On Going Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Currently Active</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                On Going Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Explore our currently active projects offering premium investment opportunities and excellent returns.
              </p>
            </div>

            {/* On Going Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {ongoingProjects.map((project, index) => (
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

      {/* Completed Projects Section */}
      <section id="completed-projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Track Record</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Completed Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A testament to our commitment and quality. These successfully delivered projects showcase our dedication to excellence.
              </p>
            </div>

            {/* Completed Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {completedProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border hover:border-green-500/30 bg-card"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 hover:bg-green-700 text-white text-sm gap-1">
                        <Award className="w-3 h-3" />
                        {project.status}
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
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-green-600" />
                      <CardTitle className="text-xl text-foreground">{project.name}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Success Indicator */}
                    <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <Award className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Project Completed & Delivered Successfully</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
