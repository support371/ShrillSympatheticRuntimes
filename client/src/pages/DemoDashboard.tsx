import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useDemoAccount } from "@/hooks/use-demo-account";
import { TradingViewChart } from "@/components/widgets/TradingViewChart";
import { DemoAllocationChart } from "@/components/dashboard/DemoAllocationChart";
import { DemoActions } from "@/components/dashboard/DemoActions";
import { AlertCircle, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function DemoDashboard() {
  const { account, simulateBuy, resetDemo, isLoaded } = useDemoAccount();

  if (!isLoaded) return null;

  return (
    <Layout>
      {/* Demo Banner */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-2 sticky top-20 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-secondary-foreground font-medium">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            DEMO MODE — Educational Use Only
          </span>
          <div className="flex items-center gap-4">
             <span className="hidden md:inline text-xs opacity-70">Data is simulated for training purposes.</span>
             <Button variant="link" size="sm" className="text-secondary hover:text-primary font-bold uppercase text-xs tracking-wider">
               Switch to Live Account
             </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
                <h1 className="text-3xl font-serif font-bold text-primary">Practice Portfolio</h1>
                <p className="text-muted-foreground">Balanced Growth Strategy • Risk Level: Moderate</p>
            </div>
            <div className="text-right">
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Total Equity</div>
                <div className="text-4xl font-mono font-bold text-primary">
                    ${(account.holdings.cash + account.holdings.realEstate + account.holdings.crypto).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
                {/* Daily Trade Watch */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold font-serif text-primary">Daily Trade Watch</h2>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-xs">BTCUSD</Button>
                            <Button size="sm" variant="ghost" className="text-xs text-muted-foreground">ETHUSD</Button>
                        </div>
                    </div>
                    <div className="h-[400px] bg-gray-50 rounded border border-gray-100 overflow-hidden">
                        <TradingViewChart symbol="BTCUSD" />
                    </div>
                    <div className="mt-4 flex items-start gap-3 p-4 bg-blue-50 text-blue-800 rounded text-sm">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <p>
                            <strong>Analyst Note:</strong> Bitcoin is currently testing key resistance levels. 
                            Institutional inflows suggest potential upside, but volatility remains high. 
                            Consider this when rebalancing your digital asset exposure.
                        </p>
                    </div>
                </div>

                {/* Transaction History */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold font-serif text-primary mb-4">Recent Activity</h2>
                    {account.transactions.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground text-sm italic">
                            No transactions yet. Try simulating a trade.
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {account.transactions.map(tx => (
                                <div key={tx.id} className="flex justify-between items-center p-3 bg-gray-50 rounded text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${tx.type === 'buy' ? 'bg-green-500' : 'bg-red-500'}`} />
                                        <span className="font-medium capitalize">{tx.type} {tx.asset === 'realEstate' ? 'Real Estate' : 'Crypto'}</span>
                                    </div>
                                    <div className="font-mono">${tx.amount.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                {/* Allocation Chart */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                     <h2 className="text-xl font-bold font-serif text-primary mb-4">Target Allocation</h2>
                     <DemoAllocationChart />
                </div>

                {/* Holdings Summary */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                     <h2 className="text-xl font-bold font-serif text-primary mb-4">Holdings</h2>
                     <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                            <span className="text-muted-foreground">Cash Balance</span>
                            <span className="font-mono font-bold">${account.holdings.cash.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                            <span className="text-muted-foreground">Real Estate</span>
                            <span className="font-mono font-bold">${account.holdings.realEstate.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                            <span className="text-muted-foreground">Digital Assets</span>
                            <span className="font-mono font-bold">${account.holdings.crypto.toLocaleString()}</span>
                        </div>
                     </div>
                </div>

                {/* Actions */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <DemoActions onBuy={simulateBuy} onReset={resetDemo} />
                </div>

                {/* Educational Panel */}
                <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="h-6 w-6 text-secondary" />
                        <h3 className="font-bold font-serif">Learning Center</h3>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        Understand the mechanics of real estate syndication before committing capital.
                    </p>
                    <ul className="text-sm space-y-2 mb-4 text-gray-300">
                        <li>• How Distributions Work</li>
                        <li>• Tax Advantages (Depreciation)</li>
                        <li>• Capital Calls Explained</li>
                    </ul>
                    <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white text-xs uppercase tracking-wide">
                        Start Course
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
