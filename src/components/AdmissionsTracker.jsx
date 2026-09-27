import React, { useState } from 'react';
import { Calendar, Award, DollarSign, Check, ExternalLink, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function AdmissionsTracker() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How does Cal Poly Pomona evaluate polytechnic applicants?',
      a: 'Admissions evaluates GPA in college-prep A-G courses, STEM readiness, extracurricular leadership in robotics or agriculture, and local priority area status. SAT/ACT scores are not utilized for admission.'
    },
    {
      q: 'What makes the "Learn by Doing" philosophy unique?',
      a: 'From your first semester, you are in laboratories, machine shops, and field experiments instead of solely theoretical lecture halls. Senior project capstones partner directly with industry clients like JPL and Boeing.'
    },
    {
      q: 'What financial aid and scholarship options exist for Broncos?',
      a: 'Over 70% of undergraduate students receive grants, fee waivers, or scholarships. Cal Poly Pomona is consistently recognized as the #1 university in the Western US for social and economic upward mobility.'
    }
  ];

  return (
    <section id="apply" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1600px] mx-auto w-full">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gray-200">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#ffb81c] uppercase block mb-2 font-mono">
            ADMISSIONS & PATHWAYS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#004731]">
            Join the Bronco Community
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-xs sm:text-sm text-gray-600 max-w-md font-sans">
          Applications for undergraduate freshmen, transfer, and graduate students are processed via the Cal State Apply network.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Deadlines & Key Dates (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#f7f9f5] border-l-8 border-[#004731] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#004731] font-bold uppercase mb-2">
              <Calendar className="w-4 h-4 text-[#ffb81c]" />
              <span>UPCOMING CAL STATE APPLY DEADLINES</span>
            </div>
            
            <div className="space-y-4 mt-4">
              <div className="flex items-start justify-between pb-3 border-b border-gray-200">
                <div>
                  <div className="font-bold text-sm text-[#004731]">Fall 2027 Freshman & Transfer Priority Window</div>
                  <div className="text-xs text-gray-500">October 1 – December 2</div>
                </div>
                <span className="bg-[#a4d65e] text-[#003624] text-[10px] font-mono font-bold px-2.5 py-1 uppercase">
                  OPEN NOW
                </span>
              </div>

              <div className="flex items-start justify-between pb-3 border-b border-gray-200">
                <div>
                  <div className="font-bold text-sm text-[#004731]">FAFSA & California Dream Act Priority Deadline</div>
                  <div className="text-xs text-gray-500">March 2 Priority Deadline</div>
                </div>
                <span className="bg-[#004731]/10 text-[#004731] text-[10px] font-mono font-bold px-2.5 py-1 uppercase">
                  FINANCIAL AID
                </span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="font-bold text-sm text-[#004731]">National Transfer Confirmation Deadline</div>
                  <div className="text-xs text-gray-500">May 1 National Candidate Reply</div>
                </div>
                <span className="bg-gray-200 text-gray-700 text-[10px] font-mono font-bold px-2.5 py-1 uppercase">
                  UPCOMING
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.calstate.edu/apply"
                target="_blank"
                rel="noreferrer"
                className="bg-[#004731] hover:bg-[#003624] text-white font-bold text-xs uppercase px-8 py-3.5 tracking-wider inline-flex items-center gap-2 shadow"
              >
                <span>Launch Cal State Apply</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#visit"
                className="bg-white hover:bg-gray-100 text-[#004731] font-bold text-xs uppercase px-6 py-3.5 tracking-wider border border-gray-300"
              >
                Book Campus Walking Tour
              </a>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="space-y-2 pt-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-2">
              Frequently Asked Questions
            </h4>
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-3.5 text-xs sm:text-sm font-bold text-[#004731] flex items-center justify-between hover:bg-gray-50"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-2 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobility Ranking Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#004731] text-white p-8 sm:p-10 flex flex-col justify-between border-t-8 border-[#ffb81c] shadow-xl">
          <div>
            <span className="font-mono text-xs text-[#a4d65e] font-bold uppercase tracking-widest block mb-2">
              WALL STREET JOURNAL & NYT RANKING
            </span>
            <h3 className="font-serif text-3xl font-bold text-white mb-4">
              #1 For Diversity & Economic Mobility
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-sans mb-6">
              According to the Wall Street Journal, Cal Poly Pomona is the premier institution in the West for transforming the social and economic trajectory of low- and middle-income students into high-earning engineering, aerospace, and agribusiness professionals.
            </p>

            <div className="space-y-3 pt-4 border-t border-emerald-800">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Check className="w-4 h-4 text-[#a4d65e]" />
                <span>Lowest undergraduate debt ratio in California</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Check className="w-4 h-4 text-[#a4d65e]" />
                <span>Over 94% graduate career placement within 6 months</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Check className="w-4 h-4 text-[#a4d65e]" />
                <span>Over 500 top-tier aerospace and technology corporate recruiters</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-800 flex items-center justify-between text-xs font-mono text-[#a4d65e]">
            <span>CAMPUS CODE: 001144</span>
            <span>FAFSA SCHOOL CODE: 001144</span>
          </div>
        </div>

      </div>

    </section>
  );
}
