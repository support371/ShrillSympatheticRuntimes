import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, DollarSign, Users, Award, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function Affiliate() {
  const benefits = [
    { icon: DollarSign, title: "Competitive Commissions", desc: "Up to 2% recurring on referred investor capital" },
    { icon: TrendingUp, title: "Growing Payouts", desc: "Higher tiers unlock increased commission rates" },
    { icon: Users, title: "Dedicated Support", desc: "Partner managers guide your success" },
    { icon: Award, title: "Elite Recognition", desc: "Tier-based incentives and exclusive events" },
    { icon: BarChart3, title: "Real-time Tracking", desc: "Dashboard visibility into all referrals & earnings" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary to-primary/90 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-6" data-testid="heading-affiliate">Partner Network</h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
            Expand your earning potential by introducing investors to institutional-grade real estate opportunities. Build a high-margin revenue stream with the backing of Alliance Trust Realty's proven investment vehicles.
          </p>
          <div className="mt-8">
            <Link href="/register">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide px-8 py-3" data-testid="button-join-affiliate">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">How Our Partner Program Works</h2>
            <div className="space-y-4">
              {[
                "Refer qualified investors to Alliance Trust Realty investment opportunities",
                "Earn ongoing commissions based on their capital deployment",
                "Access marketing materials, investor presentations, and deal summaries",
                "Scale your network with dedicated partner success team support",
                "Receive monthly statements tracking all referral activity and payouts"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-12 border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-8">Commission Structure</h3>
            <div className="space-y-6">
              {[
                { tier: "Partner", capital: "$0 - $500K", rate: "1.0%", color: "bg-blue-50" },
                { tier: "Elite", capital: "$500K - $2M", rate: "1.5%", color: "bg-purple-50" },
                { tier: "Premier", capital: "$2M+", rate: "2.0%", color: "bg-amber-50" },
              ].map((level, i) => (
                <div key={i} className={`${level.color} p-4 rounded-lg border border-gray-200`}>
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-primary">{level.tier}</p>
                    <p className="text-2xl font-bold text-secondary">{level.rate}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{level.capital} referred</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">Commissions paid monthly. Recurring for investment duration.</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Partner Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="p-8 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow" data-testid={`card-benefit-${i}`}>
                  <Icon className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-bold text-primary mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-primary text-white rounded-xl p-12">
          <h2 className="text-3xl font-serif font-bold mb-8">Partner Resources</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { title: "Investor Brochures", desc: "Professional one-sheets for each strategy" },
              { title: "Pitch Decks", desc: "Customizable presentations with live performance data" },
              { title: "Training Materials", desc: "Educational content on asset classes and strategies" },
            ].map((resource, i) => (
              <div key={i} data-testid={`resource-item-${i}`}>
                <h3 className="font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm">{resource.desc}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="text-primary border-white hover:bg-white/10" data-testid="button-download-resources">
            Download All Resources
          </Button>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Ready to Build a High-Margin Income Stream?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join our network of successful partners earning recurring commissions by connecting investors to real estate excellence.
          </p>
          <Link href="/register">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide px-8 py-3" data-testid="button-start-partner">
              Start Earning Today
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
