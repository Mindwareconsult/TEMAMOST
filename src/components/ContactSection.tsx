import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Compass, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Commercial',
    budget: '₦50M - ₦250M',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const whatsappUrl = `https://wa.me/2348118641790?text=${encodeURIComponent(
    'Hello Temamost Nigeria Ltd, I am contacting you from your website regarding an engineering and construction project inquiry.'
  )}`;

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
              START THE CONVERSATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
            LET'S TALK ABOUT YOUR NEXT PROJECT.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Whether you are evaluating a new site acquisition, tendering a commercial facility, or requiring project management, our team in Port Harcourt is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Action Badges */}
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded text-xs font-bold font-['Montserrat'] uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.phones[0].replace(/\s/g, '')}`}
                className="bg-[#0D1B3E] hover:bg-[#162B5E] text-white px-4 py-2.5 rounded text-xs font-bold font-['Montserrat'] uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#E31E24]" />
                <span>CALL DIRECT</span>
              </a>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1B3E] font-['Montserrat']">
                      Headquarters & Operations Base
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                      {COMPANY_CONTACT.address}
                    </p>
                    <div className="text-[11px] font-mono text-slate-500 mt-2">
                      Landmarks: Chelsea Filling Station · Gbalajam Junction · Woji Layout
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1B3E] font-['Montserrat']">
                      Direct Telephone Lines
                    </h4>
                    <div className="text-xs sm:text-sm text-slate-800 font-medium mt-1 space-y-0.5">
                      <div>
                        <a href={`tel:${COMPANY_CONTACT.phones[0].replace(/\s/g, '')}`} className="hover:text-[#E31E24]">
                          {COMPANY_CONTACT.phones[0]}
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${COMPANY_CONTACT.phones[1].replace(/\s/g, '')}`} className="hover:text-[#E31E24]">
                          {COMPANY_CONTACT.phones[1]}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#E31E24] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1B3E] font-['Montserrat']">
                      Official Email Correspondence
                    </h4>
                    <div className="text-xs sm:text-sm text-slate-800 font-medium mt-1 space-y-0.5">
                      <div>
                        <a href={`mailto:${COMPANY_CONTACT.emails[0]}`} className="hover:text-[#E31E24]">
                          {COMPANY_CONTACT.emails[0]}
                        </a>
                      </div>
                      <div>
                        <a href={`mailto:${COMPANY_CONTACT.emails[1]}`} className="hover:text-[#E31E24]">
                          {COMPANY_CONTACT.emails[1]}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1B3E] font-['Montserrat']">
                      Office Operating Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1">
                      {COMPANY_CONTACT.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Port Harcourt Map Landmark Visualizer */}
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-[#0D1B3E] text-white p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-bold font-['Montserrat'] uppercase tracking-wider">
                    Site Location Visualizer
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded">
                  4.8156° N, 7.0498° E
                </span>
              </div>

              <div className="bg-slate-900 rounded p-4 border border-slate-800 relative">
                <div className="text-xs font-bold text-white mb-1">
                  Plot 5, Peter Odili Extension (New Road)
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Located strategically along the Peter Odili - Woji transit corridor in Port Harcourt, facilitating immediate access to downtown commercial districts and Trans-Amadi industrial layouts.
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-red-400 font-semibold">Rivers State, Nigeria</span>
                  <a
                    href="https://maps.google.com/?q=Peter+Odili+Road+Woji+Port+Harcourt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-400 underline flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#0D1B3E] font-['Montserrat'] uppercase tracking-tight mb-2">
                SEND AN EXECUTIVE INQUIRY
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill in the parameters below. An engineering director will assess your requirement.
              </p>

              {formSent ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-950 font-['Montserrat'] uppercase">
                    Consultation Request Received
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-900 max-w-sm mx-auto">
                    Thank you. We have logged your consultation inquiry. Our engineering team at Plot 5 Peter Odili Extension will contact you promptly.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-3 text-xs font-bold text-[#0D1B3E] uppercase font-['Montserrat'] underline"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Arc. Chinedu Eze"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Prime Developers"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 811 864 1790"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1">
                        Project Classification
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                      >
                        <option value="Commercial">Commercial Office / Complex</option>
                        <option value="Residential">Residential Luxury / Estate</option>
                        <option value="Industrial">Industrial Warehouse / Plant</option>
                        <option value="Infrastructure">Civil Infrastructure / Drainage</option>
                        <option value="Turnkey">Turnkey Design & Build</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1">
                        Site Location in Nigeria
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Old GRA, Port Harcourt"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1">
                      Project Narrative & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Provide brief details regarding site size, architectural readiness, or intended schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E31E24] hover:bg-[#C81419] text-white py-3.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>REQUEST A CONSULTATION</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
