export default function PartnersSection() {
  const partners = [
    "CyberTech Pro",
    "Compliance Plus", 
    "RealtyMax",
    "SecureFrame",
    "AuditSafe",
    "PropertyPro"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-navy mb-6">Our Professional Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg h-24 flex items-center justify-center text-gray-500 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 text-center p-2"
              data-testid={`partner-logo-${index}`}
            >
              {partner}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">Interested in becoming a partner?</p>
          <button 
            className="bg-accent-gold text-white px-8 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            data-testid="button-explore-partnerships"
          >
            Explore Partnership Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
