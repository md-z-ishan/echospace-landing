import React from 'react';
import { Search, Sparkles, Filter, FileText, Lightbulb, Tag } from 'lucide-react';

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
  availableTags
}) => {
  return (
    <div className="w-full lg:w-80 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between shrink-0 select-none">
      <div className="space-y-4">
        {/* Header Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Thought Stream
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300 px-2 py-0.5 rounded-md">
            {nodes.length} items
          </span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search memories & ideas..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        {/* Category Filters */}
        <div className="grid grid-cols-3 gap-1 bg-slate-200/70 dark:bg-slate-800/80 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => onFilterChange('all')}
            className={`py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'all' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange('memory')}
            className={`py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'memory' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
          >
            Memories
          </button>
          <button
            onClick={() => onFilterChange('idea')}
            className={`py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'idea' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
          >
            Ideas
          </button>
        </div>

        {/* Tag Focus Pills */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-400 uppercase tracking-wider">
            <span>Focus Tag</span>
            {selectedTag && (
              <button onClick={() => onSelectTag(null)} className="text-violet-600 dark:text-violet-400 hover:underline">
                Clear filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {availableTags.slice(0, 5).map((t, idx) => (
              <button
                key={idx}
                onClick={() => onSelectTag(selectedTag === t ? null : t)}
                className={`text-[10px] font-mono px-2 py-0.5 rounded-lg border transition-all cursor-pointer ${selectedTag === t ? 'bg-violet-600 text-white border-violet-600 shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-violet-300'}`}
              >
                #{t}
              </button>
            ))}
          </div>
        </div>

        {/* Node Stream List */}
        <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
          {nodes.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-400">
              No memories or ideas match active filter.
            </div>
          ) : (
            nodes.map((node) => {
              const isSelected = node.id === selectedNodeId;
              const isMemory = node.type === 'memory';

              return (
                <div
                  key={node.id}
                  onClick={() => onSelectNode(node.id)}
                  className={`
                    p-3 rounded-xl border transition-all cursor-pointer text-left space-y-1.5
                    ${isSelected
                      ? 'bg-white dark:bg-slate-800 border-violet-500 shadow-md ring-2 ring-violet-400/30'
                      : 'bg-white/80 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${isMemory ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300' : 'bg-violet-100 dark:bg-violet-950 text-violet-800 dark:text-violet-300'}`}>
                      {node.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{node.date}</span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {node.snippet}
                  </p>

                  <div className="flex items-center gap-1 pt-1">
                    {node.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
