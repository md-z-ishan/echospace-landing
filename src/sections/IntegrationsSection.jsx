import React from 'react';
import { Layers, FileText, Network, FileCode, Plug, CheckCircle2 } from 'lucide-react';
import Container from '../components/ui/Container';

const integrationsList = [
  {
    id: 'notion',
    title: 'Notion',
    description: 'Export knowledge maps directly to Notion databases',
    status: 'Coming Soon',
    statusType: 'upcoming',
    icon: FileText,
    accentColor: 'text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-950',
  },
  {
    id: 'obsidian',
    title: 'Obsidian',
    description: 'Sync with your Obsidian vault. Auto-update connections',
    status: 'Coming Soon',
    statusType: 'upcoming',
    icon: Network,
    accentColor: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950',
  },
  {
    id: 'markdown',
    title: 'Markdown Export',
    description: 'Export as markdown graphs. Use anywhere',
    status: 'Available',
    statusType: 'available',
    icon: FileCode,
    accentColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950',
  },
  {
    id: 'api',
    title: 'REST API',
    description: 'Build custom integrations. Full API documentation',
    status: 'Roadmap',
    statusType: 'roadmap',
    icon: Plug,
    accentColor: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950',
  },
];

export const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors select-none">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 text-xs font-bold font-mono tracking-wide">
            <Layers className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>Integrations & Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect Your Tools
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            EchoSpace works with tools you already use
          </p>
        </div>

        {/* 4 Integrations Cards Grid (1 col mobile/tablet, 2 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {integrationsList.map((item) => {
            const Icon = item.icon;
            
            // Status Badge Colors
            let badgeStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';
            if (item.statusType === 'available') {
              badgeStyle = 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
            } else if (item.statusType === 'roadmap') {
              badgeStyle = 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800';
            }

            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-600 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-2xl ${item.accentColor} shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${badgeStyle}`}>
                    {item.status === 'Available' && <CheckCircle2 className="w-3 h-3 inline mr-1 -mt-0.5" />}
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default IntegrationsSection;
