import React from 'react';
import { ShieldCheck, Lock, EyeOff, Unlock } from 'lucide-react';
import Container from '../components/ui/Container';

const privacyPoints = [
  {
    id: 'encrypted',
    title: 'Your knowledge stays yours',
    description: 'All data encrypted. No third-party access. Ever.',
    icon: Lock,
    iconColor: 'text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-950',
  },
  {
    id: 'no-ai-training',
    title: 'No AI training on your data',
    description: "We don't use your knowledge to train our models.",
    icon: EyeOff,
    iconColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950',
  },
  {
    id: 'open-roadmap',
    title: 'Open source roadmap',
    description: 'See our security practices. Contribute if you want.',
    icon: Unlock,
    iconColor: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950',
  },
];

export const PrivacyFirst = () => {
  return (
    <section id="privacy" className="py-16 md:py-20 bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors select-none">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Data Ownership & Control</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built With Privacy First
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Reassuring security practices designed to keep your personal knowledge visual brain safe.
          </p>
        </div>

        {/* 3 Columns Desktop / 1 Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {privacyPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col space-y-3 text-left"
              >
                <div className={`p-3 rounded-2xl ${point.iconColor} w-fit shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {point.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PrivacyFirst;
