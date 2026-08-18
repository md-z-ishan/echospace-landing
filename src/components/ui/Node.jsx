import React from 'react';
import { BookOpen, MessageSquare, Brain, Sparkles, Lightbulb, Network, Compass, Zap } from 'lucide-react';

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

export const Node = ({
  node,
  isSelected = false,
  isHovered = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = ''
}) => {
  const Icon = iconMap[node.icon] || Lightbulb;
  const isMemory = node.type === 'memory';

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        relative group cursor-pointer transition-all duration-300 select-none
        flex items-center gap-2.5 px-3.5 py-2 rounded-xl border bg-white shadow-sm
        ${isMemory 
          ? 'border-cyan-200/80 hover:border-cyan-400 hover:shadow-glow-cyan' 
          : 'border-violet-200/80 hover:border-violet-400 hover:shadow-glow-violet'
        }
        ${isSelected ? 'ring-2 ring-violet-500 shadow-glow-violet border-violet-400 scale-105 z-20' : 'z-10'}
        ${isHovered ? 'scale-105 shadow-md' : ''}
        ${className}
      `}
    >
      {/* Node Icon Circle */}
      <div className={`
        w-7 h-7 rounded-lg flex items-center justify-center transition-colors
        ${isMemory ? 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white' : 'bg-violet-50 text-violet-600 group-hover:bg-violet-500 group-hover:text-white'}
      `}>
        <Icon className="w-4 h-4" />
      </div>

      {/* Node Title Label */}
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-slate-800 line-clamp-1 max-w-[140px] sm:max-w-[180px]">
          {node.title}
        </span>
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
          {node.type}
        </span>
      </div>

      {/* Pulse Aura Indicator */}
      <div className={`
        absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full
        ${isMemory ? 'bg-cyan-400' : 'bg-violet-400'}
        ${isSelected || isHovered ? 'animate-ping opacity-75' : 'opacity-0'}
      `} />
    </div>
  );
};

export default Node;
