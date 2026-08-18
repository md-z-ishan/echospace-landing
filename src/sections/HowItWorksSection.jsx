import React from 'react';
import { Sparkles, Brain, Network, Zap } from 'lucide-react';
import Container from '../components/ui/Container';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Capture Raw Memories & Ideas",
      description: "Type quick thoughts, book highlights, or voice notes. No folder hierarchy required.",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
    },
    {
      number: "02",
      title: "AI Vector Linkage Discovery",
      description: "EchoSpace computes semantic proximity across your personal knowledge graph in real-time.",
      icon: Network,
      color: "from-violet-500 to-purple-500",
    },
    {
      number: "03",
      title: "Synthesize Unforeseen Connections",
      description: "Explore associative clusters, query your personal brain graph, and uncover forgotten thesis points.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 text-xs font-bold font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3-Step Autonomous Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How EchoSpace Connects Your Brain
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From fragmented notes to an interconnected neural knowledge engine in seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} text-white flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-300 dark:text-slate-700 group-hover:text-violet-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
