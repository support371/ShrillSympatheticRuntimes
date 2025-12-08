import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import IntroVideo from "@/components/intro-video";
import IndustryGallery from "@/components/industry-gallery";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ProofOfConcept from "@/components/proof-of-concept";
import NewsletterCommunity from "@/components/newsletter-community";
import PartnersSection from "@/components/partners-section";
import FooterCTA from "@/components/footer-cta";

export default function Home() {
  return (
    <div className="font-inter text-dark-navy overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <IntroVideo />
      <IndustryGallery />
      <AboutSection />
      <ServicesSection />
      <ProofOfConcept />
      <NewsletterCommunity />
      <PartnersSection />
      <FooterCTA />
    </div>
  );
}
