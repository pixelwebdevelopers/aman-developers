import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/923339998436?text=Hello! I'm interested in learning more about Aman Developers investment opportunities.",
      "_blank"
    );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "Top City Prime Mall, Faisal Bank 3rd Floor, Office #301, Kashmir Highway Airport Road, Islamabad",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "0333-9998436 | 0333-9998437",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Saturday: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to start your investment journey? Contact us today and our team will guide you through the process.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-secondary/30 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Quick Connect on WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant responses to your queries. Click below to start a conversation.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-secondary/30 rounded-xl overflow-hidden border border-border h-96 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8571427843396!2d73.0644879!3d33.6844202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8e8c6f8e8d%3A0x8e8e8e8e8e8e8e8e!2sTop%20City-1%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1234567890123!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aman Developers Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
