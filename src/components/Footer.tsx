import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  HardHat, 
  ShieldCheck, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import { TemamostLogo } from './TemamostLogo';
import { COMPANY_CONTACT, SERVICES_DATA } from '../data/companyData';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <footer>
      {/* Pre-Footer Final Conversion Section */}
      <section className="relative bg-[#08122B] text-white py-20 lg:py-24 border-t-4 border-[#E31E24] overflow-hidden">
        {/* Architectural Photo Backdrop with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/projects/commercial/LP4.jpg"
            alt="Temamost Nigeria Ltd Completed Commercial Building Development"
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08122B] via-[#08122B]/95 to-[#08122B]/85" />
          <div className="absolute inset-0 bg-blueprint-grid-dark opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <HardHat className="w-4 h-4" />
              <span>COMMENCE YOUR CAPITAL PROJECT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase font-['Montserrat'] tracking-tight leading-tight text-white mb-4">
              READY TO BUILD YOUR <br />
              <span className="text-[#E31E24]">NEXT PROJECT?</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-8 max-w-2xl font-normal">
              From feasibility and geotechnical analysis to construction and turnkey handover, Temamost provides the technical rigor and project governance required to deliver with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-[#E31E24] hover:bg-[#C81419] text-white px-8 py-4 rounded font-['Montserrat'] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xl shadow-red-950/50 flex items-center justify-center gap-2"
              >
                <HardHat className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded font-['Montserrat'] text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <span>CONTACT OUR TEAM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Corporate Multi-Column Footer */}
      <div className="bg-[#0D1B3E] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            {/* Column 1: Company Profile with Authoritative Logo Card */}
            <div className="lg:col-span-4 space-y-4">
              {/* White badge container for the authoritative brand logo to preserve crisp contrast */}
              <div className="bg-white p-3 rounded-lg inline-block shadow-md">
                <TemamostLogo size="md" showTagline={false} />
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
                Temamost Nigeria Ltd is an engineering and construction company based in Port Harcourt, Nigeria. Established in 2017, delivering professional construction, project management, and infrastructure solutions.
              </p>

              <div className="text-[11px] font-mono text-slate-400 space-y-1">
                <div>CAC Registration: <span className="text-white font-semibold">{COMPANY_CONTACT.cacNumber}</span></div>
                <div>Tax Compliance: <span className="text-white font-semibold">{COMPANY_CONTACT.vatReg}</span></div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/temamost-nigeria-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-[#E31E24] transition-colors"
                  aria-label="Temamost on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-[#E31E24] transition-colors"
                  aria-label="Temamost on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-[#E31E24] transition-colors"
                  aria-label="Temamost on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Montserrat']">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    About Temamost
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('about');
                      setTimeout(() => {
                        const el = document.getElementById('credentials-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Certifications & Credentials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    All Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    Selected Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('expertise'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    Sectors & Expertise
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('insights'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    Industry Insights
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Montserrat']">
                SERVICES
              </h4>
              <ul className="space-y-2 text-xs">
                {SERVICES_DATA.map((srv) => (
                  <li key={srv.id}>
                    <button
                      onClick={() => {
                        onNavigate('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors text-left"
                    >
                      {srv.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-['Montserrat']">
                PORT HARCOURT OFFICE
              </h4>
              <div className="space-y-3 text-xs text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Plot 5, Peter Odili Extension (New Road), by Chelsea Filling Station, Gbalajam Junction, Woji Community Layout, Port Harcourt, Rivers State.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div>
                      <a href={`tel:${COMPANY_CONTACT.phones[0].replace(/\s/g, '')}`} className="hover:text-white">
                        {COMPANY_CONTACT.phones[0]}
                      </a>
                    </div>
                    <div>
                      <a href={`tel:${COMPANY_CONTACT.phones[1].replace(/\s/g, '')}`} className="hover:text-white">
                        {COMPANY_CONTACT.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div>
                      <a href={`mailto:${COMPANY_CONTACT.emails[0]}`} className="hover:text-white">
                        {COMPANY_CONTACT.emails[0]}
                      </a>
                    </div>
                    <div>
                      <a href={`mailto:${COMPANY_CONTACT.emails[1]}`} className="hover:text-white">
                        {COMPANY_CONTACT.emails[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright, Credits & Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
              <span>
                © 2017 - {new Date().getFullYear()} Temamost Nigeria Ltd. All Rights Reserved. RC 1441087.
              </span>
              <span className="hidden sm:inline text-slate-700">|</span>
              <span>
                Website developed by{' '}
                <a
                  href="https://mindwareconsult.com.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors underline decoration-slate-600 hover:decoration-white font-medium"
                >
                  Mindware Consulting Ltd
                </a>.
              </span>
            </div>
            <div className="flex items-center gap-6 text-[11px]">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span>·</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Engagement</span>
              <span>·</span>
              <span className="hover:text-slate-400 cursor-pointer">HSE Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
