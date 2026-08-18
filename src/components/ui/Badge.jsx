import React from 'react';

export const Badge = ({
  children,
  variant = 'memory',
  size = 'sm',
  className = ''
}) => {
  const variants = {
    memory: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
    idea: 'bg-violet-50 text-violet-700 border-violet-200/80',
    insight: 'bg-amber-50 text-amber-700 border-amber-200/80',
    ai: 'bg-purple-50 text-purple-700 border-purple-300 ring-1 ring-purple-400/20',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const sizes = {
    xs: 'text-[10px] px-2 py-0.5 rounded-full font-mono uppercase tracking-wider',
    sm: 'text-xs px-2.5 py-1 rounded-md font-medium',
    md: 'text-sm px-3 py-1 rounded-lg font-medium',
  };

  return (
    <span className={`inline-flex items-center gap-1 border ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
