import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  HardHat
} from 'lucide-react';
import { TemamostLogo } from './TemamostLogo';
import { COMPANY_CONTACT, SERVICES_DATA } from '../data/companyData';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenQuoteModal,
  onSelectService
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageRoute) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    setCurrentPage('services');
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; route: PageRoute; hasDropdown?: boolean }[] = [
    { label: 'HOME', route: 'home' },
    { label: 'ABOUT', route: 'about' },
    { label: 'SERVICES', route: 'services', hasDropdown: true },
    { label: 'PROJECTS', route: 'projects' },
    { label: 'EXPERTISE', route: 'expertise' },
    { label: 'INSIGHTS', route: 'insights' },
    { label: 'CONTACT', route: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar (Preserving the engineering brand presence seen in Team2.PNG) */}
      <div className="bg-[#0D1B3E] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <a 
              href={`tel:${COMPANY_CONTACT.phones[0].replace(/\s/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E31E24]" />
              <span className="font-medium tracking-tight">{COMPANY_CONTACT.phones[0]}</span>
            </a>
            <a 
              href={`tel:${COMPANY_CONTACT.phones[1].replace(/\s/g, '')}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="text-slate-400">/</span>
              <span className="font-medium tracking-tight">{COMPANY_CONTACT.phones[1]}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_CONTACT.emails[0]}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E31E24]" />
              <span className="hidden sm:inline font-medium">{COMPANY_CONTACT.emails[0]}</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-[11px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E31E24]" />
              <span>Peter Odili Ext., Woji, Port Harcourt</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon - Fri: 8:00am - 5:30pm</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>COREN & CAC Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`bg-white transition-all duration-300 border-b border-slate-100 ${
          isScrolled 
            ? 'py-2.5 shadow-md shadow-slate-900/5' 
            : 'py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Authoritative Temamost Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24]"
            aria-label="Temamost Nigeria Ltd - Home"
          >
            <TemamostLogo size={isScrolled ? 'sm' : 'md'} showTagline={true} />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.route;

              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.route)}
                      className={`flex items-center gap-1 px-3 py-2 text-xs font-bold tracking-wider transition-colors duration-200 uppercase font-['Montserrat'] ${
                        isActive 
                          ? 'text-[#E31E24]' 
                          : 'text-[#0D1B3E] hover:text-[#E31E24]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#E31E24]' : ''}`} />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-slate-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-3 pb-2 mb-2 border-b border-slate-100">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-['Montserrat']">
                            Engineering & Construction Solutions
                          </p>
                        </div>
                        <div className="space-y-1">
                          {SERVICES_DATA.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleServiceSelect(srv.id)}
                              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 transition-colors group/item flex items-start gap-2.5"
                            >
                              <span className="text-[11px] font-mono font-bold text-[#E31E24] mt-0.5">
                                {srv.number}
                              </span>
                              <div>
                                <div className="text-xs font-semibold text-slate-900 group-hover/item:text-[#E31E24] transition-colors">
                                  {srv.title}
                                </div>
                                <div className="text-[11px] text-slate-500 line-clamp-1">
                                  {srv.capabilities[0]}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="text-xs font-bold text-[#0D1B3E] hover:text-[#E31E24] flex items-center justify-between w-full"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.route)}
                  className={`relative px-3 py-2 text-xs font-bold tracking-wider transition-colors duration-200 uppercase font-['Montserrat'] ${
                    isActive 
                      ? 'text-[#E31E24]' 
                      : 'text-[#0D1B3E] hover:text-[#E31E24]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E31E24] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#E31E24] hover:bg-[#C81419] text-white px-5 py-2.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-900/20 active:translate-y-0.5 flex items-center gap-2"
            >
              <HardHat className="w-4 h-4" />
              <span>REQUEST A QUOTE</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#E31E24] text-white px-3 py-1.5 rounded text-[11px] font-bold font-['Montserrat'] tracking-wider uppercase"
            >
              QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#0D1B3E] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[102px] bg-white z-40 overflow-y-auto animate-in fade-in duration-200 flex flex-col justify-between">
          <div className="p-5 space-y-2">
            <div className="pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-['Montserrat']">
                Navigation
              </span>
            </div>

            {navItems.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <div key={item.label} className="border-b border-slate-50 py-1">
                  <button
                    onClick={() => handleNavClick(item.route)}
                    className={`w-full text-left py-2.5 text-sm font-bold tracking-wider uppercase font-['Montserrat'] flex items-center justify-between ${
                      isActive ? 'text-[#E31E24]' : 'text-[#0D1B3E]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </button>

                  {item.hasDropdown && (
                    <div className="pl-4 py-2 space-y-2 bg-slate-50 rounded-lg my-1">
                      {SERVICES_DATA.map((srv) => (
                        <button
                          key={srv.id}
                          onClick={() => handleServiceSelect(srv.id)}
                          className="w-full text-left py-1 text-xs text-slate-700 hover:text-[#E31E24] flex items-center gap-2"
                        >
                          <span className="text-[#E31E24] font-mono font-bold text-[10px]">{srv.number}</span>
                          <span>{srv.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#E31E24] text-white py-3 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center gap-2"
              >
                <HardHat className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </button>
            </div>
          </div>

          {/* Mobile Drawer Footer Info */}
          <div className="bg-[#0D1B3E] p-5 text-slate-300 text-xs space-y-2">
            <div className="font-bold text-white font-['Montserrat']">TEMAMOST NIGERIA LTD</div>
            <p className="text-[11px] text-slate-400">
              Plot 5, Peter Odili Ext., Gbalajam Junc., Woji, Port Harcourt.
            </p>
            <div className="flex flex-col gap-1 pt-1 text-[11px]">
              <a href={`tel:${COMPANY_CONTACT.phones[0].replace(/\s/g, '')}`} className="text-white hover:underline">
                Call: {COMPANY_CONTACT.phones[0]}
              </a>
              <a href={`mailto:${COMPANY_CONTACT.emails[0]}`} className="text-slate-300 hover:underline">
                {COMPANY_CONTACT.emails[0]}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
