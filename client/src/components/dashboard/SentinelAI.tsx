import { useState, useEffect } from "react";
import { Bot, TrendingUp, AlertTriangle, Zap, RefreshCw, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSIGHTS = [
  { type: "opportunity", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", label: "OPPORTUNITY", message: "Multi-family assets in Austin, TX showing 7.2% cap rates — above market average. Recommend acquisition review." },
  { type: "alert", icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", label: "ALERT", message: "Interest rate environment suggests locking in fixed financing within 60 days for maximum leverage benefit." },
  { type: "signal", icon: Zap, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", label: "SIGNAL", message: "Houston single-family rental portfolio showing stable 6.5% returns. Consistent income stream for conservative allocation." },
  { type: "opportunity", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", label: "OPPORTUNITY", message: "Commercial redevelopment in Dallas projected at 6.8% — strong repositioning upside with 18-month horizon." },
  { type: "alert", icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20", label: "ALERT", message: "Q2 rebalancing window open. Consider increasing residential exposure by 5% to optimize risk-adjusted returns." },
  { type: "signal", icon: Zap, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", label: "SIGNAL", message: "Industrial logistics sector outperforming — last-mile distribution yielding 8.1% across monitored portfolios." },
];

export function SentinelAI() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pulseActive, setPulseActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(i => (i + 1) % INSIGHTS.length);
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 2000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentIndex(i => (i + 1) % INSIGHTS.length);
      setIsRefreshing(false);
    }, 800);
  };

  const insight = INSIGHTS[currentIndex];
  const Icon = insight.icon;

  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden" data-testid="sentinel-ai-widget">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-600/30">
              <Bot className="h-5 w-5 text-white" />
            </div>
            {pulseActive && (
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
              </span>
            )}
          </div>
          <div>
            <h3 className="text-sm font-black text-white tracking-tight">Sentinel AI</h3>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Market Intelligence Engine</p>
          </div>
        </div>
        <button
          onClick={handleRefresh}
          className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
          data-testid="sentinel-refresh"
        >
          <RefreshCw className={`h-3.5 w-3.5 text-slate-500 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Live Insight */}
      <div className="p-5">
        <div className={`rounded-xl border p-4 ${insight.bg} transition-all duration-500`}>
          <div className="flex items-center gap-2 mb-2">
            <Icon className={`h-4 w-4 ${insight.color}`} />
            <span className={`text-[10px] font-black tracking-[0.2em] ${insight.color}`}>{insight.label}</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{insight.message}</p>
        </div>

        {/* Insight counter */}
        <div className="flex justify-center gap-1.5 mt-4">
          {INSIGHTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-violet-500' : 'w-1.5 bg-slate-700'}`}
              data-testid={`sentinel-dot-${i}`}
            />
          ))}
        </div>
      </div>

      {/* Market Scores */}
      <div className="px-5 pb-5 space-y-3">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Market Confidence Scores</p>
        {[
          { label: "Residential", score: 82, color: "bg-emerald-500" },
          { label: "Commercial", score: 67, color: "bg-blue-500" },
          { label: "Industrial", score: 91, color: "bg-violet-500" },
        ].map((m, i) => (
          <div key={i} className="space-y-1" data-testid={`sentinel-score-${i}`}>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 font-medium">{m.label}</span>
              <span className="text-white font-black">{m.score}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full ${m.color} rounded-full transition-all duration-1000`} style={{ width: `${m.score}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 pb-5">
        <Button size="sm" className="w-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-black" data-testid="sentinel-full-report">
          View Full Report <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
