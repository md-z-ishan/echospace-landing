import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import DashboardSection from './sections/DashboardSection';
import HowItWorksSection from './sections/HowItWorksSection';
import RevealConnectionsShowcase from './sections/RevealConnectionsShowcase';
import IntegrationsSection from './sections/IntegrationsSection';
import UseCasesSection from './sections/UseCasesSection';
import KeyboardShortcuts from './sections/KeyboardShortcuts';
import FinalCTASection from './sections/FinalCTASection';
import PrivacyFirst from './sections/PrivacyFirst';
import Footer from './components/Footer';
import { playRevealSound } from './utils/audio';
import { Sparkles, X } from 'lucide-react';

export function App() {
  const [commandPaletteTrigger, setCommandPaletteTrigger] = useState(false);
  const [demoRevealTrigger, setDemoRevealTrigger] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);

  // Konami Code Listener (↑ ↑ ↓ ↓ ← → ← → b a)
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = konamiCode[konamiIndex].length === 1 ? konamiCode[konamiIndex].toLowerCase() : konamiCode[konamiIndex];

      if (key === expectedKey) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setEasterEggActive(true);
          playRevealSound();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans selection:bg-violet-400/30 selection:text-violet-900 transition-colors duration-300 relative">
      <Navbar onOpenCommandPalette={() => setCommandPaletteTrigger(prev => !prev)} />
      
      {/* Optional ACDYON Easter Egg Toast Banner */}
      {easterEggActive && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-r from-violet-900 via-purple-900 to-slate-900 text-white border border-violet-400 shadow-2xl animate-node-appear flex items-center gap-3 max-w-md">
          <div className="p-2 rounded-xl bg-violet-600 text-white shrink-0">
            <Sparkles className="w-5 h-5 animate-spin" />
          </div>
          <div className="text-left flex-1">
            <h4 className="text-xs font-mono font-bold text-violet-300 uppercase tracking-wider">
              🎉 Bonus Easter Egg Unlocked!
            </h4>
            <p className="text-xs text-slate-200 font-medium">
              You found the Konami Code (↑↑↓↓←→←→BA)! Quantum Neural Brain Mode activated.
            </p>
          </div>
          <button
            onClick={() => setEasterEggActive(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <main className="flex-1">
        <HeroSection onTriggerDemoReveal={() => setDemoRevealTrigger(prev => !prev)} />
        <ProblemSection />
        <DashboardSection 
          externalCommandPaletteToggle={commandPaletteTrigger} 
          externalDemoRevealTrigger={demoRevealTrigger}
        />
        <HowItWorksSection />
        <RevealConnectionsShowcase />
        <IntegrationsSection />
        <UseCasesSection />
        <KeyboardShortcuts />
        <FinalCTASection />
        <PrivacyFirst />
      </main>
      <Footer />
    </div>
  );
}

export default App;
