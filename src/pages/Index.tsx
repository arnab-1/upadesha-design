
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LogoSlider from "../components/LogoSlider";
import ServicesSection from "../components/ServicesSection";
import WhyUpadeshaSection from "../components/WhyUpadeshaSection";
import VideoTestimonialsSection from "../components/VideoTestimonialsSection";
import VideoReviewsSection from "../components/VideoReviewsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoSlider />
      <VideoTestimonialsSection />
      <ServicesSection />
      <WhyUpadeshaSection />
      <VideoReviewsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
