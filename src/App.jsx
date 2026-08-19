import React, { useState } from 'react';
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

export function App() {
  const [commandPaletteTrigger, setCommandPaletteTrigger] = useState(false);
  const [demoRevealTrigger, setDemoRevealTrigger] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans selection:bg-violet-400/30 selection:text-violet-900 transition-colors duration-300">
      <Navbar onOpenCommandPalette={() => setCommandPaletteTrigger(prev => !prev)} />
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
