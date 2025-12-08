import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-blue">
              <span className="text-accent-gold">Alliance</span> Enterprise
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('vision')} 
                className="text-gray-700 hover:text-primary-blue transition-colors duration-300"
                data-testid="nav-vision"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-gray-700 hover:text-primary-blue transition-colors duration-300"
                data-testid="nav-gallery"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-primary-blue transition-colors duration-300"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-primary-blue transition-colors duration-300"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('community')} 
                className="text-gray-700 hover:text-primary-blue transition-colors duration-300"
                data-testid="nav-community"
              >
                Community
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
                data-testid="nav-get-started"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-blue"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('vision')} 
              className="block w-full text-left text-gray-700 hover:text-primary-blue transition-colors duration-300"
              data-testid="mobile-nav-vision"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left text-gray-700 hover:text-primary-blue transition-colors duration-300"
              data-testid="mobile-nav-gallery"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-gray-700 hover:text-primary-blue transition-colors duration-300"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left text-gray-700 hover:text-primary-blue transition-colors duration-300"
              data-testid="mobile-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('community')} 
              className="block w-full text-left text-gray-700 hover:text-primary-blue transition-colors duration-300"
              data-testid="mobile-nav-community"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full bg-primary-blue text-white px-6 py-2 rounded-lg text-center"
              data-testid="mobile-nav-get-started"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
