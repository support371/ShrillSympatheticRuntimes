import { useState, useEffect } from "react";
import { Activity, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";

interface FeedItem {
  id: string;
  type: "inflow" | "distribution" | "acquisition" | "valuation" | "alert";
  title: string;
  amount?: string;
  time: string;
  badge: string;
}

const BASE_FEED: Omit<FeedItem, "id">[] = [
  { type: "inflow", title: "Capital inflow confirmed", amount: "+$125,000", time: "Just now", badge: "INFLOW" },
  { type: "distribution", title: "Q1 distribution processed", amount: "+$8,450", time: "2m ago", badge: "DIST" },
  { type: "acquisition", title: "Houston portfolio — offer accepted", amount: "$1.80M", time: "14m ago", badge: "ACQ" },
  { type: "valuation", title: "Austin multi-family — revaluation", amount: "+$47,200", time: "31m ago", badge: "VAL" },
  { type: "alert", title: "Cap rate alert: Dallas asset", time: "1h ago", badge: "ALERT" },
  { type: "inflow", title: "Investor portal access granted", time: "2h ago", badge: "ACCESS" },
  { type: "distribution", title: "Mortgage payment processed", amount: "-$6,200", time: "3h ago", badge: "PAYMENT" },
  { type: "valuation", title: "Portfolio rebalance complete", amount: "$1.24M", time: "5h ago", badge: "REBAL" },
];

const COLOR_MAP: Record<FeedItem["type"], string> = {
  inflow: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  distribution: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  acquisition: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  valuation: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  alert: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

export function LiveRecoveryFeed() {
  const [items, setItems] = useState<FeedItem[]>(
    BASE_FEED.slice(0, 5).map((i, idx) => ({ ...i, id: String(idx) }))
  );
  const [newItemIndex, setNewItemIndex] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = BASE_FEED[Math.floor(Math.random() * BASE_FEED.length)];
      const newItem: FeedItem = {
        ...random,
        id: Date.now().toString(),
        time: "Just now",
      };
      setNewItemIndex(newItem.id);
      setItems(prev => [newItem, ...prev.slice(0, 6)]);
      setTimeout(() => setNewItemIndex(null), 1500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden" data-testid="live-recovery-feed">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-600/20 rounded-xl flex items-center justify-center">
            <Activity className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white">Live Activity Feed</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Live</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
          <Clock className="h-3 w-3" /> Real-time
        </div>
      </div>

      <div className="p-4 space-y-2.5 max-h-80 overflow-y-auto">
        {items.map((item) => {
          const colorClass = COLOR_MAP[item.type];
          const isNew = item.id === newItemIndex;
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between p-3 rounded-xl border bg-slate-950/40 transition-all duration-500 ${isNew ? 'scale-[1.01] border-violet-500/30' : 'border-white/5'}`}
              data-testid={`feed-item-${item.id}`}
            >
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 rounded-md text-[9px] font-black border tracking-widest ${colorClass}`}>
                  {item.badge}
                </span>
                <span className="text-xs text-slate-300 font-medium">{item.title}</span>
              </div>
              <div className="text-right shrink-0 ml-3">
                {item.amount && (
                  <div className={`text-xs font-black flex items-center gap-0.5 ${item.amount.startsWith('+') ? 'text-emerald-400' : item.amount.startsWith('-') ? 'text-rose-400' : 'text-white'}`}>
                    {item.amount.startsWith('+') ? <ArrowUpRight className="h-3 w-3" /> : item.amount.startsWith('-') ? <ArrowDownRight className="h-3 w-3" /> : null}
                    {item.amount}
                  </div>
                )}
                <div className="text-[10px] text-slate-600 mt-0.5">{item.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
