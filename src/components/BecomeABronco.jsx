import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BecomeABronco() {
  const cards = [
    {
      id: 1,
      image: '/assets/bronco-horses.jpg',
      label: 'FIND YOUR PASSION',
      href: '#majors-finder'
    },
    {
      id: 2,
      image: '/assets/bronco-rocket.jpg',
      label: 'SCHEDULE A TOUR',
      href: '#visit'
    },
    {
      id: 3,
      image: '/assets/bronco-campus.jpg',
      label: 'LEARN ABOUT CPP',
      href: '#info'
    }
  ];

  return (
    <section className="relative w-full bg-[#f8f9f6] pt-14 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
      
      {/* 1. Centered CAD Plumb Origin Line with Circle (Exact Match to Image 2) */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="w-px h-16 bg-[#004731]/70"></div>
        <div className="w-3.5 h-3.5 rounded-full border-2 border-[#004731] bg-white -mt-0.5"></div>
      </div>

      {/* 2. Headline: "Become a Bronco" in Serif */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-12 sm:mb-16">
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#004731] tracking-tight">
          Become a Bronco
        </h2>
      </div>

      {/* 3. Three Green Duotone Cards with Gold Buttons */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            className="group relative block aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] w-full overflow-hidden shadow-lg border-b-4 border-[#A6192E] transition-all transform hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Background Image with Cal Poly Green Duotone Tint */}
            <img
              src={card.image}
              alt={card.label}
              className="w-full h-full object-cover filter contrast-125 transition-transform duration-700 group-hover:scale-105"
            />

            {/* Green Tint Overlay */}
            <div className="absolute inset-0 bg-[#004731]/35 mix-blend-multiply transition-opacity group-hover:bg-[#004731]/20"></div>

            {/* Gold Central Action Box Button (Exact Match to Screenshot) */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div className="bg-[#FFB81C] group-hover:bg-[#ffc33b] text-[#003624] px-6 sm:px-8 py-3.5 sm:py-4 shadow-xl text-center transition-transform group-hover:scale-105">
                <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap">
                  {card.label}
                </span>
              </div>
            </div>

            {/* Bottom-Right Maroon / Green Border with External Link Icon */}
            <div className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 group-hover:bg-[#004731] text-white flex items-center justify-center border border-white/30 transition-colors">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>
        ))}
      </div>

      {/* 4. San Gabriel Mountain Silhouette Curve at Bottom (From Image 2) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg 
          viewBox="0 0 1200 80" 
          preserveAspectRatio="none" 
          className="w-full h-12 sm:h-16 fill-[#004731]/90"
        >
          <path d="M0,80 L0,65 L180,68 L240,55 L320,62 L420,40 L500,50 L640,30 L740,45 L860,25 L980,50 L1080,35 L1200,60 L1200,80 Z" />
        </svg>
      </div>

    </section>
  );
}
