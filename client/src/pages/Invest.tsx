import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/beginner/page-header";
import { ContentSection } from "@/components/beginner/content-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Calculator, ShieldCheck } from "lucide-react";

import { ROICalculator } from "@/components/calculators/ROICalculator";

export default function InvestPage() {
  return (
    <Layout>
      <PageHeader 
        title="Institutional-Grade Real Estate Investing"
        subtitle="Build wealth through strategic property investments with data-driven analysis and proven ROI models."
        primaryCtaText="Schedule Consultation"
        primaryCtaLink="#"
      />

      <ContentSection title="Investment Analysis Engine">
        <div className="max-w-5xl mx-auto">
          <ROICalculator />
        </div>
      </ContentSection>

      <ContentSection title="Market Intelligence" className="bg-slate-900/30">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: TrendingUp, title: "Market Analysis", desc: "Access current market trends and neighborhood data." },
            { icon: BarChart3, title: "Portfolio Tracking", desc: "Monitor your investment performance in real-time." },
            { icon: ShieldCheck, title: "1031 Exchange", desc: "Expert coordination for tax-deferred exchanges." }
          ].map((tool, i) => (
            <div key={i} className="flex flex-col gap-6 p-10 bg-slate-900 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <tool.icon size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic">{tool.title}</h4>
                <p className="text-slate-400 text-lg font-light leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </Layout>
  );
}
