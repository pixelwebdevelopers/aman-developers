import { Phone, Mail, MapPin } from "lucide-react";
import amanLogo from "@/assets/aman-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Investment Plans", href: "#investment" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img
                src={amanLogo}
                alt="Aman Developers Logo"
                className="h-16 w-auto object-contain mb-4 bg-background rounded-lg p-2"
              />
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                Aman Developers (Pvt) Ltd. - Your trusted partner in real estate investment. 
                Building dreams and delivering trust since years.
              </p>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Top City Prime Mall, Faisal Bank 3rd Floor, Office #301, Kashmir Highway Airport Road, Islamabad</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>0333-9998436 | 0333-9998437</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@aamandevelopers.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Aman Developers (Pvt) Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
