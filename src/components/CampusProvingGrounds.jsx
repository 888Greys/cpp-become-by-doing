import React, { useState } from 'react';
import { MapPin, Compass, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';

export default function CampusProvingGrounds() {
  const [activeLandmark, setActiveLandmark] = useState(0);

  const landmarks = [
    {
      id: 1,
      name: 'Cal Poly Rose Float Design & Fabrication Lab',
      tag: 'CAL POLY TRADITION',
      desc: 'The only student-built float in the Tournament of Roses Parade, combining pneumatic hydraulic animation and organic flora design.',
      image: '/assets/rose-float.jpg',
      telemetry: 'HYDRAULIC PSI: 2,400 // EMBEDDED ACTUATORS: 48 // ROSE DENSITY'
    },
    {
      id: 2,
      name: 'Macias Architectural Design Studios',
      tag: 'DESIGN-BUILD STUDIOS',
      desc: 'Top-ranked NAAB accredited architecture and landscape studios overlooking the valley with 24/7 laser and CNC prototyping yards.',
      image: '/assets/macias-studio.jpg',
      telemetry: 'FAB LAB STATUS: ACTIVE // 5-AXIS CNC // STUDIO LEVEL 3'
    },
    {
      id: 3,
      name: 'BRIC 53-Foot Climbing Wall & Wellness Complex',
      tag: 'STUDENT RECREATION & FITNESS',
      desc: '165,000 sq.ft. LEED Gold recreation facility featuring an indoor running track, Olympic lap pool, and 53-foot climbing rock wall.',
      image: '/assets/bric-climbing-wall.jpg',
      telemetry: 'WALL HEIGHT: 53 FT // BELAY ROUTES: 24 // LEED GOLD'
    },
    {
      id: 4,
      name: 'W.K. Kellogg Arabian Horse Center',
      tag: 'EQUINE BIOTECHNOLOGY & BREEDING',
      desc: 'Founded in 1925 by breakfast cereal magnate W.K. Kellogg, housing world-champion purebred Arabians and hands-on veterinary labs.',
      image: '/assets/orientation-mares.jpg',
      telemetry: 'HERD COUNT: 85 // FOALING TELEMETRY // ARENA CAPACITY: 1,200'
    }
  ];

  return (
    <section className="bg-[#002418] text-white py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Background CAD Graph paper grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-emerald-900">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#a4d65e] font-bold tracking-widest uppercase mb-2">
              <Compass className="w-4 h-4" />
              <span>1,400+ ACRES OF EXPERIMENTAL GROUND</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Campus Proving Grounds
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-emerald-200/80 max-w-md font-sans">
            Cal Poly Pomona’s sprawling campus combines working farmland, supersonic test cells, and living architectural ecosystems.
          </p>
        </div>

        {/* Interactive Landmark Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Landmark Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {landmarks.map((landmark, idx) => (
              <div
                key={landmark.id}
                onClick={() => setActiveLandmark(idx)}
                className={`p-5 cursor-pointer border-l-4 transition-all ${
                  activeLandmark === idx
                    ? 'bg-[#003624] border-[#ffb81c] shadow-lg translate-x-1'
                    : 'bg-[#002b1d]/70 hover:bg-[#003624]/60 border-transparent text-emerald-100/70'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-[#a4d65e] font-bold">{landmark.tag}</span>
                  <span className="text-zinc-400">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {landmark.name}
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1 line-clamp-2">
                  {landmark.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Active Landmark Visualizer */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-emerald-800 shadow-2xl bg-black">
              <img
                src={landmarks[activeLandmark].image}
                alt={landmarks[activeLandmark].name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002418] via-transparent to-transparent"></div>

              {/* Landmark Telemetry Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 border border-[#a4d65e]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono text-[#a4d65e] uppercase tracking-widest block font-bold">
                    GPS TELEMETRY
                  </span>
                  <div className="font-mono text-xs text-white">
                    {landmarks[activeLandmark].telemetry}
                  </div>
                </div>

                <a 
                  href="#visit"
                  className="bg-[#a4d65e] hover:bg-[#b5e772] text-[#003624] font-extrabold text-[11px] px-4 py-2 uppercase tracking-wider shrink-0 transition-colors"
                >
                  Schedule Tour →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
