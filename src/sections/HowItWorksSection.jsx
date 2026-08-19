import React from 'react';
import { PlusCircle, Network, Sparkles, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';

const steps = [
  {
    number: '01',
    title: 'Add Your Memories & Ideas',
    description: 'Type quick thoughts, paste articles, record voice notes. No complex setup needed.',
    icon: PlusCircle,
    color: 'from-violet-500 to-indigo-600',
    bgColor: 'bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300',
  },
  {
    number: '02',
    title: 'EchoSpace Finds Connections',
    description: 'System analyzes semantic meaning and finds links between your thoughts. Automatic, real-time.',
    icon: Network,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300',
  },
  {
    number: '03',
    title: 'Discover Hidden Patterns',
    description: "Reveal connections you didn't know existed. See your knowledge as an interconnected graph.",
    icon: Sparkles,
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300',
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors select-none">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 text-xs font-bold font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
            <span>Frictionless 3-Step Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How EchoSpace Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            From raw thoughts to an interconnected personal knowledge graph in seconds.
          </p>
        </div>

        {/* 3-Step Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                {/* Step Header: Icon & Step Number */}
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl ${step.bgColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-extrabold font-mono text-slate-300 dark:text-slate-700 tracking-tighter">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Step Indicator Arrow (Only between 1 & 2, 2 & 3 on desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="p-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
                      <ArrowRight className="w-4 h-4 text-violet-500" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
