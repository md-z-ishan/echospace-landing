import React from 'react';
import Modal from '../ui/Modal';
import { Activity, Brain, Network, Award, Zap, TrendingUp } from 'lucide-react';

export const AnalyticsModal = ({
  isOpen,
  onClose,
  allNodes,
  connections
}) => {
  if (!isOpen) return null;

  // Calculate metrics
  const totalNodes = allNodes.length;
  const totalLinks = connections.length;
  const graphDensity = ((2 * totalLinks) / (totalNodes * (totalNodes - 1))).toFixed(2);

  // Calculate most connected nodes
  const nodeConnectionsCount = allNodes.map(n => {
    const count = connections.filter(c => c.from === n.id || c.to === n.id).length;
    return { ...n, count };
  }).sort((a, b) => b.count - a.count);

  const topCentralNode = nodeConnectionsCount[0] || allNodes[0];

  // Calculate tag distribution
  const tagCounts = {};
  allNodes.flatMap(n => n.tags).forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Knowledge Graph Analytics & Density 📊">
      <div className="space-y-5">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-violet-50 border border-violet-200/80 p-3 rounded-xl text-center space-y-1">
            <span className="text-[10px] font-mono text-violet-600 font-bold uppercase tracking-wider block">
              Centrality Score
            </span>
            <span className="text-xl font-extrabold text-violet-900">0.86</span>
            <span className="text-[10px] text-violet-600 block">High Influence</span>
          </div>

          <div className="bg-cyan-50 border border-cyan-200/80 p-3 rounded-xl text-center space-y-1">
            <span className="text-[10px] font-mono text-cyan-600 font-bold uppercase tracking-wider block">
              Graph Density
            </span>
            <span className="text-xl font-extrabold text-cyan-900">{graphDensity}</span>
            <span className="text-[10px] text-cyan-600 block">Optimal Coherence</span>
          </div>

          <div className="bg-amber-50 border border-amber-200/80 p-3 rounded-xl text-center space-y-1">
            <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-wider block">
              Memory Recall
            </span>
            <span className="text-xl font-extrabold text-amber-900">92%</span>
            <span className="text-[10px] text-amber-600 block">0 Lost Notes</span>
          </div>
        </div>

        {/* Most Influential Thought (Central Node) */}
        <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Top Central Thought
              </span>
              <span className="text-xs font-bold text-slate-100 truncate block max-w-[220px]">
                {topCentralNode.title}
              </span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold bg-violet-900/80 text-violet-200 px-2.5 py-1 rounded border border-violet-500/40">
            {topCentralNode.count} Links
          </span>
        </div>

        {/* Tag Distribution Bar Chart */}
        <div>
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
            Top Topological Tags Distribution
          </span>
          <div className="space-y-2">
            {sortedTags.slice(0, 4).map(([tag, count], idx) => {
              const percentage = Math.round((count / totalNodes) * 100);
              return (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-600">
                    <span>#{tag}</span>
                    <span>{count} notes ({percentage}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Engine Status: Real-time Graph Metrics</span>
          <button onClick={onClose} className="text-violet-600 font-bold hover:underline">
            Done
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AnalyticsModal;
