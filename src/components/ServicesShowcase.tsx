import React from 'react';
import { motion } from 'motion/react';
import { Users, Video, Gift, ArrowUpRight } from 'lucide-react';

const features = [
  {
    id: '01',
    icon: Users,
    title: 'COMMUNITY RUNS & LIFTS',
    description: 'Weekly Saturday group lifting circles, trail runs, and member meetups across Bengaluru.',
    tag: 'Weekly Sessions',
  },
  {
    id: '02',
    icon: Video,
    title: 'RECOVERY MASTERCLASSES',
    description: 'Doctor- and coach-led workshops covering sleep architecture, joint preservation, and breathwork.',
    tag: 'Expert Workshops',
  },
  {
    id: '03',
    icon: Gift,
    title: 'PARTNER PRIVILEGES',
    description: 'Exclusive member privileges with partner nutrition brands, athletic apparel, and recovery tech.',
    tag: 'Partner Perks',
  },
];

export default function ServicesShowcase() {
  return (
    <section id="showcase" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Hero Content with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-4 uppercase font-semibold">
            COMMUNITY & LIFESTYLE
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-[1.05]">
            A WHOLE <br />
            <span className="text-[var(--theme-accent)]">LIFE</span> APPROACH.
          </h2>

          <p className="text-[var(--theme-text-muted)] mb-8 max-w-md text-base md:text-lg leading-relaxed font-light">
            Great training is just the baseline. Our contrast recovery suites, expert guidance, and tight-knit athletic community keep you committed week after week.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#coaches"
              className="font-heading px-7 py-3.5 bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-black rounded-xl text-xs tracking-wider uppercase hover:brightness-110 athletic-btn shadow-xl shadow-[var(--theme-accent-glow)] cursor-pointer"
            >
              MEET OUR COACHES
            </a>
            <a
              href="#testimonials"
              className="font-heading px-7 py-3.5 glass-panel text-[var(--theme-text-main)] font-bold rounded-xl text-xs tracking-wider uppercase hover:border-[var(--theme-accent)] athletic-btn transition-colors cursor-pointer"
            >
              MEMBER STORIES
            </a>
          </div>
        </motion.div>

        {/* Right Side - Glassmorphic Feature Cards with Staggered Scroll Transition */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl glass-card flex items-start gap-4 sm:gap-5 group"
            >
              <div className="w-12 h-12 rounded-xl glass-badge border border-[var(--theme-glass-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--theme-accent)] transition-colors">
                <feature.icon className="w-5 h-5 text-[var(--theme-accent)]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading text-lg font-black text-[var(--theme-text-main)] group-hover:text-[var(--theme-accent)] transition-colors tracking-tight">
                    {feature.title}
                  </h3>
                  <span className="font-mono text-xs font-bold text-[var(--theme-accent)] px-2 py-0.5 rounded-full glass-badge">
                    {feature.id}
                  </span>
                </div>
                <p className="text-[var(--theme-text-muted)] text-sm leading-relaxed font-light mb-2">
                  {feature.description}
                </p>
                <div className="text-[10px] font-mono text-[var(--theme-text-subtle)] uppercase tracking-wider">
                  {feature.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
