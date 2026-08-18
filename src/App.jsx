import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import DashboardSection from './sections/DashboardSection';
import HowItWorksSection from './sections/HowItWorksSection';
import UseCasesSection from './sections/UseCasesSection';
import FinalCTASection from './sections/FinalCTASection';
import Footer from './components/Footer';

export function App() {
  const [commandPaletteTrigger, setCommandPaletteTrigger] = useState(false);
  const [demoRevealTrigger, setDemoRevealTrigger] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-violet-400/30 selection:text-violet-900">
      <Navbar onOpenCommandPalette={() => setCommandPaletteTrigger(prev => !prev)} />
      <main className="flex-1">
        <HeroSection onTriggerDemoReveal={() => setDemoRevealTrigger(prev => !prev)} />
        <ProblemSection />
        <DashboardSection 
          externalCommandPaletteToggle={commandPaletteTrigger} 
          externalDemoRevealTrigger={demoRevealTrigger}
        />
        <HowItWorksSection />
        <UseCasesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
