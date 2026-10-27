import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'DEEPA KHAN',
    role: 'Product Designer at FinTech Studio',
    date: 'Member since 2024',
    rating: '5.0',
    quote:
      'When I started, I was anxious around Olympic barbells. The coaching team corrected my hip hinge within three sessions, eliminated my chronic lower-back strain, and helped me deadlift 1.5x bodyweight with confidence.',
    tags: ['Personal Coaching', 'Mobility Protocol'],
  },
  {
    name: 'MARCUS VANCE',
    role: 'Staff Engineer & Marathon Runner',
    date: 'Member since 2023',
    rating: '5.0',
    quote:
      'Hyperfit redefined how I view recovery. The contrast sauna and cold plunge suites cut my marathon recovery latency in half. The facility is never overcrowded and the attention to detail is second to none.',
    tags: ['Contrast Therapy', 'Conditioning'],
  },
  {
    name: 'PRIYA SHARMA',
    role: 'Managing Director, Venture Capital',
    date: 'Member since 2024',
    rating: '5.0',
    quote:
      'The Indiranagar hub is immaculate, rigorously maintained, and capped at 250 members. You never have to wait for an Eleiko rack or dumbbell pair. It is the premier training environment in South India.',
    tags: ['Eleiko Platforms', 'Nutrition Tracking'],
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header with Bidirectional Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-3 uppercase font-semibold">
            ATHLETE VOICES
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black mb-3 tracking-tight leading-tight">
            BECAUSE PERFORMANCE <br />
            <span className="text-[var(--theme-accent)]">IS MEASURED IN REAL LIFE.</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] text-sm sm:text-base font-light">
            Read unprompted testimonials from dedicated athletes and working professionals in our Indiranagar club.
          </p>
        </motion.div>

        {/* Testimonials Glass Cards Grid with Staggered Bidirectional Reverse Scroll Transition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 sm:p-8 rounded-3xl glass-card flex flex-col justify-between text-left relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl glass-badge flex items-center justify-center border border-[var(--theme-glass-border)]">
                    <Quote className="w-5 h-5 text-[var(--theme-accent)]" />
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full glass-badge text-[11px] font-mono font-bold text-[var(--theme-text-main)]">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{test.rating}</span>
                  </div>
                </div>

                <blockquote className="font-quote text-sm sm:text-base text-[var(--theme-text-main)] leading-relaxed mb-6 font-light">
                  "{test.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[var(--theme-glass-border)]">
                <div className="font-heading text-lg font-black text-[var(--theme-text-main)] tracking-tight">
                  {test.name}
                </div>
                <div className="text-xs text-[var(--theme-text-muted)] font-light mb-2">
                  {test.role}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {test.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-[var(--theme-accent)] px-2 py-0.5 rounded-full glass-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
