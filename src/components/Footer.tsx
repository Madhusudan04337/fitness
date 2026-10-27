import React from 'react';
import { Compass, Clock, Mail, Phone, ArrowUp, ShieldCheck, MapPin } from 'lucide-react';
import { fastSmoothScrollTo } from '../utils/smoothScroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    fastSmoothScrollTo(0);
  };

  return (
    <footer id="contact" className="relative w-full border-t border-[var(--theme-glass-border)] glass-panel bg-[var(--theme-glass-bg)] text-[var(--theme-text-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-14 border-b border-[var(--theme-glass-border)]">
          {/* Brand & Club Mission (4 cols on lg) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col text-left space-y-4">
            <div className="font-heading text-2xl sm:text-3xl font-black tracking-tight text-[var(--theme-text-main)] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-xs bg-[var(--theme-accent)] shadow-[0_0_8px_var(--theme-accent)]" />
              HYPER<span className="text-[var(--theme-accent)]">FIT</span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] font-light leading-relaxed max-w-sm">
              An uncompromising, coach-directed fitness club in Indiranagar, Bengaluru. We integrate calibrated Olympic lifting platforms, metabolic conditioning, and contrast therapy sauna suites for sustained human performance.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full glass-badge text-[10px] font-mono text-[var(--theme-accent)] uppercase font-semibold">
                Eleiko Certified Facility
              </span>
              <span className="px-2.5 py-1 rounded-full glass-badge text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                Strict 250 Member Cap
              </span>
            </div>
          </div>

          {/* Training Disciplines (2 cols on lg) */}
          <div className="flex flex-col text-left space-y-3 lg:col-span-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[var(--theme-accent)] uppercase">
              TRAINING DISCIPLINES
            </div>
            <ul className="space-y-2 text-xs font-sans text-[var(--theme-text-muted)]">
              <li>
                <a href="#services" className="hover:text-[var(--theme-text-main)] transition-colors">
                  Olympic Lifting & Eleiko Bays
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--theme-text-main)] transition-colors">
                  Metabolic Conditioning & Turf
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--theme-text-main)] transition-colors">
                  4°C Cold Plunge & 85°C Cedar Sauna
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--theme-text-main)] transition-colors">
                  Functional Mobility & Spine Decompression
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[var(--theme-text-main)] transition-colors">
                  InBody Composition & Biometric Scans
                </a>
              </li>
            </ul>
          </div>

          {/* Memberships & Inquiries (2 cols on lg) */}
          <div className="flex flex-col text-left space-y-3 lg:col-span-2">
            <div className="text-xs font-mono font-bold tracking-widest text-[var(--theme-accent)] uppercase">
              MEMBERSHIPS
            </div>
            <ul className="space-y-2 text-xs font-sans text-[var(--theme-text-muted)]">
              <li>
                <a href="#pricing" className="hover:text-[var(--theme-text-main)] transition-colors">
                  Floor Access Plans
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[var(--theme-text-main)] transition-colors">
                  1-on-1 Personal Coaching
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[var(--theme-text-main)] transition-colors">
                  VIP All-Inclusive Elite
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:text-[var(--theme-text-main)] transition-colors">
                  Member Voice & Feedback
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[var(--theme-text-main)] transition-colors">
                  Membership FAQs & Freezes
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours (3 cols on lg) */}
          <div className="flex flex-col text-left space-y-3 lg:col-span-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[var(--theme-accent)] uppercase">
              LOCATION & HOURS
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl glass-panel-subtle border border-[var(--theme-glass-border)] space-y-2 text-xs text-[var(--theme-text-muted)]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--theme-accent)] shrink-0 mt-0.5" />
                <span className="leading-tight">100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, KA 560038</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>Mon – Sun: 06:00 – 23:00 IST</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>+91 80 4920 1800</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>concierge@hyperfit.club</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright, Member Policies & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--theme-text-muted)]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {currentYear} HYPERFIT PERFORMANCE CLUB.</p>
            <span className="hidden sm:inline opacity-30">•</span>
            <div className="flex items-center gap-3 text-[11px]">
              <a href="#faq" className="hover:text-[var(--theme-text-main)] transition-colors">Privacy</a>
              <span>·</span>
              <a href="#faq" className="hover:text-[var(--theme-text-main)] transition-colors">Terms</a>
              <span>·</span>
              <a href="#faq" className="hover:text-[var(--theme-text-main)] transition-colors">Guest Policy</a>
            </div>
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-badge hover:text-[var(--theme-text-main)] hover:border-[var(--theme-accent)] transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
