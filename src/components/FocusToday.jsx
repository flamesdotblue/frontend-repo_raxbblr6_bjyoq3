import { Flag, CheckCircle2 } from "lucide-react";

export default function FocusToday() {
  const tasks = [
    { id: 1, title: "Prepare Q4 strategy brief", priority: "High" },
    { id: 2, title: "Client meeting: Venture Capital", priority: "High" },
    { id: 3, title: "Deep work: Product roadmap", priority: "High" },
  ];

  return (
    <section className="bg-[#0b1220] border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl/40 shadow-black/40">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
          <Flag className="w-5 h-5 text-emerald-400" />
          Focus of Today
        </h2>
        <span className="text-xs md:text-sm text-white/50">Top 3 priorities</span>
      </div>
      <ul className="space-y-3">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div>
                <p className="text-white font-medium">{t.title}</p>
                <p className="text-white/50 text-xs mt-0.5">Priority: {t.priority}</p>
              </div>
            </div>
            <button className="text-emerald-300/90 hover:text-emerald-300 transition-colors">
              <CheckCircle2 className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
