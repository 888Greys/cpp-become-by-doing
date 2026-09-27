import React, { useState, useMemo } from 'react';
import { Search, BookOpen, GraduationCap, ChevronRight, Award, Compass, ArrowUpRight } from 'lucide-react';

export const MAJORS_DATA = [
  {
    id: 'aero-eng',
    name: 'Aerospace Engineering',
    degree: 'B.S. / M.S.',
    college: 'College of Engineering',
    collegeKey: 'engineering',
    facility: 'Subsonic & Supersonic Wind Tunnels, Rocket Propulsion Rig',
    careers: ['NASA JPL', 'SpaceX', 'Northrop Grumman', 'Boeing'],
    polyX: 'Liquid Rocket Suborbital Test Stand Guild',
    description: 'Design and test next-generation aircraft, satellites, and space launch systems with hands-on computational fluid dynamics.'
  },
  {
    id: 'mech-eng',
    name: 'Mechanical Engineering',
    degree: 'B.S. / M.S.',
    college: 'College of Engineering',
    collegeKey: 'engineering',
    facility: 'Additive Manufacturing CNC Suite, Formula SAE Chassis Lab',
    careers: ['Tesla', 'General Motors', 'Apple Hardware', 'Virgin Orbit'],
    polyX: 'Bronco Motorsports Autonomous Baja SAE',
    description: 'Learn thermal design, kinematics, robotics, and machine prototyping with 100% lab-integrated coursework.'
  },
  {
    id: 'comp-sci',
    name: 'Computer Science',
    degree: 'B.S. / M.S.',
    college: 'College of Science',
    collegeKey: 'science',
    facility: 'Distributed Supercomputing Cluster, AI Robotics Lab',
    careers: ['Google', 'Amazon AWS', 'Microsoft', 'Defense Cyber Command'],
    polyX: 'National Collegiate Cyber Defense Competition',
    description: 'Master autonomous algorithms, distributed systems, cryptographic security, and neural intelligence.'
  },
  {
    id: 'plant-sci',
    name: 'Plant Science & Agronomy',
    degree: 'B.S.',
    college: 'Don B. Huntley College of Agriculture',
    collegeKey: 'agriculture',
    facility: '700-Acre Spadra Farm, Hydroponic Greenhouse Complex',
    careers: ['USDA-ARS', 'Driscoll’s', 'Grimmway Farms', 'Syngenta'],
    polyX: 'Regenerative Agriculture & Drought Gene Editing',
    description: 'Engineer sustainable high-yield crop systems, precision drip telemetry, and bio-friendly soil microbiomes.'
  },
  {
    id: 'arch-barch',
    name: 'Architecture (B.Arch - NAAB Accredited)',
    degree: '5-Year B.Arch / M.Arch',
    college: 'College of Environmental Design',
    collegeKey: 'env-design',
    facility: 'Design-Build Fabrication Yard, Laser & CNC Model Studios',
    careers: ['Gensler', 'HOK', 'Morphosis', 'Disney Imagineering'],
    polyX: 'Lyle Center for Regenerative Studies Prototype Shelter',
    description: 'Consistently ranked among the top architecture programs in the United States, championing regenerative design.'
  },
  {
    id: 'elect-eng',
    name: 'Electrical & Computer Engineering',
    degree: 'B.S. / M.S.',
    college: 'College of Engineering',
    collegeKey: 'engineering',
    facility: 'RF & Microwave Anechoic Chamber, VLSI Chip Test Lab',
    careers: ['Raytheon', 'Qualcomm', 'Intel', 'Lockheed Martin'],
    polyX: 'Autonomous Drone Swarm Telemetry Mesh',
    description: 'Design microelectronic circuits, power grids, sensor fusion arrays, and real-time embedded systems.'
  },
  {
    id: 'biotech',
    name: 'Biotechnology & Molecular Biology',
    degree: 'B.S.',
    college: 'College of Science',
    collegeKey: 'science',
    facility: 'BioTrek Rain Forest & Ethnobotany Learning Center',
    careers: ['Amgen', 'Gilead Sciences', 'Cedars-Sinai', 'Thermo Fisher'],
    polyX: 'CRISPR Gene Modulation in Environmental Stress',
    description: 'Investigate recombinant genetics, vaccine production, and metabolic telemetry in clinical and agricultural fields.'
  },
  {
    id: 'cis-tech',
    name: 'Computer Information Systems',
    degree: 'B.S.',
    college: 'College of Business Administration',
    collegeKey: 'business',
    facility: 'Mitchell C. Hill Center for Digital Innovation & Cloud Sandbox',
    careers: ['Deloitte', 'PwC Cyber', 'Salesforce', 'CrowdStrike'],
    polyX: 'Cloud Enterprise DevSecOps Auditing',
    description: 'Bridge business analytics and enterprise software engineering, cloud architecture, and cybersecurity compliance.'
  }
];

export default function MajorFinder() {
  const [selectedCollege, setSelectedCollege] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const colleges = [
    { key: 'all', label: 'All Disciplines' },
    { key: 'engineering', label: 'Engineering' },
    { key: 'agriculture', label: 'Agriculture' },
    { key: 'env-design', label: 'Environmental Design' },
    { key: 'science', label: 'Science' },
    { key: 'business', label: 'Business & Tech' }
  ];

  const filteredMajors = useMemo(() => {
    return MAJORS_DATA.filter((m) => {
      const matchesCollege = selectedCollege === 'all' || m.collegeKey === selectedCollege;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !query ||
        m.name.toLowerCase().includes(query) ||
        m.facility.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query) ||
        m.careers.some(c => c.toLowerCase().includes(query));
      return matchesCollege && matchesQuery;
    });
  }, [selectedCollege, searchQuery]);

  return (
    <section id="majors-finder" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1600px] mx-auto w-full">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-200">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#ffb81c] uppercase block mb-2 font-mono">
            POLYTECHNIC CURRICULUM
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#004731]">
            Explore 140+ Degree Programs
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-xs sm:text-sm text-gray-600 max-w-md font-sans">
          Every degree program at Cal Poly Pomona features mandatory laboratory coursework, industry design-build projects, and direct employer attachment.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 bg-[#f5f8f3] p-4 sm:p-5 border border-[#004731]/15">
        
        {/* College Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0">
          {colleges.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedCollege(c.key)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                selectedCollege === c.key
                  ? 'bg-[#004731] text-white shadow'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Instant Search Bar */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <input
            type="text"
            placeholder="Search programs, labs, or careers (e.g. Rocket, Tesla)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-300 px-4 py-2.5 pl-10 text-xs text-[#004731] outline-none focus:border-[#004731]"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-black"
            >
              ✕
            </button>
          )}
        </div>

      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMajors.map((major) => (
          <div 
            key={major.id}
            className="bg-white border border-gray-200 hover:border-[#004731] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Badge & Degree */}
              <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                <span className="bg-[#004731]/10 text-[#004731] font-bold px-2 py-0.5">
                  {major.degree}
                </span>
                <span className="text-gray-400">{major.collegeKey.toUpperCase()}</span>
              </div>

              {/* Major Title */}
              <h3 className="font-serif text-xl font-bold text-[#004731] group-hover:text-[#ffb81c] transition-colors mb-2">
                {major.name}
              </h3>

              <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed font-sans">
                {major.description}
              </p>

              {/* Laboratory Feature */}
              <div className="border-t border-gray-100 pt-3 space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-bold">
                  Dedicated Lab Facility
                </span>
                <div className="text-xs font-semibold text-gray-800 line-clamp-2">
                  {major.facility}
                </div>
              </div>

              {/* PolyX Signature Experience */}
              <div className="mt-3 space-y-1">
                <span className="text-[10px] font-mono text-[#004731] uppercase tracking-widest block font-bold flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#ffb81c]" />
                  <span>PolyX Signature</span>
                </span>
                <div className="text-xs text-emerald-800 font-medium">
                  {major.polyX}
                </div>
              </div>
            </div>

            {/* Careers Pipeline */}
            <div className="mt-6 pt-3 border-t border-gray-100">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                Top Hiring Pipeline
              </span>
              <div className="flex flex-wrap gap-1">
                {major.careers.map((career, i) => (
                  <span key={i} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                    {career}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredMajors.length === 0 && (
        <div className="text-center py-12 bg-gray-50 border border-gray-200">
          <BookOpen className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm font-bold text-gray-700">No programs match "{searchQuery}"</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCollege('all'); }}
            className="mt-2 text-xs font-bold text-[#004731] underline"
          >
            Clear filters
          </button>
        </div>
      )}

    </section>
  );
}
