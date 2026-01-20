import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/beginner/page-header";
import { ContentSection } from "@/components/beginner/content-section";
import { PropertySearch } from "@/components/property/PropertySearch";

export default function BuyPage() {
  return (
    <Layout>
      <PageHeader 
        title="Find Your Dream Home"
        subtitle="Search thousands of listings with advanced filters and expert guidance."
        primaryCtaText="Contact an Agent"
        primaryCtaLink="/contact"
      />

      <section className="bg-slate-950 py-12 border-b border-white/5 relative z-30 -mt-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <PropertySearch />
        </div>
      </section>

      <ContentSection title="Buying Process Timeline" className="bg-slate-900/30">
        <div className="grid md:grid-cols-4 gap-8">
          {["Pre-Approval", "Property Search", "Offer & Negotiation", "Closing"].map((step, i) => (
            <div key={i} className="text-center p-6 bg-slate-900 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-blue-500 mb-4">{i + 1}</div>
              <h3 className="text-xl font-bold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </ContentSection>
    </Layout>
  );
}
