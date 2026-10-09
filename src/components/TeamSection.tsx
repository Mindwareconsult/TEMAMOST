import React from 'react';
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  HardHat, 
  Ruler, 
  Layers, 
  Award,
  Sparkles
} from 'lucide-react';

interface TeamSectionProps {
  variant?: 'home' | 'about';
  onNavigateToAboutTeam?: () => void;
  onOpenQuoteModal?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  variant = 'about',
  onNavigateToAboutTeam,
  onOpenQuoteModal
}) => {
  if (variant === 'home') {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0A1633] text-white relative overflow-hidden border-y border-slate-800">
        {/* Architectural grid overlay */}
        <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Authentic Editorial Team Photograph */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 group">
                <div className="aspect-[16/11] sm:aspect-[16/10] w-full bg-slate-900 overflow-hidden relative">
                  <img
                    src="/team/team-group.jpg"
                    alt="Temamost Nigeria Ltd team group photograph"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Editorial Floating Caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/95 text-xs font-mono">
                    <span className="bg-[#0D1B3E]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 shadow">
                      The Temamost Nigeria Ltd team
                    </span>
                    <span className="bg-emerald-500/90 text-white font-bold px-2.5 py-1 rounded-md text-[11px] shadow flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>On-Site Personnel</span>
                    </span>
                  </div>
                </div>

                {/* Subtle corner badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#E31E24] text-white text-[11px] font-bold font-['Montserrat'] uppercase tracking-wider shadow-md">
                    <HardHat className="w-3.5 h-3.5" />
                    <span>Multidisciplinary Field Engineering</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Homepage Narrative & CTA */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[2px] bg-[#E31E24]" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400 font-['Montserrat']">
                    OUR PEOPLE
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-['Montserrat'] tracking-tight text-white leading-tight">
                  EXPERIENCE POWERED BY PEOPLE
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Our multidisciplinary team brings together construction, engineering, project management, environmental, administrative and health & safety expertise.
              </p>

              {/* 3 Core Competence Badges */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-[#E31E24] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    COREN-registered civil, structural and electrical engineers
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-[#E31E24] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    Certified HSE supervisors enforcing zero-harm safety codes
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-[#E31E24] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    Dedicated project cost accounting & administrative governance
                  </span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                {onNavigateToAboutTeam && (
                  <button
                    onClick={onNavigateToAboutTeam}
                    className="bg-[#E31E24] hover:bg-[#C81419] text-white px-7 py-3.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
                  >
                    <span>MEET OUR TEAM</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Primary Location: About Page Section
  return (
    <section id="team-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
              THE PEOPLE BEHIND THE PROJECTS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight leading-tight">
            MEET THE TEAM BEHIND TEMAMOST
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Behind every successful project is a team of professionals committed to planning, precision, quality and responsible delivery.
          </p>
        </div>

        {/* Large Editorial Team Photograph Display */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group mb-12">
          {/* Main Visual Responsive Container */}
          <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] w-full relative overflow-hidden">
            <img
              src="/team/team-group.jpg"
              alt="Temamost Nigeria Ltd team group photograph"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08122B]/85 via-transparent to-black/10 pointer-events-none" />

            {/* Top Verified Team Tag */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="bg-[#0D1B3E]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-md border border-slate-700/60 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E31E24]" />
                <span>Authentic Operational Team</span>
              </span>
            </div>

            {/* Bottom Caption Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-white">
              <div>
                <p className="text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm font-['Montserrat']">
                  Temamost Nigeria Ltd Team
                </p>
                <p className="text-[11px] text-slate-300 font-mono">
                  Site engineering, safety enforcement & field operations leadership
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-200 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <HardHat className="w-3.5 h-3.5 text-amber-400" />
                <span>Active Project Mobilization · Port Harcourt, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multidisciplinary Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#0D1B3E] text-white flex items-center justify-center mb-4">
              <Ruler className="w-5 h-5 text-[#E31E24]" />
            </div>
            <h3 className="text-sm font-bold uppercase font-['Montserrat'] text-[#0D1B3E] mb-2">
              Engineering & Technical Rigor
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Led by licensed civil and structural engineers who supervise all concrete batching, rebar testing, and laser alignment on live jobsites.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#0D1B3E] text-white flex items-center justify-center mb-4">
              <HardHat className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-sm font-bold uppercase font-['Montserrat'] text-[#0D1B3E] mb-2">
              Health, Safety & Environment (HSE)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Certified NEBOSH safety personnel embedded on active sites to enforce PPE compliance, hazard mitigation, and zero-harm operational standards.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#0D1B3E] text-white flex items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-sm font-bold uppercase font-['Montserrat'] text-[#0D1B3E] mb-2">
              Project Governance & Controls
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Disciplined project managers and financial administrators tracking schedules, critical milestones, and procurement fidelity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
