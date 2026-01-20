import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/beginner/page-header";
import { ContentSection } from "@/components/beginner/content-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Calculator, ShieldCheck } from "lucide-react";

export default function InvestPage() {
  return (
    <Layout>
      <PageHeader 
        title="Institutional-Grade Real Estate Investing"
        subtitle="Build wealth through strategic property investments with data-driven analysis and proven ROI models."
        primaryCtaText="Schedule Consultation"
        primaryCtaLink="#"
      />

      <ContentSection title="Investment Tools">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-900 border-white/5 p-8">
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500">
                  <Calculator size={24} />
                </div>
                <h3 className="text-2xl font-black text-white">ROI Calculator</h3>
              </div>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Purchase Price</label>
                  <Input type="number" placeholder="$500,000" className="bg-slate-950 border-white/10" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400">Down Payment (%)</label>
                    <Input type="number" placeholder="20" className="bg-slate-950 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400">Interest Rate (%)</label>
                    <Input type="number" placeholder="6.5" className="bg-slate-950 border-white/10" />
                  </div>
                </div>
                <Button className="w-full bg-blue-600 font-bold">Calculate Returns</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {[
              { icon: TrendingUp, title: "Market Analysis", desc: "Access current market trends and neighborhood data." },
              { icon: BarChart3, title: "Portfolio Tracking", desc: "Monitor your investment performance in real-time." },
              { icon: ShieldCheck, title: "1031 Exchange", desc: "Expert coordination for tax-deferred exchanges." }
            ].map((tool, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-slate-900 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                  <tool.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{tool.title}</h4>
                  <p className="text-slate-400 text-sm">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </Layout>
  );
}
