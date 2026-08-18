import React, { useState } from 'react';
import { PenTool, GraduationCap, Palette, Sparkles, Check } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

const useCasesData = [
  {
    id: 'writers',
    title: 'For Writers & Researchers',
    subtitle: 'Connect inspiration sources',
    icon: PenTool,
    description: 'Link quotes from last month’s book with yesterday’s interview note to outline your next essay effortlessly.',
    benefits: [
      'Visual story mapping across research articles',
      'Instant retrieval of forgotten book quotes',
      'No lost essay ideas in chaotic drafts'
    ],
    sampleNodes: ['Book: Thinking Fast & Slow', 'Essay Draft: Cognitive Bias', 'Interview: User Habits']
  },
  {
    id: 'learners',
    title: 'For Learners & Students',
    subtitle: 'Link concepts across subjects',
    icon: GraduationCap,
    description: 'Connect Computer Science algorithms to Neuroscience theories and see cross-disciplinary insights synthesize.',
    benefits: [
      'Bridge concepts between different courses',
      'Visual mind maps for complex exams',
      'Long-term knowledge retention'
    ],
    sampleNodes: ['GNN Embeddings', 'Synaptic Plasticity', 'Vector Search Paper']
  },
  {
    id: 'creators',
    title: 'For Creators & Designers',
    subtitle: 'Find unexpected patterns',
    icon: Palette,
    description: 'Connect moodboards, user feedback chats, and design system ideas into a single visual creative graph.',
    benefits: [
      'Synthesize customer feedback into feature ideas',
      'Connect design inspirations to sprint goals',
      'Discover unexpected creative linkages'
    ],
    sampleNodes: ['UI Glassmorphism Note', 'User Chat: Navigation', 'Design System Spec']
  }
];

export const UseCasesSection = () => {
  const [activeUseCase, setActiveUseCase] = useState('writers');

  const currentCase = useCasesData.find((c) => c.id === activeUseCase);

  return (
    <section id="use-cases" className="py-20 bg-white relative">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-600 uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Tailored For Thinkers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for how you think
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Whether you write, learn, or build — EchoSpace keeps your mind connected.
          </p>
        </div>

        {/* Profile Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {useCasesData.map((c) => {
            const Icon = c.icon;
            const isActive = activeUseCase === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveUseCase(c.id)}
                className={`
                  flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer
                  ${isActive
                    ? 'bg-slate-900 text-white shadow-lg ring-2 ring-violet-400/50 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-violet-400' : 'text-slate-500'}`} />
                <span>{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Card Panel */}
        <Card className="max-w-4xl mx-auto p-8 border-violet-200/80 shadow-xl bg-gradient-to-br from-white via-slate-50/50 to-violet-50/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-100 text-violet-800 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentCase.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentCase.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentCase.description}
              </p>

              <div className="space-y-2 pt-2">
                {currentCase.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-[10px]">
                      ✓
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Node Cluster Preview */}
            <div className="md:col-span-5 bg-slate-900 p-5 rounded-2xl border border-slate-800 text-white relative overflow-hidden flex flex-col justify-center gap-3">
              <div className="absolute inset-0 bg-dot-matrix opacity-20" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block text-center mb-1">
                Sample Graph Cluster
              </span>
              {currentCase.sampleNodes.map((nodeName, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between shadow-sm backdrop-blur-md ${idx === 0 ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-200' : idx === 1 ? 'bg-violet-950/80 border-violet-500/50 text-violet-200' : 'bg-purple-950/80 border-purple-500/50 text-purple-200'}`}
                >
                  <span className="truncate">{nodeName}</span>
                  <span className="text-[9px] font-mono opacity-70">Linked</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default UseCasesSection;
