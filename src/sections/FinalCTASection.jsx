import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

export const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-900/10 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors">
      <Container size="lg">
        <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 text-white overflow-hidden shadow-2xl border border-violet-500/30">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-900/60 border border-violet-500/40 text-violet-200 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Ready To Connect Your Brain?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Start building your interactive knowledge map today
            </h2>

            <p className="text-base sm:text-lg text-slate-300">
              No complex setup. Zero folder management. Experience associative thinking in real-time.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                icon={Sparkles}
                onClick={() => {
                  const el = document.getElementById('dashboard');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Launch EchoSpace Map
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
