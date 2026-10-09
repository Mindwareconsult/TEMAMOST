import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

interface ProcessSectionProps {
  onOpenQuoteModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
              OUR METHODOLOGY
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
            5-STEP PROJECT DELIVERY PROCESS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            A structured, transparent lifecycle designed to eliminate surprise cost variations and maintain strict milestone accountability.
          </p>
        </div>

        {/* Desktop Horizontal Stepper Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-12">
          {/* Horizontal connecting line behind steps */}
          <div className="absolute top-7 left-12 right-12 h-[2px] bg-slate-200 z-0" />

          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 text-left p-4 rounded-lg transition-all duration-200 group ${
                  isCurrent 
                    ? 'bg-slate-50 border-2 border-[#E31E24] shadow-md' 
                    : 'bg-white border border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                    isCurrent 
                      ? 'bg-[#E31E24] text-white' 
                      : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                  }`}>
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Step {idx + 1}</span>
                </div>

                <div className="text-sm font-extrabold uppercase font-['Montserrat'] text-[#0D1B3E]">
                  {step.name}
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Card on Desktop */}
        <div className="hidden lg:block bg-slate-900 text-white p-8 rounded-xl border border-slate-800 shadow-xl">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-widest font-bold mb-2">
                <span>Phase {PROCESS_STEPS[activeStep].number}</span>
                <span>·</span>
                <span>{PROCESS_STEPS[activeStep].subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold uppercase font-['Montserrat'] text-white mb-4">
                {PROCESS_STEPS[activeStep].name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-white/5 px-4 py-2.5 rounded-lg border border-white/10 w-fit">
                <CheckCircle2 className="w-4 h-4" />
                <span>Primary Milestone Output: {PROCESS_STEPS[activeStep].deliverable}</span>
              </div>
            </div>

            <div className="col-span-4 border-l border-slate-800 pl-8 flex flex-col justify-center gap-4">
              <div className="text-xs text-slate-400 uppercase font-mono tracking-widest">
                Need guidance on this phase?
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#E31E24] hover:bg-[#C81419] text-white px-5 py-3 rounded text-xs font-bold font-['Montserrat'] tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper View */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-slate-50 border border-slate-200 rounded-lg p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#0D1B3E] text-white flex items-center justify-center font-mono font-bold text-xs">
                  {step.number}
                </span>
                <div>
                  <h4 className="text-sm font-extrabold uppercase font-['Montserrat'] text-[#0D1B3E]">
                    {step.name}
                  </h4>
                  <div className="text-[11px] text-[#E31E24] font-medium">
                    {step.subtitle}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-3 pt-3 border-t border-slate-200 text-[11px] text-slate-700 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
