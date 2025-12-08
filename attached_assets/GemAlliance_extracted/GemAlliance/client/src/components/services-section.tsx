import { Shield, ClipboardCheck, Building, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-navy mb-6">Our Service Divisions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three specialized divisions working in perfect harmony to deliver comprehensive enterprise solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* GEM Cybersecurity */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="gradient-primary h-48 flex items-center justify-center text-white">
              <div className="text-center">
                <Shield className="h-12 w-12 mb-2 mx-auto" />
                <p className="text-sm opacity-90">Advanced Security Operations</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">GEM Cybersecurity & Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive cybersecurity solutions including 24/7 threat monitoring, incident response, vulnerability assessments, and security compliance management.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  24/7 Security Operations Center
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  Advanced Threat Detection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  Incident Response & Recovery
                </li>
              </ul>
              <button 
                className="w-full bg-primary-blue text-white py-3 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
                data-testid="button-cybersecurity-learn-more"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Core Compliance */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 h-48 flex items-center justify-center text-white">
              <div className="text-center">
                <ClipboardCheck className="h-12 w-12 mb-2 mx-auto" />
                <p className="text-sm opacity-90">Regulatory Excellence</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">Core Compliance Division</h3>
              <p className="text-gray-600 mb-6">
                Expert regulatory compliance services ensuring your organization meets all industry standards while minimizing risk and maximizing operational efficiency.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  Regulatory Framework Assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  Compliance Program Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  Audit Preparation & Support
                </li>
              </ul>
              <button 
                className="w-full bg-primary-blue text-white py-3 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
                data-testid="button-compliance-learn-more"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Alliance Trust Realty */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="bg-gradient-to-br from-accent-gold to-yellow-600 h-48 flex items-center justify-center text-white">
              <div className="text-center">
                <Building className="h-12 w-12 mb-2 mx-auto" />
                <p className="text-sm opacity-90">Strategic Investment</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">Alliance Trust Realty</h3>
              <p className="text-gray-600 mb-6">
                Strategic real estate management and investment services focused on maximizing portfolio value and creating sustainable growth opportunities.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  Portfolio Management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  Investment Strategy Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-gold mr-2 h-4 w-4" />
                  Market Analysis & Research
                </li>
              </ul>
              <button 
                className="w-full bg-primary-blue text-white py-3 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
                data-testid="button-realty-learn-more"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
