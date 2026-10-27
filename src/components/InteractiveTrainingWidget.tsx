import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Flame, Activity, Zap, CheckCircle, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const WORKOUT_PROGRAMS = [
  {
    id: 'strength',
    name: 'STRENGTH & OLYMPIC LIFTING',
    duration: '60 MINS',
    intensity: 'HIGH INTENSITY',
    coach: 'Alex Rivera (CSCS)',
    focus: 'Barbell Squats, Clean & Jerk, Deadlift Mechanics',
    calories: '650–800 KCAL',
    heartRate: 'Zone 4 (80–90%)',
    recovery: '48h recommended',
    image: '/assets/aistudio/young-fitness-man-studio_d2399ba3.jpg',
  },
  {
    id: 'conditioning',
    name: 'METABOLIC CONDITIONING',
    duration: '45 MINS',
    intensity: 'MAX EFFORT',
    coach: 'Marcus Thorne',
    focus: 'Kettlebells, Rowing Intervals, Assault Bike & Core',
    calories: '750–950 KCAL',
    heartRate: 'Zone 5 (90–95%)',
    recovery: '24–36h recommended',
    image: '/assets/aistudio/side-view-man-doing-burpees_bcdc0943.jpg',
  },
  {
    id: 'mobility',
    name: 'MOBILITY & SPINE FLOW',
    duration: '50 MINS',
    intensity: 'MODERATE',
    coach: 'Sarah Jenkins (RYT-500)',
    focus: 'Active Joint Relief, Deep Stretching & Posture Correction',
    calories: '350–450 KCAL',
    heartRate: 'Zone 2 (60–70%)',
    recovery: 'Daily sustainable',
    image: '/assets/aistudio/back-view-woman-doing-yoga-outdoors_fa4801ee.jpg',
  },
  {
    id: 'recovery',
    name: 'CONTRAST THERAPY PROTOCOL',
    duration: '30 MINS',
    intensity: 'RESTORATIVE',
    coach: 'Recovery Lounge Team',
    focus: '4°C Cold Plunge Tubs & 85°C Cedar Dry Sauna',
    calories: '200 KCAL (REST)',
    heartRate: 'Zone 1 (Vagal Tone)',
    recovery: 'Active regeneration',
    image: '/assets/aistudio/young-sportive-man-is-doing-exercises-with-dumbbells-empty-gym-club_a3ab2b9a.jpg',
  },
];

export default function InteractiveTrainingWidget() {
  const [activeTab, setActiveTab] = useState(WORKOUT_PROGRAMS[0].id);
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const currentProgram = WORKOUT_PROGRAMS.find((p) => p.id === activeTab) || WORKOUT_PROGRAMS[0];

  // Dynamic estimated weekly burn calculation
  const baseAvgCalories = parseInt(currentProgram.calories.split('–')[0].replace(/\D/g, '')) || 500;
  const weeklyEstimatedBurn = baseAvgCalories * daysPerWeek;

  return (
    <section className="py-20 lg:py-28 px-6 bg-[var(--theme-bg)] text-[var(--theme-text-main)] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full glass-badge border border-[var(--theme-glass-border)] text-[var(--theme-accent)] text-xs font-mono tracking-[0.25em] mb-4 uppercase font-semibold">
            INTERACTIVE PROTOCOL EXPLORER
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight">
            CUSTOMIZE YOUR <br />
            <span className="text-[var(--theme-accent)]">TRAINING CALENDAR.</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] text-base md:text-lg font-light leading-relaxed">
            Select a signature coaching module to inspect intensity profiles, physiological stress markers, and projected weekly caloric demand.
          </p>
        </motion.div>

        {/* Glassmorphic Selector Segmented Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl glass-panel max-w-3xl mx-auto mb-10 shadow-xl"
        >
          {WORKOUT_PROGRAMS.map((prog) => {
            const isActive = prog.id === activeTab;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-heading font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] shadow-lg shadow-[var(--theme-accent-glow)]'
                    : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text-main)] hover:bg-[var(--theme-glass-badge)]'
                }`}
              >
                {prog.id === 'strength' && <Dumbbell className="w-3.5 h-3.5" />}
                {prog.id === 'conditioning' && <Flame className="w-3.5 h-3.5" />}
                {prog.id === 'mobility' && <Activity className="w-3.5 h-3.5" />}
                {prog.id === 'recovery' && <Zap className="w-3.5 h-3.5" />}
                <span>{prog.id}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Main Glass Cockpit Card with Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProgram.id}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl glass-panel p-6 sm:p-10 shadow-2xl relative overflow-hidden glass-card"
          >
            {/* Left Side: Program Telemetry & Interactive Frequency Slider */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full glass-badge font-mono text-[10px] font-bold text-[var(--theme-accent)] uppercase">
                  {currentProgram.intensity}
                </span>
                <span className="font-mono text-xs text-[var(--theme-text-muted)]">
                  DURATION: {currentProgram.duration}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-black text-[var(--theme-text-main)] tracking-tight mb-3">
                {currentProgram.name}
              </h3>

              <p className="text-[var(--theme-text-muted)] text-sm sm:text-base leading-relaxed mb-6 font-light">
                <strong className="font-semibold text-[var(--theme-text-main)]">Target Core:</strong> {currentProgram.focus}
              </p>

              {/* 4-Cell Frosted Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                <div className="p-3.5 rounded-xl glass-panel-subtle border border-[var(--theme-glass-border)]">
                  <div className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase mb-1">ENERGY EXPENDITURE</div>
                  <div className="font-heading font-black text-lg text-[var(--theme-text-main)] tabular-nums">{currentProgram.calories}</div>
                </div>
                <div className="p-3.5 rounded-xl glass-panel-subtle border border-[var(--theme-glass-border)]">
                  <div className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase mb-1">HEART RATE ZONE</div>
                  <div className="font-heading font-black text-lg text-[var(--theme-accent)]">{currentProgram.heartRate}</div>
                </div>
                <div className="p-3.5 rounded-xl glass-panel-subtle border border-[var(--theme-glass-border)]">
                  <div className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase mb-1">DIRECTING COACH</div>
                  <div className="font-heading font-black text-sm text-[var(--theme-text-main)] truncate">{currentProgram.coach}</div>
                </div>
                <div className="p-3.5 rounded-xl glass-panel-subtle border border-[var(--theme-glass-border)]">
                  <div className="text-[10px] font-mono text-[var(--theme-text-muted)] uppercase mb-1">RECOVERY WINDOW</div>
                  <div className="font-heading font-black text-sm text-emerald-400">{currentProgram.recovery}</div>
                </div>
              </div>

              {/* Interactive Glass Slider: Frequency per week */}
              <div className="p-4 rounded-2xl glass-panel-subtle border border-[var(--theme-glass-border)] mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-[var(--theme-text-main)] uppercase tracking-wider">
                    Weekly Commitment: <span className="text-[var(--theme-accent)]">{daysPerWeek} Days/Week</span>
                  </span>
                  <span className="font-mono text-xs text-[var(--theme-accent)] font-bold tabular-nums">
                    Est. ~{weeklyEstimatedBurn} kcal/wk
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
                  className="w-full accent-[var(--theme-accent)] cursor-pointer h-2 bg-[var(--theme-glass-border)] rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-[var(--theme-text-muted)] mt-1.5">
                  <span>1x (Light)</span>
                  <span>3x (Standard)</span>
                  <span>5x (Athlete)</span>
                  <span>6x (Elite)</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--theme-accent)] text-[var(--theme-accent-contrast)] font-heading font-black text-xs tracking-wider uppercase hover:brightness-110 athletic-btn shadow-xl shadow-[var(--theme-accent-glow)] cursor-pointer"
                >
                  SCHEDULE PROGRAM TRIAL
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono text-[var(--theme-text-muted)] hidden sm:inline">
                  Zero commitment movement trial included
                </span>
              </div>
            </div>

            {/* Right Side: Media Frame with Glass Badges */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] border border-[var(--theme-glass-border)] shadow-xl group">
              <img
                src={currentProgram.image}
                alt={currentProgram.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg glass-panel text-[10px] font-mono text-white uppercase tracking-wider font-semibold shadow-md">
                  LIVE WORKSHOP
                </span>
                <span className="px-2.5 py-1 rounded-lg glass-badge text-emerald-400 font-mono text-[10px] font-bold uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-pulse" />
                  SLOTS AVAILABLE
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel-subtle backdrop-blur-md border border-white/10 text-left">
                <div className="text-[10px] font-mono text-[var(--theme-accent)] uppercase mb-0.5 font-bold">
                  HEAD COACHING SUPERVISION
                </div>
                <div className="font-heading text-lg font-black text-white leading-tight">
                  {currentProgram.coach}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
