import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Play, 
  Pause, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';
import FullscreenMenu from './components/FullscreenMenu.jsx';
import BecomeABronco from './components/BecomeABronco.jsx';
import GuaranteedAdmissions from './components/GuaranteedAdmissions.jsx';
import UniversityNews from './components/UniversityNews.jsx';
import MajorFinder from './components/MajorFinder.jsx';
import CampusProvingGrounds from './components/CampusProvingGrounds.jsx';
import InstitutionalFooter from './components/InstitutionalFooter.jsx';
import StoryModal from './components/StoryModal.jsx';
import CalStateApply from './components/CalStateApply.jsx';
import CsuApplyLanding from './components/CsuApplyLanding.jsx';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  // applyView: 'none' | 'landing' | 'portal'
  const [applyView, setApplyView] = useState('none');
  const [appliedTerm, setAppliedTerm] = useState('Fall 2027');
  const videoRef = useRef(null);

  // Sync hash routing: if URL has #apply or /apply, open Apply Landing or Portal
  useEffect(() => {
    const handleLocation = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#apply/portal' || path.startsWith('/apply/portal')) {
        setApplyView('portal');
      } else if (hash === '#apply' || path.startsWith('/apply')) {
        setApplyView('landing');
      }
    };
    handleLocation();
    window.addEventListener('hashchange', handleLocation);
    window.addEventListener('popstate', handleLocation);
    return () => {
      window.removeEventListener('hashchange', handleLocation);
      window.removeEventListener('popstate', handleLocation);
    };
  }, []);

  const slides = [
    {
      id: 1,
      headline: 'Become by Doing',
      subhead: 'Controlled Environment Agriculture & Micro-Propagation Complex',
      college: 'Don B. Huntley College of Agriculture',
      image: '/assets/hero-greenhouse.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85',
      cta: 'SEE HOW'
    },
    {
      id: 2,
      headline: 'Become by Doing',
      subhead: 'Liquid Rocket Propulsion Test Stand • Mojave Desert Operations',
      college: 'College of Engineering • Aerospace Engineering',
      image: '/assets/hero-rocketry.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1517976487507-5b3b4b371f73?auto=format&fit=crop&w=1600&q=85',
      cta: 'SEE HOW'
    },
    {
      id: 3,
      headline: 'Become by Doing',
      subhead: 'Autonomous Formula SAE Chassis Prototyping & Sensor Validation',
      college: 'Department of Mechanical Engineering',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
      fallbackImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
      cta: 'SEE HOW'
    }
  ];

  // Auto-advance slides only when not on video slide
  useEffect(() => {
    if (!isPlaying || currentSlide === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length, currentSlide]);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-white text-[#1f2937] font-sans selection:bg-[#004731] selection:text-[#a4d65e] flex flex-col overflow-x-hidden">
      
      {/* 1. TOP HEADER (Exact Match to Screenshot) */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200/90 px-4 sm:px-8 py-3.5 transition-all shadow-sm">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          
          {/* Cal Poly Pomona Logo */}
          <a href="/" className="flex items-center group">
            <img 
              src="/assets/cpp_logo_horizontal.png" 
              alt="Cal Poly Pomona" 
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Quick Nav Links (APPLY, VISIT, INFO, GIVE, MYCPP) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-bold tracking-widest text-[#004731]">
            <button 
              onClick={() => { setApplyView('landing'); window.location.hash = 'apply'; }} 
              className="hover:text-[#ffb81c] transition-colors cursor-pointer"
            >
              APPLY
            </button>
            <a href="#visit" className="hover:text-[#ffb81c] transition-colors">VISIT</a>
            <a href="#info" className="hover:text-[#ffb81c] transition-colors">INFO</a>
            <a href="#give" className="hover:text-[#ffb81c] transition-colors">GIVE</a>
            <a href="https://my.cpp.edu" target="_blank" rel="noreferrer" className="hover:text-[#ffb81c] transition-colors">MYCPP</a>
          </nav>

          {/* Search Icon & Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {searchOpen ? (
              <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm border border-gray-300">
                <input 
                  type="text" 
                  placeholder="Search cpp.edu..." 
                  className="bg-transparent outline-none w-32 sm:w-48 text-xs text-[#004731]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)} className="text-gray-500 hover:text-black">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#004731] hover:bg-gray-100 transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5 stroke-[2.3]" />
              </button>
            )}

            {/* Hamburger Button (Opens Fullscreen Menu Overlay) */}
            <button 
              onClick={() => setMenuOpen(true)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#004731] hover:bg-gray-100 transition-colors"
              title="Menu"
            >
              <Menu className="w-6 h-6 stroke-[2.3]" />
            </button>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION (Exact Match to Screenshot) */}
      <section className="relative w-full overflow-hidden bg-[#002418]">
        
        {/* Full-Bleed Media Container */}
        <div className="relative h-[440px] sm:h-[560px] lg:h-[640px] w-full overflow-hidden">
          
          {slides.map((slide, idx) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {idx === 0 ? (
                <video
                  ref={videoRef}
                  src="/assets/bbd-applytoday-v3.mp4"
                  poster="/assets/hero-greenhouse.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center filter contrast-[1.03]"
                />
              ) : (
                <img 
                  src={slide.image} 
                  alt={slide.subhead}
                  onError={(e) => {
                    e.currentTarget.src = slide.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-center filter contrast-[1.03]"
                />
              )}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          ))}

          {/* Top-Right Hazard Crosshatch Bar (Exact match to screenshot) */}
          <div 
            className="absolute top-0 right-0 w-8 sm:w-12 h-48 sm:h-64 cad-crosshatch border-l border-b border-[#a4d65e]/60 pointer-events-none z-20 shadow-md"
            title="Polytechnic Field Hazard Warning Strip"
          />

          {/* Bottom-Right Pause/Play Toggle Button (Exact match to screenshot) */}
          <div className="absolute bottom-5 sm:bottom-8 right-4 sm:right-6 z-30">
            <button 
              onClick={toggleVideoPlay}
              className="w-9 h-9 sm:w-11 sm:h-11 bg-black/75 hover:bg-black text-white rounded-none flex items-center justify-center backdrop-blur-md transition-all border border-white/20 shadow-lg active:scale-95 cursor-pointer"
              title={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <div className="flex gap-1 items-center justify-center">
                  <span className="w-1 sm:w-1.5 h-3.5 sm:h-4 bg-white inline-block"></span>
                  <span className="w-1 sm:w-1.5 h-3.5 sm:h-4 bg-white inline-block"></span>
                </div>
              ) : (
                <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-white text-white ml-0.5" />
              )}
            </button>
          </div>

          {/* 3. SIGNATURE OVERLAPPING "BECOME BY DOING" CARD (Exact Match to Screenshot) */}
          <div className="absolute bottom-0 left-0 right-0 sm:right-auto sm:left-4 md:left-8 sm:max-w-xl md:max-w-2xl lg:max-w-3xl z-30 shadow-2xl">
            <div className="relative bg-[#004731] text-white flex flex-row items-stretch border-l-[12px] sm:border-l-[18px] border-[#ffb81c]">
              
              {/* Main Card Content */}
              <div className="flex-1 px-4 sm:px-8 py-4 sm:py-7 flex flex-col justify-center min-w-0">
                
                {/* CAD Origin Dimensioning Line & Serif Headline */}
                <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                  {/* Origin Circle with Line (Exact Match to Screenshot) */}
                  <div className="flex items-center text-[#a4d65e]/90 shrink-0">
                    <span className="w-6 sm:w-16 h-px bg-current inline-block"></span>
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full border border-current inline-block ml-[-1px]"></span>
                  </div>

                  {/* Headline: "Become by Doing" */}
                  <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-none truncate sm:whitespace-nowrap">
                    Become by Doing
                  </h1>
                </div>

                {/* Lime Green "SEE HOW" Button (Exact Match to Screenshot) */}
                <div className="mt-3.5 sm:mt-5 ml-3 sm:ml-6">
                  <button 
                    onClick={() => setStoryModalOpen(true)}
                    className="bg-[#a4d65e] hover:bg-[#b5e772] text-[#003624] font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 sm:px-9 py-2 sm:py-3 rounded-none shadow transition-transform transform active:scale-95 cursor-pointer"
                  >
                    SEE HOW
                  </button>
                </div>
              </div>

              {/* Right Side Carousel Pagination Control (Exact Match to Screenshot) */}
              <div className="flex items-end pb-4 sm:pb-7 pr-3 sm:pr-6 shrink-0">
                <div className="flex items-center gap-0">
                  {/* Left Arrow Button (Darker Green Box) */}
                  <button 
                    onClick={prevSlide}
                    className="w-7 h-7 sm:w-9 sm:h-9 bg-[#2e6b4b] hover:bg-[#3d835e] text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="Previous Slide"
                  >
                    <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 stroke-[2.5]" />
                  </button>

                  {/* Counter "1 / 3" */}
                  <span className="bg-[#004731] px-2 sm:px-3 text-[11px] sm:text-sm font-sans font-medium text-white whitespace-nowrap">
                    {currentSlide + 1} / {slides.length}
                  </span>

                  {/* Right Arrow Button (Lime Green Box) */}
                  <button 
                    onClick={nextSlide}
                    className="w-7 h-7 sm:w-9 sm:h-9 bg-[#a4d65e] hover:bg-[#b5e772] text-[#003624] flex items-center justify-center transition-colors font-bold cursor-pointer"
                    title="Next Slide"
                  >
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4. ARCHITECTURAL CAD GRID & CONTOUR LINE SECTION (Directly Underneath Hero) */}
        <div className="relative w-full bg-white cad-grid-light border-t border-[#004731]/15 py-8 sm:py-12 px-4 sm:px-8">
          
          {/* Dashed Baseline & Peak Mountain Elevation Curve (Exact Match to Screenshot) */}
          <div className="w-full relative h-10 flex items-center max-w-[1600px] mx-auto">
            <svg 
              className="absolute inset-0 w-full h-full overflow-visible" 
              preserveAspectRatio="none" 
              viewBox="0 0 1000 40"
            >
              <line 
                x1="0" 
                y1="25" 
                x2="1000" 
                y2="25" 
                stroke="#004731" 
                strokeWidth="1.2" 
                strokeDasharray="6 6" 
                opacity="0.4"
              />
              <path 
                d="M 0 25 L 475 25 L 495 10 L 515 25 L 1000 25" 
                fill="none" 
                stroke="#004731" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

        </div>

      </section>

      {/* 3. BECOME A BRONCO 3-CARD SECTION (Image 2) */}
      <BecomeABronco />

      {/* 4. GUARANTEED ADMISSIONS & DRONE HEXACOPTER SECTION (Image 5) */}
      <GuaranteedAdmissions 
        onOpenApply={() => { setApplyView('landing'); window.location.hash = 'apply'; }} 
      />

      {/* 5. UNIVERSITY NEWS & ALUMNI AI STORIES SECTION (Image 3) */}
      <UniversityNews />

      {/* 6. DEGREE PROGRAM & MAJOR EXPLORER */}
      <MajorFinder />

      {/* 7. CAMPUS PROVING GROUNDS LANDMARKS */}
      <CampusProvingGrounds />

      {/* 8. INSTITUTIONAL FOOTER (Image 1) */}
      <InstitutionalFooter />

      {/* 9. FULLSCREEN MENU OVERLAY (Image 4 - triggered via hamburger) */}
      <FullscreenMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        onOpenApply={() => { setApplyView('landing'); window.location.hash = 'apply'; }}
      />

      {/* 10. STORY MODAL (Triggered via "SEE HOW") */}
      {storyModalOpen && (
        <StoryModal 
          slide={slides[currentSlide]}
          onClose={() => setStoryModalOpen(false)}
        />
      )}

      {/* 11. CSU APPLY LANDING PAGE ("Go From Here. | CSU" - calstate.edu/apply) */}
      {applyView === 'landing' && (
        <CsuApplyLanding 
          onStartApplication={(term) => {
            setAppliedTerm(term);
            setApplyView('portal');
            window.location.hash = 'apply/portal';
          }}
          onBackToCpp={() => {
            setApplyView('none');
            window.history.pushState('', document.title, window.location.pathname + window.location.search);
          }}
        />
      )}

      {/* 12. CAL STATE APPLY PORTAL EXPERIENCE (calstate.cas.myliaison.com) */}
      {applyView === 'portal' && (
        <CalStateApply 
          selectedTerm={appliedTerm}
          onBackToLanding={() => {
            setApplyView('landing');
            window.location.hash = 'apply';
          }}
          onClose={() => {
            setApplyView('none');
            window.history.pushState('', document.title, window.location.pathname + window.location.search);
          }}
        />
      )}

    </div>
  );
}
