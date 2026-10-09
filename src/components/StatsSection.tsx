import React from 'react';
import { COMPANY_STATS } from '../data/companyData';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-slate-900 border-b border-slate-800 py-16 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {COMPANY_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className={`text-center sm:text-left ${idx !== 0 ? 'sm:pl-8 pt-6 sm:pt-0' : ''}`}
            >
              <div className="text-3xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight flex items-baseline justify-center sm:justify-start gap-1">
                <span>{stat.value}</span>
                {stat.value.includes('+') && (
                  <span className="text-[#E31E24] text-3xl font-black">+</span>
                )}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-red-400 font-['Montserrat'] mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 max-w-xs">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
