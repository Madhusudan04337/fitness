import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Flame,
  Clock,
  Lock,
  X,
  CreditCard,
  UserCheck,
} from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  highlight?: boolean;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  accessCode: string;
}

const TIERS: PricingTier[] = [
  {
    id: 'baseline',
    name: 'Floor Access',
    tagline: 'OPEN GYM ACCESS',
    monthlyPrice: 149,
    annualPrice: 119,
    description:
      'Full gym floor and lifting platform access for self-directed athletes and fitness enthusiasts.',
    accessCode: 'STANDARD',
    features: [
      'Full access to Indiranagar gym floor (6 AM – 11 PM)',
      'Olympic barbells, bumper plates & power lifting racks',
      'Full range of strength & cardio conditioning equipment',
      'Complimentary initial movement screening & body scan',
      'Sauna & cold plunge recovery access (2 sessions/week)',
      'Member mobile app for workout and habit tracking',
    ],
    notIncluded: [
      '1-on-1 personal training sessions',
      'Personalized nutrition & meal plans',
    ],
    ctaText: 'CHOOSE PLAN',
  },
  {
    id: 'coached',
    name: 'Coached Training',
    tagline: 'PERSONAL COACHING',
    badge: 'MOST POPULAR',
    highlight: true,
    monthlyPrice: 289,
    annualPrice: 229,
    description:
      'Our most popular plan: dedicated 1-on-1 personal coaching, custom nutrition, and unlimited recovery.',
    accessCode: 'COACHED',
    features: [
      'Everything in Floor Access, plus:',
      '4 one-on-one personal training sessions per month',
      'Customized monthly training program updated to your goals',
      'Unlimited sauna, cold plunge & recovery lounge access',
      'Personalized meal plan and practical nutrition guidance',
      'Direct chat support with your assigned personal coach',
      'Monthly progress check-ins and body composition scans',
      'Complimentary towel service & assigned private locker',
    ],
    ctaText: 'START COACHED PLAN',
  },
  {
    id: 'atelier',
    name: 'All-Inclusive Elite',
    tagline: 'PREMIUM VIP',
    badge: 'LIMITED TO 25 MEMBERS',
    monthlyPrice: 490,
    annualPrice: 390,
    description:
      'The comprehensive fitness experience with unlimited personal training, physiotherapy, and VIP amenities.',
    accessCode: 'VIP ELITE',
    features: [
      'Everything in Coached Training, plus:',
      'Unlimited 1-on-1 private coaching sessions with head trainers',
      'Priority access to dedicated private training zones',
      'Comprehensive fitness, mobility, and posture assessments',
      'On-site sports physiotherapy & massage (2 sessions/month)',
      'Full access across all Bangalore and partner locations',
      'Complimentary protein shakes & private executive shower suite',
      'Reserved parking space & complimentary gym bag and gear',
    ],
    ctaText: 'JOIN ALL-INCLUSIVE',
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleOpenModal = (tier: PricingTier) => {
    setSelectedTier(tier);
    setModalSuccess(false);
  };

  const handleCloseModal = () => {
    setSelectedTier(null);
    setModalSuccess(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setModalSuccess(true);
  };

  return (
    <section
      id="pricing"
      className="relative w-full py-20 lg:py-28 px-6 lg:px-12 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300"
    >
      <div className="relative max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[11px] font-mono tracking-[0.25em] text-[var(--theme-accent)] uppercase mb-4 shadow-sm">
            <Flame className="w-3.5 h-3.5" />
            <span>MEMBERSHIP PLANS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--theme-text-main)] leading-tight mb-4">
            SIMPLE, TRANSPARENT <br />
            <span className="text-[var(--theme-accent)]">MEMBERSHIP PROTOCOLS.</span>
          </h2>

          <p className="text-[var(--theme-text-muted)] text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            No initiation surprises. No hidden maintenance clauses. Choose the level of coaching and recovery access that aligns with your lifestyle.
          </p>

          {/* Frosted Glass Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full glass-panel border border-[var(--theme-glass-border)] shadow-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] shadow-md'
                  : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)]'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] shadow-md'
                  : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)]'
              }`}
            >
              <span>ANNUAL</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* 3 Tier Grid with Frosted Glassmorphism and Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-stretch mb-16">
          {TIERS.map((tier, index) => {
            const price = billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
            const isHighlighted = tier.highlight;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl transition-all duration-300 ${
                  isHighlighted
                    ? 'glass-panel border-2 border-[var(--theme-accent)] shadow-2xl shadow-[var(--theme-accent-glow)] md:-translate-y-2'
                    : 'glass-card border border-[var(--theme-glass-border)]'
                }`}
              >
                {/* Highlight Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-[10px] font-mono font-black tracking-widest uppercase shadow-md ${
                        isHighlighted
                          ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)]'
                          : 'glass-panel border border-[var(--theme-glass-border)] text-[var(--theme-text-muted)]'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[var(--theme-accent)] uppercase mb-2 font-semibold">
                    {tier.tagline}
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-[var(--theme-text-main)] mb-3">
                    {tier.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] leading-relaxed mb-6 font-light">
                    {tier.description}
                  </p>

                  {/* Price Tag with Glass Panel */}
                  <div className="p-4 rounded-2xl glass-panel-subtle border border-[var(--theme-glass-border)] mb-6 flex items-baseline gap-2">
                    <span className="font-heading text-4xl sm:text-5xl font-black text-[var(--theme-text-main)] tabular-nums">
                      ${price}
                    </span>
                    <span className="text-xs font-mono text-[var(--theme-text-muted)]">
                      / month {billingCycle === 'annual' && '(billed annually)'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 text-left">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--theme-text-muted)] pb-1 border-b border-[var(--theme-glass-border)]">
                      Included Protocols:
                    </div>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[var(--theme-text-muted)]">
                        <Check className="w-4 h-4 text-[var(--theme-accent)] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}

                    {tier.notIncluded && tier.notIncluded.length > 0 && (
                      <div className="pt-2 opacity-50 space-y-2">
                        {tier.notIncluded.map((notF, nIdx) => (
                          <div key={nIdx} className="flex items-start gap-2.5 text-xs text-[var(--theme-text-muted)]">
                            <X className="w-4 h-4 text-[var(--theme-text-muted)] shrink-0 mt-0.5" />
                            <span className="leading-tight">{notF}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Primary Tier CTA Button */}
                <button
                  onClick={() => handleOpenModal(tier)}
                  className={`w-full py-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    isHighlighted
                      ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] hover:brightness-110 shadow-xl shadow-[var(--theme-accent-glow)]'
                      : 'glass-panel text-[var(--theme-text-main)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee Strip in Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 rounded-2xl glass-panel border border-[var(--theme-glass-border)] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-[var(--theme-text-muted)]"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--theme-accent)]" />
            <span>14-Day Full Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[var(--theme-accent)]" />
            <span>No Long-Term Contracts • Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--theme-accent)]" />
            <span>Complimentary Orientation Session Included</span>
          </div>
        </motion.div>
      </div>

      {/* Booking Checkout Modal with Deep Glassmorphism */}
      <AnimatePresence>
        {selectedTier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/75 backdrop-blur-xl"
            />

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl glass-panel border border-[var(--theme-glass-border)] shadow-2xl z-10 text-left"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 rounded-full glass-badge text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)] transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {modalSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-[var(--theme-text-main)]">
                    APPLICATION RECEIVED
                  </h3>
                  <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed max-w-sm mx-auto">
                    Welcome to Hyperfit, <strong>{formData.name}</strong>. Our head coach will contact you within 24 hours at <strong>{formData.email}</strong> to schedule your orientation and issue your digital keycard.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="mt-4 px-6 py-3 rounded-xl bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 cursor-pointer"
                  >
                    RETURN TO SITE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-5">
                  <div>
                    <span className="text-[10px] font-mono text-[var(--theme-accent)] uppercase tracking-wider font-bold">
                      SELECTED PROTOCOL
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-[var(--theme-text-main)]">
                      {selectedTier.name} — ${billingCycle === 'annual' ? selectedTier.annualPrice : selectedTier.monthlyPrice}/mo
                    </h3>
                    <p className="text-xs text-[var(--theme-text-muted)] mt-1">
                      Indiranagar Hub • {billingCycle === 'annual' ? 'Billed Annually' : 'Billed Monthly'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--theme-text-muted)] mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Chen"
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--theme-text-muted)] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maya@example.com"
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[var(--theme-text-muted)] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl glass-panel-subtle text-xs text-[var(--theme-text-muted)] flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                    <span>Your personal information is securely handled and never shared.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-heading font-black text-xs uppercase tracking-wider hover:brightness-110 athletic-btn shadow-xl shadow-[var(--theme-accent-glow)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>CONFIRM MEMBERSHIP RESERVATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
