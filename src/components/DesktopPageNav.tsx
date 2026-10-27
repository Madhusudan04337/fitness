import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { ChevronDown, ArrowUp } from 'lucide-react';
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
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setScrollPercent(Math.round(v * 100));
    });
  }, [scrollYProgress]);

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
  const nextSection = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  const scrollToNext = () => {
    if (nextSection) {
      fastSmoothScrollTo(nextSection.id);
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
        {/* Background Glassmorphic Architectural Bar */}
        <div className="flex flex-col items-center gap-2 p-2 rounded-full glass-panel border border-[var(--theme-glass-border)] shadow-2xl relative">
          {/* Scroll progress vertical rail */}
          <div className="absolute top-4 bottom-14 left-1/2 -translate-x-1/2 w-[1px] bg-[var(--theme-glass-border)] pointer-events-none" />

          {pages.map((page, index) => {
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
          <div className="w-4 h-px bg-[var(--theme-glass-border)] my-1" />

          {/* Animated Down / Next Page Button with Glass Ring */}
          <motion.button
            onClick={scrollToNext}
            title={nextSection ? `Scroll to ${nextSection.label}` : 'Back to Top'}
            aria-label="Next section"
            className="relative w-8 h-8 rounded-full bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] flex items-center justify-center hover:brightness-110 transition-all shadow-md cursor-pointer focus:outline-none"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
          >
            {nextSection ? (
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            ) : (
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            )}
          </motion.button>
        </div>

        {/* Floating active page indicator & live scroll % pill */}
        <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-[var(--theme-text-muted)] font-bold glass-badge px-3 py-1 rounded-full border border-[var(--theme-glass-border)] shadow-md">
          <span className="text-[var(--theme-accent)]">{pages[currentIndex]?.number || '01'}</span>
          <span>/</span>
          <span>{pages[pages.length - 1].number}</span>
          <span className="w-1 h-1 rounded-full bg-[var(--theme-glass-border)]" />
          <span className="text-[var(--theme-text-main)] tabular-nums">{scrollPercent}%</span>
        </div>
      </aside>

      {/* Mobile Floating Landmark Controller (Visible on screens < xl) */}
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

          {/* Jump / Back to top Button */}
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
