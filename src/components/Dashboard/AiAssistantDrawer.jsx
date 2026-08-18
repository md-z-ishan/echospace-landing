import React, { useState } from 'react';
import { Bot, Sparkles, X, ArrowRight, Brain, CheckCircle2, Zap } from 'lucide-react';
import { playRevealSound } from '../../utils/audio';

const presetQueries = [
  {
    query: "What thoughts connect to my AI paper?",
    summary: "Your 'Article: AI Future' connects directly to the 'Auto Tagging System' idea (84% similarity) and 'Coffee Chat with Sarah'. AI GNN embeddings provide the vector similarity math.",
    confidence: "94% Match",
    linkedNodes: ["Article: The Future of AI", "Auto Tagging System", "Coffee Chat with Sarah"]
  },
  {
    query: "Synthesize my core thesis on note-taking",
    summary: "Your 'Shower Thought: Memory Echoes' and Sarah's context-switching pain points validate the 'Connections Over Storage' thesis. Mycelium networks serve as the primary structural metaphor.",
    confidence: "89% Match",
    linkedNodes: ["Shower Thought: Memory Echoes", "Connections Over Storage Thesis"]
  },
  {
    query: "Find technical prerequisites for Knowledge Graph Builder",
    summary: "The 'ML Models & GNN Course' supplies topological graph algorithms needed for the 'Knowledge Graph Builder Interface' frontend rendering.",
    confidence: "92% Match",
    linkedNodes: ["ML Models Course", "Knowledge Graph Builder"]
  }
];

export const AiAssistantDrawer = ({
  isOpen,
  onClose,
  onHighlightNodes
}) => {
  const [activeQuery, setActiveQuery] = useState(null);

  if (!isOpen) return null;

  const handleRunQuery = (q) => {
    setActiveQuery(q);
    playRevealSound();
  };

  return (
    <div className="absolute right-3 top-3 bottom-3 w-88 max-w-[calc(100%-24px)] bg-slate-900/95 text-white backdrop-blur-xl rounded-2xl border border-violet-500/40 shadow-2xl p-5 z-30 flex flex-col justify-between animate-node-appear overflow-y-auto">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2 text-violet-400">
            <Bot className="w-5 h-5" />
            <span className="font-bold text-sm tracking-wide text-white">Ask AI Knowledge Assistant</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          Ask natural language questions to synthesize associative insights across your personal graph.
        </p>

        {/* Preset AI Queries */}
        <div className="space-y-2 mb-5">
          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
            Suggested Neural Queries
          </span>
          {presetQueries.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleRunQuery(item)}
              className={`
                w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between gap-2 cursor-pointer
                ${activeQuery?.query === item.query
                  ? 'bg-violet-950/80 border-violet-400 text-white shadow-glow-violet'
                  : 'bg-slate-850/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                }
              `}
            >
              <span>"{item.query}"</span>
              <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            </button>
          ))}
        </div>

        {/* Active AI Answer Card */}
        {activeQuery && (
          <div className="p-4 rounded-xl bg-violet-950/60 border border-violet-500/50 space-y-3 animate-fade-in">
            <div className="flex items-center justify-between text-xs font-semibold text-violet-300">
              <span className="flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-violet-400" />
                AI Context Synthesis
              </span>
              <span className="text-[10px] font-mono bg-violet-900 text-violet-200 px-2 py-0.5 rounded font-bold">
                {activeQuery.confidence}
              </span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
              "{activeQuery.summary}"
            </p>

            <div>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-1.5">
                Topological Nodes Linked
              </span>
              <div className="flex flex-wrap gap-1">
                {activeQuery.linkedNodes.map((n, i) => (
                  <span key={i} className="text-[10px] font-mono bg-violet-900/80 text-violet-200 border border-violet-500/40 px-2 py-0.5 rounded">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>AI Engine: Vector Embeddings v2.4</span>
        <button onClick={onClose} className="text-violet-400 font-medium hover:underline">
          Close Assistant
        </button>
      </div>
    </div>
  );
};

export default AiAssistantDrawer;
