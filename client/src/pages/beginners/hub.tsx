import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/beginner/page-header";
import { CtaBanner } from "@/components/beginner/cta-banner";
import { ContentSection } from "@/components/beginner/content-section";
import { Target, TrendingUp, ShieldCheck, DollarSign, BarChart3, ArrowRight } from "lucide-react";

export default function BeginnerHub() {
  return (
    <Layout>
      <div className="font-sans bg-slate-950 min-h-screen text-white">
        <PageHeader 
          title="Build a Real Estate Strategy That Balances Risk and Long-Term Growth"
          subtitle="A beginner-friendly framework focused on conservative underwriting, resilient financing, and disciplined portfolio scaling."
          primaryCtaText="Get the Beginner Investor Toolkit"
          primaryCtaLink="/beginner-investor-toolkit"
          secondaryCtaText="View Starter Properties"
          secondaryCtaLink="#"
        />

        <ContentSection 
          title="The Beginner Strategy Framework" 
          subtitle="A simple, repeatable decision system designed to help new investors reduce early risk and build long-term momentum."
          className="bg-slate-900/30"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Define Your Objective", body: "Choose cash flow, appreciation, or a balanced approach so every deal aligns with your financial plan." },
              { icon: ShieldCheck, title: "Choose Your Risk Tier", body: "Start with lower-complexity strategies before advancing into value-add or higher-management models." },
              { icon: BarChart3, title: "Underwrite Conservatively", body: "Always model vacancy, repairs, capex reserves, insurance, taxes, and management to validate performance." },
              { icon: DollarSign, title: "Use Resilient Financing", body: "Prioritize stable terms and avoid thin margins that cannot absorb surprises." },
              { icon: TrendingUp, title: "Scale with Discipline", body: "Diversify by asset type and location over time to reduce concentration risk." }
            ].map((card, idx) => (
              <div key={idx} className="bg-slate-900/50 p-8 rounded-2xl shadow-xl border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all">
                  <card.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{card.body}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="What This Framework Helps You Avoid">
          <div className="bg-red-500/10 border-l-4 border-red-500 p-10 rounded-r-2xl max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-black text-red-500 mb-8 tracking-tight uppercase italic">Risk Awareness Checklist</h3>
            <ul className="grid md:grid-cols-2 gap-8">
              {[
                "Overestimating rent growth and future appreciation",
                "Under-budgeting repairs, capital expenditures, and vacancies",
                "Buying thin-margin deals with limited downside protection",
                "Scaling too fast before validating performance assumptions"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-200 font-medium text-lg">
                  <span className="mr-4 text-red-500 text-2xl font-black leading-none">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ContentSection>

        <ContentSection title="Start Here" className="bg-slate-900/30">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Strategy Framework", link: "/for-beginners/strategy-framework", desc: "Build your personal investment policy statement." },
              { title: "Deal Scorecard", link: "/for-beginners/deal-scorecard", desc: "Evaluate risk quickly with our scoring system." },
              { title: "Underwriting Checklist", link: "/for-beginners/underwriting-checklist", desc: "Don't miss a detail during due diligence." }
            ].map((tile, i) => (
              <Link key={i} href={tile.link}>
                <div className="bg-slate-900/50 p-10 rounded-2xl shadow-xl border border-white/5 cursor-pointer hover:border-blue-500/30 hover:-translate-y-2 transition-all group h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-blue-500 mb-4 group-hover:text-blue-400 transition-colors tracking-tight uppercase">{tile.title}</h3>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">{tile.desc}</p>
                  </div>
                  <div className="mt-8 flex items-center text-blue-500 font-black uppercase text-sm tracking-widest group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ContentSection>

        <CtaBanner 
          title="Get the Templates That Simplify Your First Deal"
          description="Download the Beginner Investor Toolkit with a personal investment policy statement, deal scorecard, and underwriting checklist."
          buttonText="Get the Beginner Investor Toolkit"
          buttonLink="/beginner-investor-toolkit"
        />
        
        <div className="py-12 bg-slate-950 text-center text-slate-600 text-sm px-4 border-t border-white/5 italic">
          Disclaimer: This content is for educational purposes and does not constitute financial, legal, or tax advice. Real estate investing involves risk, including potential loss of capital. Consult qualified professionals before making investment decisions.
        </div>
      </div>
    </Layout>
  );
}
