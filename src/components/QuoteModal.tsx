import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, HardHat, Send, AlertCircle } from 'lucide-react';
import { QuoteFormData } from '../types';
import { SERVICES_DATA, COMPANY_CONTACT } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'Commercial',
    projectLocation: 'Port Harcourt, Rivers State',
    estimatedBudget: '₦50M - ₦250M',
    expectedStartDate: 'Within 30 Days',
    projectDescription: '',
    needArchitecturalReview: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      const match = SERVICES_DATA.find(s => s.id === preselectedServiceId);
      if (match) {
        setFormData(prev => ({
          ...prev,
          projectDescription: `Inquiry regarding ${match.title}: `
        }));
      }
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate professional processing
    setTimeout(() => {
      const refCode = 'TM-' + Math.floor(100000 + Math.random() * 900000);
      setTicketRef(refCode);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[94vh] overflow-y-auto border border-slate-200">
        {/* Header */}
        <div className="relative bg-[#08122B] text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-widest mb-2">
            <HardHat className="w-4 h-4" />
            <span>ESTIMATE & CONSULTATION INTAKE</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black uppercase font-['Montserrat'] tracking-tight">
            REQUEST A PROJECT QUOTE
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Connect directly with Temamost’s senior engineering estimators in Port Harcourt.
          </p>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-[#0D1B3E] font-['Montserrat'] uppercase mb-2">
                Enquiry Successfully Logged
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your project specification has been assigned reference code:
              </p>
              <div className="inline-block bg-slate-100 px-4 py-2 rounded font-mono text-sm font-bold text-[#0D1B3E] my-3 border border-slate-300">
                {ticketRef}
              </div>
              <p className="text-xs text-slate-500">
                A senior project manager from our Port Harcourt office will review your requirements and follow up within 24 business hours at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-left text-xs text-slate-700 space-y-1">
              <div><strong>Project Type:</strong> {formData.projectType}</div>
              <div><strong>Location:</strong> {formData.projectLocation}</div>
              <div><strong>Budget Envelope:</strong> {formData.estimatedBudget}</div>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#0D1B3E] hover:bg-[#162B5E] text-white px-8 py-3 rounded text-xs font-bold font-['Montserrat'] uppercase tracking-wider transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Engr. Baritema Desmond"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g., Meridian Capital Assets"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+234 811 864 1790"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                  Project Category *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24] bg-white"
                >
                  <option value="Commercial">Commercial Office / Complex</option>
                  <option value="Residential">Residential Villa / Estate</option>
                  <option value="Industrial">Industrial Warehouse / Facility</option>
                  <option value="Infrastructure">Infrastructure / Civil Drainage / Roads</option>
                  <option value="Turnkey">Turnkey Design & Build</option>
                  <option value="Consulting">Pre-Construction Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                  Project Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Peter Odili Road, Port Harcourt"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                  Estimated Budget Envelope
                </label>
                <select
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24] bg-white"
                >
                  <option value="Under ₦50M">Under ₦50 Million</option>
                  <option value="₦50M - ₦250M">₦50 Million - ₦250 Million</option>
                  <option value="₦250M - ₦1B">₦250 Million - ₦1 Billion</option>
                  <option value="₦1B+">Above ₦1 Billion</option>
                  <option value="To Be Determined">To Be Determined via BoQ</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                  Target Start Date
                </label>
                <select
                  value={formData.expectedStartDate}
                  onChange={(e) => setFormData({ ...formData, expectedStartDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24] bg-white"
                >
                  <option value="Immediately">Immediately (Within 14 Days)</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="1 - 3 Months">1 - 3 Months</option>
                  <option value="Planning Phase">Planning / Feasibility Phase</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase font-['Montserrat'] tracking-wide mb-1.5">
                Project Scope & Details *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe your site parameters, approximate square meters, existing designs or statutory permit status..."
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="needReview"
                checked={formData.needArchitecturalReview}
                onChange={(e) => setFormData({ ...formData, needArchitecturalReview: e.target.checked })}
                className="rounded border-slate-300 text-[#E31E24] focus:ring-[#E31E24]"
              />
              <label htmlFor="needReview" className="text-xs text-slate-600">
                I would like Temamost engineers to review our architectural drawings and soil conditions.
              </label>
            </div>

            {/* Privacy note */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded flex items-start gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Your information is kept strictly confidential and used only to respond to your construction inquiry under professional engineering standards.
              </span>
            </div>

            {/* Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 font-['Montserrat'] uppercase transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto bg-[#E31E24] hover:bg-[#C81419] text-white px-8 py-3.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-colors disabled:opacity-75"
              >
                {submitting ? (
                  <span>SUBMITTING INQUIRY...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>REQUEST MY QUOTE</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
