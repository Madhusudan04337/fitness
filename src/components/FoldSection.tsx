import React from 'react';
import { motion } from 'motion/react';

interface FoldSectionProps {
  id: string;
  pageIndex?: number;
  totalPages?: number;
  category?: string;
  title?: string;
  nextId?: string;
  nextLabel?: string;
  children: React.ReactNode;
  showBottomArrow?: boolean;
  className?: string;
}

export default function FoldSection({
  id,
  pageIndex,
  totalPages = 5,
  category,
  title,
  children,
  className = '',
}: FoldSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full bg-[var(--theme-bg)] transition-colors duration-300 ${className}`}
    >
      {/* Subtle Glassmorphic Landmark Header Strip (Only if category and pageIndex exist) */}
      {category && pageIndex && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 pt-8 pb-2">
          <div className="flex items-center justify-between border-b border-[var(--theme-glass-border)] pb-2 text-[10px] font-mono tracking-widest text-[var(--theme-text-muted)] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-xs bg-[var(--theme-accent)]" />
              <span className="text-[var(--theme-text-main)] font-semibold">{category}</span>
              {title && <span className="opacity-50 hidden sm:inline">• {title}</span>}
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full glass-badge text-[9px] font-bold text-[var(--theme-accent)]">
                SECTION 0{pageIndex} / 0{totalPages}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="relative w-full">
        {children}
      </div>
    </motion.section>
  );
}
