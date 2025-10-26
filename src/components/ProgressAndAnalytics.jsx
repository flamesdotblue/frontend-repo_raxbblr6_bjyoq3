import { Target, TrendingUp } from "lucide-react";

function ProgressRing({ value, size = 96, stroke = 10, track = "#1f2937", color = "#34d399" }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="block">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={track}
        strokeWidth={stroke}
        fill="transparent"
        className="opacity-40"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="transparent"
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-white font-semibold"
      >
        {Math.round(value)}%
      </text>
    </svg>
  );
}

export default function ProgressAndAnalytics() {
  const projects = [
    { id: 1, name: "Product Redesign", progress: 68 },
    { id: 2, name: "Private Beta", progress: 42 },
  ];

  const metrics = [
    { label: "Focused", value: 14, color: "bg-emerald-400" },
    { label: "Meetings", value: 6, color: "bg-sky-400" },
    { label: "Admin", value: 3, color: "bg-amber-400" },
    { label: "Distractions", value: 2, color: "bg-rose-400" },
  ];

  const total = metrics.reduce((a, b) => a + b.value, 0) || 1;

  return (
    <section className="bg-[#0b1220] border border-white/10 rounded-2xl p-5 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" /> Projects & Goals
          </h3>
          <span className="text-xs text-white/50">Live progress</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <ProgressRing value={p.progress} />
                <div>
                  <p className="text-white font-medium">{p.name}</p>
                  <p className="text-white/50 text-sm">{p.progress}% complete</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" /> Productivity Metrics
          </h3>
          <span className="text-xs text-white/50">This week</span>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <div className="space-y-3">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${m.color}`} />
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${m.color}`}
                    style={{ width: `${(m.value / total) * 100}%` }}
                  />
                </div>
                <div className="w-24 text-right text-white/70 text-sm">{m.value}h</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
