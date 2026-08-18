import React from 'react';
import { Plus, Eye, EyeOff, Sparkles, Share2, Download } from 'lucide-react';
import Button from '../ui/Button';

export const Controls = ({
  revealConnections,
  onToggleReveal,
  onOpenQuickAdd,
  suggestedCount = 4
}) => {
  return (
    <div className="p-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
      {/* Quick Add Buttons */}
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
      </div>

      {/* Signature Reveal Button */}
      <div className="flex items-center gap-3">
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

        <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-200 pl-3">
          <button className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Export Map">
            <Download className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" title="Share Knowledge Graph">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
