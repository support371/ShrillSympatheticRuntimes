import { Shield, Scale, Building2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="gradient-primary rounded-2xl text-white p-12 mb-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To revolutionize enterprise operations by seamlessly integrating cybersecurity excellence, regulatory compliance mastery, and strategic real estate management into a unified platform of success.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent-gold p-8">
            <div className="gradient-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Shield className="text-white h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-primary-blue mb-4">Security Excellence</h4>
            <p className="text-gray-600 leading-relaxed">
              Advanced threat detection, 24/7 monitoring, and comprehensive cybersecurity solutions that protect your digital assets and maintain operational continuity.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent-gold p-8">
            <div className="gradient-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Scale className="text-white h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-primary-blue mb-4">Regulatory Mastery</h4>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive compliance management across all industries, ensuring your organization meets and exceeds regulatory requirements while minimizing risk exposure.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-accent-gold p-8">
            <div className="gradient-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-white h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-primary-blue mb-4">Strategic Real Estate</h4>
            <p className="text-gray-600 leading-relaxed">
              Professional real estate management and investment strategies that maximize portfolio value and create sustainable long-term growth opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
