import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/beginner/page-header";
import { ContentSection } from "@/components/beginner/content-section";

export default function SellPage() {
  return (
    <Layout>
      <PageHeader 
        title="Sell Your Property for Top Dollar"
        subtitle="Get a free home valuation and learn about our proven selling process."
        primaryCtaText="Get Free Valuation"
        primaryCtaLink="#"
      />
      <ContentSection title="Our Selling Process">
        <div className="grid md:grid-cols-3 gap-8 text-white">
          {["Professional Staging", "Strategic Marketing", "Expert Negotiation"].map((service, i) => (
            <div key={i} className="p-8 bg-slate-900 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold mb-4">{service}</h3>
              <p className="text-slate-400">Maximize your property's value with our specialized {service.toLowerCase()} services.</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </Layout>
  );
}
