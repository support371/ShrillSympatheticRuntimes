import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const ALLOCATION = [
  { name: "Residential", value: 45, color: "#6366f1", amount: "$560,887" },
  { name: "Commercial", value: 28, color: "#10b981", amount: "$349,300" },
  { name: "Industrial", value: 15, color: "#f59e0b", amount: "$187,125" },
  { name: "Cash Reserve", value: 8, color: "#3b82f6", amount: "$99,800" },
  { name: "Other", value: 4, color: "#64748b", amount: "$49,900" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-white/10 rounded-xl p-3 shadow-2xl">
        <p className="text-xs font-black text-white">{d.name}</p>
        <p className="text-sm font-black mt-1" style={{ color: d.color }}>{d.amount}</p>
        <p className="text-[10px] text-slate-400">{d.value}% of portfolio</p>
      </div>
    );
  }
  return null;
};

export function AssetAllocation() {
  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl p-6" data-testid="asset-allocation">
      <div className="mb-4">
        <h3 className="text-sm font-black text-white">Asset Allocation</h3>
        <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-wider">Portfolio distribution by sector</p>
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={ALLOCATION}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {ALLOCATION.map((entry, index) => (
                <Cell key={index} fill={entry.color} stroke="transparent" />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2.5 mt-2">
        {ALLOCATION.map((item, i) => (
          <div key={i} className="flex items-center justify-between" data-testid={`allocation-row-${i}`}>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-xs text-slate-400 font-medium">{item.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1 w-16 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
              </div>
              <span className="text-xs font-black text-white w-8 text-right">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
