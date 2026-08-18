import React from 'react';
import { Sparkles, ArrowRight, Network } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

export const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glowing Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-violet-600/30 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />

      <Container size="md" className="relative z-10 text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-500 to-cyan-500 mx-auto flex items-center justify-center text-white shadow-glow-violet animate-float">
          <Network className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
          Start mapping your thoughts today
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-xl mx-auto font-normal">
          Stop burying ideas in linear lists. Build a visual knowledge graph that grows with your mind.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            icon={Sparkles}
            onClick={() => {
              const el = document.getElementById('dashboard');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Create Your First Map
          </Button>
        </div>

        <div className="pt-4 text-xs font-mono text-slate-400">
          <span>Free Demo Canvas • No Credit Card Required</span>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
