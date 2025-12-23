import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Building2, Leaf, Award } from "lucide-react";

export default function IndustryGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery items representing the real content from your Notion page
  const galleryItems = [
    {
      id: 1,
      title: "Alliance Trust Realty Headquarters",
      description: "Our main office showcasing sustainable architecture and modern business practices",
      category: "Corporate Real Estate",
      sustainability: "LEED Certified",
      image: "🏢", // Placeholder - in real implementation would use actual images from Notion
      features: ["Smart building technology", "Energy-efficient systems", "Eco-friendly materials"]
    },
    {
      id: 2,
      title: "Commercial Property Portfolio",
      description: "Strategic commercial investments with integrated security and compliance systems",
      category: "Investment Properties",
      sustainability: "Green Building Standards",
      image: "🏬",
      features: ["Advanced security integration", "Compliance monitoring", "Sustainable operations"]
    },
    {
      id: 3,
      title: "Mixed-Use Development",
      description: "Innovative mixed-use spaces combining business, residential, and community areas",
      category: "Development Projects",
      sustainability: "Carbon Neutral Design",
      image: "🏘️",
      features: ["Community integration", "Environmental stewardship", "Smart city planning"]
    },
    {
      id: 4,
      title: "Technology Integration Hub",
      description: "State-of-the-art facility demonstrating our cybersecurity and compliance integration",
      category: "Tech Infrastructure",
      sustainability: "Renewable Energy Powered",
      image: "🏭",
      features: ["24/7 monitoring center", "Compliance testing lab", "Sustainable operations"]
    },
    {
      id: 5,
      title: "Sustainable Office Spaces",
      description: "Modern office environments designed for productivity and environmental responsibility",
      category: "Office Real Estate",
      sustainability: "Zero Waste Certified",
      image: "🏢",
      features: ["Biophilic design", "Energy optimization", "Employee wellness focus"]
    },
    {
      id: 6,
      title: "Community Development",
      description: "Real estate projects that strengthen communities while maintaining profitability",
      category: "Community Projects",
      sustainability: "Social Impact Certified",
      image: "🏘️",
      features: ["Local economic growth", "Environmental protection", "Community partnerships"]
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[currentImageIndex];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-navy mb-6">Industry Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our real-world projects showcasing the intersection of business excellence, environmental responsibility, and sustainable growth
          </p>
        </div>

        {/* Main Gallery Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Carousel */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary-blue to-secondary-blue rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-full flex items-center justify-center text-white text-6xl">
                {currentItem.image}
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-dark-navy">{currentItem.title}</h4>
                  <p className="text-sm text-gray-600">{currentItem.category}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
              data-testid="gallery-prev"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
              data-testid="gallery-next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Content Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-dark-navy mb-4">{currentItem.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{currentItem.description}</p>
            </div>

            {/* Sustainability Badge */}
            <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
              <Leaf className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">{currentItem.sustainability}</span>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xl font-semibold text-dark-navy mb-3">Key Features</h4>
              <ul className="space-y-2">
                {currentItem.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-accent-gold" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* View Project Button */}
            <button 
              className="flex items-center space-x-2 bg-primary-blue text-white px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              data-testid="button-view-project"
            >
              <span>View Full Project Details</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentImageIndex(index)}
              className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'ring-4 ring-primary-blue shadow-lg scale-105' 
                  : 'hover:scale-105 hover:shadow-md'
              }`}
              data-testid={`thumbnail-${index}`}
            >
              <div className={`h-full w-full flex items-center justify-center text-2xl ${
                index === currentImageIndex 
                  ? 'gradient-primary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                {item.image}
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-light-gray rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-dark-navy mb-4">Explore Our Complete Portfolio</h3>
          <p className="text-gray-600 mb-6">
            Visit our comprehensive project gallery to see how we're building a sustainable future through integrated business solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              data-testid="button-notion-gallery"
            >
              <Building2 className="inline h-4 w-4 mr-2" />
              View Complete Gallery on Notion
            </button>
            <button 
              className="border-2 border-primary-blue text-primary-blue px-8 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:bg-primary-blue hover:text-white transition-all duration-300"
              data-testid="button-schedule-tour"
            >
              Schedule Property Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}