import React from 'react';
import { motion } from 'motion/react';
import { Award, Dumbbell, Users, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CompanyTrustAndAbout() {
  const brands = ['INVERT', 'STARI', 'CIRCLE', 'AMARA', 'NEXUS'];
  const features = [
    { icon: Award, title: '10+', subtitle: 'YEARS OF ATHLETIC EXCELLENCE' },
    { icon: Dumbbell, title: '5000+', subtitle: 'COACHED TRAINING SESSIONS' },
    { icon: Users, title: '140+', subtitle: 'OFFLINE & ONLINE COMMUNITY EVENTS' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      {/* 1. Trusted Brands Bar in Glassmorphic Capsule */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <div className="text-[var(--theme-text-muted)] text-xs tracking-widest mb-6 uppercase font-mono opacity-80 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
          <span>TRUSTED BY OVER 2,000+ DEDICATED ATHLETES & MEMBERS</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl glass-panel-subtle border border-[var(--theme-glass-border)] flex flex-wrap justify-center items-center gap-8 md:gap-14 text-[var(--theme-text-muted)] font-bold text-sm md:text-base shadow-lg">
          {brands.map((brand, i) => (
            <span
              key={brand}
              className="flex items-center gap-2 hover:text-[var(--theme-text-main)] transition-colors cursor-default"
            >
              {i === 2 && <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)] shadow-[0_0_8px_var(--theme-accent)]" />}
              {brand}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 2. Philosophy & About Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] font-mono text-xs md:text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
          NOT JUST A GYM. A DISCIPLINE.
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight text-[var(--theme-text-main)]">
          A PLACE TO BELONG. <br />
          <span className="text-[var(--theme-accent)]">ENGINEERED FOR PROGRESS.</span>
        </h2>

        <p className="text-[var(--theme-text-muted)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          We built Hyperfit for athletes, thinkers, and everyday professionals who refuse mediocracy. No gimmicks, no overcrowding, and zero vanity machines. Just world-class coaching, calibrated barbells, and deliberate recovery.
        </p>
      </motion.div>

      {/* 3. Features Glass Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto border border-[var(--theme-glass-border)] rounded-2xl md:rounded-full p-6 flex flex-col md:flex-row items-center justify-between mb-16 glass-panel shadow-xl gap-6 md:gap-0"
      >
        {features.map((feature, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-4 px-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center shrink-0 border border-[var(--theme-glass-border)]">
                <feature.icon className="w-6 h-6 text-[var(--theme-accent)]" />
              </div>
              <div className="text-left">
                <div className="font-heading text-2xl sm:text-3xl font-black text-[var(--theme-text-main)] tabular-nums">{feature.title}</div>
                <div className="text-[var(--theme-text-muted)] font-mono text-xs tracking-wider uppercase">{feature.subtitle}</div>
              </div>
            </div>
            {i < features.length - 1 && <div className="hidden md:block h-12 w-px bg-[var(--theme-glass-border)]" />}
          </React.Fragment>
        ))}
      </motion.div>

      {/* 4. Editorial Showcase Cards Grid with Glassmorphic Overlays */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
        {/* Left Column - Large Card with Scroll Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-2xl h-[340px] sm:h-[420px] md:h-[520px] glass-card"
        >
          <img
            src="/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg"
            alt="Indiranagar Performance Hub"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5 sm:p-8">
            <div className="p-4 rounded-xl glass-panel-subtle border border-white/10 backdrop-blur-md">
              <div className="font-mono text-[10px] sm:text-xs text-[var(--theme-accent)] uppercase tracking-wider mb-1 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
                MAIN FACILITY • BENGALURU
              </div>
              <div className="font-heading text-white font-black text-xl sm:text-2xl lg:text-3xl tracking-tight mb-1">
                INDIRANAGAR PERFORMANCE HUB
              </div>
              <div className="text-neutral-300 text-xs sm:text-sm">
                Full-range free weights, calibrated squat racks & Eleiko lifting bays
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Stacked Cards */}
        <div className="flex flex-col gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl h-[200px] sm:h-[248px] glass-card"
          >
            <img
              src="/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg"
              alt="Mindful Movement"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <div className="p-3 rounded-lg glass-panel-subtle border border-white/10 backdrop-blur-md">
                <div className="font-heading text-[var(--theme-accent)] font-black text-lg sm:text-xl tracking-wider mb-0.5">
                  MINDFUL MOVEMENT & MOBILITY
                </div>
                <div className="text-xs text-neutral-200">
                  Guided joint decompression, fascial release, and structural stability
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl h-[200px] sm:h-[248px] glass-card"
          >
            <img
              src="/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg"
              alt="Restoration & Recovery"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-6">
              <div className="p-3 rounded-lg glass-panel-subtle border border-white/10 backdrop-blur-md">
                <div className="font-heading text-[var(--theme-accent)] font-black text-lg sm:text-xl tracking-wider mb-0.5">
                  RESTORATION & CONTRAST THERAPY
                </div>
                <div className="text-xs text-neutral-200">
                  Sub-zero 4°C cold plunge tubs, 85°C cedar dry sauna & recovery lounge
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
