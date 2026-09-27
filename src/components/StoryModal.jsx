import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Activity, ShieldAlert, Sparkles, ChevronRight, Compass } from 'lucide-react';

export default function StoryModal({ slide, onClose }) {
  if (!slide) return null;

  const storyDetails = {
    1: {
      title: 'Controlled Environment Agriculture & Biotechnology Complex',
      college: 'Don B. Huntley College of Agriculture',
      leadFaculty: 'Dr. Aaron Fox & Student Research Fellows',
      location: 'Greenhouse Complex Unit 2, Building 28',
      summary:
        'Students at Cal Poly Pomona manage over 700 acres of working agricultural land and modern hydroponic greenhouses. Here, hands-on learning means managing commercial-scale nutrient dosing, genetic micro-propagation, and automated climate control systems feeding into local food supply chains and the Farm Store at Kellogg Ranch.',
      metrics: [
        { label: 'Recirculated Water Efficiency', value: '98.5%' },
        { label: 'PAR Photosynthetic Flux', value: '450 µmol/m²/s' },
        { label: 'Automated Sensor Nodes', value: '128 Active' },
        { label: 'Undergraduate Researchers', value: '140+ Annually' },
      ],
      highlights: [
        'Propagating drought-resilient crops for California Central Valley partners',
        'Direct farm-to-table logistics powering campus dining and the Farm Store',
        'Pesticide-free integrated biological pest management programs',
        'Real-time automated telemetry monitoring root zone dissolved oxygen',
      ],
      industryPartners: ['Grimmway Farms', 'Driscolls', 'USDA Agricultural Research Service']
    },
    2: {
      title: 'Liquid Rocket Propulsion Test Stand • Mojave Operations',
      college: 'College of Engineering • Aerospace Department',
      leadFaculty: 'Liquid Rocket Lab (LRL) Engineering Guild',
      location: 'Friends of Amateur Rocketry (FAR) Test Site, Mojave Desert',
      summary:
        'Cal Poly Pomona students design, machine, plumb, and test-fire full-scale liquid rocket engines from scratch. Operating under FAA and military safety protocols, the student team tests cryogenic LOX and sub-cooled methane propulsion architectures aiming for suborbital space.',
      metrics: [
        { label: 'Peak Chamber Pressure', value: '850 PSI' },
        { label: 'Engine Thrust Output', value: '1,200 lbf' },
        { label: 'Propellant Rail', value: 'LOX / Liquid Methane' },
        { label: 'Telemetry Refresh Rate', value: '1,000 Hz' },
      ],
      highlights: [
        'Regeneratively cooled 3D-printed Inconel rocket combustion chambers',
        'Bespoke pneumatic valve sequencing and high-speed data acquisition',
        'Student-manufactured launch stand capable of 3,000 lb static holds',
        'Direct engineering recruitment pipeline to NASA JPL, SpaceX, and Edwards AFB',
      ],
      industryPartners: ['NASA Jet Propulsion Laboratory', 'SpaceX', 'Northrop Grumman', 'Boeing']
    },
    3: {
      title: 'Autonomous Baja & Formula SAE Racing Prototyping Lab',
      college: 'Department of Mechanical Engineering',
      leadFaculty: 'Bronco Motorsports Engineering Guild',
      location: 'Building 17 Machine Shops & Chassis Prototyping Floor',
      summary:
        'From raw chromoly steel tubes to telemetry-linked autonomous race cars, Bronco Motorsports students fabricate 90% of all vehicle components in-house. Students master CNC 5-axis milling, carbon fiber composite layups, and CAN bus sensor arrays.',
      metrics: [
        { label: 'Spaceframe Torsional Rigidity', value: '1,850 Nm/deg' },
        { label: '0-60 MPH Acceleration', value: '3.2 Seconds' },
        { label: 'CAN-Bus Telemetry Bandwidth', value: '500 KBPS' },
        { label: 'National Competition Titles', value: '14 Podiums' },
      ],
      highlights: [
        'Custom multi-link pneumatic suspension designed with finite element analysis (FEA)',
        'Live onboard engine management telemetry streamed to pit wall monitors',
        'Autonomous braking actuation driven by stereo LiDAR and computer vision',
        'Hands-on mastery of TIG welding, metal lathe turning, and composite baking',
      ],
      industryPartners: ['Tesla', 'General Motors', 'Penske Racing', 'Altair Engineering']
    }
  };

  const detail = storyDetails[slide.id] || storyDetails[1];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white border-l-[16px] border-[#ffb81c] shadow-2xl flex flex-col my-auto overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-[#004731] text-white px-6 sm:px-10 py-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#a4d65e] font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ffb81c]"></span>
              <span>{detail.college}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {detail.title}
            </h2>
            <div className="text-xs text-emerald-200/80 font-mono">
              LOCATION: {detail.location} • {detail.leadFaculty}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded flex items-center justify-center transition-colors shrink-0 ml-4"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8 overflow-y-auto max-h-[75vh]">
          
          {/* Main Hero Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono tracking-widest text-[#004731] uppercase">
              The Learn-By-Doing Architecture
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              {detail.summary}
            </p>
          </div>

          {/* Real Telemetry & Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#f4f7f2] p-5 border border-[#004731]/15">
            {detail.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#004731]">
                  {m.value}
                </div>
                <div className="text-[11px] font-mono font-semibold text-gray-600 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Laboratory Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono tracking-widest text-[#004731] uppercase">
              Laboratory Capabilities & Student Roles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#004731] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Pipeline Partners */}
          <div className="border-t border-gray-200 pt-5 space-y-2">
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest block font-bold">
              Active Industry Partners & Career Pipelines
            </span>
            <div className="flex flex-wrap gap-2">
              {detail.industryPartners.map((partner, idx) => (
                <span key={idx} className="bg-[#004731]/10 text-[#004731] text-xs px-3 py-1 font-mono font-semibold">
                  {partner}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#f9faf8] border-t border-gray-200 px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-gray-500 font-mono">
            Cal Poly Pomona • Hands-On Polytechnic Engineering
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
            <a
              href="#apply"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#004731] hover:bg-[#003624] text-white text-xs font-bold uppercase tracking-wider shadow"
            >
              Apply to Program →
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
