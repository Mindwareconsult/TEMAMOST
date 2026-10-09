import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CompanyIntro } from './components/CompanyIntro';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyTemamost } from './components/WhyTemamost';
import { StatsSection } from './components/StatsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProcessSection } from './components/ProcessSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ClientTrustSection } from './components/ClientTrustSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsightsSection } from './components/InsightsSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

// Dedicated Full Views
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ProjectsView } from './views/ProjectsView';
import { ExpertiseView } from './views/ExpertiseView';
import { InsightsView } from './views/InsightsView';
import { ContactView } from './views/ContactView';

import { PageRoute } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceIdForQuote, setSelectedServiceIdForQuote] = useState<string | undefined>(undefined);
  const [targetServiceForView, setTargetServiceForView] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceIdForQuote(serviceId);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedServiceIdForQuote(undefined);
  };

  const handleSelectServiceFromNavbar = (serviceId: string) => {
    setTargetServiceForView(serviceId);
    setCurrentPage('services');
  };

  const handleNavigateToAboutCredentials = () => {
    setCurrentPage('about');
    setTimeout(() => {
      const el = document.getElementById('credentials-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#E31E24] selection:text-white">
      {/* Sticky Primary Header & Brand Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenQuoteModal={handleOpenQuoteModal}
        onSelectService={handleSelectServiceFromNavbar}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onNavigateToProjects={() => {
                setCurrentPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToAbout={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <TrustBar />

            <CompanyIntro
              onNavigateToAbout={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            <ServicesSection
              onNavigateToServices={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            <ProjectsSection
              onNavigateToProjects={() => {
                setCurrentPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            <WhyTemamost />

            <ClientTrustSection
              variant="home"
              onNavigateToProjects={() => {
                setCurrentPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            <StatsSection />

            <IndustriesSection
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onNavigateToProjects={() => {
                setCurrentPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <ProcessSection
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            <CertificationsSection
              variant="home"
              onNavigateToAboutCredentials={handleNavigateToAboutCredentials}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            <TeamSection
              variant="home"
              onNavigateToAboutTeam={() => {
                setCurrentPage('about');
                setTimeout(() => {
                  const el = document.getElementById('team-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }, 80);
              }}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            <TestimonialsSection />

            <InsightsSection
              onNavigateToInsights={() => {
                setCurrentPage('insights');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutView
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onNavigateToProjects={() => {
              setCurrentPage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView
            initialServiceId={targetServiceForView}
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateToProjects={() => {
              setCurrentPage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsView
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'expertise' && (
          <ExpertiseView
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onNavigateToProjects={() => {
              setCurrentPage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsView />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}
      </main>

      {/* Pre-Footer Conversion Strip & Multi-Column Corporate Footer */}
      <Footer
        onNavigate={(route) => setCurrentPage(route)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Interactive Consultation / Quote Intake Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedServiceId={selectedServiceIdForQuote}
      />
    </div>
  );
}
