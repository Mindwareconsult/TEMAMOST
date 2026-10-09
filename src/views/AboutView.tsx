import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  HardHat, 
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { CORE_VALUES, LEADERSHIP_TEAM, COMPANY_CONTACT } from '../data/companyData';
import { CertificationsSection } from '../components/CertificationsSection';
import { ClientTrustSection } from '../components/ClientTrustSection';
import { TeamSection } from '../components/TeamSection';

interface AboutViewProps {
  onOpenQuoteModal: () => void;
  onNavigateToProjects: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenQuoteModal,
  onNavigateToProjects
}) => {
  return (
    <div className="bg-white">
      {/* About Page Hero */}
      <section className="relative bg-[#08122B] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects/under-construction/IMG_3431.JPG.jpeg"
            alt="Temamost Nigeria Ltd Civil Engineering Leadership in Port Harcourt"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08122B] via-[#08122B]/95 to-[#08122B]/85" />
          <div className="absolute inset-0 bg-blueprint-grid-dark opacity-30 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400 font-['Montserrat']">
                ABOUT TEMAMOST NIGERIA LTD
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase font-['Montserrat'] tracking-tight leading-tight text-white mb-6">
              BUILDING A STRONGER FUTURE THROUGH <br />
              <span className="text-[#E31E24]">ENGINEERING & CONSTRUCTION</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Established in 2017 in Port Harcourt, Nigeria, Temamost Nigeria Ltd is dedicated to delivering engineering excellence, rigorous project governance, and enduring infrastructure across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & Founding Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#E31E24]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#E31E24] font-['Montserrat']">
                  OUR STORY & HERITAGE
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
                FOUNDED ON FIELD INTEGRITY & TECHNICAL RIGOR
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Temamost Nigeria Ltd was incorporated on September 27, 2017 (RC 1441087) in Port Harcourt, Rivers State. From inception, the company set out with a clear purpose: to bridge the gap between ambitious architectural concepts and constructible, durable engineering reality in Nigeria.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In a regional environment characterized by challenging geotechnical profiles, high rainfall, and supply chain volatility, Temamost pioneered an institutional approach to construction management. By deploying registered COREN and NSE engineers on every site and enforcing uncompromising QA/QC material testing, we have successfully completed and consulted on more than 2,000 project engagements.
              </p>

              <div className="p-4 bg-slate-50 border-l-4 border-[#0D1B3E] rounded-r text-xs sm:text-sm text-slate-700 italic">
                "Our reputation rests on concrete that cures without flaws, beams that exceed safety tolerances, and projects handed over without hidden variations."
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/projects/under-construction/IMG_3432.JPG.jpeg"
                  alt="Temamost Nigeria Ltd Multi-Level Building Construction in Port Harcourt"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0D1B3E]/90 text-white p-4 rounded backdrop-blur-sm flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold font-['Montserrat'] uppercase">Port Harcourt Headquarters</div>
                    <div className="text-slate-300 text-[11px]">Plot 5, Peter Odili Extension, Woji</div>
                  </div>
                  <span className="bg-[#E31E24] px-2.5 py-1 rounded text-[10px] font-bold uppercase font-mono">
                    RC 1441087
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-red-50 text-[#E31E24] rounded-lg w-fit mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight mb-3">
                OUR MISSION
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To deliver superior engineering, construction, and project management services that empower our clients, uphold strict safety codes, and contribute to lasting infrastructural development across Nigeria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-blue-50 text-[#0D1B3E] rounded-lg w-fit mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight mb-3">
                OUR VISION
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be Nigeria's premier engineering and construction partner of choice, celebrated for technical precision, ethical project governance, and zero-compromise craftsmanship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-slate-100 text-[#0D1B3E] rounded-lg w-fit mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight mb-3">
                OUR PURPOSE
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To transform client capital and architectural vision into resilient physical structures that stand as enduring testaments to engineering excellence and community progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES: The TEMA Architecture */}
      <section className="py-20 lg:py-28 bg-[#0D1B3E] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400 font-['Montserrat']">
                THE FOUNDATION OF OUR NAME
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-['Montserrat'] tracking-tight">
              THE <span className="text-[#E31E24]">T.E.M.A</span> CORE VALUES
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              Every decision made across our job sites, tender documents, and engineering calculations is anchored in our four non-negotiable principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.letter}
                className="bg-[#08122B]/80 border border-slate-800 rounded-xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="text-5xl font-black font-mono text-[#E31E24] mb-4">
                    {val.letter}
                  </div>
                  <h3 className="text-lg font-black uppercase text-white font-['Montserrat'] tracking-wider mb-1">
                    {val.title}
                  </h3>
                  <div className="text-xs font-semibold text-red-400 mb-4">
                    {val.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The People Behind The Projects: Authentic Team Group Photograph */}
      <TeamSection
        variant="about"
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* Leadership & Key Personnel */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
                GOVERNANCE & EXECUTION
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
              LEADERSHIP & ENGINEERING MANAGEMENT
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Our registered engineers and managers bring decades of combined technical leadership across civil, structural, environmental, and financial domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 right-3 bg-[#0D1B3E]/90 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded">
                      {member.designation}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-bold text-[#0D1B3E] font-['Montserrat'] uppercase">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#E31E24] mt-0.5 mb-2">
                      {member.role}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mb-3">
                      Specialization: {member.specialization}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Location: CERTIFICATIONS & CREDENTIALS Section */}
      <CertificationsSection
        variant="about"
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* Corporate Clientele & Partners Section */}
      <ClientTrustSection
        variant="about"
        onNavigateToProjects={onNavigateToProjects}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* Quality Commitment & HSE Safety Charter */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-[#0D1B3E]/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#E31E24]" />
                <h3 className="text-lg font-bold uppercase font-['Montserrat']">
                  OUR QUALITY ASSURANCE COMMITMENT
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                At Temamost Nigeria Ltd, quality is engineered, not inspected after the fact. We mandate batch-level slump and compressive strength tests on all concrete, source rebar only from certified rolling mills, and conduct laser-level floor flatness audits. Every milestone requires signed-off QA/QC checklists before subsequent phases mobilize.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  <span>Certified materials laboratory verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  <span>Zero-tolerance on structural steel under-sizing</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-[#0D1B3E]/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#E31E24]" />
                <h3 className="text-lg font-bold uppercase font-['Montserrat']">
                  HEALTH, SAFETY & ENVIRONMENT (HSE) CHARTER
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Zero Lost Time Incidents (LTI) is our perpetual standard. Every live construction site begins the workday with mandatory toolbox safety meetings, equipment pre-flight inspections, and mandatory personal protective equipment (PPE) compliance. Our dedicated HSE officers hold stop-work authority on all activities if safety thresholds are breached.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  <span>Mandatory PPE compliance for workforce & site visitors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                  <span>Continuous environmental containment of site runoffs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#E31E24] hover:bg-[#C81419] text-white px-8 py-3.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase transition-colors"
            >
              DISCUSS YOUR PROJECT WITH OUR LEADERSHIP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
