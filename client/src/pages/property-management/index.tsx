import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/beginner/page-header";
import { ContentSection } from "@/components/beginner/content-section";

export default function PropertyManagementPage() {
  return (
    <Layout>
      <PageHeader 
        title="Professional Property Management"
        subtitle="Hassle-free management for your rental properties. We handle the tenants, maintenance, and compliance."
        primaryCtaText="Request Management Quote"
        primaryCtaLink="#"
      />
      <ContentSection title="Full-Service Management">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Tenant Screening", desc: "Rigorous background and credit checks." },
            { title: "Maintenance", desc: "24/7 coordination of all property repairs." },
            { title: "Financial Reporting", desc: "Clear monthly statements and tax documentation." },
            { title: "Compliance", desc: "Ensuring all local and federal regulations are met." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-900 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
              <h3 className="text-xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </Layout>
  );
}
