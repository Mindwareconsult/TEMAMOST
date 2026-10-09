import React, { useState } from 'react';
import { 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import { AUTHENTIC_CLIENTS } from '../data/companyData';
import { ClientOrganization } from '../types';

interface ClientTrustSectionProps {
  variant?: 'home' | 'about' | 'projects';
  onNavigateToProjects?: () => void;
  onNavigateToContact?: () => void;
  onOpenQuoteModal?: () => void;
}

export const ClientTrustSection: React.FC<ClientTrustSectionProps> = ({
  variant = 'home',
  onNavigateToProjects,
  onNavigateToContact,
  onOpenQuoteModal
}) => {
  const [selectedClient, setSelectedClient] = useState<ClientOrganization | null>(null);

  // Background styling according to variant
  const bgClasses = 
    variant === 'about'
      ? 'bg-slate-50 border-y border-slate-200'
      : variant === 'projects'
      ? 'bg-white border-y border-slate-200'
      : 'bg-white border-y border-slate-200';

  return (
    <section 
      id="clients-section" 
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${bgClasses}`}
    >
      {/* Subtle blueprint grid texture for engineering precision */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
                CORPORATE TRACK RECORD & CLIENTELE
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-['Montserrat'] tracking-tight text-[#0D1B3E] leading-tight">
              TRUSTED BY OUR CLIENTS & PARTNERS
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Over the years, Temamost Nigeria Ltd has had the opportunity to work with organizations across different sectors, delivering construction, engineering and project management solutions tailored to their requirements.
            </p>
          </div>

          {/* Action Link / Trust Stat */}
          <div className="hidden sm:flex items-center gap-3 self-start md:self-end bg-slate-50 border border-slate-200/90 rounded-lg p-3.5 px-4 shadow-sm">
            <div className="w-9 h-9 rounded-full bg-[#0D1B3E]/10 flex items-center justify-center text-[#0D1B3E] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#E31E24]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0D1B3E] font-['Montserrat'] uppercase tracking-wider">
                COMMITTED PARTNERSHIP
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Verified B2B & Institutional Portfolio
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {AUTHENTIC_CLIENTS.map((client) => {
            const isSelected = selectedClient?.id === client.id;
            return (
              <div
                key={client.id}
                onClick={() => setSelectedClient(isSelected ? null : client)}
                className={`group relative bg-white rounded-xl p-6 sm:p-8 border transition-all duration-300 flex flex-col items-center justify-between text-center cursor-pointer ${
                  isSelected 
                    ? 'border-[#0D1B3E] ring-2 ring-[#0D1B3E]/20 shadow-xl -translate-y-1' 
                    : 'border-slate-200/80 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1'
                }`}
              >
                {/* Subtle top indicator for category */}
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
                    {client.regNumber || 'Verified Client'}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#0D1B3E]/10 group-hover:text-[#0D1B3E] transition-colors">
                    <Info className="w-3 h-3" />
                  </div>
                </div>

                {/* Logo Frame: Centered with generous whitespace & controlled proportions */}
                <div className="w-full h-28 sm:h-32 flex items-center justify-center py-2 px-3">
                  <img
                    src={client.logo}
                    alt={client.altText}
                    className="max-h-full max-w-full object-contain filter grayscale contrast-125 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Organization Details */}
                <div className="w-full mt-4 pt-4 border-t border-slate-100">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0D1B3E] font-['Montserrat'] tracking-wide group-hover:text-[#E31E24] transition-colors line-clamp-1">
                    {client.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 font-medium">
                    {client.category}
                  </p>
                </div>

                {/* Click tooltip hint */}
                <div className="w-full mt-3 flex items-center justify-center gap-1 text-[10px] font-medium text-slate-400 group-hover:text-[#0D1B3E] transition-colors">
                  <span>{isSelected ? 'Close details' : 'View collaboration'}</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Detailed Collaboration Drawer / Card if a client is selected */}
        {selectedClient && (
          <div className="mt-8 bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-2xl animate-fade-in relative">
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xs font-mono px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              ✕ Close
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex flex-col items-center justify-center bg-white rounded-lg p-6">
                <img
                  src={selectedClient.logo}
                  alt={selectedClient.altText}
                  className="max-h-24 max-w-full object-contain"
                />
                <span className="mt-3 text-[10px] font-mono text-slate-600 font-bold uppercase tracking-wider text-center">
                  {selectedClient.name}
                </span>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E31E24]/20 text-red-400 text-[11px] font-bold font-['Montserrat'] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{selectedClient.category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-['Montserrat'] text-white uppercase tracking-tight">
                  {selectedClient.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedClient.relationship}
                </p>

                <div className="pt-2">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Scope of Construction & Engineering Solutions:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedClient.serviceScope.map((scopeItem, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#E31E24]" />
                        <span>{scopeItem}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-3 justify-center border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-6">
                {selectedClient.website && (
                  <a
                    href={selectedClient.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold font-['Montserrat'] tracking-wider uppercase transition-colors"
                  >
                    <span>Visit Client Site</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}

                {onOpenQuoteModal && (
                  <button
                    onClick={onOpenQuoteModal}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-[#E31E24] hover:bg-[#C81419] text-white text-xs font-bold font-['Montserrat'] tracking-wider uppercase transition-colors shadow-md"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Supporting Context & Bottom Statement */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 text-slate-500 text-xs">
            <Building2 className="w-4 h-4 text-[#0D1B3E] shrink-0" />
            <span>
              Real corporate relationships delivered with strict compliance, engineering codes and contractual fidelity.
            </span>
          </div>

          {onNavigateToProjects && (
            <button
              onClick={onNavigateToProjects}
              className="text-[#0D1B3E] hover:text-[#E31E24] font-['Montserrat'] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors group shrink-0"
            >
              <span>EXPLORE OUR PROJECT PORTFOLIO</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
