import { useState, useEffect } from "react";
import { Radio, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Signal {
  id: string;
  market: string;
  signal: "BUY" | "SELL" | "HOLD";
  confidence: number;
  note: string;
  updated: string;
}

const SIGNALS: Signal[] = [
  { id: "1", market: "Austin Multifamily", signal: "BUY", confidence: 88, note: "Strong rental demand, low vacancy", updated: "5m ago" },
  { id: "2", market: "Dallas Commercial", signal: "HOLD", confidence: 63, note: "Market awaiting Fed rate clarity", updated: "12m ago" },
  { id: "3", market: "Houston SFR", signal: "BUY", confidence: 79, note: "Migration inflows supporting demand", updated: "1h ago" },
  { id: "4", market: "Phoenix Mixed-Use", signal: "SELL", confidence: 54, note: "Oversupply risk in short term", updated: "2h ago" },
  { id: "5", market: "Industrial TX", signal: "BUY", confidence: 93, note: "E-commerce logistics demand surge", updated: "3h ago" },
];

const SIGNAL_STYLES = {
  BUY: { color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", icon: TrendingUp },
  SELL: { color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20", icon: TrendingDown },
  HOLD: { color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", icon: Minus },
};

export function SignalHunter() {
  const [signals, setSignals] = useState(SIGNALS);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning(true);
      setTimeout(() => {
        setSignals(prev => prev.map(s => ({
          ...s,
          confidence: Math.min(99, Math.max(40, s.confidence + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3))),
          updated: "Just now",
        })));
        setScanning(false);
      }, 1200);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden" data-testid="signal-hunter">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600/20 rounded-xl flex items-center justify-center">
            <Radio className={`h-5 w-5 text-blue-400 ${scanning ? 'animate-pulse' : ''}`} />
          </div>
          <div>
            <h3 className="text-sm font-black text-white">Signal Hunter</h3>
            <p className="text-[10px] text-slate-500 font-medium">Market signal scanner</p>
          </div>
        </div>
        {scanning && (
          <div className="flex items-center gap-1.5 text-[10px] text-blue-400 font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            SCANNING
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        {signals.map((sig, i) => {
          const style = SIGNAL_STYLES[sig.signal];
          const Icon = style.icon;
          return (
            <div key={sig.id} className="flex items-center gap-3 p-3 bg-slate-950/40 rounded-xl border border-white/5" data-testid={`signal-${i}`}>
              <div className={`px-2 py-1 rounded-lg border text-[9px] font-black tracking-widest flex items-center gap-1 ${style.bg} ${style.color} shrink-0`}>
                <Icon className="h-2.5 w-2.5" />
                {sig.signal}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">{sig.market}</p>
                <p className="text-[10px] text-slate-500 truncate">{sig.note}</p>
              </div>
              <div className="text-right shrink-0">
                <div className={`text-sm font-black ${style.color}`}>{sig.confidence}%</div>
                <div className="text-[9px] text-slate-600">{sig.updated}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
