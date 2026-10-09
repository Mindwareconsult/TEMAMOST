import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, X, User } from 'lucide-react';
import { INSIGHTS_DATA } from '../data/companyData';
import { InsightArticle } from '../types';

interface InsightsSectionProps {
  onNavigateToInsights: () => void;
  showAll?: boolean;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onNavigateToInsights,
  showAll = false
}) => {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const displayedArticles = showAll ? INSIGHTS_DATA : INSIGHTS_DATA.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
                TECHNICAL THOUGHT LEADERSHIP
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
              INSIGHTS FROM THE INDUSTRY
            </h2>
          </div>

          {!showAll && (
            <button
              onClick={onNavigateToInsights}
              className="self-start md:self-end text-xs font-bold font-['Montserrat'] tracking-wider uppercase text-[#0D1B3E] hover:text-[#E31E24] flex items-center gap-2 transition-colors pb-1 border-b-2 border-[#0D1B3E] hover:border-[#E31E24]"
            >
              <span>VIEW ALL INSIGHTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D1B3E]/90 text-white text-[10px] font-bold uppercase font-['Montserrat'] tracking-wider px-2.5 py-1 rounded backdrop-blur-sm">
                    {article.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0D1B3E] font-['Montserrat'] uppercase tracking-tight mb-3 line-clamp-2 group-hover:text-[#E31E24] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-bold text-[#0D1B3E] group-hover:text-[#E31E24] font-['Montserrat'] tracking-wider uppercase flex items-center gap-1.5 transition-colors"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[11px] text-slate-400 truncate max-w-[120px]">
                  {article.author.split('(')[0]}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="relative bg-[#0D1B3E] text-white p-6 sm:p-8">
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-red-400 text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                <span>{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold uppercase font-['Montserrat'] tracking-tight">
                {activeArticle.title}
              </h3>

              <div className="flex items-center gap-2 mt-4 text-xs text-slate-300">
                <User className="w-3.5 h-3.5 text-[#E31E24]" />
                <span>Author: {activeArticle.author}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-lg overflow-hidden h-60">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key takeaways callout */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1B3E] font-['Montserrat'] mb-3">
                  Key Engineering Takeaways
                </h4>
                <ul className="space-y-2">
                  {activeArticle.keyTakeaways.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="bg-[#0D1B3E] text-white px-6 py-2.5 rounded text-xs font-bold font-['Montserrat'] uppercase tracking-wider hover:bg-[#162B5E] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
