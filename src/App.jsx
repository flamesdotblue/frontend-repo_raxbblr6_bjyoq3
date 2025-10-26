import { useState } from "react";
import { Home, Target, Lightbulb, Settings, Plus, Calendar } from "lucide-react";
import FocusToday from "./components/FocusToday";
import ProgressAndAnalytics from "./components/ProgressAndAnalytics";
import TimeBlocks from "./components/TimeBlocks";
import IdeaVault from "./components/IdeaVault";

export default function App() {
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [quickText, setQuickText] = useState("");

  const handleAdd = () => {
    // In a future iteration this will send to backend; for now we just clear & close
    setQuickText("");
    setShowQuickAdd(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#070c15] to-[#0b1220] text-white selection:bg-emerald-400/30 selection:text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 ring-2 ring-emerald-400/40" />
            <div>
              <h1 className="font-semibold tracking-tight">Aurum</h1>
              <p className="text-xs text-white/50 -mt-0.5">Classic focus. Modern minimalism.</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <button className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
              <Calendar className="w-4 h-4 inline -mt-0.5 mr-2 text-emerald-300" /> Today
            </button>
            <button className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">Week</button>
            <button className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">Month</button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-5 pb-32 pt-8 md:pt-10 space-y-6">
        <FocusToday />
        <ProgressAndAnalytics />
        <TimeBlocks />
        <IdeaVault />
      </main>

      {/* Floating Action Button */}
      <button
        aria-label="Add task or idea"
        onClick={() => setShowQuickAdd(true)}
        className="fixed right-5 bottom-24 md:right-8 md:bottom-28 h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/30 border border-emerald-700/30 grid place-items-center"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Quick add modal */}
      {showQuickAdd && (
        <div className="fixed inset-0 z-30 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowQuickAdd(false)} />
          <div className="relative w-full sm:max-w-xl mx-auto bg-[#0b1220] border border-white/10 rounded-t-2xl sm:rounded-2xl p-4 sm:p-6">
            <h4 className="text-white font-semibold mb-2">Quick Capture</h4>
            <p className="text-white/60 text-sm mb-3">Type naturally, e.g. “Meeting with client tomorrow at 2 PM”.</p>
            <textarea
              value={quickText}
              onChange={(e) => setQuickText(e.target.value)}
              placeholder="What would you like to capture?"
              className="w-full h-28 rounded-xl bg-white/5 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                onClick={() => setShowQuickAdd(false)}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                disabled={!quickText.trim()}
                className="px-5 py-2 rounded-full bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-400 text-black font-medium"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 inset-x-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-8 py-3 grid grid-cols-4 gap-4 text-white/70">
          <button className="flex flex-col items-center gap-1 hover:text-white">
            <Home className="w-5 h-5 text-emerald-300" />
            <span className="text-[11px]">Today</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-white">
            <Target className="w-5 h-5" />
            <span className="text-[11px]">Projects</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-white">
            <Lightbulb className="w-5 h-5" />
            <span className="text-[11px]">Ideas</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-white">
            <Settings className="w-5 h-5" />
            <span className="text-[11px]">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
