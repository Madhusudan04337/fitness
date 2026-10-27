import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Compass, Shield, Activity, Flame } from 'lucide-react';
import ScrollArrow from './ScrollArrow';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  const hoverEffect = { hover: { scale: 1.02 }, tap: { scale: 0.98 } };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex flex-col justify-between min-h-[92vh] sm:min-h-screen pt-20 sm:pt-28 pb-6 sm:pb-10 px-4 sm:px-10 lg:px-16 text-[var(--theme-text-main)] bg-[var(--theme-bg)] overflow-hidden transition-colors duration-300"
    >
      {/* Background Architectural Grid Lines & Radial Shimmer */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(var(--theme-text-main)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--theme-accent)]/10 blur-3xl pointer-events-none" />

      {/* Top Technical Dispatch Bar with Glassmorphic Pill */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-1 sm:pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 p-2.5 sm:px-5 rounded-2xl glass-panel text-[10px] sm:text-[11px] font-mono tracking-widest text-[var(--theme-text-muted)] uppercase shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-xs bg-[var(--theme-accent)] animate-live-pulse" />
            <span className="text-[var(--theme-text-main)] font-semibold">INDIRANAGAR PERFORMANCE HUB</span>
            <span className="hidden sm:inline opacity-50">• 12.9716° N, 77.5946° E</span>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 text-[10px]">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full glass-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-live-pulse" />
              <span className="text-emerald-400 font-semibold">FLOOR OPEN (06:00 – 23:00)</span>
            </span>
            <span className="hidden md:inline opacity-50">|</span>
            <span className="hidden sm:inline font-semibold text-[var(--theme-text-main)]">CAPPED AT 250 ACTIVE MEMBERS</span>
          </div>
        </div>
      </div>

      {/* Main Hero Body: Asymmetric Editorial Layout with Scroll Parallax */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-6 sm:py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Bold Typography & Purpose (Parallax Drift) */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="lg:col-span-7 flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 text-xs font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[var(--theme-accent)] uppercase">
            <span className="px-2.5 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)]">
              STRENGTH & RECOVERY COLLECTIVE
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.92] mb-4 sm:mb-6 uppercase text-[var(--theme-text-main)]">
            TRAIN WITH <br />
            <span className="text-[var(--theme-accent)]">PURPOSE.</span> <br />
            RECOVER HARDER.
          </h1>

          <p className="text-sm sm:text-lg text-[var(--theme-text-muted)] max-w-xl font-light leading-relaxed mb-6 sm:mb-8">
            An uncompromising, coach-directed fitness club in Indiranagar, Bengaluru. We integrate Olympic strength platforms, metabolic conditioning, and contrast therapy sauna suites for sustained human performance.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <motion.a
              href="#pricing"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-heading font-black text-xs sm:text-sm tracking-wider uppercase hover:brightness-110 athletic-btn flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[var(--theme-accent-glow)]"
              {...hoverEffect}
            >
              CLAIM YOUR MEMBERSHIP
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#about"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass-card text-[var(--theme-text-main)] font-heading font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-[var(--theme-accent)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              {...hoverEffect}
            >
              EXPLORE FACILITY
              <Compass className="w-4 h-4 text-[var(--theme-accent)]" />
            </motion.a>
          </div>

          {/* Glassmorphic Metrics Strip */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-[var(--theme-glass-border)] max-w-lg">
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel-subtle text-left">
              <div className="font-heading text-xl sm:text-3xl font-black text-[var(--theme-text-main)] tabular-nums">
                250
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                Member Cap
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel-subtle text-left">
              <div className="font-heading text-xl sm:text-3xl font-black text-[var(--theme-accent)] tabular-nums">
                12
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                Lifting Bays
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl glass-panel-subtle text-left">
              <div className="font-heading text-xl sm:text-3xl font-black text-[var(--theme-text-main)] tabular-nums">
                4° / 85°
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                Plunge / Sauna
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual Frame with Glassmorphism */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="lg:col-span-5 relative mt-4 lg:mt-0"
        >
          <div className="relative rounded-2xl glass-panel p-3 sm:p-3.5 overflow-hidden shadow-2xl glass-card">
            {/* Technical Crosshairs */}
            <span className="absolute top-2 left-2 text-[10px] font-mono text-[var(--theme-text-muted)] opacity-50">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-[var(--theme-text-muted)] opacity-50">+</span>
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[var(--theme-text-muted)] opacity-50">+</span>
            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[var(--theme-text-muted)] opacity-50">+</span>

            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[var(--theme-surface-solid)] group">
              <img
                src="/assets/aistudio/young-beautiful-woman-doing-exercise-with-bar-gym-athletic-girl-doing-workout-fitness-center-dark-background-gym-dressed-sport-clothes_7870b930.jpg"
                alt="Olympic lifting floor at Hyperfit Indiranagar"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)]/90 via-transparent to-black/40" />

              {/* Status Tags inside Frame */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 sm:px-3 py-1 rounded-lg glass-panel text-[10px] font-mono text-white uppercase tracking-wider font-semibold shadow-md">
                  STRENGTH BAY 02
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-[var(--theme-accent)]/90 backdrop-blur-md text-[var(--theme-accent-contrast)] text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-live-pulse" />
                  ACTIVE
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-left p-3 sm:p-3.5 rounded-xl glass-panel-subtle backdrop-blur-md border border-white/10">
                <div className="text-[10px] font-mono tracking-widest text-[var(--theme-accent)] uppercase mb-0.5 sm:mb-1 font-semibold">
                  CALIBRATED ELEIKO PLATFORMS
                </div>
                <div className="font-heading text-lg sm:text-2xl font-black text-white leading-tight uppercase">
                  Engineered for serious athletes and dedicated newcomers.
                </div>
              </div>
            </div>

            {/* Quick Metrics Underneath */}
            <div className="mt-3 sm:mt-3.5 pt-2.5 sm:pt-3 px-1 border-t border-[var(--theme-glass-border)] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[var(--theme-text-muted)]">
              <span>FACILITY ID: HYPER-BLR-01</span>
              <span className="text-[var(--theme-text-main)] font-bold">LIMITED TO 250</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow: Visible on desktop/tablet, hidden on mobile to prevent clutter right into Section 01 */}
      <div className="relative z-10 w-full hidden sm:flex justify-center pt-2">
        <ScrollArrow
          variant="hero"
          targetId="about"
          label="EXPLORE OUR SPACE"
          pageNumber="01 / 05"
        />
      </div>
    </section>
  );
}
