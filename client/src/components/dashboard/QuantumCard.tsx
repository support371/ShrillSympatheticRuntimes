import { Shield, Zap, Star } from "lucide-react";

interface QuantumCardProps {
  tier?: "standard" | "premium" | "elite";
  name?: string;
  portfolioValue?: string;
  loyaltyScore?: number;
}

const TIER_STYLES = {
  standard: {
    bg: "from-slate-800 to-slate-900",
    accent: "from-blue-500 to-cyan-500",
    border: "border-blue-500/20",
    label: "STANDARD",
    icon: Shield,
  },
  premium: {
    bg: "from-violet-900 to-slate-900",
    accent: "from-violet-500 to-purple-500",
    border: "border-violet-500/20",
    label: "PREMIUM",
    icon: Zap,
  },
  elite: {
    bg: "from-amber-900/50 to-slate-900",
    accent: "from-amber-500 to-yellow-400",
    border: "border-amber-500/30",
    label: "ELITE",
    icon: Star,
  },
};

export function QuantumCard({
  tier = "premium",
  name = "Managing Partner",
  portfolioValue = "$1,247,500",
  loyaltyScore = 847,
}: QuantumCardProps) {
  const style = TIER_STYLES[tier];
  const Icon = style.icon;

  return (
    <div className={`relative bg-gradient-to-br ${style.bg} border ${style.border} rounded-2xl p-6 overflow-hidden`} data-testid="quantum-card">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Glow */}
      <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${style.accent} opacity-10 blur-2xl rounded-full`} />

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 bg-gradient-to-br ${style.accent} rounded-lg flex items-center justify-center shadow-lg`}>
              <Icon className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-[9px] font-black tracking-[0.3em] text-slate-400">ALLIANCE TRUST</div>
              <div className={`text-[9px] font-black tracking-[0.2em] bg-gradient-to-r ${style.accent} bg-clip-text text-transparent`}>{style.label}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-slate-500 uppercase tracking-widest">Loyalty Score</div>
            <div className={`text-xl font-black bg-gradient-to-r ${style.accent} bg-clip-text text-transparent`}>{loyaltyScore}</div>
          </div>
        </div>

        {/* Card number aesthetic */}
        <div className="flex gap-4 mb-6">
          {["••••", "••••", "••••", "7291"].map((g, i) => (
            <span key={i} className="text-slate-400 font-mono text-sm tracking-widest font-bold">{g}</span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Cardholder</div>
            <div className="text-sm font-black text-white tracking-wide">{name}</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Portfolio Value</div>
            <div className={`text-lg font-black bg-gradient-to-r ${style.accent} bg-clip-text text-transparent`}>{portfolioValue}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
