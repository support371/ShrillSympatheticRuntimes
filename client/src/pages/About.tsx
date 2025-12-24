import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, Award, Users, TrendingUp, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import aboutImage from "@assets/generated_images/abstract_architectural_detail.png";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[400px] w-full overflow-hidden mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center text-white">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-4">About Alliance Trust Realty</h1>
            <p className="text-xl text-gray-200 max-w-2xl">A pioneering real estate investment platform democratizing access to institutional-grade wealth-building strategies.</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Alliance Trust Realty is a pioneering real estate investment firm tailored for the modern investor. 
              We bridge the gap between individual capital and institutional-grade real estate assets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our mission is to democratize access to wealth-building real estate strategies that were previously 
              reserved for ultra-high-net-worth individuals and sovereign wealth funds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through transparent reporting, professional management, and aligned incentives, we empower individual 
              investors to build institutional-quality portfolios starting at $25,000.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-12 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-8">What Drives Us</h3>
            <ul className="space-y-4">
              {[
                "Transparency in every transaction",
                "Long-term alignment with investors",
                "Institutional-grade risk management",
                "Professional asset selection",
                "Ethical stewardship of capital",
                "Technology-enabled efficiency"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Us */}
        <div className="mb-24 py-20 border-t border-b border-gray-200">
          <h2 className="text-4xl font-serif font-bold text-primary mb-16 text-center">Why Choose Alliance Trust Realty?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Institutional Quality",
                desc: "Properties selected using the same criteria as billion-dollar institutional funds. Conservative underwriting. Professional management."
              },
              {
                icon: TrendingUp,
                title: "Proven Performance",
                desc: "Historical returns of 12-22% across our portfolio sleeves. Transparent quarterly reporting. Third-party audited financials."
              },
              {
                icon: Users,
                title: "Aligned Incentives",
                desc: "Our team has significant capital alongside yours. We win when you win. Long-term relationships over transaction fees."
              },
              {
                icon: Award,
                title: "Expert Management",
                desc: "20+ years of institutional real estate experience. Executive team with track records at top-tier investment platforms."
              },
              {
                icon: Globe,
                title: "Market Diversification",
                desc: "National portfolio across residential, commercial, and industrial assets. Geographic and sector diversification built-in."
              },
              {
                icon: CheckCircle2,
                title: "Investor Simplicity",
                desc: "Single check. Professional management. Quarterly distributions. Transparent reporting. No operational headaches."
              }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow" data-testid={`benefit-card-${i}`}>
                  <Icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="py-20">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 text-center">Trusted by Investors Nationwide</h2>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Our team combines decades of institutional real estate experience with a genuine commitment to investor success.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="font-bold text-lg text-primary mb-6">Leadership</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="font-bold text-primary">Executive leadership</span> with experience at major institutional real estate platforms including CBRE, JLL, and leading REITs.
                </p>
                <p>
                  <span className="font-bold text-primary">Combined portfolio experience</span> managing $5+ billion in institutional capital across residential, commercial, and industrial properties.
                </p>
                <p>
                  <span className="font-bold text-primary">Alignment demonstrated</span> through significant personal capital deployment alongside investor capital.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <h3 className="font-bold text-lg text-primary mb-6">Governance</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="font-bold text-primary">Independent board oversight</span> with fiduciary responsibility to investor interests.
                </p>
                <p>
                  <span className="font-bold text-primary">Third-party audits</span> by major accounting firms. Annual reporting verified by external auditors.
                </p>
                <p>
                  <span className="font-bold text-primary">Regulatory compliance</span> with all SEC and state requirements. Transparent, standardized documentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 py-20 border-y border-gray-200">
          {[
            { label: "Years Experience", value: "20+" },
            { label: "Assets Under Management", value: "$5B+" },
            { label: "Investor Relationships", value: "10K+" },
            { label: "Properties Managed", value: "500+" }
          ].map((stat, i) => (
            <div key={i} className="text-center" data-testid={`stat-${i}`}>
              <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Our Philosophy</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Real wealth is built slowly through consistent, disciplined investing in real assets. We believe that individual 
              investors deserve the same caliber of opportunities previously reserved for institutions.
            </p>
            <p>
              We don't believe in quick fixes or get-rich-quick schemes. Instead, we focus on:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Conservative underwriting</strong> - Properties that generate returns through fundamentals, not speculation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Professional management</strong> - Letting experts focus on operations so investors can focus on goals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Transparent communication</strong> - Regular updates, honest assessments, and full transparency on performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Long-term relationships</strong> - We succeed when our investors achieve their financial goals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Ready to Build Institutional-Quality Wealth?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Explore our investment strategies and join a network of investors building real estate wealth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/investment-plan">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide px-8 py-3" data-testid="button-explore-strategies">
              Explore Strategies
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" className="font-bold uppercase tracking-wide px-8 py-3" data-testid="button-get-started-about">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
