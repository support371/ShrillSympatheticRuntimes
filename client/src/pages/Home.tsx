import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { TradingViewCalendar } from "@/components/widgets/TradingViewCalendar";
import { CryptoMarketTable } from "@/components/widgets/CryptoMarketTable";
import { ArrowRight, BarChart3, ShieldCheck, TrendingUp, Users, Building2, Globe2 } from "lucide-react";
import heroImage from "@assets/generated_images/modern_luxury_high-rise_building_at_dusk.png";
import residentialImage from "@assets/generated_images/modern_luxury_apartment_complex.png";
import commercialImage from "@assets/generated_images/modern_glass_office_building.png";
import industrialImage from "@assets/generated_images/modern_logistics_center_warehouse.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* 4.1 Hero Section */}
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
              Institutional Grade
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Build Wealth With <br/>
              <span className="text-secondary">Real Assets</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
              Access institutional real estate strategies designed for long-term value creation, diversified growth, and consistent income.
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
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-secondary" /> Risk-Aware</span>
              <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-secondary" /> Market-Driven</span>
              <span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-secondary" /> Global Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4.2 Three Pillar Value Section */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-3xl border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
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
              <h3 className="text-2xl font-serif font-bold text-primary">Diversified Asset Mix</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic allocation across residential, commercial, and industrial sectors to mitigate risk and capture growth opportunities.
              </p>
            </div>
            <div className="space-y-6 px-4">
              <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Long-Term Value</h3>
              <p className="text-muted-foreground leading-relaxed">
                A disciplined approach to value creation, focusing on sustainable appreciation and consistent yield generation over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 New to Investing Prompt */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">New to Real Estate Investing?</h3>
            <p className="text-gray-300">Our advisors can guide you through our institutional approach.</p>
          </div>
          <Link href="/contact">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-bold uppercase tracking-wide">
              Speak to an Advisor
            </Button>
          </Link>
        </div>
      </section>

      {/* 4.5 Strategy Tracks Selector */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Approach</span>
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

      {/* 4.6 Benefit Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 bg-gray-50/50 rounded-lg">
                <h3 className="text-xl font-bold font-serif mb-4 text-primary">Portfolio Resilience</h3>
                <p className="text-muted-foreground">Assets selected for their ability to withstand market volatility and provide inflation protection.</p>
            </div>
            <div className="p-8 border border-gray-100 bg-gray-50/50 rounded-lg">
                <h3 className="text-xl font-bold font-serif mb-4 text-primary">Active Management</h3>
                <p className="text-muted-foreground">Hands-on asset management to optimize operational efficiency and drive net operating income.</p>
            </div>
            <div className="p-8 border border-gray-100 bg-gray-50/50 rounded-lg">
                <h3 className="text-xl font-bold font-serif mb-4 text-primary">Aligned Interests</h3>
                <p className="text-muted-foreground">We invest alongside our clients, ensuring our goals are perfectly aligned with yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.9 Opportunity Thesis */}
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

      {/* 4.12 Market Intelligence Zone (Must Preserve) */}
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
            {/* Economic Calendar */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <h3 className="font-bold font-serif text-primary">Global Economic Calendar</h3>
                <span className="text-xs text-muted-foreground">Powered by TradingView</span>
              </div>
              <div className="h-[calc(100%-50px)]">
                <TradingViewCalendar />
              </div>
            </div>

            {/* Crypto Market Data */}
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

      {/* Partner Strip */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Trusted Partners & Integrations</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
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