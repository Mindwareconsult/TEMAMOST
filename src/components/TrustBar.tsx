import React from 'react';
import { ShieldCheck, Award, MapPin, Wrench, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const credentials = [
    { icon: Award, label: 'ESTABLISHED 2017', sub: '8+ Years Excellence' },
    { icon: Wrench, label: 'ENGINEERING & CONSTRUCTION', sub: 'Turnkey & Civil Works' },
    { icon: ShieldCheck, label: 'PROJECT MANAGEMENT', sub: 'Cost & Schedule Controls' },
    { icon: CheckCircle2, label: 'QUALITY & HSE CERTIFIED', sub: 'Zero-Harm Site Record' },
    { icon: MapPin, label: 'PORT HARCOURT, NIGERIA', sub: 'Plot 5 Peter Odili Ext.' }
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 text-slate-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-3 ${idx !== 0 ? 'md:pl-4 pt-3 md:pt-0' : ''}`}
              >
                <div className="p-2 rounded bg-slate-800/80 text-[#E31E24] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-extrabold tracking-wider uppercase text-white font-['Montserrat'] truncate">
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium truncate">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
