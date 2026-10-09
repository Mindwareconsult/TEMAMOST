import React, { useState } from 'react';
import { ProjectsSection } from '../components/ProjectsSection';
import { ClientTrustSection } from '../components/ClientTrustSection';
import { Search, Filter, ShieldCheck, MapPin } from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';

interface ProjectsViewProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-white">
      {/* Portfolio Hero Banner */}
      <section className="relative bg-[#08122B] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects/residential/P1.jpg"
            alt="Temamost Nigeria Ltd Project Portfolio Showcase"
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
                VERIFIED PROJECT PORTFOLIO
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase font-['Montserrat'] tracking-tight leading-tight text-white mb-4">
              PROVEN EXECUTION <br />
              <span className="text-[#E31E24]">ACROSS NIGERIA</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Browse our delivered commercial developments, luxury residential villas, industrial logistics centers, and civil infrastructure channels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filterable Projects Section */}
      <ProjectsSection
        showAll={true}
        onNavigateToProjects={() => {}}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* Corporate Clients & Partners Section */}
      <ClientTrustSection
        variant="projects"
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </div>
  );
};

