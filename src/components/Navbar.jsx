import React from 'react';
import { Search, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenSearch, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0c]/90 backdrop-blur-xl transition-all">
      <div className="max-w-[1700px] mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8">
        
        {/* Refero Logo & Breadcrumb Navigation (from styles.refero.design) */}
        <div className="flex items-center gap-3">
          <a 
            href="/"
            className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity"
            title="Refero Styles"
          >
            {/* Refero Distinct Geometric Mark */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-black flex items-center justify-center font-black shadow-lg">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2.5" fill="none" />
                <path d="M12 2a10 10 0 0 1 10 10h-10V2z" fill="black" />
              </svg>
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">refero</span>
          </a>

          <span className="text-zinc-600 font-mono text-sm">/</span>

          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-semibold text-sm sm:text-base">Styles</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              AI DESIGN.md
            </span>
          </div>
        </div>

        {/* Action Items */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Optimized for Cursor, Claude & v0</span>
          </div>

          <a 
            href="https://styles.refero.design" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg"
          >
            <span>Live Refero</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onOpenSearch}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-200 text-xs flex items-center gap-2 border border-white/10 transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Quick Search</span>
            <kbd className="hidden sm:inline-block bg-black/40 px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400 border border-white/10">⌘K</kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
