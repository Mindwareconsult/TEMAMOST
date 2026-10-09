import React from 'react';
import { 
  Building2, 
  Layers, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Droplet, 
  Wrench,
  CheckCircle2,
  HardHat,
  ArrowRight
} from 'lucide-react';
import { IndustriesSection } from '../components/IndustriesSection';

interface ExpertiseViewProps {
  onOpenQuoteModal: () => void;
  onNavigateToProjects: () => void;
}

export const ExpertiseView: React.FC<ExpertiseViewProps> = ({
  onOpenQuoteModal,
  onNavigateToProjects
}) => {
  const engineeringDisciplines = [
    {
      icon: Compass,
      title: 'Geotechnical & Niger Delta Foundation Engineering',
      desc: 'Port Harcourt and coastal Rivers State feature high water tables and alluvial clay soils. We engineer deep bored cast-in-place piles, precast driven piles, and reinforced pile rafts with crystalline waterproofing to ensure zero settlement.',
      capabilities: [
        'Cone Penetrometer Testing (CPT) & Borehole SPT Audits',
        'Continuous Flight Auger (CFA) Piling Systems',
        'Sub-surface Moisture Barrier & Bentonite Stabilization',
        'Foundation Load Settlement Testing'
      ]
    },
    {
      icon: Building2,
      title: 'Structural Concrete & Steel Fabrication',
      desc: 'Precision framing for multi-storey residential, corporate commercial, and industrial facilities. We enforce strict concrete batch testing (25MPa to 40MPa) and certified structural steel erection with ultrasonic weld inspections.',
      capabilities: [
        'Cast-in-situ Reinforced Concrete Framing',
        'Post-Tensioned Beams & Cantilever Calculations',
        'Pre-Engineered Heavy Steel Superstructures',
        'Fair-faced Architectural Concrete Finishes'
      ]
    },
    {
      icon: Droplet,
      title: 'Civil Drainage & Stormwater Infrastructure',
      desc: 'Heavy seasonal rainfall requires proactive hydraulic civil engineering. We design and construct trapezoidal concrete drains, heavy box culverts, and municipal stormwater retention channels to safeguard urban corridors.',
      capabilities: [
        'Hydraulic Gradient Flow Simulation',
        'Precast & In-Situ Trapezoidal Drain Networks',
        'Road Crossing Box Culverts (HS-20 Load Rated)',
        'Erosion Mitigation & Shoreline Revetment'
      ]
    },
    {
      icon: Zap,
      title: 'Mechanical, Electrical & Plumbing (MEP)',
      desc: 'High-voltage substation installations, automated generator synchronization, centralized chilled-water HVAC distribution, and addressable fire protection designed under COREN registered leadership.',
      capabilities: [
        'Industrial Substation & 11kV Reticulation',
        'Central HVAC Ducting & VRF Climate Controls',
        'Addressable Fire Suppression & Sprinkler Loops',
        'Smart BMS Building Management Automation'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative bg-[#08122B] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects/industrial/S2.jpg"
            alt="Temamost Nigeria Ltd Industrial Engineering & Steel Construction"
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
                TECHNICAL DISCIPLINES
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase font-['Montserrat'] tracking-tight leading-tight text-white mb-4">
              ENGINEERING RIGOR. <br />
              <span className="text-[#E31E24]">COASTAL RESILIENCE.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Specialized technical mastery across civil, geotechnical, structural, and electro-mechanical domains engineered specifically for Nigerian terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Disciplines Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {engineeringDisciplines.map((disc, idx) => {
              const Icon = disc.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-[#0D1B3E] text-white rounded-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded">
                        DISCIPLINE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold uppercase text-[#0D1B3E] font-['Montserrat'] tracking-tight mb-3">
                      {disc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {disc.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-200">
                      {disc.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={onOpenQuoteModal}
                      className="text-xs font-bold uppercase font-['Montserrat'] text-[#0D1B3E] hover:text-[#E31E24] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Inquire About Engineering Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <IndustriesSection
        onOpenQuoteModal={onOpenQuoteModal}
        onNavigateToProjects={onNavigateToProjects}
      />
    </div>
  );
};
