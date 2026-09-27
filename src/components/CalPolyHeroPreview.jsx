import React, { useState, useEffect } from 'react';
import { Search, Menu, Play, Pause, ChevronLeft, ChevronRight, Compass, Shield, ExternalLink, Sliders, Check } from 'lucide-react';

export default function CalPolyHeroPreview({ isFullscreen = false, onToggleFullscreen }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [gridOverlay, setGridOverlay] = useState(true);
  const [showTelemetry, setShowTelemetry] = useState(true);

  const slides = [
    {
      id: 1,
      headline: 'Become by Doing',
      subhead: 'Liquid Rocket Propulsion Test Stand • Mojave Desert Operations',
      tag: 'AEROSPACE & MECHANICAL ENGINEERING',
      cta: 'SEE HOW',
      image: 'https://images.unsplash.com/photo-1517976487507-5b3b4b371f73?auto=format&fit=crop&w=1600&q=85',
      badge: 'NON-FLAMMABLE GAS 2',
      telemetry: 'LAT: 34.0564° N // LNG: -117.8215° W // ELEV: 1,142M // CHAMBER PSI: 850'
    },
    {
      id: 2,
      headline: 'Learn by Building',
      subhead: 'Autonomous Off-Road Baja Chassis & Sensor Array Lab',
      tag: 'ROBOTICS & ADVANCED MANUFACTURING',
      cta: 'EXPLORE LAB',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
      badge: 'SAE RACING DYNAMICS',
      telemetry: 'FRAME: 4130 CHROMOLY // CAN-BUS: 500KBPS // SUSPENSION: PNEUMATIC ACTIVE'
    },
    {
      id: 3,
      headline: 'Discover by Solving',
      subhead: 'Next-Gen Climate Resilient Biotechnology & Micro-propagation',
      tag: 'DON B. HUNTLEY COLLEGE OF AGRICULTURE',
      cta: 'VIEW RESEARCH',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1600&q=85',
      badge: 'BIO-SAFETY LEVEL 2',
      telemetry: 'PAR FLUX: 450 µmol/m²/s // WATER RECIRC: 99.4% // ROOT O2: 9.8 PPM'
    }
  ];

  // Auto advance slides if playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className={`relative w-full bg-[#fbfcf9] text-[#1a2e26] overflow-hidden select-none transition-all duration-300 ${isFullscreen ? 'min-h-screen' : 'rounded-2xl border border-[#004731]/20 shadow-2xl'}`}>
      
      {/* Top Banner / Browser bar simulation when not fullscreen */}
      {!isFullscreen && (
        <div className="bg-[#1f1f23] text-zinc-400 px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 text-zinc-300 truncate">Cal Poly Pomona — #1 Polytechnic University for Diversity & Economic Mobility</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#004731] text-[#a4d65e] px-2 py-0.5 rounded text-[11px] font-sans font-semibold">cpp.edu</span>
            {onToggleFullscreen && (
              <button 
                onClick={onToggleFullscreen}
                className="hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                title="Expand full screen"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Fullscreen</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 1. CAL POLY POMONA INSTITUTIONAL HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#004731]/10 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3.5 group cursor-pointer">
            {/* Cal Poly Pomona Heraldic Crest */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-[#004731] text-[#ffb81c] rounded-md shadow-md group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" stroke="none">
                <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm0 3.3l5 2.5v4.2c0 3.8-2.6 7.4-5 8.4-2.4-1-5-4.6-5-8.4V7.8l5-2.5zm-1 3.7h2v6h-2v-6zm0 7h2v2h-2v-2z"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#a4d65e] rounded-full border border-white"></div>
            </div>

            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#004731] leading-none">
                Cal Poly Pomona
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 font-semibold block mt-0.5">
                Polytechnic Experience
              </span>
            </div>
          </div>

          {/* Quick Nav Links (Matching Screenshot) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-sans font-bold tracking-widest text-[#004731]">
            {['APPLY', 'VISIT', 'INFO', 'GIVE', 'MYCPP'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#ffb81c] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ffb81c] hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            {isSearchOpen ? (
              <div className="flex items-center bg-[#f0f4f1] border border-[#004731]/30 rounded-full px-3 py-1 text-sm">
                <input 
                  type="text" 
                  placeholder="Search majors, faculty, labs..." 
                  className="bg-transparent outline-none w-36 sm:w-56 text-xs text-[#004731]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="text-zinc-500 hover:text-black text-xs font-mono ml-1">✕</button>
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#004731] hover:bg-[#004731]/10 transition-colors"
                title="Search cpp.edu"
              >
                <Search className="w-5 h-5 stroke-[2.2]" />
              </button>
            )}

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#004731] hover:bg-[#004731]/10 transition-colors"
            >
              <Menu className="w-6 h-6 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#004731]/10 mt-3 pt-3 flex flex-col gap-2 font-bold text-sm text-[#004731]">
            {['APPLY', 'VISIT', 'INFO', 'GIVE', 'MYCPP'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="py-1 px-2 hover:bg-[#004731]/10 rounded">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. MAIN HERO SECTION */}
      <section className="relative w-full bg-[#002418] overflow-hidden">
        
        {/* Background Visual with Crossfade */}
        <div className="relative h-[480px] sm:h-[560px] lg:h-[620px] w-full overflow-hidden">
          {slides.map((slide, idx) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.headline}
                className="w-full h-full object-cover object-center filter contrast-[1.05]"
              />
              {/* Subtle Desert Sun Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002418]/90 via-transparent to-black/30"></div>
            </div>
          ))}

          {/* Top Right CAD Caution Hatching (from screenshot) */}
          <div className="absolute top-0 right-0 w-16 sm:w-24 h-48 cad-crosshatch border-l-2 border-[#a4d65e]/60 pointer-events-none z-10 shadow-lg"></div>

          {/* Simulated Engineering Caution Placard (Matching screenshot's "Non-Flammable Gas 2") */}
          <div className="absolute top-6 left-6 z-20 hidden md:flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-[11px] font-mono text-white/90">
            <span className="w-2 h-2 rounded-full bg-[#a4d65e] animate-pulse"></span>
            <span>FIELD RIG: {slides[currentSlide].badge}</span>
          </div>

          {/* Live Telemetry Display */}
          {showTelemetry && (
            <div className="absolute bottom-32 sm:bottom-36 right-6 z-20 hidden sm:flex items-center gap-2 bg-[#003624]/90 backdrop-blur-md border border-[#a4d65e]/40 px-3.5 py-1.5 rounded text-[11px] font-mono text-[#a4d65e]">
              <Compass className="w-3.5 h-3.5" />
              <span>{slides[currentSlide].telemetry}</span>
            </div>
          )}

          {/* Play/Pause Control Button in Bottom Right (from screenshot) */}
          <div className="absolute bottom-6 sm:bottom-8 right-6 z-30">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-11 h-11 bg-black/70 hover:bg-[#004731] border border-[#a4d65e]/50 text-white hover:text-[#a4d65e] rounded flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-105 active:scale-95"
              title={isPlaying ? 'Pause auto-cycle' : 'Play auto-cycle'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>
          </div>

          {/* 3. SIGNATURE OVERLAPPING FOREST GREEN CARD (Exact match to screenshot) */}
          <div className="absolute bottom-0 left-0 right-0 sm:right-auto sm:left-6 md:left-12 sm:max-w-2xl lg:max-w-4xl z-30 shadow-2xl">
            <div className="relative bg-[#004731] text-white flex flex-col md:flex-row items-stretch border-l-[14px] sm:border-l-[18px] border-[#ffb81c]">
              
              {/* Left Content Area */}
              <div className="flex-1 px-6 sm:px-10 py-6 sm:py-8 flex flex-col justify-center">
                
                {/* CAD Origin Marker & Line Leading to Headline */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center text-[#a4d65e]/90">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-current inline-block"></span>
                    <span className="w-12 sm:w-16 h-px bg-current inline-block"></span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#a4d65e] font-semibold">
                    {slides[currentSlide].tag}
                  </span>
                </div>

                {/* Serif Headline ("Become by Doing") */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                  {slides[currentSlide].headline}
                </h2>
                
                <p className="mt-2 text-xs sm:text-sm text-emerald-100/80 font-sans max-w-lg line-clamp-1">
                  {slides[currentSlide].subhead}
                </p>

                {/* Primary CTA Button ("SEE HOW") */}
                <div className="mt-5">
                  <button className="bg-[#a4d65e] hover:bg-[#bbf075] text-[#003624] font-extrabold text-sm tracking-wider uppercase px-8 py-3.5 rounded-none shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2">
                    <span>{slides[currentSlide].cta}</span>
                    <span className="text-base font-mono">→</span>
                  </button>
                </div>
              </div>

              {/* Right Side Carousel Controls Widget (Matching Screenshot) */}
              <div className="bg-[#003624] px-4 py-4 md:px-6 flex md:flex-col items-center justify-between border-t md:border-t-0 md:border-l border-[#002418]">
                <div className="flex items-center gap-1.5 bg-[#002418]/80 p-1.5 rounded">
                  <button 
                    onClick={prevSlide}
                    className="w-9 h-9 bg-[#004731] hover:bg-[#a4d65e] text-white hover:text-[#003624] flex items-center justify-center transition-colors"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>
                  
                  <span className="font-mono text-xs px-2.5 font-bold tracking-widest text-[#a4d65e]">
                    {currentSlide + 1} / {slides.length}
                  </span>

                  <button 
                    onClick={nextSlide}
                    className="w-9 h-9 bg-[#a4d65e] hover:bg-[#bbf075] text-[#003624] flex items-center justify-center transition-colors font-bold"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                <div className="hidden md:block text-[10px] font-mono text-emerald-400/60 mt-3 text-center">
                  TOUCH / KEYBOARD ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. ARCHITECTURAL CAD GRID & CONTOUR LINE (Directly below hero, matching screenshot) */}
        <div className={`relative w-full bg-[#f4f7f2] border-t border-[#004731]/20 py-8 px-6 sm:px-12 ${gridOverlay ? 'cad-grid-light' : ''}`}>
          
          {/* Dashed Engineering Coordinate Baseline */}
          <div className="w-full relative h-12 flex items-center">
            
            {/* The SVG Elevation Contour Curve with Peak Summit (Matching the screenshot line) */}
            <svg 
              className="absolute inset-0 w-full h-full overflow-visible" 
              preserveAspectRatio="none" 
              viewBox="0 0 1000 40"
            >
              {/* Dashed horizontal reference line */}
              <line 
                x1="0" 
                y1="20" 
                x2="1000" 
                y2="20" 
                stroke="#004731" 
                strokeWidth="1.2" 
                strokeDasharray="6 6" 
                opacity="0.35"
              />

              {/* Technical contour curve peaking upward at center */}
              <path 
                d="M 0 20 L 460 20 L 495 5 L 530 20 L 1000 20" 
                fill="none" 
                stroke="#004731" 
                strokeWidth="1.8" 
                strokeLinecap="round"
              />

              {/* Peak marker vertex */}
              <circle cx="495" cy="5" r="3" fill="#ffb81c" stroke="#004731" strokeWidth="1.5" />
            </svg>

            {/* Coordinate Tick Marks */}
            <div className="relative z-10 w-full flex justify-between font-mono text-[9px] text-[#004731]/60 tracking-wider">
              <span>REF 0.00 AZ</span>
              <span>DATUM: NAD83</span>
              <span className="text-[#004731] font-bold bg-[#f4f7f2] px-2 rounded border border-[#004731]/20">
                PEAK SUMMIT EL: +1,142m
              </span>
              <span>GRID: CAL-POLY-POMONA-ENG</span>
              <span>NOMINAL 100.00</span>
            </div>
          </div>

          {/* Value Propositions / Key Statistics Strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-[#004731]/10 pt-6">
            <div className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#004731]">#1</div>
              <div className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Polytechnic Mobility</div>
              <div className="text-[11px] text-zinc-500 font-sans">Wall Street Journal ranking in California</div>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#004731]">100%</div>
              <div className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Hands-On Labs</div>
              <div className="text-[11px] text-zinc-500 font-sans">Learn by doing in state-of-the-art facilities</div>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#004731]">27,000+</div>
              <div className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Active Students</div>
              <div className="text-[11px] text-zinc-500 font-sans">Minds in motion across 9 colleges</div>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#004731]">$1.2B+</div>
              <div className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Regional Impact</div>
              <div className="text-[11px] text-zinc-500 font-sans">Powering Southern California innovation</div>
            </div>
          </div>
        </div>

      </section>

      {/* Floating System Controls Panel */}
      <div className="bg-[#e9eee6] border-t border-[#004731]/20 px-4 py-2.5 flex flex-wrap items-center justify-between text-xs text-[#004731] font-mono">
        <div className="flex items-center gap-3">
          <span className="font-bold flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#ffb81c] fill-current" />
            LIVE DESIGN SYSTEM PREVIEW
          </span>
          <span className="text-zinc-400">|</span>
          <span>PALETTE: #004731 (Forest) • #FFB81C (Gold) • #A4D65E (Lime)</span>
        </div>

        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <label className="flex items-center gap-1.5 cursor-pointer hover:text-black">
            <input 
              type="checkbox" 
              checked={gridOverlay} 
              onChange={(e) => setGridOverlay(e.target.checked)} 
              className="accent-[#004731] rounded"
            />
            <span>CAD Drafting Grid</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer hover:text-black">
            <input 
              type="checkbox" 
              checked={showTelemetry} 
              onChange={(e) => setShowTelemetry(e.target.checked)} 
              className="accent-[#004731] rounded"
            />
            <span>Telemetry Bar</span>
          </label>
        </div>
      </div>
    </div>
  );
}
