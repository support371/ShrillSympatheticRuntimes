import { TrendingUp, Award, BarChart3 } from "lucide-react";

export default function ProofOfConcept() {
  const projects = [
    {
      icon: TrendingUp,
      title: "Enterprise Security Overhaul",
      description: "Complete cybersecurity transformation for a Fortune 500 company, reducing security incidents by 95% and achieving full compliance certification.",
      client: "Enterprise Client",
      metric: "95% Improvement",
      gradient: "gradient-primary"
    },
    {
      icon: Award,
      title: "Multi-Industry Compliance",
      description: "Streamlined regulatory compliance across healthcare, finance, and manufacturing sectors, achieving 100% audit success rate.",
      client: "Multi-Sector Project",
      metric: "100% Success",
      gradient: "bg-gradient-to-br from-green-600 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Strategic Portfolio Growth",
      description: "Real estate investment strategy delivering 23% annual returns through strategic acquisitions and portfolio optimization.",
      client: "Investment Portfolio",
      metric: "23% Returns",
      gradient: "bg-gradient-to-br from-accent-gold to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-navy mb-6">Proven Results</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world implementations demonstrating the power of our integrated approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className={`${project.gradient} h-48 flex items-center justify-center text-white`}>
                <div className="text-center">
                  <project.icon className="h-12 w-12 mb-2 mx-auto" />
                  <p className="text-sm">{project.client}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary-blue mb-3">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{project.client}</span>
                  <span className="text-accent-gold font-semibold">{project.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            data-testid="button-view-case-studies"
          >
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
