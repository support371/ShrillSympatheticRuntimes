import { Star, Zap, Gift, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIERS = [
  { name: "Standard", min: 0, max: 499, color: "bg-slate-500" },
  { name: "Premium", min: 500, max: 799, color: "bg-violet-500" },
  { name: "Elite", min: 800, max: 1000, color: "bg-amber-500" },
];

const PERKS = [
  { icon: Zap, label: "Priority deal access", active: true },
  { icon: Gift, label: "Reduced management fees", active: true },
  { icon: Star, label: "Elite concierge support", active: false },
];

export function LoyaltyMultiplier({ score = 847 }: { score?: number }) {
  const currentTier = TIERS.find(t => score >= t.min && score <= t.max) || TIERS[0];
  const progress = (score / 1000) * 100;

  return (
    <div className="bg-gradient-to-br from-amber-900/20 to-slate-900 border border-amber-500/20 rounded-2xl p-6" data-testid="loyalty-multiplier">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500/20 rounded-xl flex items-center justify-center">
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white">Loyalty Program</h3>
            <p className="text-[10px] text-amber-400 font-bold">{currentTier.name} Member</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-amber-400">{score}</div>
          <div className="text-[9px] text-slate-500 uppercase tracking-widest">Points</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex justify-between text-[9px] text-slate-500 mb-1.5">
          {TIERS.map((t, i) => (
            <span key={i} className={score >= t.min ? 'text-amber-400 font-bold' : ''}>{t.name}</span>
          ))}
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] text-slate-500 mt-1.5">{1000 - score} points to next milestone</p>
      </div>

      {/* Perks */}
      <div className="space-y-2.5 mb-5">
        {PERKS.map((perk, i) => {
          const Icon = perk.icon;
          return (
            <div key={i} className={`flex items-center gap-3 ${perk.active ? 'opacity-100' : 'opacity-40'}`} data-testid={`perk-${i}`}>
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${perk.active ? 'bg-amber-500/20' : 'bg-slate-800'}`}>
                <Icon className={`h-3 w-3 ${perk.active ? 'text-amber-400' : 'text-slate-500'}`} />
              </div>
              <span className="text-xs text-slate-300 font-medium">{perk.label}</span>
              {!perk.active && <span className="ml-auto text-[9px] text-slate-600 font-bold">LOCKED</span>}
            </div>
          );
        })}
      </div>

      <Button size="sm" variant="outline" className="w-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10 text-xs font-black" data-testid="loyalty-redeem">
        Redeem Benefits <ChevronRight className="ml-1 h-3 w-3" />
      </Button>
    </div>
  );
}
