import React, { useState, useEffect } from 'react';
import { Search, Sparkles, Plus, BookOpen, Lightbulb, Moon, Sun, Network, Clock, Layers, ArrowRight, X } from 'lucide-react';
import { playNodeChime } from '../utils/audio';

export const CommandPalette = ({
  isOpen,
  onClose,
  allNodes,
  onSelectNode,
  onOpenQuickAdd,
  onToggleReveal,
  onChangeLayoutMode
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredNodes = allNodes.filter(n =>
    n.title.toLowerCase().includes(query.toLowerCase()) ||
    n.snippet.toLowerCase().includes(query.toLowerCase()) ||
    n.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const actions = [
    { id: 'add_mem', label: 'Create New Memory Node', icon: Plus, type: 'action', run: () => onOpenQuickAdd('memory') },
    { id: 'add_idea', label: 'Create New Idea Node', icon: Plus, type: 'action', run: () => onOpenQuickAdd('idea') },
    { id: 'reveal', label: 'Toggle Reveal Hidden Connections', icon: Sparkles, type: 'action', run: onToggleReveal },
    { id: 'lay_cluster', label: 'Switch Layout to Cluster View', icon: Network, type: 'action', run: () => onChangeLayoutMode('cluster') },
    { id: 'lay_timeline', label: 'Switch Layout to Timeline View', icon: Clock, type: 'action', run: () => onChangeLayoutMode('timeline') },
    { id: 'lay_category', label: 'Switch Layout to Category View', icon: Layers, type: 'action', run: () => onChangeLayoutMode('category') },
  ].filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={() => onClose(false)}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-node-appear"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-violet-500" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search nodes (e.g. #AI, GNN, Add Memory)..."
            className="flex-1 text-sm bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400 font-medium"
          />
          <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded">ESC to exit</span>
        </div>

        {/* Results Stream */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-3">
          {/* Actions Section */}
          {actions.length > 0 && (
            <div>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider px-3 block mb-1">
                Quick Actions
              </span>
              <div className="space-y-1">
                {actions.map((act) => {
                  const Icon = act.icon;
                  return (
                    <div
                      key={act.id}
                      onClick={() => {
                        act.run();
                        playNodeChime(783.99);
                        onClose(false);
                      }}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-violet-50 hover:text-violet-700 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-violet-100 text-violet-600">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{act.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Nodes Section */}
          <div>
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider px-3 block mb-1">
              Knowledge Nodes ({filteredNodes.length})
            </span>
            {filteredNodes.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-400">
                No thoughts match "{query}".
              </div>
            ) : (
              <div className="space-y-1">
                {filteredNodes.map((node) => {
                  const isMemory = node.type === 'memory';
                  return (
                    <div
                      key={node.id}
                      onClick={() => {
                        onSelectNode(node.id);
                        playNodeChime(523.25);
                        onClose(false);
                      }}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-200"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className={`p-1.5 rounded-lg text-xs font-bold ${isMemory ? 'bg-cyan-50 text-cyan-600' : 'bg-violet-50 text-violet-600'}`}>
                          {isMemory ? '📄' : '💡'}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-slate-800 truncate">{node.title}</span>
                          <span className="text-[10px] text-slate-400 line-clamp-1">{node.snippet}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        {node.tags.slice(0, 2).map((t, i) => (
                          <span key={i} className="text-[9px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>EchoSpace Raycast Command Palette v1.0</span>
          <span>Press ⌘K or Ctrl+K anytime</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
