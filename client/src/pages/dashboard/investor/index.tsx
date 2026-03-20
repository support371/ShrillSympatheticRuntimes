import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SentinelAI } from "@/components/dashboard/SentinelAI";
import { LiveRecoveryFeed } from "@/components/dashboard/LiveRecoveryFeed";
import { QuantumCard } from "@/components/dashboard/QuantumCard";
import { AssetAllocation } from "@/components/dashboard/AssetAllocation";
import { TopPerformers } from "@/components/dashboard/TopPerformers";
import { TreasuryOverview } from "@/components/dashboard/TreasuryOverview";
import { LoyaltyMultiplier } from "@/components/dashboard/LoyaltyMultiplier";
import { SignalHunter } from "@/components/dashboard/SignalHunter";
import { Link } from "wouter";
import {
  TrendingUp, DollarSign, Building, ArrowUpRight, ArrowDownRight,
  PieChart, History, Bell, Settings, Download, RefreshCw,
  LayoutDashboard, Layers, ShieldCheck, ChevronRight
} from "lucide-react";
import { useState } from "react";

const STATS = [
  { title: "Total Portfolio Value", value: "$1,247,500", change: "+12.4%", sub: "vs last quarter", positive: true, icon: TrendingUp, color: "text-emerald-500", glow: "shadow-emerald-500/20" },
  { title: "Annual ROI", value: "18.7%", change: "+2.3%", sub: "vs last year", positive: true, icon: PieChart, color: "text-blue-500", glow: "shadow-blue-500/20" },
  { title: "Monthly Cash Flow", value: "$8,450", change: "Stable", sub: "across 12 properties", positive: true, icon: DollarSign, color: "text-violet-500", glow: "shadow-violet-500/20" },
  { title: "Active Properties", value: "12", change: "+2", sub: "this year", positive: true, icon: Building, color: "text-amber-500", glow: "shadow-amber-500/20" },
];

const INVESTMENTS = [
  { name: "Austin Multi-Family Complex", location: "Austin, TX", type: "Multi-Family", units: "24 Units", value: "$580,000", roi: "+18.4%", cap: "7.2%", positive: true },
  { name: "Dallas Office Redevelopment", location: "Dallas, TX", type: "Commercial", units: "42,000 sqft", value: "$340,000", roi: "+8.9%", cap: "6.8%", positive: true },
  { name: "Houston SFR Portfolio", location: "Houston, TX", type: "Residential", units: "8 Units", value: "$210,000", roi: "+12.7%", cap: "6.5%", positive: true },
  { name: "Industrial Logistics Hub", location: "Dallas, TX", type: "Industrial", units: "120,000 sqft", value: "$187,500", roi: "+15.1%", cap: "8.1%", positive: true },
];

const TABS = ["Overview", "Investments", "Treasury", "Signals", "Reports"] as const;
type Tab = typeof TABS[number];

export default function InvestorDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  return (
    <Layout>
      <div className="bg-slate-950 min-h-screen text-white" data-testid="investor-dashboard">

        {/* Top Header Bar */}
        <div className="sticky top-[81px] z-40 bg-slate-950/95 backdrop-blur-md border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-black text-white">Alliance Trust Portfolio</h1>
                <p className="text-[10px] text-slate-500">Managing Partner · Elite Access</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white h-8 gap-1.5" data-testid="button-refresh">
                <RefreshCw className="h-3.5 w-3.5" /> Sync
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white h-8" data-testid="button-notifications">
                <Bell className="h-3.5 w-3.5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white h-8" data-testid="button-download">
                <Download className="h-3.5 w-3.5" />
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-8 text-xs font-bold gap-1.5" data-testid="button-new-investment">
                <PlusIcon className="h-3.5 w-3.5" /> New Investment
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="max-w-screen-2xl mx-auto px-6 flex gap-1 pb-0">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-xs font-bold transition-all border-b-2 -mb-px ${activeTab === tab ? 'text-blue-400 border-blue-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}
                data-testid={`tab-${tab.toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 py-8 space-y-8">

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`bg-slate-900 border border-white/5 rounded-2xl p-5 shadow-xl ${stat.glow}`} data-testid={`stat-card-${i}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.title}</span>
                    <div className={`w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center`}>
                      <Icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className={`flex items-center text-xs font-bold ${stat.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {stat.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {stat.change}
                    </span>
                    <span className="text-[10px] text-slate-600 italic">{stat.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overview Tab */}
          {activeTab === "Overview" && (
            <div className="grid xl:grid-cols-3 gap-6">
              {/* Left 2/3 */}
              <div className="xl:col-span-2 space-y-6">
                {/* Quantum Card + Loyalty */}
                <div className="grid md:grid-cols-2 gap-5">
                  <QuantumCard tier="elite" portfolioValue="$1,247,500" loyaltyScore={847} />
                  <LoyaltyMultiplier score={847} />
                </div>

                {/* Active Investments */}
                <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden" data-testid="active-investments">
                  <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-blue-500" />
                      <h3 className="font-black text-sm">Active Investments</h3>
                    </div>
                    <Link href="/invest">
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 text-xs font-bold gap-1">
                        View All <ChevronRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                  <div className="divide-y divide-white/5">
                    {INVESTMENTS.map((inv, i) => (
                      <div key={i} className="px-6 py-4 flex items-center gap-4 hover:bg-white/2 transition-colors group cursor-pointer" data-testid={`investment-row-${i}`}>
                        <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                          <Building className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white text-sm truncate">{inv.name}</h4>
                          <p className="text-[10px] text-slate-500 font-medium mt-0.5">{inv.type} · {inv.units} · {inv.location}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-sm font-black text-white">{inv.value}</div>
                          <div className={`text-[10px] font-bold flex items-center justify-end gap-0.5 mt-0.5 ${inv.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                            <ArrowUpRight className="h-2.5 w-2.5" /> {inv.roi} · Cap {inv.cap}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Feed */}
                <LiveRecoveryFeed />
              </div>

              {/* Right Sidebar */}
              <div className="space-y-5">
                <SentinelAI />
                <AssetAllocation />
              </div>
            </div>
          )}

          {/* Investments Tab */}
          {activeTab === "Investments" && (
            <div className="space-y-6">
              <TopPerformers />
              <div className="grid md:grid-cols-2 gap-6">
                <AssetAllocation />
                <SignalHunter />
              </div>
            </div>
          )}

          {/* Treasury Tab */}
          {activeTab === "Treasury" && (
            <div className="space-y-6">
              <TreasuryOverview />
              <div className="grid md:grid-cols-2 gap-6">
                <QuantumCard tier="elite" portfolioValue="$1,247,500" loyaltyScore={847} />
                <LoyaltyMultiplier score={847} />
              </div>
            </div>
          )}

          {/* Signals Tab */}
          {activeTab === "Signals" && (
            <div className="grid lg:grid-cols-2 gap-6">
              <SignalHunter />
              <SentinelAI />
              <div className="lg:col-span-2">
                <LiveRecoveryFeed />
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === "Reports" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { icon: ShieldCheck, title: "Q1 2026 Portfolio Report", desc: "Full quarterly performance review including ROI, distributions, and asset valuation updates.", tag: "PDF · 2.4MB", color: "text-emerald-400 bg-emerald-500/10" },
                  { icon: TrendingUp, title: "Annual Tax Summary 2025", desc: "Depreciation schedules, 1099s, K-1s and all required documentation for tax filing.", tag: "PDF · 1.1MB", color: "text-blue-400 bg-blue-500/10" },
                  { icon: PieChart, title: "Investor Capital Statement", desc: "Capital account balances, contributions, distributions, and current NAV per unit.", tag: "PDF · 860KB", color: "text-violet-400 bg-violet-500/10" },
                ].map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i} className="bg-slate-900 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-colors cursor-pointer group" data-testid={`report-card-${i}`}>
                      <div className={`w-10 h-10 rounded-xl ${r.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-black text-white text-sm mb-2">{r.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">{r.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-600 font-mono">{r.tag}</span>
                        <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 h-7 text-xs gap-1 group-hover:gap-2 transition-all">
                          <Download className="h-3 w-3" /> Download
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <TreasuryOverview />
            </div>
          )}

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" data-testid="dashboard-cta">
            <div>
              <h3 className="text-xl font-black text-white">Ready to expand your portfolio?</h3>
              <p className="text-blue-100 text-sm mt-1">Browse new opportunities curated by Sentinel AI for your profile.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/invest">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-black px-6" data-testid="button-explore-opportunities">
                  Explore Opportunities <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-6" data-testid="button-speak-advisor">
                  Speak to an Advisor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function PlusIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M12 5v14"/>
    </svg>
  );
}
