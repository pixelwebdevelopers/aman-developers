import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import InvestmentSection from "@/components/InvestmentSection";
import ChairmanSection from "@/components/ChairmanSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BankDetailsButton from "@/components/BankDetailsButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <InvestmentSection />
      <ChairmanSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <BankDetailsButton />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
