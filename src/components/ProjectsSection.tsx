import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  X, 
  ChevronRight, 
  ChevronLeft,
  HardHat, 
  Maximize2,
  Images,
  CheckCircle2,
  Layers,
  ZoomIn,
  Search
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  onNavigateToProjects: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
  showAll?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onNavigateToProjects,
  onOpenQuoteModal,
  showAll = false
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  // Categories matching the actual uploaded project types
  const categories = [
    'ALL',
    'RESIDENTIAL',
    'COMMERCIAL',
    'INDUSTRIAL',
    'BUILDINGS UNDER CONSTRUCTION',
    'STRUCTURAL WORKS',
    'SUB-STRUCTURAL / FOUNDATION',
    'STEEL WORKS'
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCat = activeCategory === 'ALL' || 
      p.category.toUpperCase() === activeCategory || 
      (p.tags && p.tags.some(t => t.toUpperCase() === activeCategory));

    if (!matchesCat) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      (p.location && p.location.toLowerCase().includes(query)) ||
      (p.scope && p.scope.toLowerCase().includes(query)) ||
      p.category.toLowerCase().includes(query) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(query)))
    );
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.filter(p => p.featured).slice(0, 6);

  const openProjectModal = (proj: ProjectItem) => {
    setActiveModalProject(proj);
    setSelectedGalleryIdx(0);
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    if (!activeModalProject) return;
    const total = activeModalProject.galleryImages.length;
    setSelectedGalleryIdx((curr) => (curr + 1) % total);
  };

  const handlePrevImage = () => {
    if (!activeModalProject) return;
    const total = activeModalProject.galleryImages.length;
    setSelectedGalleryIdx((curr) => (curr - 1 + total) % total);
  };

  const currentGalleryItem = activeModalProject?.galleryItems?.[selectedGalleryIdx] || (activeModalProject ? {
    src: activeModalProject.galleryImages[selectedGalleryIdx],
    caption: `${activeModalProject.title} - Site photograph ${selectedGalleryIdx + 1}`,
    alt: `Temamost Nigeria Ltd ${activeModalProject.title}`
  } : null);

  // Related projects in the same category or tags
  const relatedProjects = activeModalProject
    ? PROJECTS_DATA.filter(
        p => p.id !== activeModalProject.id && (p.category === activeModalProject.category || p.tags.some(t => activeModalProject.tags.includes(t)))
      ).slice(0, 2)
    : [];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E31E24] font-['Montserrat']">
                AUTHENTIC PROJECT PORTFOLIO
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] uppercase font-['Montserrat'] tracking-tight">
              BUILT TO PERFORM. <br className="hidden sm:inline" />
              <span className="text-[#E31E24]">DELIVERED WITH INTEGRITY.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl">
              Authentic construction photographs from Temamost Nigeria Ltd's real job sites across Port Harcourt and the Niger Delta corridor.
            </p>
          </div>

          {!showAll && (
            <button
              onClick={onNavigateToProjects}
              className="self-start md:self-end text-xs font-bold font-['Montserrat'] tracking-wider uppercase text-[#0D1B3E] hover:text-[#E31E24] flex items-center gap-2 transition-colors pb-1 border-b-2 border-[#0D1B3E] hover:border-[#E31E24]"
            >
              <span>VIEW ALL {PROJECTS_DATA.length} PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded text-[11px] sm:text-xs font-bold font-['Montserrat'] tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0D1B3E] text-white shadow-sm ring-1 ring-[#0D1B3E]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Keyword Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#0D1B3E] focus:ring-1 focus:ring-[#0D1B3E] bg-slate-50 text-slate-800 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Empty Search Results Feedback */}
        {displayedProjects.length === 0 && (
          <div className="py-16 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300 p-8">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#0D1B3E] font-['Montserrat'] uppercase mb-1">
              No Projects Found
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
              No project records match your current filter criteria "{searchQuery || activeCategory}".
            </p>
            <button
              onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
              className="bg-[#0D1B3E] text-white text-xs font-bold uppercase font-['Montserrat'] px-4 py-2 rounded hover:bg-[#162B5E] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Editorial Project Showcase - Asymmetric Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {displayedProjects.map((project, index) => {
            // Asymmetric rhythm for high-impact architectural composition
            const isFeaturedHero = index === 0 && !showAll;
            const colSpan = isFeaturedHero
              ? 'md:col-span-12 lg:col-span-8' 
              : index === 1 && !showAll 
                ? 'md:col-span-12 lg:col-span-4' 
                : 'md:col-span-6 lg:col-span-4';

            return (
              <div
                key={project.id}
                className={`${colSpan} group relative rounded-lg overflow-hidden bg-slate-900 flex flex-col justify-end shadow-md hover:shadow-2xl transition-all duration-500 min-h-[380px] sm:min-h-[440px]`}
              >
                {/* Authentic Project Photograph */}
                <img
                  src={project.coverImage}
                  alt={project.galleryItems?.[0]?.alt || `Temamost Nigeria Ltd ${project.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay for Typographic Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08122B] via-[#08122B]/60 to-transparent group-hover:via-[#08122B]/75 transition-colors duration-300" />

                {/* Top Metadata Strip */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="bg-[#0D1B3E]/90 text-white px-2.5 py-1 rounded border border-white/10 uppercase tracking-widest text-[10px] font-bold font-['Montserrat']">
                      {project.category}
                    </span>
                    {project.galleryImages.length > 1 && (
                      <span className="bg-black/50 text-slate-200 px-2 py-1 rounded text-[10px] backdrop-blur-sm flex items-center gap-1 font-mono">
                        <Images className="w-3 h-3 text-red-400" />
                        <span>{project.galleryImages.length} Photos</span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => openProjectModal(project)}
                    className="p-2 rounded-full bg-black/40 hover:bg-[#E31E24] text-white backdrop-blur-sm transition-colors cursor-pointer"
                    aria-label={`View full gallery for ${project.title}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Project Info Card at Bottom */}
                <div className="relative z-10 p-6 sm:p-8">
                  {project.location && (
                    <div className="flex items-center gap-1.5 text-red-400 text-xs mb-2 font-mono">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat'] uppercase tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 font-normal leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/15">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="text-xs font-bold text-white group-hover:text-[#E31E24] font-['Montserrat'] tracking-wider uppercase flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>VIEW PROJECT & GALLERY</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <span className="text-[11px] font-mono text-slate-300 font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete Project Detail & Gallery Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[94vh] overflow-y-auto border border-slate-200">
            {/* Modal Header Banner */}
            <div className="relative bg-[#08122B] text-white p-6 sm:p-8">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-[#E31E24] text-white transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center flex-wrap gap-3 text-red-400 text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                <span>{activeModalProject.category}</span>
                <span>·</span>
                <span>STATUS: {activeModalProject.status}</span>
                {activeModalProject.location && (
                  <>
                    <span>·</span>
                    <span className="text-slate-300">{activeModalProject.location}</span>
                  </>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-['Montserrat'] tracking-tight">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Interactive Primary Project Image with Lightbox Zoom Button */}
              <div className="relative rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shadow-lg group">
                <div className="relative h-72 sm:h-96 md:h-[460px] flex items-center justify-center bg-black">
                  <img
                    src={currentGalleryItem?.src || activeModalProject.coverImage}
                    alt={currentGalleryItem?.alt || activeModalProject.title}
                    className="w-full h-full object-contain cursor-zoom-in"
                    onClick={() => setLightboxOpen(true)}
                  />

                  {/* Previous / Next Arrows if multiple images */}
                  {activeModalProject.galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#E31E24] text-white transition-colors cursor-pointer"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#E31E24] text-white transition-colors cursor-pointer"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Full-screen Lightbox Trigger */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute bottom-4 right-4 bg-black/70 hover:bg-[#E31E24] text-white text-xs px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer backdrop-blur-sm"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>View Full Size</span>
                  </button>
                </div>

                {/* Caption Bar */}
                <div className="bg-slate-900 text-slate-200 px-4 py-3 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                    <span>{currentGalleryItem?.caption}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0">
                    Photo {selectedGalleryIdx + 1} of {activeModalProject.galleryImages.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails Navigator (If project has multiple authentic photos) */}
              {activeModalProject.galleryImages.length > 1 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] font-['Montserrat'] mb-3 flex items-center gap-2">
                    <Images className="w-4 h-4 text-[#E31E24]" />
                    <span>Project Photo Gallery ({activeModalProject.galleryImages.length} Photographs)</span>
                  </h4>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
                    {activeModalProject.galleryImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedGalleryIdx(i)}
                        className={`h-16 sm:h-20 rounded-md overflow-hidden border-2 transition-all cursor-pointer relative ${
                          selectedGalleryIdx === i
                            ? 'border-[#E31E24] ring-2 ring-[#E31E24]/30 scale-102'
                            : 'border-slate-200 hover:border-slate-400 opacity-75 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Scope & Verified Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-slate-100">
                <div className="md:col-span-8 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] font-['Montserrat']">
                    Project Overview & Verified Details
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {activeModalProject.description}
                  </p>

                  {activeModalProject.scope && (
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0D1B3E] font-['Montserrat']">
                        Scope of Work
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {activeModalProject.scope}
                      </p>
                    </div>
                  )}

                  {activeModalProject.challenges && activeModalProject.solution && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded bg-amber-50/70 border border-amber-200 text-xs">
                        <strong className="text-amber-900 block font-['Montserrat'] uppercase mb-1">
                          Site Challenge
                        </strong>
                        <span className="text-amber-950">{activeModalProject.challenges}</span>
                      </div>
                      <div className="p-4 rounded bg-emerald-50/70 border border-emerald-200 text-xs">
                        <strong className="text-emerald-900 block font-['Montserrat'] uppercase mb-1">
                          Temamost Solution
                        </strong>
                        <span className="text-emerald-950">{activeModalProject.solution}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Project Metadata Card */}
                <div className="md:col-span-4 bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4 h-fit">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0D1B3E] font-['Montserrat'] pb-2 border-b border-slate-200">
                    Project Dossier
                  </div>

                  <div className="text-xs space-y-3">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Category</span>
                      <strong className="text-[#0D1B3E]">{activeModalProject.category}</strong>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Status</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {activeModalProject.status}
                      </span>
                    </div>

                    {activeModalProject.location && (
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-mono">Location</span>
                        <strong className="text-[#0D1B3E]">{activeModalProject.location}</strong>
                      </div>
                    )}

                    {activeModalProject.year && (
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-mono">Timeline</span>
                        <span className="text-slate-700 font-mono">{activeModalProject.year}</span>
                      </div>
                    )}

                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Company</span>
                      <strong className="text-[#0D1B3E]">Temamost Nigeria Ltd</strong>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <button
                      onClick={() => {
                        const projTitle = activeModalProject.title;
                        setActiveModalProject(null);
                        onOpenQuoteModal();
                      }}
                      className="w-full bg-[#E31E24] hover:bg-[#C81419] text-white py-2.5 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <HardHat className="w-4 h-4" />
                      <span>INQUIRE ON SIMILAR WORK</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E] font-['Montserrat'] mb-4">
                    Related Projects in Portfolio
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedProjects.map((rel) => (
                      <div
                        key={rel.id}
                        onClick={() => openProjectModal(rel)}
                        className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-[#E31E24] hover:shadow-md transition-all cursor-pointer bg-white group/rel"
                      >
                        <div className="w-20 h-16 rounded overflow-hidden shrink-0 bg-slate-100">
                          <img src={rel.coverImage} alt={rel.title} className="w-full h-full object-cover group-hover/rel:scale-105 transition-transform" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[#0D1B3E] group-hover/rel:text-[#E31E24] transition-colors truncate font-['Montserrat'] uppercase">
                            {rel.title}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                            {rel.category} · {rel.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-bold text-slate-600 hover:text-slate-900 font-['Montserrat'] uppercase transition-colors cursor-pointer"
                >
                  Close Window
                </button>

                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenQuoteModal();
                  }}
                  className="w-full sm:w-auto bg-[#0D1B3E] hover:bg-[#162B5E] text-white px-6 py-3 rounded font-['Montserrat'] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <HardHat className="w-4 h-4 text-red-400" />
                  <span>REQUEST CONSULTATION FOR YOUR PROJECT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Lightbox View */}
      {lightboxOpen && currentGalleryItem && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between p-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-['Montserrat'] font-bold text-sm uppercase">
                {activeModalProject?.title}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                ({selectedGalleryIdx + 1} / {activeModalProject?.galleryImages.length})
              </span>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-[#E31E24] text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
            <img
              src={currentGalleryItem.src}
              alt={currentGalleryItem.alt}
              className="max-h-[80vh] max-w-full object-contain"
            />

            {/* Lightbox Prev / Next */}
            {(activeModalProject?.galleryImages.length || 0) > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#E31E24] text-white transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#E31E24] text-white transition-colors cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="text-center text-slate-300 text-xs py-2 bg-black/50">
            {currentGalleryItem.caption}
          </div>
        </div>
      )}
    </section>
  );
};
