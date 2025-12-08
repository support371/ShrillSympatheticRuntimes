
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { TradingViewCalendar } from "@/components/widgets/TradingViewCalendar";
import { CryptoMarketTable } from "@/components/widgets/CryptoMarketTable";
import { ArrowRight, BarChart3, ShieldCheck, TrendingUp, Users, Building2, Globe2, Play } from "lucide-react";
import heroImage from "@assets/generated_images/modern_luxury_high-rise_building_at_dusk.png";
import residentialImage from "@assets/generated_images/modern_luxury_apartment_complex.png";
import commercialImage from "@assets/generated_images/modern_glass_office_building.png";
import industrialImage from "@assets/generated_images/modern_logistics_center_warehouse.png";
import { Link } from "wouter";
import { useState } from "react";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <Layout>
      {/* Hero Section - Enhanced with GemAlliance styling */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 text-white z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-bottom-10 fade-in duration-1000">
            <div className="inline-block px-3 py-1 bg-secondary/90 text-white text-xs font-bold uppercase tracking-widest rounded-sm mb-2">
              The Alliance Enterprise
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Secure. Compliant. <br/>
              <span className="text-secondary">Profitable.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
              Integrating cybersecurity excellence, regulatory compliance, and strategic real estate management for enterprise-level success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/investment-plan">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-7 uppercase tracking-wide text-sm rounded-sm shadow-lg shadow-secondary/20">
                  Explore Strategies
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-primary font-bold px-8 py-7 uppercase tracking-wide text-sm rounded-sm backdrop-blur-sm">
                  View Portfolio
                </Button>
              </Link>
            </div>

            <div className="flex gap-8 pt-12 text-xs uppercase tracking-widest opacity-80 font-medium">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-secondary" /> Secure</span>
              <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-secondary" /> Compliant</span>
              <span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-secondary" /> Profitable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Story / Intro Video Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-4xl font-serif font-bold text-primary mt-3 mb-6">The Evolution of Excellence</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From pioneering cybersecurity solutions to mastering regulatory compliance and real estate investment, 
              The Alliance Enterprise represents the convergence of three critical pillars of modern business success.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/5">
            {!isVideoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
                <Button 
                  size="lg"
                  onClick={() => setIsVideoPlaying(true)}
                  className="bg-secondary hover:bg-secondary/90 text-white rounded-full w-20 h-20 p-0 shadow-xl"
                >
                  <Play className="h-10 w-10 ml-1" />
                </Button>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <p className="text-sm opacity-70">Video content would load here</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Three Enterprise Divisions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Divisions</span>
            <h2 className="text-4xl font-serif font-bold text-primary mt-3">Enterprise Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GEM Cybersecurity */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100 hover:border-secondary transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">GEM Cybersecurity</h3>
              <p className="text-muted-foreground mb-6">
                Advanced monitoring and protection solutions safeguarding your digital infrastructure with military-grade security protocols.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• 24/7 Threat Monitoring</li>
                <li>• Incident Response</li>
                <li>• Vulnerability Assessment</li>
              </ul>
              <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
                Learn More
              </Button>
            </div>

            {/* Core Compliance */}
            <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border-2 border-green-100 hover:border-secondary transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Core Compliance</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive regulatory compliance management ensuring your business meets all industry standards and legal requirements.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Regulatory Audits</li>
                <li>• Policy Development</li>
                <li>• Risk Management</li>
              </ul>
              <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
                Learn More
              </Button>
            </div>

            {/* Alliance Trust Realty */}
            <div className="group bg-gradient-to-br from-secondary/10 to-white p-8 rounded-xl border-2 border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Alliance Trust Realty</h3>
              <p className="text-muted-foreground mb-6">
                Institutional-grade real estate investment strategies designed for long-term value creation and consistent returns.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Portfolio Diversification</li>
                <li>• Asset Management</li>
                <li>• Strategic Investments</li>
              </ul>
              <Link href="/investment-plan">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  View Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-6 px-4">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Governance & Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rigorous oversight and transparent reporting standards ensure your capital is managed with the highest level of fiduciary responsibility.
              </p>
            </div>
            <div className="space-y-6 px-4 border-l-0 md:border-l md:border-r border-gray-100">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Integrated Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seamless integration across security, compliance, and investment operations provides comprehensive enterprise protection.
              </p>
            </div>
            <div className="space-y-6 px-4">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Long-Term Value</h3>
              <p className="text-muted-foreground leading-relaxed">
                A disciplined approach to value creation, focusing on sustainable growth and consistent performance across all divisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy Tracks */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Real Estate Focus</span>
            <h2 className="text-4xl font-serif font-bold text-primary mt-3">Investment Strategies</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We offer distinct strategy tracks designed to meet different investment objectives, from income generation to capital appreciation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Residential Growth", img: residentialImage, desc: "Multifamily complexes in high-growth metropolitan areas." },
              { title: "Commercial Core", img: commercialImage, desc: "Class A office and retail spaces with long-term lease structures." },
              { title: "Industrial Logistics", img: industrialImage, desc: "Last-mile distribution centers powering the e-commerce economy." }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-64 overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.desc}</p>
                  <Link href="/investment-plan">
                    <span className="inline-flex items-center text-sm font-bold text-secondary uppercase tracking-wide group-hover:gap-2 transition-all cursor-pointer">
                      View Details <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">
              Real Estate: The Foundation of Modern Wealth
            </h2>
            <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
              <p>
                In an era of market volatility, real assets provide a stable foundation for wealth preservation and growth. Our thesis is simple: identify high-quality assets in supply-constrained markets with strong demographic tailwinds.
              </p>
              <p>
                By leveraging our deep industry relationships and operational expertise, we unlock value that is inaccessible to passive investors.
              </p>
            </div>
            <div className="mt-12">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">$2.4B+</div>
                    <div className="text-sm uppercase tracking-wider opacity-70">Assets Managed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">12+</div>
                    <div className="text-sm uppercase tracking-wider opacity-70">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">14%</div>
                    <div className="text-sm uppercase tracking-wider opacity-70">Avg Target IRR</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">450+</div>
                    <div className="text-sm uppercase tracking-wider opacity-70">Properties</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence Zone */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Data Driven</span>
              <h2 className="text-4xl font-serif font-bold text-primary mt-3">Market Intelligence</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-right mt-4 md:mt-0">
              Real-time economic indicators and asset performance data to inform your investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <h3 className="font-bold font-serif text-primary">Global Economic Calendar</h3>
                <span className="text-xs text-muted-foreground">Powered by TradingView</span>
              </div>
              <div className="h-[calc(100%-50px)]">
                <TradingViewCalendar />
              </div>
            </div>

            <div className="lg:col-span-1 h-full flex flex-col">
              <CryptoMarketTable />
              <div className="mt-6 bg-primary text-white p-6 rounded-lg flex-grow flex flex-col justify-center text-center">
                 <h4 className="text-xl font-serif font-bold mb-4">Digital Asset Integration</h4>
                 <p className="text-sm text-gray-300 mb-6">
                   We monitor the digital asset ecosystem to identify emerging trends that impact real estate tokenization and settlement layers.
                 </p>
                 <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white w-full">
                   View Analysis
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Trusted Partners & Integrations</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="h-8 w-32 bg-gray-200 rounded"></div>
             <div className="h-8 w-32 bg-gray-200 rounded"></div>
             <div className="h-8 w-32 bg-gray-200 rounded"></div>
             <div className="h-8 w-32 bg-gray-200 rounded"></div>
             <div className="h-8 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
