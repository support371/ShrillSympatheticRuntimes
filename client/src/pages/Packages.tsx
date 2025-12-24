import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Building2, Home, Warehouse, Briefcase, FileText } from "lucide-react";
import { Link } from "wouter";
import residentialImage from "@assets/generated_images/modern_luxury_apartment_complex.png";
import commercialImage from "@assets/generated_images/modern_glass_office_building.png";
import industrialImage from "@assets/generated_images/modern_logistics_center_warehouse.png";

export default function Packages() {
  const sleeves = [
    {
      name: "Multifamily Yield Fund IV",
      icon: Home,
      image: residentialImage,
      type: "Income",
      desc: "Stabilized apartment complexes in Sunbelt growth markets with operational value-add",
      irr: "12-15%",
      risk: "Low-Moderate",
      term: "5-7 Years",
      min: "$50,000",
      focus: ["Class A & B Properties", "Sunbelt Markets", "Operational Upside", "Stable Occupancy"],
      highlights: [
        "62% average occupancy across portfolio",
        "3.2 year average remaining lease term",
        "$2.8B AUM in multifamily",
        "Quarterly distributions starting Year 2"
      ]
    },
    {
      name: "Urban Office Redevelopment",
      icon: Building2,
      image: commercialImage,
      type: "Growth",
      desc: "Converting distressed Class B office into mixed-use residential and retail destinations",
      irr: "18-22%",
      risk: "High",
      term: "7-10 Years",
      min: "$100,000",
      focus: ["Office-to-Residential", "Gateway Cities", "Development Expertise", "Strategic Locations"],
      highlights: [
        "Redevelopment IRR potential 20%+",
        "3-5 year repositioning timeline",
        "Average $850/sqft conversion costs",
        "Pro forma occupancy 94%+"
      ]
    },
    {
      name: "Industrial Logistics Trust",
      icon: Warehouse,
      image: industrialImage,
      type: "Balanced",
      desc: "Last-mile distribution centers powering the e-commerce economy with long-term tenant stability",
      irr: "14-16%",
      risk: "Moderate",
      term: "5 Years",
      min: "$25,000",
      focus: ["Warehouse Assets", "E-commerce Tenants", "Premium Locations", "Long-term Leases"],
      highlights: [
        "3PL and fulfillment center focus",
        "88% average occupancy rate",
        "5.2 year average remaining lease",
        "Semi-annual distributions"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary to-primary/90 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-6" data-testid="heading-packages">Portfolio Sleeves</h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
            Targeted investment packages focused on specific asset classes and market sectors. Each sleeve is professionally managed with transparent reporting and institutional governance.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="space-y-24">
          {sleeves.map((sleeve, i) => {
            const Icon = sleeve.icon;
            const isEven = i % 2 === 0;
            
            return (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow" data-testid={`card-sleeve-${i}`}>
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className={`h-80 bg-cover bg-center ${!isEven ? 'order-2' : ''}`} style={{ backgroundImage: `url(${sleeve.image})` }} />
                  
                  {/* Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-wider rounded-full text-muted-foreground mb-2">
                          {sleeve.type}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-primary mb-3">{sleeve.name}</h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{sleeve.desc}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Target IRR</p>
                        <p className="text-2xl font-bold text-primary">{sleeve.irr}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Risk Profile</p>
                        <p className="font-bold text-secondary">{sleeve.risk}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Lock-up Period</p>
                        <p className="font-bold">{sleeve.term}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Minimum Investment</p>
                        <p className="font-bold">{sleeve.min}</p>
                      </div>
                    </div>

                    {/* Investment Focus */}
                    <div className="mb-8">
                      <h3 className="font-bold text-primary mb-4 text-sm uppercase tracking-wider">Investment Focus</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {sleeve.focus.map((item, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <h3 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">Portfolio Highlights</h3>
                      <ul className="space-y-2">
                        {sleeve.highlights.map((highlight, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-secondary font-bold mt-0.5">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/investment-plan">
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide" data-testid={`button-learn-${i}`}>
                        Learn More & Invest
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Document Center */}
        <div className="mt-24 pt-24 border-t border-gray-200">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12">Document Center</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: FileText, title: "Quick Facts Sheets", desc: "Executive summaries with key metrics", color: "bg-blue-50" },
              { icon: Briefcase, title: "Offering Memorandums", desc: "Complete legal and financial documentation", color: "bg-purple-50" },
              { icon: Building2, title: "Asset Reports", desc: "Detailed property and portfolio analysis", color: "bg-amber-50" },
            ].map((doc, i) => {
              const Icon = doc.icon;
              return (
                <div key={i} className={`${doc.color} p-8 rounded-lg border border-gray-200 text-center` } data-testid={`doc-item-${i}`}>
                  <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground">{doc.desc}</p>
                </div>
              );
            })}
          </div>
          <Button variant="outline" className="border-gray-300 font-bold uppercase tracking-wide" data-testid="button-access-documents">
            Access Document Center
          </Button>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white py-20 mt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Select Your Preferred Sleeve</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Review documentation, speak with our investment specialists, and begin your institutional real estate journey.
          </p>
          <Link href="/register">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide px-8 py-3" data-testid="button-invest-now">
              Invest Now
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
