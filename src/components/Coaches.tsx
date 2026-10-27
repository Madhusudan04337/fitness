import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const coaches = [
  {
    name: 'ALEX RIVERA',
    role: 'HEAD OF STRENGTH',
    expertise: 'Olympic Weightlifting & Progressive Strength',
    credentials: 'CSCS • 12+ Yrs Coaching',
    image: '/assets/aistudio/handsome-man-is-engaged-gym_62bdbfe3.jpg',
  },
  {
    name: 'SARAH JENKINS',
    role: 'MOBILITY & RECOVERY LEAD',
    expertise: 'Joint Mobility, Yoga & Active Muscle Recovery',
    credentials: 'RYT-500 • Mobility Certified',
    image: '/assets/aistudio/fitness-girl-practising-yoga_a5ad19ea.jpg',
  },
  {
    name: 'MARCUS THORNE',
    role: 'CONDITIONING COACH',
    expertise: 'High-Intensity Conditioning & Muscle Building',
    credentials: 'EXOS Performance Certified',
    image: '/assets/aistudio/muscular-sportsman-building-biceps-with-dumbbell_23f81afc.jpg',
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-3 uppercase font-semibold">
              OUR COACHES
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              GUIDED BY EXPERTS,<br />
              <span className="text-[var(--theme-accent)]">DRIVEN BY YOU.</span>
            </h2>
          </div>
          <p className="text-[var(--theme-text-muted)] text-sm sm:text-base max-w-sm mt-4 md:mt-0 font-light leading-relaxed">
            Every coach on our floor holds gold-standard exercise science credentials and is committed to injury-free progressive overload.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl glass-card border border-[var(--theme-glass-border)] shadow-xl"
            >
              {/* Media image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--theme-surface-solid)]">
                <img
                  src={coach.image}
                  alt={coach.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Top Coach Credential Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full glass-panel text-[10px] font-mono text-white tracking-wider font-semibold shadow-md">
                    {coach.role}
                  </span>
                  <div className="w-8 h-8 rounded-full glass-badge flex items-center justify-center border border-white/20">
                    <Award className="w-4 h-4 text-[var(--theme-accent)]" />
                  </div>
                </div>

                {/* Bottom Frosted Bio Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel-subtle border border-white/10 backdrop-blur-md text-left">
                  <div className="font-heading text-2xl font-black text-white tracking-tight mb-1">
                    {coach.name}
                  </div>
                  <div className="text-xs text-[var(--theme-accent)] font-mono font-semibold mb-1.5">
                    {coach.credentials}
                  </div>
                  <div className="text-xs text-neutral-300 leading-relaxed font-light">
                    {coach.expertise}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
