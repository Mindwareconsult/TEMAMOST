import React, { useState } from 'react';
import { 
  Compass, 
  Building2, 
  Layers, 
  Kanban, 
  PenTool, 
  KeyRound, 
  Check, 
  ArrowRight, 
  HardHat, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesViewProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onNavigateToProjects: () => void;
  initialServiceId?: string;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenQuoteModal,
  onNavigateToProjects,
  initialServiceId
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES_DATA[0].id
  );

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

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

  const IconComponent = getIcon(currentService.iconName);

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="relative bg-[#08122B] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects/under-construction/S4.jpg"
            alt="Temamost Nigeria Ltd Structural Engineering & Construction"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08122B] via-[#08122B]/95 to-[#08122B]/85" />
          <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400 font-['Montserrat']">
                END-TO-END CAPABILITIES
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase font-['Montserrat'] tracking-tight leading-tight text-white mb-4">
              CONSTRUCTION & ENGINEERING <br />
              <span className="text-[#E31E24]">SERVICES</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From early geotechnical feasibility and cost modelling to prime structural execution and turnkey commissioning across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Services Explorer */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Sticky Service Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <div className="p-3 bg-slate-100 rounded-lg text-xs font-bold font-['Montserrat'] uppercase tracking-wider text-slate-500 mb-4">
              SELECT SERVICE SPECIALIZATION
            </div>

            {SERVICES_DATA.map((srv) => {
              const SrvIcon = getIcon(srv.iconName);
              const isActive = srv.id === selectedServiceId;

              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 border flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#0D1B3E] text-white border-[#0D1B3E] shadow-md ring-2 ring-[#E31E24]'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-red-400' : 'text-slate-400 group-hover:text-[#E31E24]'}`}>
                      {srv.number}
                    </span>
                    <div>
                      <div className={`text-xs sm:text-sm font-bold font-['Montserrat'] uppercase tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {srv.title}
                      </div>
                      <div className={`text-[11px] truncate max-w-[200px] ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {srv.capabilities[0]}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-red-400 translate-x-1' : 'text-slate-300 group-hover:text-slate-600'}`} />
                </button>
              );
            })}

            <div className="pt-6">
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-[#0D1B3E] font-['Montserrat'] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                  <span>Custom Contract Structures</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We adapt contracts to Lump Sum Fixed Price, Cost-Plus with GMP (Guaranteed Maximum Price), or Turnkey EPC agreements.
                </p>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full bg-[#E31E24] hover:bg-[#C81419] text-white py-2.5 rounded text-xs font-bold font-['Montserrat'] tracking-wider uppercase transition-colors"
                >
                  REQUEST TENDER ENGAGEMENT
                </button>
              </div>
            </div>
          </div>

          {/* Right: Detailed Service Dossier */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Header of Active Service */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#0D1B3E] text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                      SERVICE {currentService.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0D1B3E] font-['Montserrat'] uppercase tracking-tight">
                      {currentService.title}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(currentService.id)}
                  className="hidden sm:flex bg-[#E31E24] hover:bg-[#C81419] text-white px-5 py-2.5 rounded text-xs font-bold font-['Montserrat'] uppercase tracking-wider items-center gap-2 transition-colors"
                >
                  <HardHat className="w-4 h-4" />
                  <span>DISCUSS YOUR PROJECT</span>
                </button>
              </div>

              {/* Service Visual */}
              <div className="rounded-lg overflow-hidden h-64 sm:h-80 relative shadow-md mb-6">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#08122B]/85 text-white px-3 py-1.5 rounded text-xs font-mono">
                  Temamost Port Harcourt Execution Standard
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {currentService.fullDesc}
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] font-['Montserrat'] mb-4">
                Core Scope & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                    <Check className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What the Client Receives (Deliverables) */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] font-['Montserrat'] mb-4">
                What The Client Receives (Deliverables)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0D1B3E] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Engineering Approach */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#E31E24] font-['Montserrat'] mb-2">
                Our Engineering Approach
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentService.ourApproach}
              </p>
            </div>

            {/* Client Strategic Benefits */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] font-['Montserrat'] mb-3">
                Strategic Investor Benefits
              </h3>
              <ul className="space-y-2">
                {currentService.clientBenefits.map((benefit, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#E31E24] shrink-0 mt-1.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={onNavigateToProjects}
                className="text-xs font-bold text-slate-600 hover:text-[#0D1B3E] font-['Montserrat'] uppercase tracking-wider flex items-center gap-2"
              >
                <span>View Completed Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenQuoteModal(currentService.id)}
                className="w-full sm:w-auto bg-[#E31E24] hover:bg-[#C81419] text-white px-8 py-3.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <HardHat className="w-4 h-4" />
                <span>DISCUSS YOUR PROJECT</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
