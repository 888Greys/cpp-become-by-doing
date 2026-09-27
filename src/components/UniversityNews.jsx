import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function UniversityNews() {
  const stories = [
    {
      id: 1,
      image: '/assets/news-rankings.jpg',
      label: 'UNIVERSITY NEWS',
      title: 'Cal Poly Pomona Rises to No. 2 University in the West in U.S. News Rankings',
      href: '#news-1'
    },
    {
      id: 2,
      image: '/assets/news-trustee.jpg',
      label: 'COLLEGE OF SCIENCE',
      title: 'Dedication to Service, Academic Excellence Earns KeJuan Jones Top CSU Trustees Award',
      href: '#news-2'
    },
    {
      id: 3,
      image: '/assets/news-delegation.jpg',
      label: 'COLLEGE OF PROFESSIONAL AND GLOBAL EDUCATION',
      title: 'Yamazaki University Delegation Experiences CPP’s ‘Become by Doing’ Philosophy Up Close',
      href: '#news-3'
    }
  ];

  return (
    <section id="news" className="w-full bg-white py-14 sm:py-20 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        
        {/* Top Header with Green Accent Bar (Exact Match to Image 3) */}
        <div className="flex items-center justify-end mb-8 sm:mb-12">
          <div className="w-48 sm:w-64 h-2 bg-[#004731]/70"></div>
        </div>

        {/* Main News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
          
          {/* Left Column: Big Featured Alumni Story (Exact Match to Image 3) */}
          <div className="lg:col-span-5 flex flex-col justify-between group cursor-pointer">
            <div>
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-5 shadow-sm">
                <img
                  src="/assets/news-johans.jpg"
                  alt="Alumnus Johans Acosta"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Crimson Label */}
              <div className="font-display font-extrabold text-xs tracking-wider text-[#A6192E] uppercase mb-2">
                ALUMNI
              </div>

              {/* Headline */}
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#004731] group-hover:text-[#A6192E] transition-colors leading-snug">
                A New Prescription for Impact: Alumnus Johans Acosta’s Journey Into AI
              </h3>
            </div>

            {/* Crimson Bottom Line with External Link Icon (Exact match to Image 3) */}
            <div className="mt-6 pt-3 border-b-2 border-[#A6192E] flex justify-end">
              <div className="w-6 h-6 text-[#A6192E] flex items-center justify-center -mb-1">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Right Column: 3 Stacked Stories (Exact Match to Image 3) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8 sm:gap-10">
            {stories.map((story) => (
              <div 
                key={story.id}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  {/* Thumbnail on Left */}
                  <div className="w-full sm:w-44 md:w-52 aspect-[16/10] sm:aspect-[4/3] shrink-0 overflow-hidden bg-gray-100 shadow-sm">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Story Details */}
                  <div className="flex-1">
                    <div className="font-display font-extrabold text-[11px] sm:text-xs tracking-wider text-[#A6192E] uppercase mb-1.5">
                      {story.label}
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-normal text-[#004731] group-hover:text-[#A6192E] transition-colors leading-snug">
                      {story.title}
                    </h4>
                  </div>
                </div>

                {/* Crimson Rule with Icon */}
                <div className="mt-4 pt-2 border-b-2 border-[#A6192E] flex justify-end">
                  <div className="w-5 h-5 text-[#A6192E] flex items-center justify-center -mb-1">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
