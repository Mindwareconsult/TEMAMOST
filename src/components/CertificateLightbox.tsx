import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  ShieldCheck,
  Building2,
  Calendar,
  FileCheck
} from 'lucide-react';
import { CertificateCredential } from '../types';

interface CertificateLightboxProps {
  isOpen: boolean;
  certificates: CertificateCredential[];
  initialIndex?: number;
  onClose: () => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  isOpen,
  certificates,
  initialIndex = 0,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  const currentCert = certificates[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [certificates.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [certificates.length]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.35, 3.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Mouse pan/drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch pan & swipe handlers for mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setTouchStartX(touch.clientX);
      setTouchStartY(touch.clientY);
      if (scale > 1) {
        setIsDragging(true);
        setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (scale > 1 && isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (scale <= 1 && touchStartX !== null && e.changedTouches.length === 1) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchDiff = touchStartX - touchEndX;
      // Swipe threshold 50px
      if (touchDiff > 50) {
        handleNext();
      } else if (touchDiff < -50) {
        handlePrev();
      }
    }
    setIsDragging(false);
    setTouchStartX(null);
    setTouchStartY(null);
  };

  if (!isOpen || !currentCert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`${currentCert.title} Viewer`}
    >
      {/* Lightbox Top Header Bar */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-slate-800 text-white z-10 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded bg-red-600/20 text-[#E31E24] border border-red-500/30 hidden sm:flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="truncate">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-bold bg-red-950/60 px-2 py-0.5 rounded border border-red-800/50">
                {currentCert.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden md:inline">
                Document {currentIndex + 1} of {certificates.length}
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-bold font-['Montserrat'] tracking-tight truncate text-white">
              {currentCert.title}
            </h2>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Zoom Controls */}
          <div className="flex items-center bg-slate-800/90 rounded-lg p-1 border border-slate-700/80 mr-1 sm:mr-2">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 1}
              className="p-1.5 sm:p-2 text-slate-300 hover:text-white disabled:text-slate-600 hover:bg-slate-700/60 rounded transition-colors"
              title="Zoom Out (-)"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono font-semibold px-2 text-slate-300 min-w-[42px] text-center select-none">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={scale >= 3.5}
              className="p-1.5 sm:p-2 text-slate-300 hover:text-white disabled:text-slate-600 hover:bg-slate-700/60 rounded transition-colors"
              title="Zoom In (+)"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {scale > 1 && (
              <button
                onClick={handleResetZoom}
                className="p-1.5 sm:p-2 text-red-400 hover:text-red-300 hover:bg-slate-700/60 rounded transition-colors border-l border-slate-700 ml-1"
                title="Reset Zoom (0)"
                aria-label="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Open full resolution in new tab */}
          <a
            href={currentCert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-700/70 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-semibold"
            title="Open Full Image in New Tab"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden md:inline">Full Size</span>
          </a>

          {/* Download Document */}
          <a
            href={currentCert.image}
            download={`${currentCert.id}-temamost.jpg`}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-700/70 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-semibold"
            title="Download Document"
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Download</span>
          </a>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-red-500 transition-colors"
            title="Close Viewer (Esc)"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Image Viewport with interactive zoom and pan */}
      <div
        ref={containerRef}
        className={`relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none ${
          scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => {
          // If clicked directly on backdrop (not the certificate image), close modal
          if (e.target === containerRef.current && scale === 1) {
            onClose();
          }
        }}
      >
        {/* Navigation Arrow Left */}
        {certificates.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 z-20 p-3 sm:p-3.5 rounded-full bg-slate-900/80 hover:bg-[#E31E24] text-white border border-slate-700 hover:border-red-500 shadow-xl backdrop-blur transition-all -translate-y-1/2 top-1/2 group focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Previous Certificate"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Certificate Document Display */}
        <div
          className="relative max-h-full max-w-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <img
            src={currentCert.image}
            alt={`${currentCert.title} - ${currentCert.issuingOrganization}`}
            className="max-h-[70vh] sm:max-h-[74vh] w-auto object-contain rounded-md shadow-2xl border border-slate-700/80 bg-white"
            draggable={false}
            onDoubleClick={(e) => {
              e.stopPropagation();
              if (scale === 1) {
                setScale(2);
              } else {
                handleResetZoom();
              }
            }}
          />
        </div>

        {/* Navigation Arrow Right */}
        {certificates.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 z-20 p-3 sm:p-3.5 rounded-full bg-slate-900/80 hover:bg-[#E31E24] text-white border border-slate-700 hover:border-red-500 shadow-xl backdrop-blur transition-all -translate-y-1/2 top-1/2 group focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Next Certificate"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Lightbox Bottom Metadata Drawer */}
      <footer className="bg-slate-900/95 border-t border-slate-800 px-4 sm:px-6 py-3.5 text-white shrink-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 flex-1">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Issuing Authority</span>
                <span className="font-semibold text-slate-200 truncate block">{currentCert.issuingOrganization}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-red-400 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Registration / Reg No.</span>
                <span className="font-mono font-bold text-red-400 truncate block">{currentCert.regNumber}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Date Issued</span>
                <span className="font-semibold text-slate-200 block">{currentCert.dateIssued}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Registered Entity</span>
                <span className="font-semibold text-emerald-300 uppercase truncate block">{currentCert.verifiedCompany}</span>
              </div>
            </div>
          </div>

          {/* Quick certificate switcher tabs */}
          <div className="flex items-center gap-1.5 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800 shrink-0">
            {certificates.map((cert, idx) => (
              <button
                key={cert.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setScale(1);
                  setPosition({ x: 0, y: 0 });
                }}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                  idx === currentIndex
                    ? 'bg-[#E31E24] text-white font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
                title={cert.title}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
