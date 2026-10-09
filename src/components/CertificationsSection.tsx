import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Calendar,
  Building2,
  FileCheck2
} from 'lucide-react';
import { AUTHENTIC_CERTIFICATES } from '../data/companyData';
import { CertificateLightbox } from './CertificateLightbox';

interface CertificationsSectionProps {
  variant?: 'home' | 'about';
  onNavigateToAboutCredentials?: () => void;
  onOpenQuoteModal?: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  variant = 'home',
  onNavigateToAboutCredentials,
  onOpenQuoteModal
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);

  const certificatesToDisplay =
    variant === 'home'
      ? AUTHENTIC_CERTIFICATES.filter((cert) => cert.featuredOnHome)
      : AUTHENTIC_CERTIFICATES;

  const handleOpenCertificate = (certId: string) => {
    const fullIndex = AUTHENTIC_CERTIFICATES.findIndex((c) => c.id === certId);
    setSelectedCertIndex(fullIndex >= 0 ? fullIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <section
      id="credentials-section"
      className={`py-20 lg:py-24 relative ${
        variant === 'about'
          ? 'bg-slate-50 border-y border-slate-200'
          : 'bg-[#0A1633] text-white border-y border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span
                className={`text-xs font-bold tracking-[0.2em] uppercase font-['Montserrat'] ${
                  variant === 'about' ? 'text-[#E31E24]' : 'text-red-400'
                }`}
              >
                OUR CREDENTIALS
              </span>
            </div>

            <h2
              className={`text-2xl sm:text-4xl font-extrabold uppercase font-['Montserrat'] tracking-tight ${
                variant === 'about' ? 'text-[#0D1B3E]' : 'text-white'
              }`}
            >
              CERTIFICATIONS & CREDENTIALS
            </h2>

            <p
              className={`mt-4 text-sm sm:text-base leading-relaxed ${
                variant === 'about' ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Our commitment to professional standards, compliance and responsible project delivery is supported by the registrations, certifications and credentials held by Temamost Nigeria Ltd.
            </p>
          </div>

          {/* Action button: On home links to About Credentials; On About can open quote or consultation */}
          {variant === 'home' && onNavigateToAboutCredentials && (
            <button
              onClick={onNavigateToAboutCredentials}
              className="self-start md:self-end bg-[#E31E24] hover:bg-[#C81419] text-white px-6 py-3.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2 group shrink-0"
            >
              <span>VIEW ALL CREDENTIALS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {variant === 'about' && onOpenQuoteModal && (
            <button
              onClick={onOpenQuoteModal}
              className="self-start md:self-end bg-[#0D1B3E] hover:bg-[#162B5E] text-white px-6 py-3.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2 group shrink-0"
            >
              <span>VERIFY WITH OUR OFFICE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Certificate Display Grid: Authentic Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesToDisplay.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleOpenCertificate(cert.id)}
              className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                variant === 'about'
                  ? 'bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300'
                  : 'bg-[#0D1B3E]/80 border border-slate-800 shadow-lg hover:border-slate-600 hover:bg-[#10224D]'
              }`}
            >
              {/* Document Image Frame */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200/50">
                <img
                  src={cert.image}
                  alt={`${cert.title} preview - ${cert.issuingOrganization}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0D1B3E]/90 backdrop-blur-sm text-white text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow">
                    {cert.badge}
                  </span>
                </div>

                {/* Verified Seal Indicator */}
                <div className="absolute top-3 right-3 bg-emerald-500/90 text-white p-1 rounded-full shadow">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-[#E31E24] text-white px-4 py-2 rounded font-['Montserrat'] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>VIEW CERTIFICATE</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Registration Number badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#E31E24]">
                      {cert.regNumber}
                    </span>
                    <span
                      className={`text-[11px] flex items-center gap-1 ${
                        variant === 'about' ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{cert.dateIssued}</span>
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3
                    className={`text-base font-bold uppercase font-['Montserrat'] tracking-tight mb-1.5 group-hover:text-[#E31E24] transition-colors ${
                      variant === 'about' ? 'text-[#0D1B3E]' : 'text-white'
                    }`}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuing Organization */}
                  <p
                    className={`text-xs font-medium leading-relaxed mb-4 flex items-start gap-1.5 ${
                      variant === 'about' ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span>{cert.issuingOrganization}</span>
                  </p>
                </div>

                {/* Card Action Link */}
                <div
                  className={`pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                    variant === 'about'
                      ? 'border-slate-100 text-[#0D1B3E]'
                      : 'border-slate-800 text-slate-300'
                  }`}
                >
                  <span className="text-[11px] text-emerald-500 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Official Record</span>
                  </span>

                  <span className="text-[11px] font-bold text-[#E31E24] group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-['Montserrat']">
                    <span>INSPECT</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Assurance Strip */}
        <div
          className={`mt-12 p-6 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            variant === 'about'
              ? 'bg-white border-slate-200 text-slate-700'
              : 'bg-slate-900/60 border-slate-800 text-slate-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-red-600/10 text-[#E31E24]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider block font-['Montserrat'] text-slate-900 dark:text-white">
                Statutory Compliance Guarantee
              </span>
              <span className="text-slate-500 text-[11px]">
                All documentation is authenticated under the Federal Republic of Nigeria corporate & tax regulatory authorities.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-slate-400 font-mono text-[11px]">
            <span>RC 1441087</span>
            <span>•</span>
            <span>TIN 20618815-0001</span>
            <span>•</span>
            <span>SUIN 23250180</span>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal Component */}
      <CertificateLightbox
        isOpen={lightboxOpen}
        certificates={AUTHENTIC_CERTIFICATES}
        initialIndex={selectedCertIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};
