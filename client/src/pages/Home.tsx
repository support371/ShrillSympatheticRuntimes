import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ROICalculator } from "@/components/calculators/ROICalculator";
import { TradingViewCalendar } from "@/components/widgets/TradingViewCalendar";
import { CryptoMarketTable } from "@/components/widgets/CryptoMarketTable";
import {
  Search, Home as HomeIcon, DollarSign, TrendingUp, Building2,
  ShieldCheck, ArrowRight, BarChart3, ChevronDown, Users,
  Briefcase, GraduationCap, FileText, MapPin, Phone, Mail,
  CheckCircle2, Star, Clock, Globe2
} from "lucide-react";
import heroImage from "@assets/generated_images/modern_luxury_high-rise_building_at_dusk.png";
import residentialImage from "@assets/generated_images/modern_luxury_apartment_complex.png";
import commercialImage from "@assets/generated_images/modern_glass_office_building.png";
import industrialImage from "@assets/generated_images/modern_logistics_center_warehouse.png";
import { Link } from "wouter";
import { useState, useCallback, useMemo } from "react";

const FAQ_DATA = [
  { q: "What does Alliance Trust Realty focus on?", a: "Alliance Trust Realty focuses on real-estate advisory, investment-property guidance, mortgage support, investor education, and secure client onboarding under the GEM operating model." },
  { q: "Is this a crypto or trading platform?", a: "No. Alliance Trust Realty is a real-estate-first business. Broader analytics and adjacent financial intelligence sit under GEM separately and are not the core public offering here." },
  { q: "How do clients get started?", a: "Clients can begin with a consultation request, property inquiry, financing discussion, or investor-access request depending on their goals." },
  { q: "What is the investor portal for?", a: "The portal is intended for secure onboarding, property visibility, investor access, and future dashboard-level account workflows." },
  { q: "What kind of properties do you manage?", a: "We handle residential, commercial, multi-family, and industrial real estate assets across major US markets with a focus on income-generating properties." },
];

const SERVICES = [
  { icon: HomeIcon, title: "Residential Buying Support", desc: "Guided acquisition support for clients navigating residential purchases with more confidence, structure, and market clarity.", points: ["Buyer-readiness review", "Property shortlisting support", "Offer and next-step planning"], color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: DollarSign, title: "Residential Selling Support", desc: "Positioning, sale-readiness, and structured transaction guidance for owners preparing to sell strategically.", points: ["Listing-readiness guidance", "Pricing context support", "Seller communication workflow"], color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: TrendingUp, title: "Investment Property Analysis", desc: "Real-estate opportunity analysis for income potential, cap-rate awareness, and long-term portfolio fit.", points: ["Cash-flow framing", "Cap-rate awareness", "Portfolio suitability review"], color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: Building2, title: "Commercial Real Estate", desc: "Commercial advisory for acquisition review, repositioning analysis, and opportunity evaluation.", points: ["Asset opportunity review", "Commercial strategy support", "Acquisition-readiness guidance"], color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: Briefcase, title: "Mortgage Guidance", desc: "Financing-readiness support for buyers, investors, and clients preparing for lender conversations.", points: ["Mortgage preparation", "Refinance readiness", "Financing document awareness"], color: "text-rose-500", bg: "bg-rose-500/10" },
  { icon: GraduationCap, title: "Investor Education", desc: "Educational support to help clients understand property evaluation, financing, and disciplined decision-making.", points: ["Real-estate literacy", "Risk awareness", "Investor orientation guidance"], color: "text-cyan-500", bg: "bg-cyan-500/10" },
];

const PROPERTIES = [
  { title: "Downtown Multi-Family Asset", location: "Austin, TX", price: "$2.50M", cap: "7.2% cap rate", type: "Multi-Family", badge: "Featured", img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80", bestFor: "Income-focused investors", desc: "Stabilized multi-family asset positioned for structured investor review, cash-flow analysis, and long-term hold discussion." },
  { title: "Commercial Office Redevelopment", location: "Dallas, TX", price: "$4.20M", cap: "6.8% cap rate", type: "Commercial", badge: "Opportunity", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", bestFor: "Redevelopment strategy", desc: "Commercial building opportunity suitable for acquisition review, repositioning discussions, and strategic real-estate planning." },
  { title: "Single-Family Rental Portfolio", location: "Houston, TX", price: "$1.80M", cap: "6.5% cap rate", type: "Residential Portfolio", badge: "Available", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", bestFor: "Portfolio expansion", desc: "Curated single-family rental portfolio for investors seeking long-term residential income exposure." },
];

const TESTIMONIALS = [
  { text: "The structure and clarity helped us understand the opportunity without feeling pushed.", label: "Investor-focused experience" },
  { text: "The platform feels more secure, more professional, and easier to trust than a generic investment site.", label: "Client trust statement" },
  { text: "The consultation-first approach made the process clearer before any major decision was made.", label: "Process confidence" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-testid={`faq-item-${q.slice(0,20).replace(/\s/g,'-')}`} className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-6 text-left font-bold text-lg hover:text-blue-600 transition-colors" data-testid={`faq-toggle-${q.slice(0,20).replace(/\s/g,'-')}`}>
        <span>{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 ml-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="px-6 text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Premium with Investment Dashboard */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center" data-testid="hero-section">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/70" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative container mx-auto px-4 z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-[0.25em] rounded-full" data-testid="pill-badge">
                Real Estate & Investor Services
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter text-white" data-testid="hero-title">
                Secure Real Estate for{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Modern Investors</span>
              </h1>
              <p className="text-xl text-slate-300 font-light max-w-xl leading-relaxed" data-testid="hero-desc">
                Alliance Trust Realty, powered by GEM Cybersecurity Assist, helps clients navigate property opportunities, financing decisions, and investor support through a secure digital operating model.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent" data-testid="stat-portfolio">$2.5B+</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Portfolio Value</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent" data-testid="stat-roi">12.4%</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Avg. ROI</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent" data-testid="stat-properties">5,000+</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Properties Managed</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/invest">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black px-10 py-7 text-base rounded-full shadow-2xl shadow-amber-500/30 group" data-testid="button-schedule-consultation">
                    Schedule Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/buy">
                  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 font-black px-10 py-7 text-base rounded-full backdrop-blur-md" data-testid="button-explore-opportunities">
                    Explore Opportunities
                  </Button>
                </Link>
              </div>
            </div>

            {/* Investment Dashboard Card */}
            <div className="hidden lg:block" data-testid="investment-dashboard-card">
              <div className="bg-white/[0.98] backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-black text-slate-900">Investment Dashboard</h3>
                  <p className="text-slate-500 text-sm mt-1">Real-time portfolio tracking and analytics</p>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Portfolio Value", value: "$1,247,500", change: "+12.4% this quarter", positive: true, icon: "bg-blue-600" },
                    { label: "Total ROI", value: "18.7%", change: "+2.3% from last year", positive: true, icon: "bg-emerald-600" },
                    { label: "Monthly Income", value: "$8,450", change: "Stable across 12 properties", positive: false, icon: "bg-amber-600" },
                  ].map((m, i) => (
                    <div key={i} className="p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors" data-testid={`metric-card-${i}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{m.label}</span>
                        <div className={`w-9 h-9 ${m.icon} rounded-xl flex items-center justify-center text-white text-sm`}>
                          {i === 0 ? <DollarSign className="h-4 w-4" /> : i === 1 ? <TrendingUp className="h-4 w-4" /> : <BarChart3 className="h-4 w-4" />}
                        </div>
                      </div>
                      <div className="text-3xl font-black text-slate-900">{m.value}</div>
                      <div className={`text-sm font-semibold mt-1 ${m.positive ? 'text-emerald-600' : 'text-gray-500'}`}>
                        {m.positive && '↑ '}{m.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Metrics Bar */}
      <section className="py-8 bg-white border-b border-gray-100" data-testid="metrics-bar">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Model", value: "Consultation-first engagement" },
              { label: "Positioning", value: "Real-estate-first brand" },
              { label: "Support", value: "Mortgage and financing readiness" },
              { label: "Expansion", value: "Future-ready investor portal" },
            ].map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-5" data-testid={`quick-metric-${i}`}>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{m.label}</div>
                <div className="font-bold text-slate-900">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden" data-testid="services-section" id="services">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight font-serif" data-testid="text-services-heading">
              Real-Estate Guidance Built for Modern Clients
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Whether you're buying, selling, or investing, we provide expert guidance tailored to your unique goals and circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-500 cursor-pointer" data-testid={`service-card-${i}`}>
                <div className={`w-14 h-14 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <s.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-4 text-sm">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 className={`h-4 w-4 ${s.color} shrink-0`} />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className={`text-sm font-bold uppercase tracking-widest ${s.color} group-hover:gap-4 transition-all flex items-center gap-2`}>
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Property Showcase */}
      <section className="py-24 bg-gray-50" data-testid="featured-showcase" id="featured">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs block mb-3">Featured Showcase</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-serif">A Flagship Property Presentation</h2>
            <p className="text-gray-500 mt-4 max-w-2xl text-lg">Premium property opportunities with real metrics, advisory framing, and immediate next-step paths.</p>
          </div>

          <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden" data-testid="featured-property">
            <div className="grid lg:grid-cols-2">
              <div className="h-72 lg:h-auto min-h-[420px] bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Featured Residential Asset</span>
                <h3 className="text-3xl font-black mt-5 text-slate-900 font-serif" data-testid="text-featured-title">Single-Family Rental Portfolio</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">A residential portfolio showcase designed to communicate real house inventory, income potential context, and long-term planning value in a clear, premium format.</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: "Location", value: "Houston, TX" },
                    { label: "Asset Type", value: "Residential Portfolio" },
                    { label: "Price", value: "$1.80M" },
                    { label: "Yield Context", value: "6.5% cap rate" },
                  ].map((m, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4" data-testid={`featured-metric-${i}`}>
                      <div className="text-xs text-gray-400 font-medium">{m.label}</div>
                      <div className="font-bold text-slate-900 mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap mt-8">
                  <Link href="/invest">
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-6 rounded-xl" data-testid="button-request-review">
                      Request a Review
                    </Button>
                  </Link>
                  <Button variant="outline" className="font-bold px-8 py-6 rounded-xl" data-testid="button-see-more">
                    See More Opportunities
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings Grid */}
      <section className="py-24 bg-white" data-testid="properties-section" id="properties">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs block mb-3">Featured Opportunities</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-serif">Property & Investment-Ready Opportunities</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROPERTIES.map((p, i) => (
              <article key={i} className="group rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500" data-testid={`property-card-${i}`}>
                <div className="h-72 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${p.img})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute top-5 left-5 z-10">
                    <span className="px-3 py-1.5 bg-white/90 text-slate-900 text-xs font-bold rounded-full">{p.badge}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-200 mb-1">{p.type}</div>
                    <h3 className="text-2xl font-black">{p.title}</h3>
                    <div className="text-sm text-slate-300 mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {p.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Price</div>
                      <div className="font-bold text-slate-900">{p.price}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Yield Context</div>
                      <div className="font-bold text-slate-900">{p.cap}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                  <p className="text-sm text-slate-700 font-semibold mb-5"><strong>Best For:</strong> {p.bestFor}</p>
                  <div className="flex gap-3">
                    <Link href="/invest">
                      <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl" data-testid={`button-request-details-${i}`}>
                        Request Details
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline" className="font-bold rounded-xl" data-testid={`button-schedule-review-${i}`}>
                      Schedule Review
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Advisory Dark Section */}
      <section className="py-20 bg-slate-950" data-testid="advisory-section" id="advisory">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Investment Advisory", desc: "Real-estate investment guidance built around property analysis, cash-flow framing, cap-rate awareness, and long-term portfolio support." },
              { icon: Briefcase, title: "Mortgage Guidance", desc: "Financing-readiness support for buyers, refinancers, and property investors preparing for lender conversations." },
              { icon: GraduationCap, title: "Investor Education", desc: "Educational guidance to help clients understand financing, property evaluation, and disciplined real-estate decisions." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/30 transition-colors" data-testid={`advisory-card-${i}`}>
                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-5">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Value Pillars */}
      <section className="py-24 bg-white" data-testid="why-us-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, eyebrow: "Why Us", title: "Real-estate-first, trust-led.", desc: "The platform is designed to reduce noise, improve clarity, and create a stronger client journey from inquiry to engagement." },
              { icon: Users, eyebrow: "Workflow", title: "Consultation before complexity.", desc: "We use a consultation-first model to align services, investor readiness, property needs, and financing paths." },
              { icon: Globe2, eyebrow: "Future-ready", title: "Built to grow into a platform.", desc: "Alliance Trust Realty is structured to expand into secure onboarding, user access, property visibility, and investor tools." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:shadow-lg transition-all duration-300" data-testid={`pillar-card-${i}`}>
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <item.icon className="h-7 w-7" />
                </div>
                <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs">{item.eyebrow}</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2 mb-4 font-serif">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50" data-testid="testimonials-section">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs block mb-3">Client Confidence</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-serif">Built for Trust and Conversion</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all" data-testid={`testimonial-${i}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-lg font-semibold text-slate-800 leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-sm text-gray-500 font-medium">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden" data-testid="calculator-section" id="calculator">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(at 20% 30%, rgba(255,255,255,0.15) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(212,165,116,0.1) 0px, transparent 50%)' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif" data-testid="text-calculator-heading">Investment ROI Calculator</h2>
            <p className="text-blue-100 text-lg mt-4 max-w-2xl mx-auto">Calculate potential returns on your real estate investment with our comprehensive analysis tool.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-24 bg-white" data-testid="strategies-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs block mb-3">Real Estate Focus</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-serif">Investment Strategies</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Distinct strategy tracks designed to meet different investment objectives, from income generation to capital appreciation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential Growth", img: residentialImage, desc: "Multifamily complexes in high-growth metropolitan areas." },
              { title: "Commercial Core", img: commercialImage, desc: "Class A office and retail spaces with long-term lease structures." },
              { title: "Industrial Logistics", img: industrialImage, desc: "Last-mile distribution centers powering the e-commerce economy." },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100" data-testid={`strategy-card-${i}`}>
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${item.img})` }} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-black mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-gray-500 mb-6">{item.desc}</p>
                  <Link href="/investment-plan">
                    <span className="inline-flex items-center text-sm font-bold text-amber-600 uppercase tracking-wide group-hover:gap-3 transition-all cursor-pointer gap-1">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden" data-testid="performance-section">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-serif font-black mb-8 leading-tight">
              Real Estate: The Foundation of Modern Wealth
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-12">
              In an era of market volatility, real assets provide a stable foundation for wealth preservation and growth. Our thesis: identify high-quality assets in supply-constrained markets with strong demographic tailwinds.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$2.4B+", label: "Assets Managed" },
                { value: "12+", label: "Years Experience" },
                { value: "14%", label: "Avg Target IRR" },
                { value: "450+", label: "Properties" },
              ].map((s, i) => (
                <div key={i} data-testid={`perf-stat-${i}`}>
                  <div className="text-4xl font-black text-amber-400 mb-2">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="py-24 bg-gray-50" data-testid="market-intel-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs">Data Driven</span>
              <h2 className="text-4xl font-serif font-black text-slate-900 mt-3">Market Intelligence</h2>
            </div>
            <p className="text-gray-500 max-w-md text-right mt-4 md:mt-0">
              Real-time economic indicators and asset performance data to inform your investment decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-full">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                <h3 className="font-bold font-serif text-slate-900">Global Economic Calendar</h3>
                <span className="text-xs text-gray-400">Powered by TradingView</span>
              </div>
              <div className="h-[calc(100%-50px)]">
                <TradingViewCalendar />
              </div>
            </div>
            <div className="lg:col-span-1 h-full flex flex-col">
              <CryptoMarketTable />
              <div className="mt-6 bg-slate-900 text-white p-6 rounded-2xl flex-grow flex flex-col justify-center text-center">
                <h4 className="text-xl font-serif font-bold mb-4">Digital Asset Integration</h4>
                <p className="text-sm text-gray-300 mb-6">
                  We monitor the digital asset ecosystem to identify emerging trends that impact real estate tokenization and settlement layers.
                </p>
                <Link href="/invest">
                  <Button variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white w-full">
                    View Analysis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white" data-testid="faq-section" id="faq">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs block mb-3">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-serif">Clear Answers for Clients & Investors</h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Investor Portal */}
      <section className="py-24 bg-gray-50" data-testid="investor-portal-section" id="portal">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl p-10 md:p-16">
            <h2 className="text-4xl font-black text-slate-900 font-serif mb-4" data-testid="text-investor-portal-heading">Investor Portal</h2>
            <p className="text-gray-500 text-lg max-w-3xl mb-8">
              Secure investor access, onboarding, property visibility, and future investment tracking workflows are being expanded inside the Alliance Trust Realty platform.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: ShieldCheck, label: "Secure onboarding" },
                { icon: Building2, label: "Property visibility" },
                { icon: BarChart3, label: "Future dashboard access" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4" data-testid={`portal-feature-${i}`}>
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-slate-900">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href="/login">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-6 rounded-xl" data-testid="button-portal-login">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="font-bold px-8 py-6 rounded-xl" data-testid="button-request-access">
                  Request Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal / Compliance Cards */}
      <section className="py-16 bg-white border-t border-gray-100" data-testid="legal-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Privacy Policy", desc: "Client information is handled for service response, communication, and secure operational processing." },
              { title: "Terms of Use", desc: "Site use, service inquiry behavior, and informational limitations should be governed by formal production terms." },
              { title: "Disclosures", desc: "Alliance Trust Realty does not present guaranteed returns. Property and investment information should be reviewed with appropriate professional judgment." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100" data-testid={`legal-card-${i}`}>
                <FileText className="h-6 w-6 text-gray-400 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
