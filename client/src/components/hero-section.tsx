import { useState, useEffect } from "react";
import { Play, Pause, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-background');
      if (hero && scrolled < window.innerHeight) {
        (hero as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background placeholder */}
      <div className="hero-background absolute inset-0 gradient-primary">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-8 right-8 z-20">
        <button 
          onClick={toggleVideo}
          className="bg-white/20 border border-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-custom hover:bg-white/30 transition-all duration-300"
          data-testid="video-toggle"
        >
          {isVideoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Secure.</span>
          <span className="block text-accent-gold">Compliant.</span>
          <span className="block">Profitable.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto font-light">
          Integrating cybersecurity excellence, regulatory compliance, and strategic real estate management for enterprise-level success
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('vision')}
            className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-xl"
            data-testid="button-explore-vision"
          >
            Explore the Vision
          </button>
          <button 
            onClick={() => scrollToSection('community')}
            className="border-2 border-accent-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-1 hover:bg-accent-gold hover:text-dark-navy transition-all duration-300"
            data-testid="button-join-movement"
          >
            Join the Movement
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl opacity-70" />
      </div>
    </section>
  );
}
