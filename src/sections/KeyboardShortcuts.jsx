import React from 'react';
import { Command } from 'lucide-react';
import Container from '../components/ui/Container';

const shortcutsList = [
  { keys: '⌘K', label: 'Open Command Palette', desc: 'Search thoughts & trigger actions instantly' },
  { keys: '⌘N', label: 'New Memory', desc: 'Quickly record a new memory node' },
  { keys: '⌘I', label: 'New Idea', desc: 'Capture a new idea or project hypothesis' },
  { keys: '⌘L', label: 'Link Nodes', desc: 'Connect any 2 nodes with relationship labels' },
  { keys: '⌘R', label: 'Reveal Connections', desc: 'Toggle AI vector suggested connections' },
  { keys: '⌘/', label: 'Help & Shortcuts', desc: 'Open hotkey guide & command reference' },
];

export const KeyboardShortcuts = () => {
  return (
    <section id="shortcuts" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors select-none">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 text-xs font-bold font-mono tracking-wide">
            <Command className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>Power User Mode</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Power User Shortcuts
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Work faster with keyboard commands
          </p>
        </div>

        {/* 6 Shortcuts Grid (2 cols mobile, 3 cols desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {shortcutsList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-600 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <kbd className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-800 dark:text-slate-200 shadow-inner">
                  {item.keys}
                </kbd>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Hotkey
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyboardShortcuts;
