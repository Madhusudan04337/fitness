import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'I’M A COMPLETE BEGINNER. CAN I STILL TRAIN AT HYPERFIT?',
    answer: 'Absolutely. Over 40% of our members began with zero barbell or gym experience. Every membership includes a comprehensive 1-on-1 movement assessment and biometric scan to establish safe baseline movement patterns before progressive loading.',
  },
  {
    question: 'WHAT DOES THE 250 ACTIVE MEMBER CAP ACTUALLY MEAN?',
    answer: 'To eliminate wait times and prevent the overcrowding standard at commercial gyms, we enforce a strict 250 active member ceiling per facility. You have instant access to our calibrated Eleiko racks, kettlebells, and recovery suites whenever you arrive.',
  },
  {
    question: 'ARE THE COLD PLUNGE TUBS AND SAUNA INCLUDED IN ALL TIERS?',
    answer: 'Yes! Contrast recovery is central to our philosophy. Standard Floor Access includes 2 weekly contrast sessions, while Coached and Elite tiers feature unlimited access to our 4°C plunge tubs and 85°C dry cedar sauna suites.',
  },
  {
    question: 'CAN I FREEZE OR CANCEL MY MEMBERSHIP IF I TRAVEL?',
    answer: 'Yes. All memberships can be paused for up to 60 days per calendar year directly in the member portal. We operate on month-to-month and transparent annual options with no hidden cancellation penalties.',
  },
  {
    question: 'WHAT EQUIPMENT AND AMENITIES ARE PROVIDED ON SITE?',
    answer: 'We provide calibrated Eleiko and Rogue Olympic bars, bumper plates, dumbbell sets up to 60kg, assault bikes, Concept2 rowers, private executive shower suites with organic bath products, complimentary towel service, and locked private storage.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Header Block with Reverse Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-3 uppercase font-semibold">
            COMMON INQUIRIES
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            FREQUENTLY <span className="text-[var(--theme-accent)]">CLARIFIED.</span>
          </h2>

          <p className="text-[var(--theme-text-muted)] text-sm sm:text-base mt-2 font-light">
            Everything you need to know about our training standards, member cap, and recovery protocols.
          </p>
        </motion.div>

        {/* Frosted Glass Accordion List with Bidirectional Reverse Scroll Entrance */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'glass-panel border-2 border-[var(--theme-accent)] shadow-xl shadow-[var(--theme-accent-glow)]'
                    : 'glass-card border border-[var(--theme-glass-border)] hover:border-[var(--theme-accent)]/50'
                }`}
              >
                <button
                  className="w-full text-left p-6 font-bold flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-heading text-base sm:text-lg tracking-wide ${isOpen ? 'text-[var(--theme-accent)]' : 'text-[var(--theme-text-main)]'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-sm shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-black'
                        : 'glass-badge text-[var(--theme-text-muted)]'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 pb-6 pt-1 text-[var(--theme-text-muted)] text-sm leading-relaxed border-t border-[var(--theme-glass-border)] font-light mt-1"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
