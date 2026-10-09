import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Ruler, Building } from 'lucide-react';
import { PageRoute } from '../types';

interface CompanyIntroProps {
  onNavigateToAbout: () => void;
  onOpenQuoteModal: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({
  onNavigateToAbout,
  onOpenQuoteModal
}) => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photo with Technical Framing & Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/projects/under-construction/IMG_3432.JPG.jpeg"
                alt="Temamost Nigeria Ltd Structural Building Frame Construction in Port Harcourt"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 via-transparent to-transparent" />
              
              {/* Technical Overlay Coordinate Grid */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-mono">
                <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
                  PORT HARCOURT · PHC-01
                </span>
                <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
                  EST. 2017
                </span>
              </div>
            </div>

            {/* Corner Decorative Accent & Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#0D1B3E] text-white p-5 rounded-lg shadow-xl border-l-4 border-[#E31E24] max-w-xs">
              <div className="flex items-center gap-2 text-[#E31E24] text-xs font-bold uppercase tracking-wider mb-1 font-['Montserrat']">
                <ShieldCheck className="w-4 h-4" />
                <span>Single-Point Delivery</span>
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                From foundation geotechnical surveys to final structural turnover with zero quality compromise.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 lg:pl-4">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
                WHO WE ARE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight uppercase font-['Montserrat'] mb-6">
              ENGINEERING VISIONS INTO <span className="text-[#E31E24]">LASTING STRUCTURES</span>
            </h2>

            {/* Lead Body Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-normal">
              <strong>Temamost Nigeria Ltd</strong> is an engineering and construction company based in Port Harcourt, Nigeria. Established in 2017, we provide professional construction, project management, and infrastructure solutions designed around quality, efficiency, safety, and client satisfaction.
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              We operate across residential developments, commercial high-spec facilities, heavy industrial structures, and municipal civil engineering projects. Our leadership brings hands-on field expertise and licensed COREN-compliant engineering to every site in Rivers State and across Nigeria.
            </p>

            {/* 4 Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Sub-surface Geotechnical Precision
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Strict Cost & Schedule Variance Audits
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Full Regulatory CAC & FIRS Compliance
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Comprehensive Turnkey Handover
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onNavigateToAbout}
                className="bg-[#0D1B3E] hover:bg-[#162B5E] text-white px-6 py-3.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2 group shadow-sm"
              >
                <span>ABOUT TEMAMOST</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="text-[#E31E24] hover:text-[#C81419] font-['Montserrat'] text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 py-3.5 px-3 transition-colors"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
