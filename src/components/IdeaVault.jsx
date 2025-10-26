import { Lightbulb } from "lucide-react";

export default function IdeaVault() {
  const ideas = [
    { id: 1, text: "Write manifesto on luxury minimalism." },
    { id: 2, text: "R&D: Distraction-free onboarding flow." },
    { id: 3, text: "Partnership with boutique co-working spaces." },
  ];

  return (
    <section className="bg-[#0b1220] border border-white/10 rounded-2xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-emerald-400" /> Idea Vault
        </h3>
        <span className="text-xs text-white/50">Drag to plan</span>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {ideas.map((i) => (
          <div
            key={i.id}
            className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4 border border-white/10 cursor-grab active:cursor-grabbing"
            draggable
          >
            <p className="text-white/90">{i.text}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-white/50">Long-term</span>
              <button className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/20">Convert</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
