import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function GuaranteedAdmissions({ onOpenApply }) {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
        
        {/* Left Column: Athletic Gold Grid with Circular Drone Cutout (Exact Match to Image 5) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="gold-grid w-full max-w-[460px] aspect-square p-8 sm:p-10 flex items-center justify-center shadow-xl">
            {/* Circular Image Frame */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
              <img
                src="/assets/drone-students.jpg"
                alt="Cal Poly Pomona students assembling autonomous hexacopter drone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Guaranteed Admissions Copy & Button (Exact Match to Image 5) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Category Tag */}
          <div className="font-display font-extrabold text-xs sm:text-sm tracking-widest text-[#004731] uppercase">
            BECOME A BRONCO
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#004731] tracking-tight leading-[1.15]">
            Apply Now for Guaranteed Admissions*
          </h2>

          {/* Policy Text with Asterisk */}
          <p className="text-xs sm:text-sm text-gray-700 font-sans leading-relaxed max-w-2xl pt-1">
            *For guaranteed admissions, local first-time freshmen applicants must meet CSU eligibility requirements and apply to a non-impacted major. Transfer students, both local and non-local, must meet CSU eligibility requirements and apply to a non-impacted major.
          </p>

          {/* Lime Green Button with External Arrow Icon */}
          <div className="pt-3">
            <button
              onClick={() => { if (onOpenApply) onOpenApply(); }}
              className="inline-flex items-center gap-3 bg-[#A4D65E] hover:bg-[#b5e772] text-[#003624] font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>APPLY NOW</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
