import React, { useState, useEffect } from 'react';
import { ArrowUp, CornerDownRight, Sparkles } from 'lucide-react';

export default function Hero({ searchQuery, setSearchQuery, activeTab, setActiveTab, onSelectQuickFilter }) {
  const rotatingPhrases = [
    'Your favorite sites, in DESIGN.md',
    'Start with a design you love',
    'A DESIGN.md your AI can follow',
    'Bring that style into your project'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [rotatingPhrases.length]);

  const quickFilters = [
    'Deep forest green',
    'Cal Poly Pomona',
    'Like Apple',
    'Luxury e-commerce',
    'Hand-drawn & doodles',
    'Like Spotify',
    'Cinematic dark',
    'Light minimal SaaS',
  ];

  const tabs = [
    { id: 'trending', label: 'Trending' },
    { id: 'polytechnic', label: 'Polytechnic & Tech' },
    { id: 'popular', label: 'Popular' },
    { id: 'dev-tools', label: 'Dev Tools' },
    { id: 'newest', label: 'Newest' },
  ];

  return (
    <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-12 text-center px-4 sm:px-6">
      
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center">
        
        {/* Status Badge */}
        <div className="mb-6 flex items-center gap-2.5 text-xs font-medium tracking-tight text-zinc-300">
          <div className="flex h-5 items-center rounded px-2 bg-white/10 text-white font-mono text-[11px] font-bold border border-white/10">
            Beta
          </div>
          <p className="flex items-center gap-2 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            New styles added every week
          </p>
        </div>

        {/* Rotating Headline (Refero Styles Signature) */}
        <h1 className="w-full max-w-[950px] font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] min-h-[90px] sm:min-h-[140px] flex items-center justify-center">
          <span className="transition-all duration-500 transform inline-block text-balance">
            {rotatingPhrases[phraseIndex]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-[620px] text-zinc-400 text-sm sm:text-base leading-relaxed">
          Browse 2,000+ AI-readable design systems from leading product and university websites. Open any style for colors, typography, spacing, components, and a <span className="text-zinc-200 font-mono font-semibold">DESIGN.md</span> ready for Cursor, Claude Code, Antigravity, or v0.
        </p>

        {/* Big Pill Search Bar (Refero Styles Signature) */}
        <div className="mt-8 sm:mt-10 w-full max-w-[750px]">
          <div className="relative flex h-14 sm:h-16 items-center gap-2 rounded-full border border-white/15 bg-white/5 py-2 pr-2.5 pl-5 sm:pl-6 shadow-2xl backdrop-blur-xl focus-within:border-emerald-500/60 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search DESIGN.md examples by brand, style, color (e.g. Deep forest green)..."
              className="h-full min-w-0 flex-1 bg-transparent text-sm sm:text-base text-white placeholder:text-zinc-500 outline-none font-sans"
            />
            
            <button 
              onClick={() => {}}
              className="inline-flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full bg-white hover:bg-zinc-200 text-black transition-all transform active:scale-95 shadow-md"
              title="Search styles"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Quick Search Chips */}
          <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
            {quickFilters.map((tag) => (
              <button
                key={tag}
                onClick={() => onSelectQuickFilter(tag)}
                className={`flex h-9 items-center gap-1.5 rounded-xl px-2.5 text-left text-xs font-medium transition-all truncate border ${
                  searchQuery.toLowerCase() === tag.toLowerCase() 
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                    : 'bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-zinc-200 border-white/5'
                }`}
              >
                <CornerDownRight className="w-3 h-3 text-zinc-500 shrink-0" />
                <span className="truncate">{tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <div className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-2xl gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-black shadow-lg'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
