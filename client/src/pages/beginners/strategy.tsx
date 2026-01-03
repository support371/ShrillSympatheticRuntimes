import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/beginner/page-header";
import { ContentSection } from "@/components/beginner/content-section";
import FooterCTA from "@/components/footer-cta";

export default function StrategyFramework() {
  return (
    <Layout>
      <div className="font-sans bg-slate-950 min-h-screen text-white">
        <PageHeader 
          title="Beginner Real Estate Strategy Framework"
          subtitle="Build a repeatable approach that prioritizes downside control, stable assumptions, and scalable long-term growth."
          primaryCtaText="Get the Beginner Investor Toolkit"
          primaryCtaLink="/beginner-investor-toolkit"
        />

        <ContentSection title="A Decision System, Not a Guessing Game">
          <p className="text-xl text-slate-400 leading-relaxed text-center max-w-4xl mx-auto font-light">
            This framework helps you make consistent, risk-aware decisions across market cycles. The goal is to create stable performance through conservative analysis, appropriate liquidity, and a clear plan for how you acquire, operate, and scale.
          </p>
        </ContentSection>

        <ContentSection title="Your Personal Investment Policy" className="bg-slate-900/30">
          <div className="max-w-4xl mx-auto bg-slate-900/50 p-12 rounded-2xl shadow-2xl border border-white/5">
            <p className="mb-10 text-slate-300 text-lg font-light leading-relaxed">A personal investment policy statement turns your abstract goals into clear, actionable acquisition rules that prevent emotional decision-making.</p>
            <ul className="space-y-6">
              {[
                { label: "Primary outcome", text: "Cash flow, appreciation, or a blended goal" },
                { label: "Time horizon", text: "Typically 5–10+ years for long-term compounding" },
                { label: "Risk ceiling", text: "Your maximum acceptable monthly out-of-pocket exposure" },
                { label: "Operating stance", text: "Self-manage vs. professional management" },
                { label: "Exit triggers", text: "Rules for selling, refinancing, or holding" },
              ].map((item, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-center border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <span className="font-black text-blue-500 w-56 shrink-0 uppercase text-xs tracking-[0.2em] mb-2 sm:mb-0">{item.label}</span>
                  <span className="text-slate-200 text-lg font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </ContentSection>

        <ContentSection title="Complexity Tiers" subtitle="As risk and operational complexity rise, so should your experience, reserves, and deal volume.">
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { tier: "Tier 1: Lower Complexity", color: "text-emerald-500", bg: "bg-emerald-500/5", border: "border-emerald-500/20", body: "REITs/ETFs and stable buy-and-hold residential in resilient demand areas." },
              { tier: "Tier 2: Moderate Complexity", color: "text-blue-500", bg: "bg-blue-500/5", border: "border-blue-500/20", body: "Small multifamily, value-add renovations, and market-standard financing." },
              { tier: "Tier 3: Higher Complexity", color: "text-amber-500", bg: "bg-amber-500/5", border: "border-amber-500/20", body: "Commercial development, syndications, and creative structural financing." }
            ].map((tier, i) => (
              <div key={i} className={`${tier.bg} ${tier.border} p-10 rounded-2xl border shadow-xl group hover:-translate-y-2 transition-all`}>
                <h3 className={`text-xl font-black mb-6 tracking-tight ${tier.color}`}>{tier.tier}</h3>
                <p className="text-slate-300 leading-relaxed font-light text-lg">{tier.body}</p>
              </div>
            ))}
          </div>
        </ContentSection>
        
        <div className="py-20">
          <FooterCTA />
        </div>
      </div>
    </Layout>
  );
}
