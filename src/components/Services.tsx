import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';

const services = [
  {
    title: 'PERSONAL TRAINING',
    description: 'One-on-one coaching customized for your body, biomechanics, current strength, and personal goals.',
    id: '01',
    badge: '1-on-1 Coaching',
    image: '/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg',
  },
  {
    title: 'NUTRITION GUIDANCE',
    description: 'Macro-calculated metabolic nutrition planning tailored to your lifestyle. No crash diets, just sustainable habits.',
    id: '02',
    badge: 'Clinical Macros',
    image: '/assets/aistudio/side-view-man-doing-burpees_bcdc0943.jpg',
  },
  {
    title: 'STRENGTH & CONDITIONING',
    description: 'Periodized lifting protocols designed to build functional power, increase stamina, and bulletproof your joints.',
    id: '03',
    badge: 'Eleiko Bays',
    image: '/assets/aistudio/full-body-portrait-athletic-shirtless-male-doing-biceps-workouts-with-dumbbells-gym-club_7e7045cb.jpg',
  },
  {
    title: 'YOGA & MOBILITY',
    description: 'Improve thoracic extension, relieve joint stiffness, and enhance neuromuscular posture through guided mobility.',
    id: '04',
    badge: 'Decompression',
    image: '/assets/aistudio/back-view-woman-doing-yoga-outdoors_fa4801ee.jpg',
  },
  {
    title: 'PROGRESS TRACKING',
    description: 'Precision monthly scans covering skeletal muscle mass, body fat percentage, and strength milestones.',
    id: '05',
    badge: 'InBody Scans',
    image: '/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Reverse parallax drift for sticky left card
  const stickyFloat = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left - Sticky Glass Context Card with Bidirectional Scroll Float */}
        <motion.div
          style={{ y: stickyFloat }}
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:sticky lg:top-28 p-6 sm:p-8 rounded-2xl glass-panel shadow-2xl"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-4 uppercase font-semibold">
            WHAT WE OFFER
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight mb-4 leading-[1.05]">
            <span className="text-[var(--theme-accent)]">NOT JUST WORKOUTS.</span>
            <br />
            A WHOLE APPROACH.
          </h2>

          <p className="text-[var(--theme-text-muted)] text-base mb-8 leading-relaxed font-light">
            From calibrated barbell strength to cellular contrast recovery and clinical nutrition — we build complete athletes who perform under pressure.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href="#pricing"
              className="font-heading inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-black text-xs tracking-wider uppercase hover:brightness-110 athletic-btn shadow-lg cursor-pointer"
            >
              EXPLORE PRICING
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-heading inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-[var(--theme-text-main)] font-bold text-xs tracking-wider uppercase hover:border-[var(--theme-accent)] athletic-btn transition-colors cursor-pointer"
            >
              TOUR FACILITY
              <Play className="w-3 h-3 fill-current text-[var(--theme-accent)]" />
            </button>
          </div>

          <div className="p-4 rounded-xl glass-panel-subtle text-[var(--theme-text-muted)] text-xs flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[var(--theme-accent)] animate-live-pulse shrink-0" />
            <span>Comprehensive coaching, recovery, and nutrition under one roof.</span>
          </div>
        </motion.div>

        {/* Right - Glassmorphic Service Rows with Bidirectional Reverse Scroll Triggers */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl glass-card gap-6 cursor-default"
            >
              <div className="flex items-center gap-5 flex-1">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[var(--theme-glass-border)] shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-heading text-xl font-black text-[var(--theme-text-main)] group-hover:text-[var(--theme-accent)] transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full glass-badge text-[9px] font-mono font-semibold text-[var(--theme-accent)]">
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed font-light">{service.description}</p>
                </div>
              </div>
              <div className="font-mono text-2xl font-black text-[var(--theme-text-muted)] opacity-35 group-hover:opacity-100 group-hover:text-[var(--theme-accent)] transition-all self-end sm:self-center px-3 py-1.5 rounded-xl glass-badge">
                {service.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
