import { Layout } from "@/components/layout/Layout";
import { DemoAllocationChart } from "@/components/dashboard/DemoAllocationChart";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import residentialImage from "@assets/generated_images/modern_luxury_apartment_complex.png";
import commercialImage from "@assets/generated_images/modern_glass_office_building.png";

export default function Portfolio() {
  return (
    <Layout>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-6">Portfolio Strategy</h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
             We believe that true wealth preservation requires a multi-asset approach. 
             Our portfolios are constructed to balance income generation with capital appreciation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Balanced Growth Model</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our flagship model portfolio allocates capital across three core real estate sectors, 
                    optimized for risk-adjusted returns. By maintaining a liquidity buffer, we can 
                    opportunistically acquire assets during market dislocations.
                </p>
                <ul className="space-y-4 mb-8">
                    {[
                        "40% Residential (Stability & Income)",
                        "30% Commercial (Long-term Leases)",
                        "20% Industrial (E-commerce Growth)",
                        "10% Liquidity (Opportunity Capital)"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-primary font-medium">
                            <CheckCircle2 className="h-5 w-5 text-secondary" />
                            {item}
                        </li>
                    ))}
                </ul>
                <Link href="/investment-plan">
                    <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide">
                        Start Building This Portfolio
                    </Button>
                </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-center font-bold text-primary mb-8 uppercase tracking-widest text-sm">Target Allocation</h3>
                <DemoAllocationChart />
            </div>
        </div>

        <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary">Active Strategies</h2>
                <p className="text-muted-foreground mt-4">
                    Explore our currently open investment vehicles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${residentialImage})` }} />
                    <div className="p-8">
                        <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Income Focused</div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Multifamily Yield Fund IV</h3>
                        <p className="text-muted-foreground mb-6">
                            Stabilized apartment complexes in Sunbelt markets with value-add potential through operational efficiencies.
                        </p>
                        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                            <div>
                                <div className="text-xs text-muted-foreground uppercase">Target IRR</div>
                                <div className="font-bold text-primary text-lg">12-15%</div>
                            </div>
                            <Link href="/qfs/multifamily-yield">
                                <Button variant="ghost" className="text-secondary hover:text-primary font-bold uppercase text-xs">
                                    View Fact Sheet <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${commercialImage})` }} />
                    <div className="p-8">
                        <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Growth Focused</div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Urban Office Redevelopment</h3>
                        <p className="text-muted-foreground mb-6">
                            Converting distressed Class B office space into mixed-use residential and retail destinations.
                        </p>
                        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                            <div>
                                <div className="text-xs text-muted-foreground uppercase">Target IRR</div>
                                <div className="font-bold text-primary text-lg">18-22%</div>
                            </div>
                            <Link href="/qfs/urban-office">
                                <Button variant="ghost" className="text-secondary hover:text-primary font-bold uppercase text-xs">
                                    View Fact Sheet <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
