import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Menu, X } from "lucide-react";
import { VideoPreview } from "@/components/VideoPreview";

// Icon components
const IconShield = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

const IconCpu = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
  </svg>
);

const IconUsers = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconBuilding = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/>
  </svg>
);

const IconCheckCircle = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m22 4-12 12-5.79-5.79"/>
  </svg>
);

const IconChevronDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default function Enterprise() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationStatus('submitting');
    setTimeout(() => {
      setApplicationStatus('success');
      setTimeout(() => setApplicationStatus('idle'), 3000);
    }, 1500);
  };

  const projects = [
    { title: "401(k) Premier Solutions", desc: "Tax-advantaged retirement planning.", icon: ShieldIcon },
    { title: "QFS Quantum Systems", desc: "Next-gen asset protection.", icon: IconCpu },
    { title: "The M.O.S.T. Kids Trust", desc: "Managed Opportunity Savings.", icon: IconUsers },
    { title: "Metropolitan Heights", desc: "Luxury residential complex.", icon: IconBuilding },
    { title: "Harbor Logistics Center", desc: "Industrial shipping hub.", icon: IconBuilding },
    { title: "Greenfield Tech Park", desc: "Commercial innovation zone.", icon: IconCpu }
  ];

  const divisions = [
    { title: "Cybersecurity", desc: "Enterprise-grade security infrastructure", features: ['End-to-End Encryption', 'Blockchain Verification', 'Instant Settlement'] },
    { title: "Compliance", desc: "Regulatory excellence across sectors", features: ['Automated Audits', 'Real-time Monitoring', 'Compliance Reports'] },
    { title: "Real Estate", desc: "Strategic asset management platform", features: ['Portfolio Analytics', 'Market Intelligence', 'Capital Optimization'] }
  ];

  function ShieldIcon({ size = 24 }) {
    return <IconShield size={size} />;
  }

  return (
    <Layout>
      <div className="bg-slate-950 min-h-screen">
        {/* Sticky Navigation */}
        <nav className={`fixed top-20 inset-x-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-4 flex items-center justify-between">
            <span className="font-extrabold text-xl tracking-tight text-white">The Alliance Enterprise</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 bg-slate-900/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/5">
              {['Vision', 'About', 'Projects', 'Community'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={scrollTo(item.toLowerCase())} className="px-5 py-2 text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-slate-950/98 z-40 flex flex-col items-center justify-center gap-8 mt-20">
              {['Vision', 'About', 'Projects', 'Community'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={scrollTo(item.toLowerCase())} className="text-2xl font-bold text-slate-300">
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950 z-10" />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wider uppercase">
              Integrated Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Secure. Compliant.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">Profitable.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Empowering enterprise growth by integrating cybersecurity, compliance, and real estate management into one trust-forward platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#vision" onClick={scrollTo('vision')} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                Explore the Vision
              </a>
              <a href="#community" onClick={scrollTo('community')} className="px-8 py-4 bg-transparent text-blue-400 border border-blue-500/30 font-bold rounded-xl hover:bg-blue-500/10 transition-all">
                Join the Movement
              </a>
            </div>
          </div>
        </section>

        {/* Vision Section with Video */}
        <section id="vision" className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4">
            <VideoPreview
              title="The Evolution of Excellence"
              subtitle="Our Story"
              description="From pioneering enterprise solutions to mastering regulatory compliance and real estate investment, The Alliance Enterprise represents the convergence of three critical pillars of modern business success."
              division="OUR STORY"
              videoUrl="/gemini_generated_video_694FDA93.mp4"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-900/30 border-b border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">The Alliance Enterprise</h2>
              <p className="text-slate-400 text-lg">Three divisions, one mission: secure growth through strategic partnerships.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {divisions.map((div, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-3">{div.title}</h3>
                  <p className="text-slate-400 mb-6">{div.desc}</p>
                  <ul className="space-y-2">
                    {div.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="text-emerald-400 flex-shrink-0">
                          <IconCheckCircle size={18} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-b border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Active Projects</h2>
              <p className="text-slate-400 text-lg">Explore investment opportunities across our portfolio.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((proj, idx) => (
                <div key={idx} className="group bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:bg-slate-800/50 hover:-translate-y-2 transition-all">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {idx < 3 ? <IconShield size={28} /> : idx < 4 ? <IconBuilding size={28} /> : <IconCpu size={28} />}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{proj.title}</h4>
                  <p className="text-slate-400">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-24 bg-slate-900/30 border-b border-white/5">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Join Our Community</h2>
              <p className="text-slate-400 text-lg">Apply for membership and gain access to exclusive opportunities.</p>
            </div>

            {applicationStatus === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheckCircle size={32} />
                </div>
                <h5 className="text-white text-xl font-bold mb-2">Application Received</h5>
                <p className="text-green-400">We will reach out within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-5 bg-slate-900/50 border border-white/10 rounded-2xl p-8">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                />
                <div className="relative">
                  <select 
                    required 
                    className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
                  >
                    <option value="" disabled selected>Select Interest Area</option>
                    <option>Cybersecurity Services</option>
                    <option>Compliance Solutions</option>
                    <option>Real Estate Investment</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <IconChevronDown />
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={applicationStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-70"
                >
                  {applicationStatus === 'submitting' ? 'Processing...' : 'Apply Now'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-white/5 py-8">
          <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
            <p>&copy; 2025 The Alliance Enterprise. Secure. Compliant. Profitable.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
