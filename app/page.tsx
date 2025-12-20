import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServersSlider from "./components/ServersSlider";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black" style={{ position: 'relative', zIndex: 1 }}>
      <Header />
      <HeroSection />
      <ServersSlider />
      <ServicesSection />
      <StatsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
