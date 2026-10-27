import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Dumbbell, Users } from 'lucide-react';

export default function CompanyTrustAndAbout() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Dual-directional reverse parallax: opposite translations
  const leftColY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const brands = ['INVERT', 'STARI', 'CIRCLE', 'AMARA', 'NEXUS'];
  const features = [
    { icon: Award, title: '10+', subtitle: 'YEARS OF ATHLETIC EXCELLENCE' },
    { icon: Dumbbell, title: '5000+', subtitle: 'COACHED TRAINING SESSIONS' },
    { icon: Users, title: '140+', subtitle: 'OFFLINE & ONLINE COMMUNITY EVENTS' },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300"
    >
      {/* 1. Trusted Brands Bar - Clean, quiet, and responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto text-center mb-10 sm:mb-16"
      >
        <div className="text-[var(--theme-text-muted)] text-[11px] sm:text-xs tracking-[0.2em] mb-4 sm:mb-6 uppercase font-mono opacity-80 text-center">
          TRUSTED BY OVER 2,000+ DEDICATED ATHLETES & MEMBERS
        </div>

        {/* Clean, responsive brand strip without awkward borders or rogue wrap dots */}
        <div className="p-3.5 sm:p-5 rounded-2xl glass-panel-subtle border border-[var(--theme-glass-border)] flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-14 text-[var(--theme-text-muted)] font-bold text-xs sm:text-sm md:text-base shadow-sm">
          {brands.map((brand, i) => (
            <span
              key={brand}
              className="flex items-center gap-1.5 hover:text-[var(--theme-text-main)] transition-colors cursor-default tracking-wider"
            >
              {i === 2 && <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] shadow-[0_0_6px_var(--theme-accent)]" />}
              {brand}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 2. Philosophy & About Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center mb-10 sm:mb-14"
      >
        <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
          NOT JUST A GYM. A DISCIPLINE.
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 tracking-tight leading-tight text-[var(--theme-text-main)]">
          A PLACE TO BELONG. <br />
          <span className="text-[var(--theme-accent)]">ENGINEERED FOR PROGRESS.</span>
        </h2>

        <p className="text-[var(--theme-text-muted)] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          We built Hyperfit for athletes, thinkers, and everyday professionals who refuse mediocracy. No gimmicks, no overcrowding, and zero vanity machines. Just world-class coaching, calibrated barbells, and deliberate recovery.
        </p>
      </motion.div>

      {/* 3. Features Glass Stats Row: Clean mobile stack */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto border border-[var(--theme-glass-border)] rounded-2xl md:rounded-full p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 glass-panel shadow-xl gap-4 sm:gap-6 md:gap-0"
      >
        {features.map((feature, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-3.5 sm:gap-4 px-2 sm:px-4 w-full md:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-badge flex items-center justify-center shrink-0 border border-[var(--theme-glass-border)]">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--theme-accent)]" />
              </div>
              <div className="text-left">
                <div className="font-heading text-xl sm:text-3xl font-black text-[var(--theme-text-main)] tabular-nums">{feature.title}</div>
                <div className="text-[var(--theme-text-muted)] font-mono text-[10px] sm:text-xs tracking-wider uppercase">{feature.subtitle}</div>
              </div>
            </div>
            {i < features.length - 1 && <div className="hidden md:block h-12 w-px bg-[var(--theme-glass-border)]" />}
          </React.Fragment>
        ))}
      </motion.div>

      {/* 4. Editorial Showcase Cards Grid with Reverse Parallax Scrolling */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-10 items-center">
        {/* Left Column - Large Card */}
        <motion.div
          style={{ y: leftColY }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-2xl h-[280px] sm:h-[400px] md:h-[520px] glass-card"
        >
          <img
            src="/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg"
            alt="Indiranagar Performance Hub"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-8">
            <div className="p-3 sm:p-4 rounded-xl glass-panel-subtle border border-white/10 backdrop-blur-md text-left">
              <div className="font-mono text-[9px] sm:text-xs text-[var(--theme-accent)] uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
                MAIN FACILITY • BENGALURU
              </div>
              <div className="font-heading text-white font-black text-lg sm:text-2xl lg:text-3xl tracking-tight mb-0.5 sm:mb-1">
                INDIRANAGAR PERFORMANCE HUB
              </div>
              <div className="text-neutral-300 text-xs sm:text-sm">
                Full-range free weights, calibrated squat racks & Eleiko lifting bays
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Stacked Cards */}
        <motion.div
          style={{ y: rightColY }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl h-[180px] sm:h-[248px] glass-card"
          >
            <img
              src="/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg"
              alt="Mindful Movement"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-3.5 sm:p-6 text-left">
              <div className="p-2.5 sm:p-3 rounded-lg glass-panel-subtle border border-white/10 backdrop-blur-md">
                <div className="font-heading text-[var(--theme-accent)] font-black text-base sm:text-xl tracking-wider mb-0.5">
                  MINDFUL MOVEMENT & MOBILITY
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-200">
                  Guided joint decompression, fascial release, and structural stability
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl h-[180px] sm:h-[248px] glass-card"
          >
            <img
              src="/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg"
              alt="Restoration & Recovery"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-3.5 sm:p-6 text-left">
              <div className="p-2.5 sm:p-3 rounded-lg glass-panel-subtle border border-white/10 backdrop-blur-md">
                <div className="font-heading text-[var(--theme-accent)] font-black text-base sm:text-xl tracking-wider mb-0.5">
                  RESTORATION & CONTRAST THERAPY
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-200">
                  Sub-zero 4°C cold plunge tubs, 85°C cedar dry sauna & recovery lounge
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
