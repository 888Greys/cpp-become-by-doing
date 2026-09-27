import React, { useState } from 'react';
import { Sliders, Shield, Compass, Grid, Eye, Check } from 'lucide-react';

export default function CadControls({ 
  gridEnabled, 
  setGridEnabled, 
  telemetryEnabled, 
  setTelemetryEnabled,
  slideSpeed,
  setSlideSpeed
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-40">
      
      {/* Popover Controls */}
      {open && (
        <div className="mb-3 bg-black/90 text-white border border-[#a4d65e]/40 p-4 rounded-xl shadow-2xl backdrop-blur-md w-72 text-xs font-mono space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <span className="font-bold text-[#a4d65e] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              CAD ENGINEERING OVERLAY
            </span>
            <button 
              onClick={() => setOpen(false)}
              className="text-zinc-500 hover:text-white"
            >
              ✕
            </button>
          </div>

          <label className="flex items-center justify-between cursor-pointer py-1">
            <span className="text-zinc-300">Drafting Coordinate Grid</span>
            <input 
              type="checkbox" 
              checked={gridEnabled} 
              onChange={(e) => setGridEnabled(e.target.checked)}
              className="accent-[#a4d65e]"
            />
          </label>

          <label className="flex items-center justify-between cursor-pointer py-1">
            <span className="text-zinc-300">Live Field Telemetry Ticker</span>
            <input 
              type="checkbox" 
              checked={telemetryEnabled} 
              onChange={(e) => setTelemetryEnabled(e.target.checked)}
              className="accent-[#a4d65e]"
            />
          </label>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-zinc-400">Cycle Duration</span>
            <div className="flex items-center gap-1">
              {[4, 6, 8].map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSlideSpeed(sec)}
                  className={`px-2 py-0.5 rounded text-[10px] ${
                    slideSpeed === sec ? 'bg-[#a4d65e] text-black font-bold' : 'bg-white/10 text-zinc-400 hover:text-white'
                  }`}
                >
                  {sec}s
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#004731] hover:bg-[#003624] text-[#a4d65e] border border-[#a4d65e]/40 px-3.5 py-2 shadow-2xl font-mono text-xs font-bold transition-all transform hover:scale-105 active:scale-95"
      >
        <Sliders className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">CAD OVERLAY CONTROLS</span>
      </button>

    </div>
  );
}
