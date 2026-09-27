import React, { useState } from 'react';
import { MapPin, Compass, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';

export default function CampusProvingGrounds() {
  const [activeLandmark, setActiveLandmark] = useState(0);

  const landmarks = [
    {
      id: 1,
      name: 'CLA Tower & Aratani Japanese Garden',
      tag: 'ARCHITECTURAL LANDMARK',
      desc: 'The iconic triangular tower rising above the San Gabriel Valley, bordered by traditional Japanese koi ponds and bonsai groves.',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      telemetry: 'LAT: 34.0564° N // LNG: -117.8215° W // ELEV: 245M'
    },
    {
      id: 2,
      name: 'The Farm Store & 700-Acre Spadra Fields',
      tag: 'AGRICULTURAL PRODUCTION',
      desc: 'Commercial citrus groves, avocado orchards, and hydroponic produce managed directly by undergraduate agriculture students.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
      telemetry: 'SOIL MOISTURE: 34% // REGENERATIVE ZONE B // TRACTOR FLEET'
    },
    {
      id: 3,
      name: 'Lyle Center for Regenerative Studies',
      tag: 'CARBON-NEUTRAL LIVING LAB',
      desc: '16-acre net-zero ecosystem modeling passive solar architecture, greywater reclamation, and renewable solar microgrids.',
      image: 'https://images.unsplash.com/photo-1508873696983-2df57036476b?auto=format&fit=crop&w=1200&q=80',
      telemetry: 'SOLAR PV: 240 KW // GREYWATER: 100% // EMBODIED CARBON: 0'
    },
    {
      id: 4,
      name: 'W.K. Kellogg Arabian Horse Center',
      tag: 'EQUINE BIOTECHNOLOGY & BREEDING',
      desc: 'Founded in 1925 by breakfast cereal magnate W.K. Kellogg, housing world-champion purebred Arabians and hands-on veterinary labs.',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
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
