import React, { useState } from 'react';
import { Sparkles, PenTool, GraduationCap, Compass, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';

export const UseCasesSection = () => {
  const [activePersona, setActivePersona] = useState('creators');

  const personas = [
    {
      id: "creators",
      title: "Writers & Content Creators",
      icon: PenTool,
      tagline: "Link scattered article ideas into a cohesive book thesis",
      benefits: [
        "Never lose a midnight shower thought again",
        "Connect past research clips to your active script outline",
        "Export markdown graphs directly into Obsidian or Notion"
      ]
    },
    {
      id: "learners",
      title: "Researchers & Students",
      icon: GraduationCap,
      tagline: "Synthesize dense literature across multiple semester courses",
      benefits: [
        "Map AI papers, machine learning math, and GNN algorithms",
        "Automatic associative tagging eliminates folder confusion",
        "Track memory recall confidence scores over time"
      ]
    },
    {
      id: "founders",
      title: "Startup Founders & Strategists",
      icon: Compass,
      tagline: "Uncover hidden product market fit insights from customer chats",
      benefits: [
        "Link user interview pain points directly to feature roadmap ideas",
        "Visualize strategic dependencies in organic cluster view",
        "Share interactive graph snapshots with your co-founders"
      ]
    }
  ];

  const currentPersona = personas.find(p => p.id === activePersona) || personas[0];

  return (
    <section id="use-cases" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 text-xs font-bold font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Deep Thinkers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailored For Your Knowledge Workflow
          </h2>
        </div>

        {/* Persona Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {personas.map((p) => {
            const Icon = p.icon;
            const isActive = activePersona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePersona(p.id)}
                className={`
                  flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-xs transition-all cursor-pointer border
                  ${isActive
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-500 shadow-glow-violet scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-violet-300'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Persona Showcase Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            "{currentPersona.tagline}"
          </h3>

          <div className="space-y-4 pt-2">
            {currentPersona.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                <span className="text-base text-slate-700 dark:text-slate-200 font-medium">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UseCasesSection;
