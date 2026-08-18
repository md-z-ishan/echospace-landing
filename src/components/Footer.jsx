import React from 'react';
import { Network, Heart } from 'lucide-react';
import Container from './ui/Container';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold">
                <Network className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">EchoSpace</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              EchoSpace visualizes connections between your memories and ideas. Transform scattered thoughts into an interconnected personal knowledge graph.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-white font-bold font-mono text-xs uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li><a href="#problem" className="hover:text-violet-400 transition-colors">Why EchoSpace</a></li>
              <li><a href="#dashboard" className="hover:text-violet-400 transition-colors">Knowledge Map Demo</a></li>
              <li><a href="#how-it-works" className="hover:text-violet-400 transition-colors">How It Works</a></li>
              <li><a href="#use-cases" className="hover:text-violet-400 transition-colors">Use Cases</a></li>
            </ul>
          </div>

          {/* Tech Stack Col */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-white font-bold font-mono text-xs uppercase tracking-wider block">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded font-mono">React 18</span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded font-mono">Vite 5</span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded font-mono">Tailwind CSS</span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded font-mono">HTML5 Canvas</span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded font-mono">Lucide Icons</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>Built with passion by</span>
            <span className="text-white font-bold">Zishan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>EchoSpace Engine v1.0.0 • All Systems Operational</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} EchoSpace Inc. All rights reserved.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
