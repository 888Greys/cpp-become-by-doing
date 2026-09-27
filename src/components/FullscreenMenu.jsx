import React, { useState } from 'react';
import { X, Search, Plus, Minus } from 'lucide-react';

export default function FullscreenMenu({ isOpen, onClose }) {
  const [expandedSection, setExpandedSection] = useState(null);

  if (!isOpen) return null;

  const toggleSection = (sec) => {
    setExpandedSection(expandedSection === sec ? null : sec);
  };

  const menuItems = [
    { title: 'Home', hasSub: false, link: '#' },
    { 
      title: 'About', 
      hasSub: true, 
      subLinks: ['At a Glance', 'Leadership & Administration', 'Points of Pride', 'History & Heritage', 'Kellogg Legacy'] 
    },
    { 
      title: 'Admissions & Aid', 
      hasSub: true, 
      subLinks: ['Apply to Cal Poly Pomona', 'Tuition & Financial Aid', 'First-Time Freshmen', 'Transfer Students', 'Graduate Admissions', 'Campus Visits & Tours'] 
    },
    { 
      title: 'Academics', 
      hasSub: true, 
      subLinks: ['Colleges & Departments', 'Undergraduate Majors', 'Graduate Programs', 'PolyX Signature Experiences', 'Academic Calendar', 'University Catalog'] 
    },
    { 
      title: 'Life At CPP', 
      hasSub: true, 
      subLinks: ['Housing & Residential Life', 'Clubs & Organizations', 'Dining & The Farm Store', 'BRIC Recreation Complex', 'Career Center', 'Diversity & Student Centers'] 
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#004731] text-white flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
      
      {/* 1. Menu Top Header (Exact Match to Image 4) */}
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 py-5 flex items-center justify-between border-b border-emerald-800/60 shrink-0">
        
        {/* Cal Poly Pomona Logo */}
        <a href="/" onClick={onClose} className="flex items-center gap-3">
          <img 
            src="/assets/cpp_logo_horizontal.png" 
            alt="Cal Poly Pomona" 
            className="h-9 sm:h-11 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Right Nav Action Links */}
        <div className="flex items-center gap-4 sm:gap-7">
          <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest text-[#FFB81C]">
            <a href="#apply" onClick={onClose} className="hover:text-white transition-colors">APPLY</a>
            <a href="#visit" onClick={onClose} className="hover:text-white transition-colors">VISIT</a>
            <a href="#info" onClick={onClose} className="hover:text-white transition-colors">INFO</a>
            <a href="#give" onClick={onClose} className="hover:text-white transition-colors">GIVE</a>
            <a href="https://my.cpp.edu" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">MYCPP</a>
          </div>

          <button className="text-white hover:text-[#FFB81C] transition-colors p-1" title="Search">
            <Search className="w-6 h-6 stroke-[2.2]" />
          </button>

          {/* Close X Button */}
          <button 
            onClick={onClose}
            className="text-white hover:text-[#FFB81C] transition-colors p-1"
            title="Close Menu"
          >
            <X className="w-7 h-7 stroke-[2.2]" />
          </button>
        </div>

      </div>

      {/* 2. Main Navigation Links Area */}
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-12 py-8 sm:py-12 flex-1">
        
        {/* Primary Serif Links with Plus Expanders (Exact match to Image 4) */}
        <div className="space-y-3 sm:space-y-5">
          {menuItems.map((item, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center justify-between max-w-xl cursor-pointer">
                <a 
                  href={item.link || '#'}
                  onClick={() => { if (!item.hasSub) onClose(); else toggleSection(item.title); }}
                  className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#a4d65e] hover:text-[#FFB81C] transition-colors font-normal tracking-tight"
                >
                  {item.title}
                </a>

                {item.hasSub && (
                  <button 
                    onClick={() => toggleSection(item.title)}
                    className="text-[#a4d65e] hover:text-[#FFB81C] p-2 transition-transform"
                  >
                    {expandedSection === item.title ? (
                      <Minus className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                    ) : (
                      <Plus className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                    )}
                  </button>
                )}
              </div>

              {/* Sub-menu accordion */}
              {item.hasSub && expandedSection === item.title && (
                <div className="pl-4 sm:pl-6 py-3 space-y-2 max-w-md border-l-2 border-emerald-700/60 mt-2 animate-in fade-in duration-150">
                  {item.subLinks.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={`#${sub.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      onClick={onClose}
                      className="block text-xs sm:text-sm font-sans text-emerald-100 hover:text-[#FFB81C] transition-colors py-1"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-md h-px bg-emerald-800/80 my-6 sm:my-8"></div>

        {/* Secondary Links (Athletics, Alumni, News & Events) */}
        <div className="space-y-2.5 font-sans text-base sm:text-lg text-white">
          <a href="#athletics" onClick={onClose} className="block hover:text-[#FFB81C] transition-colors">
            Athletics
          </a>
          <a href="#alumni" onClick={onClose} className="block hover:text-[#FFB81C] transition-colors">
            Alumni
          </a>
          <a href="#news" onClick={onClose} className="block hover:text-[#FFB81C] transition-colors">
            News & Events
          </a>
        </div>

        {/* Bottom Divider Line */}
        <div className="w-full max-w-md h-px bg-emerald-800/80 my-6 sm:my-8"></div>

      </div>

      {/* 3. Bottom Audience Links & Social Bar (Exact match to Image 4) */}
      <div className="border-t border-emerald-800/70 bg-[#003624] py-5 px-4 sm:px-8 shrink-0">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          
          {/* Audience Links */}
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs font-sans text-emerald-100">
            <a href="#future" onClick={onClose} className="hover:text-white">Future Students</a>
            <span className="text-emerald-700">|</span>
            <a href="#admitted" onClick={onClose} className="hover:text-white">Admitted Students</a>
            <span className="text-emerald-700">|</span>
            <a href="#current" onClick={onClose} className="hover:text-white">Current Students</a>
            <span className="text-emerald-700">|</span>
            <a href="#families" onClick={onClose} className="hover:text-white">Families</a>
            <span className="text-emerald-700">|</span>
            <a href="#faculty" onClick={onClose} className="hover:text-white">Faculty & Staff</a>
          </div>

          {/* Social Icons in Green Circles */}
          <div className="flex items-center gap-2.5">
            {/* Instagram */}
            <a href="https://instagram.com/calpolypomona" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#a4d65e] hover:bg-[#b5e772] text-[#003624] flex items-center justify-center transition-all shadow" title="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/school/cal-poly-pomona" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#a4d65e] hover:bg-[#b5e772] text-[#003624] flex items-center justify-center transition-all shadow" title="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com/calpolypomona" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#a4d65e] hover:bg-[#b5e772] text-[#003624] flex items-center justify-center transition-all shadow" title="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/calpolypomona" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#a4d65e] hover:bg-[#b5e772] text-[#003624] flex items-center justify-center transition-all shadow" title="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/></svg>
            </a>
            {/* X (Twitter) */}
            <a href="https://twitter.com/calpolypomona" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#a4d65e] hover:bg-[#b5e772] text-[#003624] flex items-center justify-center transition-all shadow" title="X (Twitter)">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
