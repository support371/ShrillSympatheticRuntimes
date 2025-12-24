import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, TrendingUp, Zap, Clock, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function InvestmentPlan() {
  const tracks = [
    {
      name: "Income Track",
      icon: DollarSign,
      desc: "Stabilized, cash-flowing assets prioritizing quarterly distributions",
      irr: "12-15%",
      risk: "Low-Moderate",
      features: ["Monthly/Quarterly Distributions", "Mature Assets", "Predictable Cash Flow", "Lower Volatility"],
    },
    {
      name: "Growth Track",
      icon: TrendingUp,
      desc: "Value-add and development deals seeking capital appreciation",
      irr: "18-22%",
      risk: "High",
      features: ["Appreciation Potential", "3-10 Year Horizon", "Active Management", "Higher Returns"],
    },
    {
      name: "Balanced Track",
      icon: Shield,
      desc: "Blended approach combining income and appreciation potential",
      irr: "14-16%",
      risk: "Moderate",
      features: ["Diversified Returns", "Flexible Terms", "Risk-Adjusted Yields", "Mixed Assets"],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary to-primary/90 text-white py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-6" data-testid="heading-strategy">Strategy Tracks</h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
            Choose an investment path aligned with your financial goals and risk tolerance. Each track is designed with specific return objectives, liquidity profiles, and investor demographics in mind.
          </p>
        </div>
      </div>

      {/* Three Tracks */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-track-${i}`}>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 border-b">
                  <Icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-primary">{track.name}</h3>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{track.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Target IRR</p>
                      <p className="text-2xl font-bold text-primary">{track.irr}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Risk Level</p>
                      <p className="text-lg font-bold text-secondary">{track.risk}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {track.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/packages">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide" data-testid={`button-explore-${i}`}>
                      Explore Opportunities
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selection Guide */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-12 mb-24">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">How to Choose Your Track</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-primary mb-4">Choose Income Track if:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>You seek quarterly income for living expenses or reinvestment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>You have lower risk tolerance and want predictability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>You prefer mature, stabilized assets with lease coverage</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-4">Choose Growth Track if:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>You can commit capital for 5-10 years without distributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>You seek aggressive capital appreciation over income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>You're willing to accept higher volatility for greater returns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: "Avg Hold Period", value: "5-7 Years", desc: "Time to maturity" },
            { icon: DollarSign, label: "Min Investment", value: "$25K-100K", desc: "Per opportunity" },
            { icon: TrendingUp, label: "Blended Returns", value: "12-22%", desc: "Target IRR range" },
            { icon: Shield, label: "Portfolio Grade", value: "A+ Rated", desc: "Risk assessment" },
          ].map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100 text-center" data-testid={`metric-${i}`}>
                <Icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{metric.label}</p>
                <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Deploy Capital?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Access institutional-grade real estate with flexible strategy selection and professional portfolio management.
          </p>
          <Link href="/register">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide px-8 py-3" data-testid="button-get-started-strategy">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
