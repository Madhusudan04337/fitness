import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check, SlidersHorizontal } from 'lucide-react';
import { useTheme, THEME_OPTIONS } from '../context/ThemeContext';

interface ThemeSelectorProps {
  compact?: boolean;
}

export default function ThemeSelector({ compact = false }: ThemeSelectorProps) {
  const { theme, setTheme, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button with Frosted Glass */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Website Visual Theme"
        title={`Current Theme: ${currentTheme.name}`}
        className={`flex items-center gap-2 rounded-xl glass-panel border border-[var(--theme-glass-border)] hover:border-[var(--theme-accent)] transition-all cursor-pointer shadow-md ${
          compact ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-1.5 text-xs'
        }`}
      >
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0 border border-white/20 shadow-xs"
          style={{ backgroundColor: currentTheme.colorSwatch }}
        />
        <span className="font-mono text-[10px] tracking-wider text-[var(--theme-text-main)] uppercase font-semibold hidden sm:inline">
          {compact ? currentTheme.name : `${currentTheme.name}`}
        </span>
        <Palette className="w-3.5 h-3.5 text-[var(--theme-text-muted)]" />
      </button>

      {/* Dropdown Menu with Deep Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-full mt-2.5 z-50 w-64 rounded-2xl glass-panel border border-[var(--theme-glass-border)] p-3 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-[var(--theme-glass-border)]">
                <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[var(--theme-accent)] uppercase font-bold">
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>CURATED PALETTES</span>
                </div>
                <span className="text-[9px] font-mono text-[var(--theme-text-muted)]">
                  Tactile & Clean
                </span>
              </div>

              <div className="space-y-1">
                {THEME_OPTIONS.map((opt) => {
                  const isSelected = opt.id === theme;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTheme(opt.id);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--theme-accent-badge)] border border-[var(--theme-accent)]/50'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/20"
                          style={{ backgroundColor: opt.colorSwatch }}
                        />
                        <div>
                          <div
                            className={`text-xs font-mono font-bold tracking-tight ${
                              isSelected
                                ? 'text-[var(--theme-accent)]'
                                : 'text-[var(--theme-text-main)]'
                            }`}
                          >
                            {opt.name}
                          </div>
                          <div className="text-[10px] text-[var(--theme-text-muted)] font-mono">
                            {opt.tagline}
                          </div>
                        </div>
                      </div>

                      {isSelected && (
                        <Check className="w-4 h-4 text-[var(--theme-accent)]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
