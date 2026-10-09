import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Building } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? TESTIMONIALS_DATA.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === TESTIMONIALS_DATA.length - 1 ? 0 : curr + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
            TRUSTED BY DEVELOPERS & INVESTORS
          </h2>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 sm:p-12 relative shadow-sm">
          <Quote className="w-12 h-12 text-[#E31E24]/20 absolute top-6 right-6" />

          <p className="text-base sm:text-xl text-slate-800 leading-relaxed font-normal mb-8 max-w-4xl italic">
            "{current.quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-200 gap-4">
            <div>
              <div className="text-base font-bold text-[#0D1B3E] font-['Montserrat']">
                {current.clientName}
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {current.position} · <span className="text-[#0D1B3E] font-semibold">{current.organization}</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                {current.location} · {current.projectType}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                onClick={prev}
                className="p-2.5 rounded-full border border-slate-300 hover:border-[#0D1B3E] hover:bg-white text-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-500 px-2">
                {currentIndex + 1} / {TESTIMONIALS_DATA.length}
              </span>
              <button
                onClick={next}
                className="p-2.5 rounded-full border border-slate-300 hover:border-[#0D1B3E] hover:bg-white text-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
