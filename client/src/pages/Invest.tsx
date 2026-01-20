import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/beginner/page-header";
import { ContentSection } from "@/components/beginner/content-section";
import { PropertySearch } from "@/components/property/PropertySearch";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function InvestPage() {
  return (
    <Layout>
      <PageHeader 
        title="Investment Grade Properties"
        subtitle="Data-driven opportunities analyzed for cash flow, cap rate, and long-term appreciation."
        primaryCtaText="Join Investor List"
        primaryCtaLink="/register"
      />

      <section className="bg-slate-950 py-12 border-b border-white/5 relative z-30 -mt-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Institutional Filter Engine</h3>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-[10px] font-bold text-slate-500"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Live Market Feed</span>
            </div>
          </div>
          <PropertySearch />
        </div>
      </section>

      <ContentSection title="Active Opportunities">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="group bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col shadow-2xl">
              <div className="h-64 bg-slate-800 relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest z-10">Institutional Grade</div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Asking Price</p>
                    <p className="text-2xl font-black text-white">$1,245,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">Cap Rate</p>
                    <p className="text-lg font-black text-white">7.2%</p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div>
                  <h4 className="text-xl font-black text-white mb-2 tracking-tight">Metropolitan Heights Portfolio</h4>
                  <p className="text-slate-400 text-sm font-light">Supply-constrained market with 98% historical occupancy.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Cash-on-Cash</p>
                    <p className="text-sm font-black text-white">12.4%</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Monthly Rent</p>
                    <p className="text-sm font-black text-white">$8,450</p>
                  </div>
                </div>
                <Button className="w-full bg-slate-950 border border-white/10 hover:border-blue-500/50 hover:bg-slate-900 group">
                  Full Financial Analysis <Search className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </Layout>
  );
}
