
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { TradingViewCalendar } from "@/components/widgets/TradingViewCalendar";
import { CryptoMarketTable } from "@/components/widgets/CryptoMarketTable";
import { Search, Home as HomeIcon, DollarSign, TrendingUp, Building2, ShieldCheck, Globe2, Play, ArrowRight, BarChart3 } from "lucide-react";
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
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-slate-950/80 z-10" />
          </div>

          <div className="relative container mx-auto px-4 text-white z-20">
            <div className="max-w-3xl space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-1000">
              <div className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-4">
                Full-Service Real Estate & Investment
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
                Trust. Scale. <br/>
                <span className="text-blue-500 italic">Value.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
                Whether you're buying your dream home or building a real estate portfolio, we provide data-driven guidance and end-to-end service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link href="/buy">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-8 text-lg rounded-xl shadow-2xl shadow-blue-600/20 group">
                    Find Your Home <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/invest">
                  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 font-black px-12 py-8 text-lg rounded-xl backdrop-blur-md">
                    Explore Investments
                  </Button>
                </Link>
              </div>

              {/* Quick Search */}
              <div className="max-w-xl mt-12 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex items-center gap-2 shadow-2xl">
                <div className="flex-1 flex items-center px-4 gap-3">
                  <Search className="h-5 w-5 text-slate-400" />
                  <input placeholder="Search city, neighborhood, or zip..." className="bg-transparent border-none text-white placeholder:text-slate-500 focus:outline-none w-full py-3" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-6 rounded-xl">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-32 bg-slate-950 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Full-Service Solutions</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">Data-driven approaches for every real estate objective, from individual home ownership to institutional portfolio scaling.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: HomeIcon, title: "Buy a Home", desc: "Find your perfect property with expert guidance", link: "/buy", color: "text-blue-500", bg: "bg-blue-500/10" },
                { icon: DollarSign, title: "Sell Your Property", desc: "Maximize your return with our proven process", link: "/sell", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { icon: TrendingUp, title: "Real Estate Investing", desc: "Build wealth through strategic property investments", link: "/invest", color: "text-amber-500", bg: "bg-amber-500/10" },
                { icon: Building2, title: "Property Management", desc: "Hassle-free management for your rental properties", link: "/property-management", color: "text-purple-500", bg: "bg-purple-500/10" }
              ].map((service, i) => (
                <Link key={i} href={service.link}>
                  <div className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-500 group cursor-pointer h-full flex flex-col shadow-xl">
                    <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-slate-400 font-light leading-relaxed mb-8 flex-grow">{service.desc}</p>
                    <span className={`text-sm font-bold uppercase tracking-widest ${service.color} group-hover:gap-4 transition-all flex items-center gap-2`}>
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
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
