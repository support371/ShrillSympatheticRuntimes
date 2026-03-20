import { ArrowUpRight, ArrowDownRight, MapPin } from "lucide-react";

const PERFORMERS = [
  { rank: 1, name: "Austin Multi-Family Complex", type: "Multi-Family", location: "Austin, TX", value: "$580,000", roi: "+18.4%", cap: "7.2%", positive: true },
  { rank: 2, name: "Industrial Logistics Hub", type: "Industrial", location: "Dallas, TX", value: "$340,000", roi: "+15.1%", cap: "8.1%", positive: true },
  { rank: 3, name: "Houston SFR Portfolio", type: "Residential", location: "Houston, TX", value: "$210,000", roi: "+12.7%", cap: "6.5%", positive: true },
  { rank: 4, name: "Dallas Office Redevelopment", type: "Commercial", location: "Dallas, TX", value: "$89,500", roi: "+8.9%", cap: "6.8%", positive: true },
  { rank: 5, name: "Phoenix Mixed-Use", type: "Mixed-Use", location: "Phoenix, AZ", value: "$28,000", roi: "-2.1%", cap: "5.2%", positive: false },
];

const TYPE_COLORS: Record<string, string> = {
  "Multi-Family": "text-violet-400 bg-violet-500/10",
  "Industrial": "text-amber-400 bg-amber-500/10",
  "Residential": "text-emerald-400 bg-emerald-500/10",
  "Commercial": "text-blue-400 bg-blue-500/10",
  "Mixed-Use": "text-slate-400 bg-slate-500/10",
};

export function TopPerformers() {
  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden" data-testid="top-performers">
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-black text-white">Top Performers</h3>
          <p className="text-[10px] text-slate-500 mt-0.5">Ranked by quarterly ROI</p>
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Q1 2026</span>
      </div>

      <div className="divide-y divide-white/5">
        {PERFORMERS.map((p, i) => (
          <div key={i} className="px-6 py-4 flex items-center gap-4 hover:bg-white/2 transition-colors" data-testid={`performer-row-${i}`}>
            <div className={`w-6 text-center text-sm font-black ${i === 0 ? 'text-amber-400' : i === 1 ? 'text-slate-300' : i === 2 ? 'text-amber-700' : 'text-slate-600'}`}>
              {p.rank}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{p.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${TYPE_COLORS[p.type] || 'text-slate-400 bg-slate-500/10'}`}>{p.type}</span>
                <span className="text-[10px] text-slate-500 flex items-center gap-0.5">
                  <MapPin className="h-2.5 w-2.5" /> {p.location}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className={`text-sm font-black flex items-center gap-0.5 justify-end ${p.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {p.positive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                {p.roi}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Cap: {p.cap}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
