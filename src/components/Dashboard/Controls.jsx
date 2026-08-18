import React from 'react';
import { Plus, Sparkles, Share2, Download, Network, Clock, Layers, Link, Sliders, Bot, BarChart2 } from 'lucide-react';
import Button from '../ui/Button';
import TimelineSlider from './TimelineSlider';

export const Controls = ({
  revealConnections,
  onToggleReveal,
  onOpenQuickAdd,
  onOpenConnectModal,
  onOpenAiDrawer,
  onOpenAnalyticsModal,
  suggestedCount = 4,
  layoutMode,
  onChangeLayoutMode,
  aiThreshold,
  onChangeAiThreshold,
  timelineStep,
  onChangeTimelineStep,
  allNodes,
  connections
}) => {
  // Export Knowledge Graph JSON functionality
  const handleExportJson = () => {
    const graphData = {
      product: "EchoSpace Visual Knowledge Graph",
      exportedAt: new Date().toISOString(),
      nodes: allNodes,
      connections: connections,
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(graphData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `echospace-knowledge-graph-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 select-none transition-colors">
      {/* Quick Actions & Layout Switcher */}
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            icon={Plus}
            onClick={() => onOpenQuickAdd('memory')}
          >
            Add Memory
          </Button>
          <Button
            variant="secondary"
            size="sm"
            icon={Plus}
            onClick={() => onOpenQuickAdd('idea')}
          >
            Add Idea
          </Button>
          <Button
            variant="outline"
            size="sm"
            icon={Link}
            onClick={onOpenConnectModal}
          >
            Link Nodes
          </Button>
        </div>

        {/* Spatial Layout Switcher */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium">
          <button
            onClick={() => onChangeLayoutMode('cluster')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${layoutMode === 'cluster' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            title="Organic Network Cluster Layout"
          >
            <Network className="w-3.5 h-3.5 text-violet-500" />
            <span className="hidden md:inline">Cluster</span>
          </button>

          <button
            onClick={() => onChangeLayoutMode('timeline')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${layoutMode === 'timeline' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            title="Chronological Left-to-Right Timeline Layout"
          >
            <Clock className="w-3.5 h-3.5 text-cyan-500" />
            <span className="hidden md:inline">Timeline</span>
          </button>

          <button
            onClick={() => onChangeLayoutMode('category')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${layoutMode === 'category' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            title="Categorized Memories vs Ideas Grouping Layout"
          >
            <Layers className="w-3.5 h-3.5 text-purple-500" />
            <span className="hidden md:inline">Categories</span>
          </button>
        </div>
      </div>

      {/* Timeline Slider & AI Brain Drawer Trigger */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Timeline Slider */}
        <TimelineSlider
          currentStep={timelineStep}
          onChangeStep={onChangeTimelineStep}
        />

        {/* Ask AI Brain Button */}
        <button
          onClick={onOpenAiDrawer}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-violet-950 text-violet-300 border border-violet-500/40 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-violet-900 transition-all cursor-pointer shadow-sm"
        >
          <Bot className="w-4 h-4 text-violet-400 animate-pulse" />
          <span>Ask AI Brain</span>
        </button>

        {/* Analytics Button */}
        <button
          onClick={onOpenAnalyticsModal}
          className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title="Open Graph Analytics"
        >
          <BarChart2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
        </button>

        {/* Reveal Hidden Connections Button */}
        <button
          onClick={onToggleReveal}
          className={`
            group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs transition-all duration-300 shadow-sm cursor-pointer
            ${revealConnections
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-glow-violet ring-2 ring-violet-400'
              : 'bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/80 dark:to-purple-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800'
            }
          `}
        >
          <Sparkles className={`w-4 h-4 ${revealConnections ? 'animate-spin text-violet-200' : 'text-violet-500 dark:text-violet-400'}`} />
          <span>
            {revealConnections ? 'Hide Suggested Links' : 'Reveal Hidden Connections'}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${revealConnections ? 'bg-white/20 text-white' : 'bg-violet-200 dark:bg-violet-900 text-violet-800 dark:text-violet-200'}`}>
            +{suggestedCount} AI
          </span>
        </button>

        {/* Export & Share Action Buttons */}
        <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-200 dark:border-slate-800 pl-3">
          <button
            onClick={handleExportJson}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Download Graph JSON Backup"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('EchoSpace Map URL copied to clipboard!');
              }
            }}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Share Knowledge Graph URL"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
