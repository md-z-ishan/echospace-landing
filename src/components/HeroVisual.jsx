import React, { useState, useEffect } from 'react';
import { BookOpen, Lightbulb, MessageSquare, Sparkles, Brain, Network } from 'lucide-react';

const heroNodes = [
  { id: 'hn1', title: "Article: AI Future", type: "memory", icon: BookOpen, x: 18, y: 22, color: "#06B6D4" },
  { id: 'hn2', title: "Auto Tagging Idea", type: "idea", icon: Lightbulb, x: 74, y: 20, color: "#A78BFA" },
  { id: 'hn3', title: "Coffee Chat Memory", type: "memory", icon: MessageSquare, x: 48, y: 46, color: "#06B6D4" },
  { id: 'hn4', title: "Connections Matter", type: "insight", icon: Sparkles, x: 22, y: 78, color: "#F59E0B" },
  { id: 'hn5', title: "ML Models Learning", type: "memory", icon: Brain, x: 80, y: 78, color: "#06B6D4" },
  { id: 'hn6', title: "KG Project Builder", type: "idea", icon: Network, x: 50, y: 84, color: "#8B5CF6" },
];

const heroConnections = [
  { from: 'hn1', to: 'hn2' },
  { from: 'hn1', to: 'hn3' },
  { from: 'hn2', to: 'hn4' },
  { from: 'hn3', to: 'hn4' },
  { from: 'hn5', to: 'hn6' },
  { from: 'hn4', to: 'hn6' },
  { from: 'hn3', to: 'hn6' },
];

export const HeroVisual = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % heroConnections.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getNodeCoords = (id) => {
    const n = heroNodes.find((node) => node.id === id);
    return n ? { x: n.x, y: n.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 overflow-hidden select-none">
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />

      {/* Radial Ambient Glow Highlights */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Live Connection Lines Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="violetCyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glowEffect">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {heroConnections.map((conn, idx) => {
          const from = getNodeCoords(conn.from);
          const to = getNodeCoords(conn.to);
          const isPulsing = idx === pulseIndex;
          const isConnectedToActive = activeNode && (conn.from === activeNode || conn.to === activeNode);

          return (
            <g key={`conn-${idx}`}>
              <line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke={isConnectedToActive ? "#A78BFA" : "url(#violetCyanGradient)"}
                strokeWidth={isConnectedToActive ? 2.8 : isPulsing ? 2.5 : 1.5}
                strokeDasharray={isPulsing ? "6 6" : "none"}
                className={isPulsing ? "animate-connection-pulse" : "transition-all duration-300"}
                opacity={activeNode ? (isConnectedToActive ? 1 : 0.25) : 0.6}
                filter={isPulsing || isConnectedToActive ? "url(#glowEffect)" : "none"}
              />
            </g>
          );
        })}
      </svg>

      {/* Interactive Node Cards */}
      {heroNodes.map((node) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;
        const isMemory = node.type === 'memory';

        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className={`
              absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300
              flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border backdrop-blur-md
              ${isActive 
                ? 'bg-slate-800 border-violet-400 text-white scale-110 z-30 shadow-glow-violet' 
                : 'bg-slate-900/90 border-slate-700/80 text-slate-200 hover:border-slate-500 z-10'
              }
            `}
          >
            <div 
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ backgroundColor: `${node.color}20`, color: node.color }}
            >
              <Icon className="w-4 h-4" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
                {node.title}
              </span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                {node.type}
              </span>
            </div>

            {/* Glowing Pulse Dot */}
            <div 
              className={`w-2 h-2 rounded-full absolute -top-1 -right-1 transition-opacity ${isActive ? 'opacity-100 animate-ping' : 'opacity-40'}`}
              style={{ backgroundColor: node.color }}
            />
          </div>
        );
      })}

      {/* Floating Status Indicator Tag */}
      <div className="absolute bottom-4 left-4 bg-slate-950/80 border border-slate-800 backdrop-blur-md px-3.5 py-1.5 rounded-lg flex items-center gap-2 text-xs font-mono text-slate-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Live Knowledge Network • 6 Nodes Linked</span>
      </div>
    </div>
  );
};

export default HeroVisual;
