import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { ChevronDown, ChevronUp, ArrowUp, ArrowDown } from 'lucide-react';
import { fastSmoothScrollTo } from '../utils/smoothScroll';

export interface PageItem {
  id: string;
  number: string;
  label: string;
}

const pages: PageItem[] = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'services', number: '02', label: 'Services' },
  { id: 'pricing', number: '03', label: 'Pricing' },
  { id: 'testimonials', number: '04', label: 'Testimonials' },
  { id: 'faq', number: '05', label: 'FAQ' },
];

export default function DesktopPageNav() {
  const [activeId, setActiveId] = useState<string>('about');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const { scrollYProgress, scrollY } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setScrollPercent(Math.round(v * 100));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    return scrollY.on('change', (current) => {
      const prev = scrollY.getPrevious() ?? 0;
      const diff = current - prev;
      if (Math.abs(diff) > 4) {
        setScrollDirection(diff > 0 ? 'down' : 'up');
      }
    });
  }, [scrollY]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    pages.forEach((page) => {
      const el = document.getElementById(page.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentIndex = pages.findIndex((p) => p.id === activeId);
  const prevSection = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextSection = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  const scrollToNext = () => {
    if (nextSection) {
      fastSmoothScrollTo(nextSection.id);
    } else {
      fastSmoothScrollTo(0);
    }
  };

  const scrollToPrev = () => {
    if (prevSection) {
      fastSmoothScrollTo(prevSection.id);
    } else {
      fastSmoothScrollTo(0);
    }
  };

  const scrollToSection = (id: string) => {
    fastSmoothScrollTo(id);
  };

  return (
    <>
      <aside
        aria-label="Desktop Section Navigation"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 select-none pointer-events-auto"
      >
        {/* Background Glassmorphic Architectural Bar with Reverse Scroll Controls */}
        <div className="flex flex-col items-center gap-2 p-2 rounded-full glass-panel border border-[var(--theme-glass-border)] shadow-2xl relative">
          {/* Reverse Scroll Up (Previous Section) Button */}
          <motion.button
            onClick={scrollToPrev}
            title={prevSection ? `Reverse Scroll up to ${prevSection.label}` : 'Top of Page'}
            aria-label="Previous section"
            className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer focus:outline-none ${
              prevSection
                ? 'glass-badge text-[var(--theme-text-main)] hover:bg-[var(--theme-accent)] hover:text-[var(--theme-accent-contrast)] border border-[var(--theme-glass-border)]'
                : 'opacity-30 cursor-not-allowed glass-badge text-[var(--theme-text-muted)]'
            }`}
            whileHover={prevSection ? { scale: 1.15 } : {}}
            whileTap={prevSection ? { scale: 0.92 } : {}}
            disabled={!prevSection}
          >
            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
          </motion.button>

          {/* Progress vertical rail */}
          <div className="w-4 h-px bg-[var(--theme-glass-border)] my-0.5" />

          {pages.map((page) => {
            const isActive = page.id === activeId;
            return (
              <div
                key={page.id}
                className="relative flex items-center justify-center z-10"
                onMouseEnter={() => setHoveredId(page.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Tooltip on hover with frosted glass */}
                <AnimatePresence>
                  {hoveredId === page.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -10, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-10 px-3 py-1.5 rounded-xl glass-panel border border-[var(--theme-glass-border)] text-[10px] font-mono tracking-widest text-[var(--theme-text-main)] whitespace-nowrap shadow-2xl pointer-events-none z-50 flex items-center gap-2"
                    >
                      <span className="text-[var(--theme-accent)] font-bold">{page.number}</span>
                      <span className="uppercase">{page.label}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Indicator button with smooth pulse & glass ring */}
                <button
                  onClick={() => scrollToSection(page.id)}
                  aria-label={`Jump to section ${page.number}: ${page.label}`}
                  className="group relative flex items-center justify-center w-8 h-8 rounded-full transition-all cursor-pointer focus:outline-none"
                >
                  <span
                    className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'w-4 h-4 bg-[var(--theme-accent)] shadow-[0_0_12px_var(--theme-accent)] scale-100 ring-2 ring-[var(--theme-accent-subtle)]'
                        : 'w-2 h-2 bg-[var(--theme-text-muted)] opacity-35 group-hover:opacity-90 group-hover:scale-125'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent-contrast)]" />
                    )}
                  </span>
                </button>
              </div>
            );
          })}

          {/* Divider */}
          <div className="w-4 h-px bg-[var(--theme-glass-border)] my-0.5" />

          {/* Down / Next Page Button */}
          <motion.button
            onClick={scrollToNext}
            title={nextSection ? `Scroll down to ${nextSection.label}` : 'Back to Top'}
            aria-label="Next section"
            className="relative w-8 h-8 rounded-full bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] flex items-center justify-center hover:brightness-110 transition-all shadow-md cursor-pointer focus:outline-none"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
          >
            {nextSection ? (
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            ) : (
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            )}
          </motion.button>
        </div>

        {/* Floating active page indicator & live scroll % pill with direction indicator */}
        <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-[var(--theme-text-muted)] font-bold glass-badge px-3 py-1 rounded-full border border-[var(--theme-glass-border)] shadow-md">
          {scrollDirection === 'up' ? (
            <ArrowUp className="w-3 h-3 text-[var(--theme-accent)] animate-bounce" />
          ) : (
            <ArrowDown className="w-3 h-3 text-[var(--theme-text-muted)]" />
          )}
          <span className="text-[var(--theme-accent)]">{pages[currentIndex]?.number || '01'}</span>
          <span>/</span>
          <span>{pages[pages.length - 1].number}</span>
          <span className="w-1 h-1 rounded-full bg-[var(--theme-glass-border)]" />
          <span className="text-[var(--theme-text-main)] tabular-nums">{scrollPercent}%</span>
        </div>
      </aside>

      {/* Mobile Floating Landmark Controller with Dual Direction Controls */}
      <aside
        aria-label="Mobile Section Quick Navigator"
        className="flex xl:hidden fixed bottom-4 right-4 z-40 select-none pointer-events-auto"
      >
        <div className="flex items-center gap-2 p-1.5 pl-3.5 rounded-full glass-panel border border-[var(--theme-glass-border)] shadow-2xl">
          {/* Active Section Label with Live % */}
          <button
            onClick={() => scrollToSection(activeId)}
            className="flex items-center gap-2 text-left cursor-pointer focus:outline-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] animate-live-pulse" />
            <span className="font-mono text-[10px] font-bold text-[var(--theme-accent)]">
              {pages[currentIndex]?.number || '01'}
            </span>
            <span className="font-mono text-[10px] font-bold text-[var(--theme-text-main)] tracking-wider uppercase pr-1">
              {pages[currentIndex]?.label || 'About'}
            </span>
            <span className="text-[9px] font-mono text-[var(--theme-text-muted)] tabular-nums px-1.5 py-0.5 rounded-full glass-badge">
              {scrollPercent}%
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-[var(--theme-glass-border)]" />

          {/* Reverse Scroll Up Button */}
          {prevSection && (
            <button
              onClick={scrollToPrev}
              aria-label={`Reverse scroll to ${prevSection.label}`}
              className="w-7 h-7 rounded-full glass-badge text-[var(--theme-text-main)] hover:border-[var(--theme-accent)] flex items-center justify-center cursor-pointer active:scale-95 transition-transform shadow-xs"
            >
              <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          )}

          {/* Jump Down / Next Button */}
          <button
            onClick={scrollToNext}
            aria-label={nextSection ? `Jump to ${nextSection.label}` : 'Back to Top'}
            className="w-7 h-7 rounded-full bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] flex items-center justify-center cursor-pointer active:scale-95 transition-transform shadow-xs"
          >
            {nextSection ? (
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
            ) : (
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
