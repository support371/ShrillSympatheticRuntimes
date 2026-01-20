import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  Building, 
  ArrowUpRight, 
  ArrowDownRight,
  PieChart,
  History,
  AlertCircle
} from "lucide-react";

export default function InvestorDashboard() {
  const stats = [
    { title: "Total Portfolio Value", value: "$1,245,000", change: "+12.5%", trendingUp: true, icon: TrendingUp },
    { title: "Annual ROI", value: "14.2%", change: "+2.1%", trendingUp: true, icon: PieChart },
    { title: "Monthly Cash Flow", value: "$8,450", change: "-0.5%", trendingUp: false, icon: DollarSign },
    { title: "Active Properties", value: "12", change: "+1", trendingUp: true, icon: Building }
  ];

  return (
    <Layout>
      <div className="p-8 bg-slate-950 min-h-screen text-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight">Investor Dashboard</h1>
              <p className="text-slate-400 mt-2">Welcome back, Managing Partner. Here's your portfolio overview.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                <History className="mr-2 h-4 w-4" /> History
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <PlusIcon className="mr-2 h-4 w-4" /> New Investment
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Card key={i} className="bg-slate-900 border-white/5 shadow-2xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black">{stat.value}</div>
                  <div className={`flex items-center text-xs font-bold mt-1 ${stat.trendingUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {stat.trendingUp ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                    {stat.change}
                    <span className="text-slate-500 ml-1 font-normal uppercase tracking-tighter italic">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Active Investments */}
            <Card className="lg:col-span-2 bg-slate-900 border-white/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  Active Investments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-950/50 border border-white/5 flex items-center justify-between hover:border-blue-500/30 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <Building size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Metropolitan Heights {i + 1}</h4>
                          <p className="text-xs text-slate-500 font-medium">Residential • 12 Units</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-white">$450,000</div>
                        <div className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">+8.2% ROI</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card className="bg-slate-900 border-white/5">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  Portfolio Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Quarterly Report Ready", time: "2h ago", priority: "low" },
                    { title: "Maintenance Required", time: "5h ago", priority: "high" },
                    { title: "New Opportunity Matched", time: "1d ago", priority: "medium" }
                  ].map((alert, i) => (
                    <div key={i} className="p-4 rounded-xl border border-white/5 bg-slate-950/30">
                      <div className="flex justify-between mb-1">
                        <h5 className="text-sm font-bold text-slate-200">{alert.title}</h5>
                        <span className="text-[10px] text-slate-500 font-black uppercase">{alert.time}</span>
                      </div>
                      <div className={`text-[10px] uppercase font-black tracking-widest ${alert.priority === 'high' ? 'text-rose-500' : 'text-blue-500'}`}>
                        {alert.priority} Priority
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function PlusIcon(props: any) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M12 5v14"/>
    </svg>
  );
}
