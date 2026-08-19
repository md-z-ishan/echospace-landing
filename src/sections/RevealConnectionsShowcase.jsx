import React, { useState } from 'react';
import { Sparkles, Network, ArrowRight, Eye, EyeOff, Zap, Brain, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { playRevealSound } from '../utils/audio';

const showcaseNodes = [
  { id: 'n1', title: 'Article: AI & Cognition', type: 'memory', icon: '📄', x: 25, y: 22 },
  { id: 'n2', title: 'Coffee Chat with Sarah', type: 'memory', icon: '💬', x: 75, y: 22 },
  { id: 'n3', title: 'Auto Tagging System', type: 'idea', icon: '💡', x: 50, y: 48 },
  { id: 'n4', title: 'Shower Thought: Memory Echoes', type: 'memory', icon: '📄', x: 22, y: 78 },
  { id: 'n5', title: 'Connections Over Storage', type: 'idea', icon: '💡', x: 50, y: 82 },
  { id: 'n6', title: 'ML Models Course', type: 'memory', icon: '⚡', x: 78, y: 75 },
];

const baseLinks = [
  { from: 'n1', to: 'n3', label: 'Discussed' },
  { from: 'n2', to: 'n3', label: 'User Need' },
  { from: 'n3', to: 'n5', label: 'Builds on' },
  { from: 'n6', to: 'n3', label: 'Technical Basis' },
];

const suggestedLinks = [
  { from: 'n1', to: 'n4', label: 'Vector Match 84%' },
  { from: 'n4', to: 'n5', label: 'Organic Metaphor' },
  { from: 'n6', to: 'n5', label: 'Algorithmic Fit' },
];

export const RevealConnectionsShowcase = () => {
  const [isRevealed, setIsRevealed] = useState(true);

  const handleToggle = () => {
    const nextState = !isRevealed;
    setIsRevealed(nextState);
    if (nextState) {
      playRevealSound();
    }
  };

  const getNodeCoords = (id) => {
    const node = showcaseNodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <section id="reveal-showcase" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden transition-colors select-none">
      {/* Background Subtle Neon Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />

      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950 border border-violet-500/40 text-violet-300 text-xs font-bold font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Signature Interaction Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Discover Hidden Insights
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            See how EchoSpace's AI vector engine reveals non-obvious relationship links between isolated thoughts.
          </p>
        </div>

        {/* Side-By-Side Visual Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-stretch">
          {/* Box 1: BEFORE REVEAL (4 Connections) */}
          <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between relative overflow-hidden group shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4 z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-slate-500" />
                <h3 className="font-bold text-sm text-slate-300 uppercase tracking-wider font-mono">
                  Before Reveal (Direct Links)
                </h3>
              </div>
              <span className="text-xs font-mono font-bold bg-slate-800 text-slate-400 px-2.5 py-1 rounded-full">
                4 Connections
              </span>
            </div>

            {/* SVG Visual Canvas - Box 1 */}
            <div className="relative w-full h-[320px] bg-slate-900/60 rounded-2xl border border-slate-800/80 p-4">
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {baseLinks.map((link, idx) => {
                  const p1 = getNodeCoords(link.from);
                  const p2 = getNodeCoords(link.to);
                  return (
                    <line
                      key={idx}
                      x1={`${p1.x}%`}
                      y1={`${p1.y}%`}
                      x2={`${p2.x}%`}
                      y2={`${p2.y}%`}
                      stroke="rgba(148, 163, 184, 0.4)"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>

              {showcaseNodes.map((node) => (
                <div
                  key={node.id}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 shadow-md text-xs flex items-center gap-2 max-w-[170px]"
                >
                  <span className="text-sm">{node.icon}</span>
                  <span className="font-semibold text-[11px] text-slate-200 truncate">{node.title}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Standard Note Connections</span>
              <span>4 Visible Links</span>
            </div>
          </div>

          {/* Box 2: AFTER REVEAL (7 Connections with Violet Highlight) */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-violet-950/70 to-slate-950 border border-violet-500/50 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-glow-violet ring-1 ring-violet-400/40">
            <div className="flex items-center justify-between pb-4 border-b border-violet-800/60 mb-4 z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-violet-400 animate-ping" />
                <h3 className="font-bold text-sm text-violet-200 uppercase tracking-wider font-mono">
                  After Reveal (AI Suggested Links)
                </h3>
              </div>
              <span className="text-xs font-mono font-bold bg-violet-900 text-violet-200 border border-violet-400/40 px-2.5 py-1 rounded-full">
                7 Connections (+3 AI)
              </span>
            </div>

            {/* SVG Visual Canvas - Box 2 */}
            <div className="relative w-full h-[320px] bg-slate-900/90 rounded-2xl border border-violet-500/30 p-4 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Base 4 Links */}
                {baseLinks.map((link, idx) => {
                  const p1 = getNodeCoords(link.from);
                  const p2 = getNodeCoords(link.to);
                  return (
                    <line
                      key={idx}
                      x1={`${p1.x}%`}
                      y1={`${p1.y}%`}
                      x2={`${p2.x}%`}
                      y2={`${p2.y}%`}
                      stroke="rgba(148, 163, 184, 0.4)"
                      strokeWidth="2"
                    />
                  );
                })}

                {/* 3 Revealed Suggested Dashed Links */}
                {isRevealed && suggestedLinks.map((link, idx) => {
                  const p1 = getNodeCoords(link.from);
                  const p2 = getNodeCoords(link.to);
                  return (
                    <g key={idx} className="animate-fade-in transition-all duration-500">
                      <line
                        x1={`${p1.x}%`}
                        y1={`${p1.y}%`}
                        x2={`${p2.x}%`}
                        y2={`${p2.y}%`}
                        stroke="#A78BFA"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                        className="glow-line-violet"
                      />
                    </g>
                  );
                })}
              </svg>

              {showcaseNodes.map((node) => {
                const isLinkedToSuggested = ['n1', 'n4', 'n5', 'n6'].includes(node.id);
                return (
                  <div
                    key={node.id}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`
                      absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl border text-xs flex items-center gap-2 max-w-[170px] transition-all duration-300
                      ${isRevealed && isLinkedToSuggested
                        ? 'bg-slate-900 border-violet-400 shadow-glow-violet ring-1 ring-violet-400 text-white font-bold scale-105'
                        : 'bg-slate-800 border-slate-700 text-slate-300'
                      }
                    `}
                  >
                    <span className="text-sm">{node.icon}</span>
                    <span className="font-semibold text-[11px] truncate">{node.title}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-violet-300 font-mono">
              <span>AI Vector Proximity Math</span>
              <span>7 Total Connections (+3 Suggested)</span>
            </div>
          </div>
        </div>

        {/* Interactive Toggle Control Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-900/80 text-violet-300 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Interactive Reveal Controls</h4>
              <p className="text-xs text-slate-400">
                Toggle to compare 4 static links vs 7 AI-synthesized knowledge links.
              </p>
            </div>
          </div>

          <button
            onClick={handleToggle}
            className={`
              inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs transition-all duration-300 cursor-pointer shadow-lg
              ${isRevealed
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-glow-violet ring-2 ring-violet-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }
            `}
          >
            {isRevealed ? <EyeOff className="w-4 h-4 text-violet-200" /> : <Eye className="w-4 h-4 text-violet-400" />}
            <span>{isRevealed ? 'Hide Suggested Links' : 'Reveal Hidden Connections'}</span>
          </button>
        </div>

        {/* Statistical Summary Footer */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-xs font-mono text-slate-400 block mb-1">Before Reveal</span>
            <span className="text-2xl font-extrabold text-slate-200">4 Connections</span>
          </div>

          <div className="p-4 rounded-xl bg-violet-950/60 border border-violet-500/40">
            <span className="text-xs font-mono text-violet-300 block mb-1">After Reveal</span>
            <span className="text-2xl font-extrabold text-violet-200">7 Connections</span>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-500/40">
            <span className="text-xs font-mono text-purple-300 block mb-1">AI Discovered</span>
            <span className="text-2xl font-extrabold text-purple-200">3 Suggested Links</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RevealConnectionsShowcase;
