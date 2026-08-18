import React from 'react';
import { Network, Sparkles, Activity } from 'lucide-react';

export const StatusBar = ({
  itemCount,
  coreConnCount,
  suggestedConnCount,
  revealConnections
}) => {
  return (
    <div className="p-3 bg-slate-900 border-t border-slate-800 text-slate-300 flex flex-wrap items-center justify-between text-xs font-mono gap-3 rounded-b-2xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-cyan-400">
          <Network className="w-3.5 h-3.5" />
          <span>{itemCount} Nodes</span>
        </div>
        <span className="text-slate-600">•</span>
        <div className="flex items-center gap-1.5 text-violet-400">
          <Activity className="w-3.5 h-3.5" />
          <span>{coreConnCount} Core Links</span>
        </div>
        <span className="text-slate-600">•</span>
        <div className="flex items-center gap-1.5 text-purple-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{revealConnections ? `${suggestedConnCount} Suggested Active` : `${suggestedConnCount} Hidden Ready`}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>Graph Status: Optimal Topological Coherence</span>
      </div>
    </div>
  );
};

export default StatusBar;
