import React from 'react';
import { motion } from 'motion/react';
import { Compass, Clock, Mail, Phone, ArrowUp } from 'lucide-react';
import { fastSmoothScrollTo } from '../utils/smoothScroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    fastSmoothScrollTo(0);
  };

  return (
    <footer id="contact" className="relative w-full border-t border-[var(--theme-glass-border)] glass-panel bg-[var(--theme-glass-bg)] text-[var(--theme-text-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[var(--theme-glass-border)]">
          {/* Brand & Mission */}
          <div className="md:col-span-5 flex flex-col text-left space-y-4">
            <div className="font-heading text-2xl font-black tracking-tight text-[var(--theme-text-main)] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-xs bg-[var(--theme-accent)] shadow-[0_0_8px_var(--theme-accent)]" />
              HYPER<span className="text-[var(--theme-accent)]">FIT</span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--theme-text-muted)] font-light leading-relaxed max-w-sm">
              An uncompromising strength, conditioning, and contrast therapy recovery club in Indiranagar, Bengaluru. Capped at 250 active members to ensure pristine floor standards.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full glass-badge text-[10px] font-mono text-[var(--theme-accent)] uppercase font-semibold">
                Eleiko Certified Facility
              </span>
              <span className="px-3 py-1 rounded-full glass-badge text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                Open 7 Days/Wk
              </span>
            </div>
          </div>

          {/* Quick Hub Landmarks */}
          <div className="md:col-span-3 flex flex-col text-left space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[var(--theme-accent)] uppercase">
              FACILITY HUBS
            </div>
            <ul className="space-y-2 text-xs font-mono text-[var(--theme-text-muted)]">
              <li>
                <a href="#about" className="hover:text-[var(--theme-text-main)] transition-colors">
                  01 // The Indiranagar Sanctuary
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--theme-text-main)] transition-colors">
                  02 // Olympic Strength & Bays
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[var(--theme-text-main)] transition-colors">
                  03 // Membership Protocol
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-[var(--theme-text-main)] transition-colors">
                  04 // Head Coach Roster
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[var(--theme-text-main)] transition-colors">
                  05 // Biometric BMI Scan
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Operating Hours */}
          <div className="md:col-span-4 flex flex-col text-left space-y-3.5">
            <div className="text-xs font-mono font-bold tracking-widest text-[var(--theme-accent)] uppercase">
              VISIT & CONNECT
            </div>

            <div className="p-4 rounded-2xl glass-panel-subtle border border-[var(--theme-glass-border)] space-y-2.5 text-xs text-[var(--theme-text-muted)]">
              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[var(--theme-accent)] shrink-0 mt-0.5" />
                <span>100 Feet Road, Indiranagar, Bengaluru, KA 560038</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>Monday – Sunday: 06:00 – 23:00 IST</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>membership@hyperfit.club</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--theme-text-muted)]">
          <p>© {currentYear} HYPERFIT PERFORMANCE CLUB. ALL RIGHTS RESERVED.</p>

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
