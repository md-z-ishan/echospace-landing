import React from 'react';
import { X, Network, Link, Sparkles, Calendar, Tag } from 'lucide-react';
import Badge from '../ui/Badge';

export const NodeInspector = ({
  node,
  allNodes,
  connections,
  onClose
}) => {
  if (!node) return null;

  // Find linked connections for this node
  const linkedConns = connections.filter((c) => c.from === node.id || c.to === node.id);

  return (
    <div className="absolute right-3 top-3 bottom-3 w-80 max-w-[calc(100%-24px)] bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl p-5 z-30 flex flex-col justify-between animate-node-appear overflow-y-auto">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100 mb-3">
          <div className="flex items-center gap-2">
            <Badge variant={node.type === 'memory' ? 'memory' : 'idea'}>
              {node.type}
            </Badge>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {node.date}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-slate-900 leading-snug mb-2">
          {node.title}
        </h4>

        {/* Snippet */}
        <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
          "{node.snippet}"
        </p>

        {/* Tags */}
        <div className="mb-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
            Tags & Context
          </span>
          <div className="flex flex-wrap gap-1.5">
            {node.tags.map((tag, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 text-[11px] font-mono bg-violet-50 text-violet-700 border border-violet-200/60 px-2 py-0.5 rounded-md">
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Linked Connections Breakdown */}
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Connected Graph Nodes ({linkedConns.length})
          </span>
          <div className="space-y-2">
            {linkedConns.length === 0 ? (
              <span className="text-xs text-slate-400 italic">No direct connections.</span>
            ) : (
              linkedConns.map((conn, idx) => {
                const otherId = conn.from === node.id ? conn.to : conn.from;
                const otherNode = allNodes.find((n) => n.id === otherId);
                const isAI = conn.strength === 'ai';

                if (!otherNode) return null;

                return (
                  <div key={idx} className={`p-2.5 rounded-xl border text-xs flex flex-col gap-1 ${isAI ? 'bg-purple-50/70 border-purple-200 text-purple-900' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                    <div className="flex items-center justify-between font-semibold">
                      <span className="truncate">{otherNode.title}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${isAI ? 'bg-purple-200 text-purple-800 font-mono' : 'bg-slate-200 text-slate-700 font-mono'}`}>
                        {conn.label}
                      </span>
                    </div>
                    {conn.reasoning && (
                      <p className="text-[10px] text-purple-700/80 pt-1 border-t border-purple-200/50 italic">
                        🤖 {conn.reasoning}
                      </p>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Node ID: #{node.id}</span>
        <button onClick={onClose} className="text-violet-600 font-medium hover:underline">
          Close Inspector
        </button>
      </div>
    </div>
  );
};

export default NodeInspector;
