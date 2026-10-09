import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  HardHat, 
  Users, 
  SlidersHorizontal, 
  Leaf 
} from 'lucide-react';

export const WhyTemamost: React.FC = () => {
  const differentiators = [
    {
      num: '01',
      icon: Award,
      title: 'PROVEN EXPERTISE',
      description: 'Experienced professionals across civil, structural, and electrical engineering, with extensive track records in Nigerian coastal conditions.'
    },
    {
      num: '02',
      icon: ShieldCheck,
      title: 'QUALITY-FIRST DELIVERY',
      description: 'Strict adherence to technical specifications, laboratory concrete testing, and rigorous QA/QC inspection throughout the project lifecycle.'
    },
    {
      num: '03',
      icon: HardHat,
      title: 'SAFETY & HSE CULTURE',
      description: 'Zero-harm policy integrated into every site routine. Full PPE compliance, daily hazard briefings, and certified safety personnel.'
    },
    {
      num: '04',
      icon: Users,
      title: 'CLIENT-CENTRIC APPROACH',
      description: 'Solutions developed around each investor’s strategic objectives, commercial budget, and critical timeline requirements.'
    },
    {
      num: '05',
      icon: SlidersHorizontal,
      title: 'PROJECT CONTROL SYSTEMS',
      description: 'Earned value analysis and critical-path scheduling to proactively manage scope, cost, materials procurement, and site productivity.'
    },
    {
      num: '06',
      icon: Leaf,
      title: 'SUSTAINABLE THINKING',
      description: 'Environmentally responsible building practices, energy-efficient MEP planning, and long-term durability designed for coastal longevity.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#08122B] text-white relative overflow-hidden">
      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400 font-['Montserrat']">
              WHY TEMAMOST
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-['Montserrat'] tracking-tight">
            THE DIFFERENCE IS IN <br />
            <span className="text-white underline decoration-[#E31E24] decoration-4 underline-offset-8">
              HOW WE DELIVER.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 font-normal">
            We combine rigorous international engineering disciplines with deep on-the-ground execution mastery across Port Harcourt and Nigeria.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <div 
                key={diff.num}
                className="bg-[#0D1B3E]/60 border border-slate-800 rounded-lg p-8 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-red-400">
                    {diff.num}
                  </span>
                  <div className="p-3 rounded bg-slate-800/80 text-white group-hover:text-[#E31E24] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold uppercase tracking-tight text-white font-['Montserrat'] mb-3 group-hover:text-red-400 transition-colors">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
