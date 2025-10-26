import { Clock } from "lucide-react";

export default function TimeBlocks() {
  const blocks = [
    { id: 1, label: "Deep Work", start: "09:00", end: "11:00", color: "from-emerald-500/40 to-emerald-400/20" },
    { id: 2, label: "Client Meeting", start: "12:30", end: "13:30", color: "from-sky-500/40 to-sky-400/20" },
    { id: 3, label: "Focus Sprint", start: "15:00", end: "16:30", color: "from-amber-500/40 to-amber-400/20" },
  ];

  return (
    <section className="bg-[#0b1220] border border-white/10 rounded-2xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-emerald-400" /> Time Block View
        </h3>
        <span className="text-xs text-white/50">Today</span>
      </div>

      <div className="relative grid grid-cols-12 gap-2 text-white/60 text-xs">
        {/* Hours column */}
        <div className="col-span-1 space-y-6 pr-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>{`${9 + i}:00`}</div>
          ))}
        </div>
        {/* Timeline */}
        <div className="col-span-11">
          <div className="relative h-56 md:h-64 bg-white/5 rounded-xl overflow-hidden">
            {/* grid lines */}
            <div className="absolute inset-0 grid grid-cols-10">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="border-r border-white/10" />
              ))}
            </div>
            {/* blocks */}
            {blocks.map((b) => {
              const startH = parseInt(b.start.split(":")[0], 10);
              const startM = parseInt(b.start.split(":")[1], 10);
              const endH = parseInt(b.end.split(":")[0], 10);
              const endM = parseInt(b.end.split(":")[1], 10);
              const startIndex = (startH - 9) + startM / 60; // day window 9-19
              const endIndex = (endH - 9) + endM / 60;
              const left = (startIndex / 10) * 100;
              const width = ((endIndex - startIndex) / 10) * 100;

              return (
                <div
                  key={b.id}
                  className={`absolute top-8 h-28 md:h-32 rounded-lg bg-gradient-to-tr ${b.color} border border-white/10 backdrop-blur-sm`}
                  style={{ left: `${left}%`, width: `${width}%` }}
                >
                  <div className="p-3">
                    <p className="text-white font-medium text-sm">{b.label}</p>
                    <p className="text-white/70 text-xs">{b.start} - {b.end}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
