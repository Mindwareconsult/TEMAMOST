import React from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  HardHat, 
  ShieldCheck, 
  Building2, 
  Award,
  Compass
} from 'lucide-react';
import { PageRoute } from '../types';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigateToProjects: () => void;
  onNavigateToAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onNavigateToProjects,
  onNavigateToAbout
}) => {
  return (
    <div className="relative bg-[#08122B] text-white overflow-hidden">
      {/* Background Architectural Construction Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/projects/under-construction/IMG_3431.JPG.jpeg"
          alt="Temamost Nigeria Ltd Multi-Storey Building Construction Site in Port Harcourt"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08122B] via-[#08122B]/90 to-[#08122B]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        {/* Architectural Fine Grid */}
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow Label with Brand Red Accent */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 sm:w-12 h-[3px] bg-[#E31E24]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-red-400 font-['Montserrat']">
              Port Harcourt · Rivers State · Nigeria
            </span>
          </div>

          {/* Bold Architectural Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white uppercase font-['Montserrat'] mb-6">
            BUILDING WITH <span className="text-white underline decoration-[#E31E24] decoration-4 underline-offset-8">PRECISION</span>.
            <br />
            DELIVERING WITH <span className="text-slate-100">CONFIDENCE</span>.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
            <strong className="text-white font-semibold">Temamost Nigeria Ltd</strong> delivers comprehensive engineering, construction, and project management solutions for residential, commercial, industrial, and infrastructure developments across Nigeria.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#E31E24] hover:bg-[#C81419] text-white px-8 py-4 rounded font-['Montserrat'] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-red-950/40 hover:shadow-red-800/50 flex items-center justify-center gap-3 group active:translate-y-0.5"
            >
              <HardHat className="w-5 h-5 text-white/90" />
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateToProjects}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 px-7 py-4 rounded font-['Montserrat'] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>EXPLORE OUR PROJECTS</span>
            </button>
          </div>
        </div>

        {/* Hero Features Strip Cards */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-white/5 border border-white/10 text-[#E31E24]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white font-['Montserrat']">
                General Construction
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Structural & Civil Works
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-white/5 border border-white/10 text-[#E31E24]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white font-['Montserrat']">
                Design & Build
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Single-Point Delivery
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-white/5 border border-white/10 text-[#E31E24]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white font-['Montserrat']">
                Zero Harm HSE
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Rigorous Safety Culture
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-white/5 border border-white/10 text-[#E31E24]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white font-['Montserrat']">
                Est. 2017
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                2,000+ Engagements
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
           onClick={() => {
             window.scrollBy({ top: 500, behavior: 'smooth' });
           }}>
        <span className="text-[10px] tracking-widest font-mono uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </div>
  );
};
