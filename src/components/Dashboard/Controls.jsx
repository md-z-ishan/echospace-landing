import React from 'react';
import { Plus, Sparkles, Share2, Download, Network, Clock, Layers, Link, Sliders } from 'lucide-react';
import Button from '../ui/Button';

export const Controls = ({
  revealConnections,
  onToggleReveal,
  onOpenQuickAdd,
  onOpenConnectModal,
  suggestedCount = 4,
  layoutMode,
  onChangeLayoutMode,
  aiThreshold,
  onChangeAiThreshold,
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
    <div className="p-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
      {/* Quick Add Buttons & Connect Nodes */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Add Memory & Idea */}
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
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-medium">
          <button
            onClick={() => onChangeLayoutMode('cluster')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${layoutMode === 'cluster' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-900'}`}
            title="Organic Network Cluster Layout"
          >
            <Network className="w-3.5 h-3.5 text-violet-500" />
            <span className="hidden md:inline">Cluster</span>
          </button>

          <button
            onClick={() => onChangeLayoutMode('timeline')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${layoutMode === 'timeline' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-900'}`}
            title="Chronological Left-to-Right Timeline Layout"
          >
            <Clock className="w-3.5 h-3.5 text-cyan-500" />
            <span className="hidden md:inline">Timeline</span>
          </button>

          <button
            onClick={() => onChangeLayoutMode('category')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${layoutMode === 'category' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-900'}`}
            title="Categorized Memories vs Ideas Grouping Layout"
          >
            <Layers className="w-3.5 h-3.5 text-purple-500" />
            <span className="hidden md:inline">Categories</span>
          </button>
        </div>
      </div>

      {/* Signature Reveal & Threshold Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {/* AI Similarity Threshold Slider */}
        {revealConnections && (
          <div className="hidden lg:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs">
            <Sliders className="w-3.5 h-3.5 text-violet-600" />
            <span className="font-mono text-slate-600">Match: {aiThreshold}%+</span>
            <input
              type="range"
              min="50"
              max="95"
              step="5"
              value={aiThreshold}
              onChange={(e) => onChangeAiThreshold(parseInt(e.target.value))}
              className="w-16 accent-violet-600 cursor-pointer"
            />
          </div>
        )}

        {/* Reveal Hidden Connections Button */}
        <button
          onClick={onToggleReveal}
          className={`
            group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs transition-all duration-300 shadow-sm cursor-pointer
            ${revealConnections
              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-glow-violet ring-2 ring-violet-400'
              : 'bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 text-violet-700 border border-violet-200'
            }
          `}
        >
          <Sparkles className={`w-4 h-4 ${revealConnections ? 'animate-spin text-violet-200' : 'text-violet-500'}`} />
          <span>
            {revealConnections ? 'Hide Suggested Links' : 'Reveal Hidden Connections'}
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${revealConnections ? 'bg-white/20 text-white' : 'bg-violet-200 text-violet-800'}`}>
            +{suggestedCount} AI
          </span>
        </button>

        {/* Export & Share Action Buttons */}
        <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-200 pl-3">
          <button
            onClick={handleExportJson}
            className="p-2 rounded-lg text-slate-500 hover:text-violet-600 hover:bg-slate-100 transition-colors cursor-pointer"
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
            className="p-2 rounded-lg text-slate-500 hover:text-violet-600 hover:bg-slate-100 transition-colors cursor-pointer"
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
