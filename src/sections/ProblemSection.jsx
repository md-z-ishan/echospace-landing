import React, { useState } from 'react';
import { Layers, Network, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

export const ProblemSection = () => {
  const [activeTab, setActiveTab] = useState('graph'); // 'linear' vs 'graph'

  return (
    <section id="problem" className="py-20 bg-white relative">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-violet-600 uppercase bg-violet-50 px-3 py-1 rounded-full border border-violet-200">
            Linear vs Connected Thinking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your thoughts deserve better
          </h2>
          <p className="text-lg text-slate-600">
            Modern note apps store things linearly in rigid folders. But humans think in connections.
          </p>
        </div>

        {/* Interactive Comparison Switcher */}
        <div className="max-w-4xl mx-auto mb-10 flex justify-center">
          <div className="p-1.5 bg-slate-100 rounded-2xl flex items-center gap-2 border border-slate-200">
            <button
              onClick={() => setActiveTab('linear')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${activeTab === 'linear' ? 'bg-white text-slate-900 shadow-md border border-slate-200' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Traditional Linear Notes</span>
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${activeTab === 'graph' ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-glow-violet' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Network className="w-4 h-4" />
              <span>EchoSpace Connected Graph</span>
            </button>
          </div>
        </div>

        {/* Comparison Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Linear Notes */}
          <Card className={`transition-all duration-300 ${activeTab === 'linear' ? 'ring-2 ring-slate-400 bg-slate-50/80 scale-[1.01]' : 'opacity-70'}`}>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-500" />
                <h3 className="font-bold text-slate-900 text-lg">Linear Note Apps</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">Folders & Lists</span>
            </div>

            <ul className="space-y-3 text-sm text-slate-600 mb-6">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">•</span>
                <span>Yesterday's conversation gets buried deep in folder hierarchies.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">•</span>
                <span>Articles, shower thoughts, and project ideas live in isolated silos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold">•</span>
                <span>Tags create chaotic tag clouds without explicit relationship context.</span>
              </li>
            </ul>

            {/* Visual Representation of Linear Notes */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 font-mono text-xs text-slate-500 space-y-2">
              <div className="p-2 bg-slate-100 rounded border border-slate-200 flex items-center justify-between">
                <span>📁 01_Archive/2026/Article_Notes.txt</span>
                <span className="text-[10px]">Isolated</span>
              </div>
              <div className="p-2 bg-slate-100 rounded border border-slate-200 flex items-center justify-between">
                <span>📁 02_Ideas/AutoTagging_Draft.txt</span>
                <span className="text-[10px]">Isolated</span>
              </div>
              <div className="p-2 bg-slate-100 rounded border border-slate-200 flex items-center justify-between">
                <span>📁 03_Chats/Sarah_Coffee_Chat.txt</span>
                <span className="text-[10px]">Forgotten</span>
              </div>
            </div>
          </Card>

          {/* Card 2: EchoSpace Connected Graph */}
          <Card className={`transition-all duration-300 ${activeTab === 'graph' ? 'ring-2 ring-violet-500 shadow-glow-violet bg-white scale-[1.01]' : 'opacity-70'}`}>
            <div className="flex items-center justify-between pb-4 border-b border-violet-100 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet-600" />
                <h3 className="font-bold text-slate-900 text-lg">EchoSpace Visual Map</h3>
              </div>
              <span className="text-xs font-mono text-violet-600 font-bold bg-violet-50 px-2 py-0.5 rounded">Connected</span>
            </div>

            <ul className="space-y-3 text-sm text-slate-700 mb-6">
              <li className="flex items-start gap-2.5">
                <span className="text-violet-600 font-bold">✓</span>
                <span>Memories & ideas become visual nodes linked by organic relationships.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-violet-600 font-bold">✓</span>
                <span>Rediscover forgotten insights visually linked to current projects.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-violet-600 font-bold">✓</span>
                <span>See unexpected patterns emerge automatically as your graph grows.</span>
              </li>
            </ul>

            {/* Visual Representation of Connected Graph */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs text-white relative overflow-hidden h-[126px] flex items-center justify-center">
              <div className="absolute inset-0 bg-dot-matrix opacity-20" />
              <div className="relative z-10 flex items-center justify-center gap-4 text-center">
                <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-[11px]">
                  📄 Article Note
                </div>
                <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-400 animate-pulse" />
                <div className="p-2 rounded-lg bg-violet-950 border border-violet-500/50 text-violet-300 text-[11px]">
                  💡 Project Idea
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;
