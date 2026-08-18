import React from 'react';
import { Sparkles, Play, ShieldCheck, Network } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import HeroVisual from '../components/HeroVisual';

export const HeroSection = ({ onTriggerDemoReveal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Mesh Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (60% Desktop) — Value Proposition */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200/80 text-violet-700 text-xs font-semibold tracking-wide w-fit">
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              <span>Introducing EchoSpace Knowledge Graph</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              See connections between your{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                memories
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">
                ideas
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Your thoughts live in isolation. EchoSpace connects them visually. Rediscover forgotten memories. See patterns emerge across time.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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
              <Button 
                variant="secondary" 
                size="lg" 
                icon={Play}
                onClick={() => {
                  if (onTriggerDemoReveal) onTriggerDemoReveal();
                  const el = document.getElementById('dashboard');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See Demo Map
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-violet-500" />
                <span>No folder clutter</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-cyan-500" />
                <span>Visual node links</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>Instant discovery</span>
              </div>
            </div>
          </div>

          {/* Right Column (40% Desktop) — Interactive Node Visual */}
          <div className="lg:col-span-5 relative">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
