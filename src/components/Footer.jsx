import React from 'react';
import { Network, Github, Twitter, Heart } from 'lucide-react';
import Container from './ui/Container';

export const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800 text-xs">
      <Container size="lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold">
              <Network className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-base">EchoSpace</span>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">v2.4</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#problem" className="hover:text-white transition-colors">Why EchoSpace</a>
            <a href="#dashboard" className="hover:text-white transition-colors">Knowledge Map</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com/md-z-ishan/echospace-landing" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <span className="text-[11px] font-mono">Built for Deep Thinkers</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <span>© 2026 EchoSpace Inc. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by EchoSpace Team
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
