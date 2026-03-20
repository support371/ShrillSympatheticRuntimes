import { DollarSign, TrendingUp, ArrowUpRight, Wallet } from "lucide-react";

const TREASURY_ITEMS = [
  { label: "Total Assets Under Management", value: "$1,247,500", change: "+12.4%", positive: true, icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Unrealized Gains", value: "$184,200", change: "+8.7%", positive: true, icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Cash & Equivalents", value: "$99,800", change: "Liquid reserve", positive: true, icon: Wallet, color: "text-amber-400", bg: "bg-amber-500/10" },
];

const TRANSACTIONS = [
  { desc: "Q1 Distribution — Residential", amount: "+$8,450", date: "Mar 15, 2026", type: "credit" },
  { desc: "Mortgage Payment — Houston SFR", amount: "-$6,200", date: "Mar 1, 2026", type: "debit" },
  { desc: "Capital Deployment — Austin MF", amount: "-$125,000", date: "Feb 28, 2026", type: "debit" },
  { desc: "Rental Income — Q4 Closeout", amount: "+$31,240", date: "Jan 31, 2026", type: "credit" },
  { desc: "New LP Capital Contribution", amount: "+$250,000", date: "Jan 15, 2026", type: "credit" },
];

export function TreasuryOverview() {
  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden" data-testid="treasury-overview">
      <div className="px-6 py-5 border-b border-white/5">
        <h3 className="text-sm font-black text-white">Treasury Overview</h3>
        <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wider">Capital & cash flow summary</p>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-3 divide-x divide-white/5 border-b border-white/5">
        {TREASURY_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="p-5" data-testid={`treasury-metric-${i}`}>
              <div className={`w-8 h-8 ${item.bg} rounded-xl flex items-center justify-center mb-3`}>
                <Icon className={`h-4 w-4 ${item.color}`} />
              </div>
              <div className="text-lg font-black text-white">{item.value}</div>
              <div className={`text-[10px] font-bold flex items-center gap-0.5 mt-1 ${item.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {item.positive && <ArrowUpRight className="h-3 w-3" />}
                {item.change}
              </div>
              <div className="text-[10px] text-slate-600 mt-1 leading-tight">{item.label}</div>
            </div>
          );
        })}
      </div>

      {/* Recent transactions */}
      <div className="p-6">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Recent Transactions</p>
        <div className="space-y-3">
          {TRANSACTIONS.map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0" data-testid={`treasury-tx-${i}`}>
              <div>
                <p className="text-xs font-semibold text-slate-300">{tx.desc}</p>
                <p className="text-[10px] text-slate-600 mt-0.5">{tx.date}</p>
              </div>
              <span className={`text-sm font-black ${tx.type === 'credit' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
