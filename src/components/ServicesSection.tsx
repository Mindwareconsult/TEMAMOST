import React, { useState } from 'react';
import { 
  ArrowRight, 
  Compass, 
  Building2, 
  Layers, 
  Kanban, 
  PenTool, 
  KeyRound, 
  Check, 
  X,
  HardHat
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onNavigateToServices: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
  selectedServiceId?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigateToServices,
  onOpenQuoteModal,
  selectedServiceId
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Icon mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return Compass;
      case 'Building2': return Building2;
      case 'Layers': return Layers;
      case 'Kanban': return Kanban;
      case 'PenTool': return PenTool;
      case 'KeyRound': return KeyRound;
      default: return Building2;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
              COMPLETE CONSTRUCTION & <br className="hidden sm:inline" />
              <span className="text-[#0D1B3E]">PROJECT MANAGEMENT SOLUTIONS</span>
            </h2>
          </div>

          <button
            onClick={onNavigateToServices}
            className="self-start md:self-end text-xs font-bold font-['Montserrat'] tracking-wider uppercase text-[#0D1B3E] hover:text-[#E31E24] flex items-center gap-2 transition-colors pb-1 border-b-2 border-[#0D1B3E] hover:border-[#E31E24]"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv) => {
            const IconComponent = getIcon(srv.iconName);
            const isHighlight = selectedServiceId === srv.id;

            return (
              <div
                key={srv.id}
                className={`bg-white rounded-lg p-8 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                  isHighlight 
                    ? 'border-[#E31E24] shadow-xl ring-2 ring-[#E31E24]/20' 
                    : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-[#E31E24] transition-colors">
                      {srv.number}
                    </span>
                    <div className="p-3 rounded-lg bg-slate-50 text-[#0D1B3E] group-hover:bg-[#E31E24] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0D1B3E] uppercase tracking-tight font-['Montserrat'] mb-3 group-hover:text-[#E31E24] transition-colors">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>

                  {/* Key Capabilities Preview */}
                  <ul className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                    {srv.capabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] mt-1.5 shrink-0" />
                        <span className="leading-tight">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(srv)}
                    className="text-xs font-bold text-[#0D1B3E] group-hover:text-[#E31E24] font-['Montserrat'] tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(srv.id)}
                    className="text-[11px] font-semibold text-slate-400 hover:text-[#E31E24] transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
            {/* Modal Header */}
            <div className="relative bg-[#0D1B3E] text-white p-6 sm:p-8">
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close service modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-red-400 font-mono text-xs font-bold uppercase tracking-widest mb-2">
                <span>SERVICE {activeModalService.number}</span>
                <span>·</span>
                <span>TEMAMOST NIGERIA LTD</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-['Montserrat'] tracking-tight">
                {activeModalService.title}
              </h3>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Image banner */}
              <div className="rounded-lg overflow-hidden h-48 sm:h-56 relative shadow-md">
                <img
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white/90 font-medium bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
                    Active Delivery Standard · Port Harcourt, Nigeria
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-['Montserrat'] mb-2">
                  Service Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeModalService.fullDesc}
                </p>
              </div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] font-['Montserrat'] mb-3">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {activeModalService.capabilities.map((cap, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] font-['Montserrat'] mb-3">
                    Key Client Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {activeModalService.deliverables.map((del, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#0D1B3E] shrink-0 mt-1.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Approach & Benefits */}
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E31E24] font-['Montserrat']">
                  Our Engineering Approach
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeModalService.ourApproach}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-bold text-slate-600 hover:text-slate-900 font-['Montserrat'] uppercase transition-colors"
                >
                  Close Window
                </button>

                <button
                  onClick={() => {
                    const srvId = activeModalService.id;
                    setActiveModalService(null);
                    onOpenQuoteModal(srvId);
                  }}
                  className="w-full sm:w-auto bg-[#E31E24] hover:bg-[#C81419] text-white px-6 py-3 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <HardHat className="w-4 h-4" />
                  <span>DISCUSS THIS SERVICE FOR YOUR PROJECT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
