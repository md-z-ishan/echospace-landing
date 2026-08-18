import React from 'react';
import { PlusCircle, Link, Sparkles, Lightbulb, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

const steps = [
  {
    step: "01",
    title: "Add Memories & Ideas",
    description: "Capture articles, coffee chat notes, book quotes, or shower thoughts as lightweight spatial nodes without needing folders.",
    icon: PlusCircle,
    color: "cyan",
  },
  {
    step: "02",
    title: "Create Connections",
    description: "Draw direct visual links between related thoughts. Define relationship types like 'Inspired by', 'Builds on', or 'Discussed in'.",
    icon: Link,
    color: "violet",
  },
  {
    step: "03",
    title: "See Patterns Emerge",
    description: "Watch your personal knowledge graph dynamically organize into clusters of connected thinking across time.",
    icon: Sparkles,
    color: "purple",
  },
  {
    step: "04",
    title: "Rediscover Forgotten Insights",
    description: "Click 'Reveal Hidden Connections' to let vector similarity surface forgotten memories relevant to your active project.",
    icon: Lightbulb,
    color: "amber",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 relative">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 uppercase bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
            Intuitive Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How EchoSpace Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Four simple steps to transform scattered thoughts into a living visual brain.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Card key={idx} className="relative flex flex-col justify-between p-6 group hover:border-violet-300">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold font-mono text-slate-300 group-hover:text-violet-500 transition-colors">
                      {s.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' : s.color === 'violet' ? 'bg-violet-50 text-violet-600' : s.color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-amber-50 text-amber-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-violet-600 group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
