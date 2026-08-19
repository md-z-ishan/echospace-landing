import React, { useState } from 'react';
import { Sparkles, FolderX, Network, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';

export const ProblemSection = () => {
  const [activeTab, setActiveTab] = useState('echospace');

  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 text-xs font-bold font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Linear vs Connected Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your thoughts deserve better than static folder lists
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Standard note apps bury your memories in nested folders. EchoSpace transforms static lists into a live, self-organizing personal graph.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-10">
          <div className="p-1.5 bg-slate-200 dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-800 inline-flex items-center gap-2">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer ${activeTab === 'traditional' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Traditional Folder Apps 📁
            </button>
            <button
              onClick={() => setActiveTab('echospace')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer ${activeTab === 'echospace' ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-glow-violet' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              EchoSpace Knowledge Graph 🌐
            </button>
          </div>
        </div>

        {/* Comparison Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Card */}
          <div className={`p-8 rounded-3xl border transition-all duration-300 ${activeTab === 'traditional' ? 'bg-white dark:bg-slate-900 border-red-300 dark:border-red-900/50 shadow-xl ring-2 ring-red-400/30' : 'bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-60'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center font-bold">
                <FolderX className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Traditional Notes</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">Isolated & Forgotten</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg leading-none">✕</span>
                <span>Notes hidden 4 levels deep in subfolders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg leading-none">✕</span>
                <span>Zero context links between past memories & new ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg leading-none">✕</span>
                <span>Requires manual tagging and tagging fatigue</span>
              </li>
            </ul>
          </div>

          {/* EchoSpace Graph Card (High-Contrast White Text on Dark Violet Gradient) */}
          <div className={`p-8 rounded-3xl border transition-all duration-300 ${activeTab === 'echospace' ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 border-violet-500/60 shadow-2xl ring-2 ring-violet-400 shadow-glow-violet' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-70'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-bold shadow-glow-violet">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${activeTab === 'echospace' ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  EchoSpace Visual Brain
                </h3>
                <span className={`text-xs ${activeTab === 'echospace' ? 'text-violet-300 font-semibold' : 'text-violet-600 dark:text-violet-400'}`}>
                  Living Connected Canvas
                </span>
              </div>
            </div>

            <ul className={`space-y-4 text-sm font-medium ${activeTab === 'echospace' ? 'text-slate-100' : 'text-slate-700 dark:text-slate-300'}`}>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <span>Automatic AI vector connection discovery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Dynamic spatial layout presets (Cluster, Timeline, Category)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span>Interactive node inspector drawer & audio chime feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;
