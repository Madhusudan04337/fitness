import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

export default function FitnessCalculator() {
  const [weight, setWeight] = useState('74');
  const [height, setHeight] = useState('178');
  const [bmi, setBmi] = useState<number | null>(23.4);

  const calculateBMI = () => {
    if (weight && height) {
      const h = parseFloat(height) / 100;
      if (h > 0) {
        const val = parseFloat(weight) / (h * h);
        setBmi(parseFloat(val.toFixed(1)));
      }
    }
  };

  const getCategory = (val: number) => {
    if (val < 18.5) {
      return {
        label: 'LEAN / UNDERWEIGHT',
        color: 'text-blue-400',
        badgeBg: 'bg-blue-500/10 border-blue-500/30',
        tip: 'Focus on hypercaloric nutrient-dense whole foods and low-rep compound strength training to build functional muscle mass.',
      };
    }
    if (val < 25) {
      return {
        label: 'OPTIMAL COMPOSITION',
        color: 'text-emerald-400',
        badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
        tip: 'Peak functional range! Maintain high protein intake, progressive barbell overloading, and contrast sauna recovery.',
      };
    }
    if (val < 30) {
      return {
        label: 'MODERATE OVERWEIGHT',
        color: 'text-[var(--theme-accent)]',
        badgeBg: 'bg-[var(--theme-accent-badge)] border-[var(--theme-accent-subtle)]',
        tip: 'Focus on metabolic conditioning circuits, 150+ minutes of Zone 2 cardio weekly, and clean whole-food caloric deficits.',
      };
    }
    return {
      label: 'ELEVATED BMI',
      color: 'text-red-400',
      badgeBg: 'bg-red-500/10 border-red-500/30',
      tip: 'Prioritize low-impact swimming/rowing, structured 1-on-1 personal coaching, and sustainable metabolic habits.',
    };
  };

  const category = bmi ? getCategory(bmi) : null;

  return (
    <section id="calculator" className="py-16 lg:py-24 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Header Block with Bidirectional Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-3 uppercase font-semibold">
            BIOMETRIC ASSESSMENT
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            INTELLIGENT <span className="text-[var(--theme-accent)]">BMI COMPOSITOR</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] text-sm sm:text-base mt-2 font-light">
            Compute your current Body Mass Index and receive actionable strength & conditioning recommendations.
          </p>
        </motion.div>

        {/* Frosted Glass Calculator Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl glass-panel p-6 sm:p-10 shadow-2xl relative overflow-hidden glass-card"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-mono uppercase text-[var(--theme-text-muted)] mb-2 flex items-center justify-between">
                <span>Body Weight (KG)</span>
                <span className="text-[var(--theme-accent)] font-bold">{weight} kg</span>
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  const h = parseFloat(height) / 100;
                  const w = parseFloat(e.target.value);
                  if (h > 0 && w > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
                }}
                placeholder="75"
                className="w-full px-5 py-3.5 rounded-xl glass-input text-base font-mono font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[var(--theme-text-muted)] mb-2 flex items-center justify-between">
                <span>Stature / Height (CM)</span>
                <span className="text-[var(--theme-accent)] font-bold">{height} cm</span>
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                  const h = parseFloat(e.target.value) / 100;
                  const w = parseFloat(weight);
                  if (h > 0 && w > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
                }}
                placeholder="178"
                className="w-full px-5 py-3.5 rounded-xl glass-input text-base font-mono font-bold"
              />
            </div>
          </div>

          {/* Quick Slider Helpers */}
          <div className="mb-8 p-4 rounded-2xl glass-panel-subtle border border-[var(--theme-glass-border)] space-y-4">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-[var(--theme-text-muted)] mb-1">
                <span>Fine-Tune Weight</span>
                <span>{weight} KG</span>
              </div>
              <input
                type="range"
                min="40"
                max="150"
                step="1"
                value={weight || '70'}
                onChange={(e) => {
                  setWeight(e.target.value);
                  const h = parseFloat(height) / 100;
                  const w = parseFloat(e.target.value);
                  if (h > 0 && w > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
                }}
                className="w-full accent-[var(--theme-accent)] cursor-pointer h-1.5 bg-[var(--theme-glass-border)] rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono text-[var(--theme-text-muted)] mb-1">
                <span>Fine-Tune Height</span>
                <span>{height} CM</span>
              </div>
              <input
                type="range"
                min="140"
                max="215"
                step="1"
                value={height || '175'}
                onChange={(e) => {
                  setHeight(e.target.value);
                  const h = parseFloat(e.target.value) / 100;
                  const w = parseFloat(weight);
                  if (h > 0 && w > 0) setBmi(parseFloat((w / (h * h)).toFixed(1)));
                }}
                className="w-full accent-[var(--theme-accent)] cursor-pointer h-1.5 bg-[var(--theme-glass-border)] rounded-lg"
              />
            </div>
          </div>

          {/* Result Output Card with Frosted Glass */}
          {bmi && category && (
            <div className="p-6 rounded-2xl glass-panel-subtle border border-[var(--theme-glass-border)] text-left space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--theme-glass-border)]">
                <div>
                  <div className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider mb-1">
                    CALCULATED INDEX SCORE
                  </div>
                  <div className="font-heading text-4xl sm:text-5xl font-black text-[var(--theme-text-main)] tabular-nums">
                    {bmi} <span className="text-base font-normal text-[var(--theme-text-muted)]">kg/m²</span>
                  </div>
                </div>

                <div className={`px-4 py-2 rounded-xl border ${category.badgeBg} ${category.color} font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 self-start sm:self-center`}>
                  <Activity className="w-4 h-4" />
                  <span>{category.label}</span>
                </div>
              </div>

              {/* Actionable Athletic Coaching Protocol */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[var(--theme-text-muted)] leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-[var(--theme-accent)] shrink-0 mt-0.5" />
                <p>{category.tip}</p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--theme-text-muted)]">
                <span>Indiranagar Performance Lab Scan</span>
                <a
                  href="#pricing"
                  className="text-[var(--theme-accent)] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  Book InBody Scan with Coach <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
