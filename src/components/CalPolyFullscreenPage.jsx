import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Compass, 
  Cpu, 
  Award, 
  GraduationCap, 
  FlaskConical, 
  Terminal, 
  Sliders, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import CalPolyHeroPreview from './CalPolyHeroPreview.jsx';

export default function CalPolyFullscreenPage({ onBackToRefero }) {
  const [activeCollege, setActiveCollege] = useState('engineering');

  const colleges = [
    {
      id: 'engineering',
      name: 'College of Engineering',
      dean: 'Hands-on project work in rocketry, robotics, and aerospace',
      stats: '6,200 Students • 14 Accredited Programs',
      focus: ['Aerospace Engineering', 'Robotics & Mechatronics', 'Civil & Environmental Systems']
    },
    {
      id: 'agriculture',
      name: 'Don B. Huntley College of Agriculture',
      dean: 'Precision farming, agronomy, and animal science on 700+ acres',
      stats: '2,100 Students • Certified Regenerative Labs',
      focus: ['Plant Biotechnology', 'Veterinary Technology', 'Agricultural Logistics']
    },
    {
      id: 'environmental-design',
      name: 'College of Environmental Design',
      dean: 'Architecture, landscape design, and urban regional planning',
      stats: '1,800 Students • Design-Build Studios',
      focus: ['Architecture (B.Arch)', 'Urban Planning', 'Regenerative Studies']
    },
    {
      id: 'science',
      name: 'College of Science',
      dean: 'Fundamental inquiry, computer science, and astrophysics',
      stats: '4,500 Students • Supercomputing Cluster',
      focus: ['Computer Science', 'Biochemistry', 'Applied Mathematics']
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f9f5] text-[#003624] font-sans selection:bg-[#004731] selection:text-[#a4d65e]">
      
      {/* Floating Back to Refero Styles Control */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={onBackToRefero}
          className="flex items-center gap-2 bg-[#0a0a0c]/90 hover:bg-black text-white px-4 py-2.5 rounded-full text-xs font-mono font-bold shadow-2xl border border-white/20 backdrop-blur-md transition-all transform hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
          <span>Back to Refero Styles Explorer</span>
        </button>
      </div>

      {/* 1. Main Hero Preview Component */}
      <CalPolyHeroPreview isFullscreen={true} />

      {/* 2. Hands-on Polytechnic Pillars Section */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#004731]/15">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#004731] font-bold tracking-widest uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffb81c]"></span>
              <span>The Learn-by-Doing Framework</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#004731]">
              Polytechnic Education In Action
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-zinc-600 max-w-md font-sans">
            At Cal Poly Pomona, theoretical foundations are tested immediately in machine shops, rocket stands, wind tunnels, and micro-propagation greenhouses.
          </p>
        </div>

        {/* 3 Interactive Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white border-t-4 border-[#004731] p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#004731]/10 text-[#004731] flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#004731] mb-2">
                Industry-Grade Proving Grounds
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Work on actual propulsion rigs, autonomous test vehicles, and agricultural sensor arrays engineered to FAA and NASA specifications.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-[#004731] font-bold">
              <span>EXPLORE FACILITIES</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-t-4 border-[#ffb81c] p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#ffb81c]/20 text-[#004731] flex items-center justify-center mb-6">
                <Award className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#004731] mb-2">
                #1 Social & Economic Mobility
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Ranked the #1 university in the Western United States for elevating graduates into high-trajectory technology and engineering careers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-[#004731] font-bold">
              <span>VIEW OUTCOMES</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-t-4 border-[#a4d65e] p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#a4d65e]/30 text-[#003624] flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#004731] mb-2">
                Direct Aerospace Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                More engineers at JPL, Edwards AFB, Boeing, Northrop Grumman, and SpaceX graduate from Cal Poly Pomona than almost any regional institution.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-[#004731] font-bold">
              <span>PARTNERSHIP NETWORK</span>
              <span>→</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Academic Colleges Explorer */}
      <section className="bg-[#003624] text-white py-16 sm:py-24 px-6 sm:px-12 relative overflow-hidden">
        {/* Subtle CAD grid lines in dark */}
        <div className="absolute inset-0 cad-grid-dark opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs text-[#a4d65e] tracking-widest uppercase font-bold">
              ACADEMIC ECOSYSTEM
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">
              Colleges Built for Discovery
            </h2>
            <p className="mt-3 text-sm text-emerald-200/80">
              Select a discipline to inspect real laboratory facilities and research specializations.
            </p>
          </div>

          {/* College Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {colleges.map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveCollege(col.id)}
                className={`px-5 py-3 rounded-none text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                  activeCollege === col.id
                    ? 'bg-[#a4d65e] text-[#003624] shadow-lg'
                    : 'bg-[#002418] text-white hover:bg-[#004731]'
                }`}
              >
                {col.name}
              </button>
            ))}
          </div>

          {/* Active College Details */}
          {(() => {
            const current = colleges.find((c) => c.id === activeCollege) || colleges[0];
            return (
              <div className="bg-[#002418] border-l-[12px] border-[#ffb81c] p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-8 justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    {current.name}
                  </h3>
                  <p className="text-sm text-emerald-100/80 mb-6 max-w-lg leading-relaxed">
                    {current.dean}
                  </p>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[11px] text-[#a4d65e] uppercase tracking-wider block">
                      Featured Programs & Labs
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {current.focus.map((f, i) => (
                        <span key={i} className="bg-[#003624] border border-[#a4d65e]/30 text-emerald-200 text-xs px-3 py-1 font-mono">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-emerald-800/60 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between shrink-0">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Accreditation</span>
                    <div className="font-mono text-sm font-bold text-[#ffb81c] mt-1">{current.stats}</div>
                  </div>

                  <button className="mt-6 bg-[#ffb81c] hover:bg-[#ffc642] text-[#003624] font-bold text-xs uppercase px-6 py-3 tracking-wider transition-colors">
                    COLLEGE PROSPECTUS →
                  </button>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 4. Polytechnic Footer */}
      <footer className="bg-[#002418] text-white/80 border-t border-emerald-900/60 py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-bold text-white">Cal Poly Pomona</span>
            <span className="text-zinc-500">|</span>
            <span>3801 W. Temple Ave., Pomona, CA 91768</span>
          </div>
          <div>
            <span>© 2026 California State Polytechnic University, Pomona</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
