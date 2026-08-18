import React from 'react';
import { BookOpen, Lightbulb, MessageSquare, Brain, Sparkles, Network, Compass, Zap, Search, Tag, X } from 'lucide-react';
import Badge from '../ui/Badge';

const iconMap = {
  BookOpen,
  MessageSquare,
  Brain,
  Sparkles,
  Lightbulb,
  Network,
  Compass,
  Zap
};

export const Sidebar = ({
  nodes,
  selectedNodeId,
  onSelectNode,
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  selectedTag,
  onSelectTag,
  availableTags = []
}) => {
  return (
    <div className="w-full lg:w-80 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-4 flex flex-col gap-3.5 select-none">
      {/* Sidebar Header & Demo Tag */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Thought Stream
          </span>
          <span className="text-xs font-mono bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-medium">
            {nodes.length} items
          </span>
        </div>
        <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
          DEMO DATA
        </span>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search memories & ideas..."
          className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400 text-slate-800 placeholder:text-slate-400"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center p-1 bg-slate-200/70 rounded-lg text-xs font-medium">
        <button
          onClick={() => onFilterChange('all')}
          className={`flex-1 py-1.5 rounded-md transition-all ${activeFilter === 'all' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('memory')}
          className={`flex-1 py-1.5 rounded-md transition-all ${activeFilter === 'memory' ? 'bg-white text-cyan-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Memories
        </button>
        <button
          onClick={() => onFilterChange('idea')}
          className={`flex-1 py-1.5 rounded-md transition-all ${activeFilter === 'idea' ? 'bg-white text-violet-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
        >
          Ideas
        </button>
      </div>

      {/* Tag Focus Pills */}
      {availableTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mr-1">
            Focus Tag:
          </span>
          {availableTags.slice(0, 5).map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => onSelectTag(isSelected ? null : tag)}
                className={`
                  inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md transition-all cursor-pointer border
                  ${isSelected
                    ? 'bg-violet-600 text-white border-violet-600 shadow-sm font-bold scale-105'
                    : 'bg-white hover:bg-violet-50 text-slate-600 border-slate-200 hover:border-violet-300'
                  }
                `}
              >
                <span>#{tag}</span>
                {isSelected && <X className="w-2.5 h-2.5 ml-0.5" />}
              </button>
            );
          })}
        </div>
      )}

      {/* Node Items List */}
      <div className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-[460px] space-y-2 pr-1">
        {nodes.length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-400">
            No memories or ideas match active filter.
          </div>
        ) : (
          nodes.map((node) => {
            const Icon = iconMap[node.icon] || Lightbulb;
            const isSelected = selectedNodeId === node.id;
            const isMemory = node.type === 'memory';

            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(node.id)}
                className={`
                  p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5
                  ${isSelected
                    ? 'bg-white border-violet-400 shadow-md ring-2 ring-violet-400/30'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                  }
                `}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className={`p-1.5 rounded-lg ${isMemory ? 'bg-cyan-50 text-cyan-600' : 'bg-violet-50 text-violet-600'}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 truncate">
                      {node.title}
                    </span>
                  </div>
                  <Badge variant={isMemory ? 'memory' : 'idea'} size="xs">
                    {node.type}
                  </Badge>
                </div>

                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {node.snippet}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                  <span>{node.date}</span>
                  <div className="flex items-center gap-1">
                    {node.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Sidebar;
