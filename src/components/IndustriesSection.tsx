import React from 'react';
import { 
  Home, 
  Building, 
  Factory, 
  Route, 
  Landmark, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/companyData';

interface IndustriesSectionProps {
  onOpenQuoteModal: () => void;
  onNavigateToProjects: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenQuoteModal,
  onNavigateToProjects
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return Home;
      case 'Building': return Building;
      case 'Factory': return Factory;
      case 'Route': return Route;
      case 'Landmark': return Landmark;
      case 'TrendingUp': return TrendingUp;
      default: return Building;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
                SECTOR EXPERTISE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
              INDUSTRIES WE SERVE
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md">
            Delivering tailored structural engineering and project management for private investors, corporate enterprises, and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((industry) => {
            const Icon = getIcon(industry.iconName);
            return (
              <div
                key={industry.title}
                className="bg-white rounded-lg p-7 border border-slate-200 hover:border-[#0D1B3E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-lg bg-slate-100 text-[#0D1B3E] group-hover:bg-[#E31E24] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      {industry.stats}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0D1B3E] uppercase tracking-tight font-['Montserrat'] mb-1">
                    {industry.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#E31E24] mb-3">
                    {industry.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onNavigateToProjects}
                    className="text-xs font-bold text-slate-700 hover:text-[#E31E24] font-['Montserrat'] uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenQuoteModal}
                    className="text-xs text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    Consult
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
