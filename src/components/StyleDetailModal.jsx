import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Code2, 
  Layers, 
  FileText, 
  Palette, 
  Maximize2, 
  Eye, 
  Terminal, 
  Sparkles 
} from 'lucide-react';
import CalPolyHeroPreview from './CalPolyHeroPreview.jsx';

export default function StyleDetailModal({ 
  style, 
  onClose, 
  onCopy, 
  onOpenFullscreen 
}) {
  const [activeTab, setActiveTab] = useState('preview');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!style) return null;

  const isCalPoly = style.id === 'cal-poly-pomona';

  const handleCopyDesignMd = () => {
    onCopy(style.designMd, 'Copied DESIGN.md to clipboard');
  };

  const handleCopyTailwind = () => {
    onCopy(style.tailwindConfig, 'Copied Tailwind v4 configuration');
  };

  const handleCopyCssVars = () => {
    onCopy(style.cssVariables, 'Copied CSS Variables');
  };

  const handleCopySwatch = (hex, name) => {
    onCopy(hex, `Copied ${name} (${hex})`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center p-2 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[1500px] bg-[#0e0e12] border border-white/15 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-4 bg-[#14141a]/90 backdrop-blur-md shrink-0">
          
          <div className="flex items-center gap-3">
            <div 
              className="size-10 rounded-xl flex items-center justify-center font-bold text-base shadow border border-white/20 text-white shrink-0"
              style={{ backgroundColor: style.accentColor || '#1f1f23' }}
            >
              {isCalPoly ? (
                <span className="text-[#ffb81c] font-serif font-black text-xl">CPP</span>
              ) : (
                style.brandName.slice(0, 2).toUpperCase()
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {style.title}
                </h2>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {style.badge || style.category}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-sans mt-0.5 max-w-xl truncate">
                {style.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isCalPoly && (
              <button
                onClick={onOpenFullscreen}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                title="Launch standalone landing page simulation"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Launch Fullscreen</span>
              </button>
            )}

            <button
              onClick={handleCopyDesignMd}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs shadow-lg transition-all transform active:scale-95"
            >
              <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Copy DESIGN.md</span>
            </button>

            <a
              href={style.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-400 hover:text-white transition-colors"
              title="Visit live website"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-400 border border-white/15 text-zinc-400 transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Navigation Tabs (Mirrors styles.refero.design) */}
        <div className="flex items-center gap-2 px-6 border-b border-white/10 bg-[#121217] shrink-0 overflow-x-auto scrollbar-none py-2.5">
          {[
            { id: 'preview', label: 'Preview', icon: Eye },
            { id: 'design-md', label: 'DESIGN.md', icon: FileText },
            { id: 'tailwind', label: 'Tailwind v4', icon: Code2 },
            { id: 'css-vars', label: 'CSS Variables', icon: Terminal },
            { id: 'tokens', label: 'Design Tokens', icon: Palette },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-black shadow-md'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          
          {/* TAB 1: PREVIEW */}
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {isCalPoly ? (
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Interactive Polytechnic Hero Simulation
                      </h3>
                      <p className="text-xs text-zinc-400 font-sans">
                        Cycle slides, toggle CAD drafting grid, and interact with the Cal Poly Pomona components.
                      </p>
                    </div>

                    <button 
                      onClick={onOpenFullscreen}
                      className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>Open fullscreen mode</span>
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>

                  <CalPolyHeroPreview onToggleFullscreen={onOpenFullscreen} />
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-12 text-center">
                  <div className="max-w-xl mx-auto space-y-4">
                    <img 
                      src={style.previewImage} 
                      alt={style.title} 
                      className="w-full aspect-[16/10] object-cover rounded-xl border border-white/10 shadow-2xl"
                    />
                    <h3 className="text-xl font-bold text-white">{style.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{style.description}</p>
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <button 
                        onClick={() => setActiveTab('design-md')}
                        className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg"
                      >
                        View DESIGN.md
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: DESIGN.MD */}
          {activeTab === 'design-md' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <div>
                  <span className="font-mono text-xs text-emerald-400 font-bold block">
                    DESIGN.md — AI Agent Specification
                  </span>
                  <span className="text-[11px] text-zinc-400 font-sans">
                    Drop this into Cursor, Claude Code, Antigravity, or v0 to reproduce this system with 100% fidelity.
                  </span>
                </div>
                <button
                  onClick={handleCopyDesignMd}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold rounded-lg transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Markdown</span>
                </button>
              </div>

              <div className="relative rounded-2xl bg-black/80 border border-white/10 p-5 sm:p-6 overflow-x-auto font-mono text-xs text-zinc-300 leading-relaxed shadow-inner">
                <pre className="whitespace-pre-wrap">{style.designMd}</pre>
              </div>
            </div>
          )}

          {/* TAB 3: TAILWIND */}
          {activeTab === 'tailwind' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <div>
                  <span className="font-mono text-xs text-emerald-400 font-bold block">
                    Tailwind CSS v4 & v3 Theme Definition
                  </span>
                  <span className="text-[11px] text-zinc-400 font-sans">
                    Include in your global CSS with @theme or paste into tailwind.config.js
                  </span>
                </div>
                <button
                  onClick={handleCopyTailwind}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold rounded-lg transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Config</span>
                </button>
              </div>

              <div className="relative rounded-2xl bg-black/80 border border-white/10 p-5 sm:p-6 overflow-x-auto font-mono text-xs text-emerald-300 leading-relaxed shadow-inner">
                <pre className="whitespace-pre-wrap">{style.tailwindConfig}</pre>
              </div>
            </div>
          )}

          {/* TAB 4: CSS VARIABLES */}
          {activeTab === 'css-vars' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <div>
                  <span className="font-mono text-xs text-emerald-400 font-bold block">
                    CSS Custom Properties (:root)
                  </span>
                  <span className="text-[11px] text-zinc-400 font-sans">
                    Universal CSS tokens compatible with vanilla HTML, Svelte, Vue, or Next.js
                  </span>
                </div>
                <button
                  onClick={handleCopyCssVars}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold rounded-lg transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy CSS</span>
                </button>
              </div>

              <div className="relative rounded-2xl bg-black/80 border border-white/10 p-5 sm:p-6 overflow-x-auto font-mono text-xs text-amber-300 leading-relaxed shadow-inner">
                <pre className="whitespace-pre-wrap">{style.cssVariables}</pre>
              </div>
            </div>
          )}

          {/* TAB 5: DESIGN TOKENS & SWATCHES */}
          {activeTab === 'tokens' && (
            <div className="space-y-8">
              
              {/* Color Swatch Board */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 font-bold mb-3">
                  Accent & Brand Palette (Click any to copy HEX)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {style.colors.accent.map((col, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCopySwatch(col.hex, col.name)}
                      className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] p-4 transition-all"
                    >
                      <div 
                        className="h-20 w-full rounded-xl border border-white/20 shadow-md relative flex items-end justify-end p-2"
                        style={{ backgroundColor: col.hex }}
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white font-mono text-[10px] px-2 py-0.5 rounded backdrop-blur">
                          Copy
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="text-sm font-bold text-white">{col.name}</div>
                        <div className="font-mono text-xs text-emerald-400 mt-0.5">{col.hex}</div>
                        <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">{col.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral & Surface Palette */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 font-bold mb-3">
                  Neutrals & Blueprint Surfaces
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {style.colors.neutrals.map((col, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCopySwatch(col.hex, col.name)}
                      className="group cursor-pointer rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] p-3 transition-all"
                    >
                      <div 
                        className="h-14 w-full rounded-lg border border-white/20 shadow-sm relative flex items-end justify-end p-1.5"
                        style={{ backgroundColor: col.hex }}
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white font-mono text-[9px] px-1.5 py-0.5 rounded">
                          Copy
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="text-xs font-bold text-white truncate">{col.name}</div>
                        <div className="font-mono text-[11px] text-zinc-400">{col.hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography Specimen */}
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 font-bold mb-4">
                  Typography Hierarchy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Headline Serif</span>
                    <div className="font-serif text-3xl font-semibold text-white mt-2">Become by Doing</div>
                    <span className="font-mono text-xs text-emerald-400 block mt-2">{style.typography.headlineFont}</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Nav & Button Sans</span>
                    <div className="font-sans text-2xl font-bold uppercase tracking-wider text-white mt-2">SEE HOW</div>
                    <span className="font-mono text-xs text-emerald-400 block mt-2">{style.typography.bodyFont}</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">CAD Telemetry Mono</span>
                    <div className="font-mono text-lg font-medium text-emerald-300 mt-2">AZ-902 // 1,142M</div>
                    <span className="font-mono text-xs text-emerald-400 block mt-2">{style.typography.monoFont}</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
