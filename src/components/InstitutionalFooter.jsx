import React from 'react';

export default function InstitutionalFooter() {
  const colleges = [
    'Don B. Huntley College of Agriculture',
    'College of Business Administration',
    'Singelyn Graduate School of Business',
    'College of Education and Integrative Studies',
    'College of Engineering',
    'College of Environmental Design',
    'The Collins College of Hospitality Management',
    'College of Letters, Arts, and Social Sciences',
    'College of Professional and Global Education',
    'College of Science'
  ];

  const administration = [
    "President's Office",
    'Academic Affairs',
    'Administrative Affairs',
    'Student Affairs',
    'Information Technology',
    'University Advancement',
    'CPP Philanthropic Foundation',
    'Associated Students Incorporated'
  ];

  const resources = [
    'University Catalog',
    'Academic Manual',
    'Library',
    'Directory',
    'Calendar',
    'A-Z Index',
    'News',
    'Maps & Directions',
    'Jobs',
    'For the Media',
    'Info for Undocumented Community',
    'Parenting Student Support',
    'Learn about MyCPP'
  ];

  const campusSafety = [
    'Annual Security Report',
    'Campus Safety Plan',
    'Safety & Emergency Info',
    'Systemwide Hate Crimes Report (PDF)'
  ];

  const athletics = [
    'Bronco Athletics',
    'Schedule'
  ];

  return (
    <footer className="w-full bg-[#004731] text-white pt-12 sm:pt-16 pb-4 relative overflow-hidden">
      
      {/* 1. Audience Links Bar (Exact Match to Image 1) */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 pb-6 sm:pb-8">
        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm font-sans font-medium text-emerald-100/90">
          <a href="#future" className="hover:text-white transition-colors">Future Students</a>
          <span className="text-emerald-700/80">|</span>
          <a href="#admitted" className="hover:text-white transition-colors">Admitted Students</a>
          <span className="text-emerald-700/80">|</span>
          <a href="#current" className="hover:text-white transition-colors">Current Students</a>
          <span className="text-emerald-700/80">|</span>
          <a href="#alumni" className="hover:text-white transition-colors">Alumni</a>
          <span className="text-emerald-700/80">|</span>
          <a href="#families" className="hover:text-white transition-colors">Families</a>
          <span className="text-emerald-700/80">|</span>
          <a href="#faculty" className="hover:text-white transition-colors">Faculty & Staff</a>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-emerald-800/80 mt-6 sm:mt-8"></div>
      </div>

      {/* 2. Main 5-Column Directory (Exact Match to Image 1) */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Column 1: Colleges */}
          <div>
            <h4 className="font-display font-black text-sm tracking-[0.14em] uppercase text-white mb-5">
              COLLEGES
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-emerald-100/85">
              {colleges.map((item, idx) => (
                <li key={idx}>
                  <a href={`#college-${idx}`} className="hover:text-[#FFB81C] transition-colors leading-relaxed block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Administration */}
          <div>
            <h4 className="font-display font-black text-sm tracking-[0.14em] uppercase text-white mb-5">
              ADMINISTRATION
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-emerald-100/85">
              {administration.map((item, idx) => (
                <li key={idx}>
                  <a href={`#admin-${idx}`} className="hover:text-[#FFB81C] transition-colors leading-relaxed block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-display font-black text-sm tracking-[0.14em] uppercase text-white mb-5">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-emerald-100/85">
              {resources.map((item, idx) => (
                <li key={idx}>
                  <a href={`#res-${idx}`} className="hover:text-[#FFB81C] transition-colors leading-relaxed block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Campus Safety & Athletics */}
          <div>
            <div className="mb-8">
              <h4 className="font-display font-black text-sm tracking-[0.14em] uppercase text-white mb-5">
                CAMPUS SAFETY
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-emerald-100/85">
                {campusSafety.map((item, idx) => (
                  <li key={idx}>
                    <a href={`#safety-${idx}`} className="hover:text-[#FFB81C] transition-colors leading-relaxed block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-black text-sm tracking-[0.14em] uppercase text-white mb-4">
                ATHLETICS
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-emerald-100/85">
                {athletics.map((item, idx) => (
                  <li key={idx}>
                    <a href={`#athletics-${idx}`} className="hover:text-[#FFB81C] transition-colors leading-relaxed block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5: Campus Branding / Info */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-sm tracking-[0.14em] uppercase text-white mb-5">
              CAL POLY POMONA
            </h4>
            <p className="text-xs text-emerald-100/80 leading-relaxed font-sans">
              3801 W. Temple Ave.<br />
              Pomona, CA 91768
            </p>
            <p className="text-xs text-emerald-100/80 leading-relaxed font-sans">
              (909) 869-7659
            </p>
            <div className="pt-2">
              <span className="font-display font-extrabold text-[11px] uppercase tracking-wider text-[#A4D65E] block">
                #1 Polytechnic University in the West
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Legal & Compliance Strip (Exact Match to Image 1) */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 pt-8 pb-6 border-t border-emerald-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-sans text-emerald-200/70">
        <div>
          <p>Copyright ©2026 California State Polytechnic University, Pomona. All Rights Reserved</p>
          <p className="text-emerald-300/60 mt-0.5">A campus of The California State University.</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-emerald-100/90 font-medium">
          <a href="#title-ix" className="hover:text-white">Title IX</a>
          <a href="#feedback" className="hover:text-white">Feedback</a>
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#cookies" className="hover:text-white">Cookie Preferences</a>
          <a href="#accessibility" className="hover:text-white">Accessibility</a>
          <a href="#document-readers" className="hover:text-white">Document Readers</a>
        </div>
      </div>

      {/* 4. Bottom Solid Gold Stripe (Directly from Image 1) */}
      <div className="w-full h-2.5 sm:h-3 bg-[#FFB81C]"></div>

    </footer>
  );
}
