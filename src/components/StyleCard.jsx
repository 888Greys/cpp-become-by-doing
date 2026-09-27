import React from 'react';
import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

export default function StyleCard({ style, onClick }) {
  const isFlagship = style.id === 'cal-poly-pomona';

  return (
    <article 
      onClick={() => onClick(style)}
      className="group cursor-pointer relative flex flex-col rounded-3xl sm:rounded-4xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 p-5 sm:p-7 overflow-hidden"
    >
      {/* Featured Flagship Highlight Ribbon */}
      {isFlagship && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#004731] border border-[#a4d65e]/40 text-[#a4d65e] px-3 py-1 rounded-full text-[11px] font-mono font-bold shadow-lg">
          <Sparkles className="w-3 h-3 text-[#ffb81c]" />
          <span>FLAGSHIP SYSTEM</span>
        </div>
      )}

      {/* Visual Preview Box */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 transition-transform duration-500 group-hover:scale-[1.015]">
        
        {/* If Cal Poly Pomona: Render the realistic Hero thumbnail directly */}
        {isFlagship ? (
          <div className="relative w-full h-full bg-[#002418] flex flex-col justify-end p-4 overflow-hidden">
            <img 
              src={style.previewImage} 
              alt={style.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Caution Hatching strip on preview */}
            <div className="absolute top-0 right-0 w-12 h-24 cad-crosshatch border-l border-[#a4d65e]/50"></div>

            {/* Overlapping Forest Green & Gold banner */}
            <div className="relative z-10 bg-[#004731] border-l-4 border-[#ffb81c] p-3 shadow-lg flex items-center justify-between">
              <div>
                <div className="font-serif text-sm font-bold text-white tracking-wide">Become by Doing</div>
                <div className="text-[9px] font-mono text-[#a4d65e]">#004731 // #FFB81C</div>
              </div>
              <span className="bg-[#a4d65e] text-[#003624] text-[9px] font-extrabold px-2 py-0.5 uppercase">
                SEE HOW
              </span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img 
              src={style.previewImage} 
              alt={style.title} 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Hover Arrow Overlay */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex items-start gap-3.5 pt-4">
        
        {/* Brand Avatar */}
        <div 
          className="size-11 rounded-xl shrink-0 flex items-center justify-center font-bold text-base shadow-inner border border-white/20 text-white"
          style={{ backgroundColor: style.accentColor || '#1f1f23' }}
        >
          {isFlagship ? (
            <span className="text-[#ffb81c] font-serif font-black text-xl">CPP</span>
          ) : (
            style.brandName.slice(0, 2).toUpperCase()
          )}
        </div>

        {/* Title & Description */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-white tracking-tight truncate group-hover:text-emerald-400 transition-colors">
              {style.title}
            </h3>
            <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5 shrink-0">
              {style.category}
            </span>
          </div>

          <p className="mt-1 text-xs text-zinc-400 font-sans line-clamp-1">
            {style.subtitle}
          </p>

          {/* Color Palette Micro Swatches */}
          <div className="mt-3 flex items-center gap-1.5">
            {style.colors.accent.map((col, idx) => (
              <span 
                key={idx} 
                className="w-3.5 h-3.5 rounded-full border border-white/30 inline-block shadow-sm"
                style={{ backgroundColor: col.hex }}
                title={`${col.name}: ${col.hex}`}
              />
            ))}
            <span className="text-[10px] font-mono text-zinc-500 ml-1">
              +{style.colors.neutrals.length} neutrals
            </span>
          </div>
        </div>

      </div>

    </article>
  );
}
