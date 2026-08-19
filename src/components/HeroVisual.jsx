import React, { useState } from 'react';
import { Sparkles, Brain, BookOpen, Lightbulb, Zap, Network } from 'lucide-react';
import { playNodeChime } from '../utils/audio';

const datasets = {
  ai: {
    name: "AI & Memory",
    nodes: [
      { id: 1, label: "Article: AI Future", type: "memory", icon: BookOpen, x: 25, y: 28, stagger: "animate-node-stagger-1" },
      { id: 2, label: "Coffee Chat Memory", type: "memory", icon: Brain, x: 70, y: 42, stagger: "animate-node-stagger-2" },
      { id: 3, label: "ML Models Learning", type: "memory", icon: Zap, x: 78, y: 80, stagger: "animate-node-stagger-3" },
      { id: 4, label: "Auto Tagging Idea", type: "idea", icon: Lightbulb, x: 78, y: 25, stagger: "animate-node-stagger-4" },
      { id: 5, label: "KG Project Builder", type: "idea", icon: Network, x: 70, y: 62, stagger: "animate-node-stagger-5" },
      { id: 6, label: "Connections Matter", type: "insight", icon: Sparkles, x: 62, y: 58, stagger: "animate-node-stagger-6" },
    ],
    connections: [
      { from: 1, to: 4, label: "Suggested: Model Mapping" },
      { from: 1, to: 2, label: "Discussed" },
      { from: 2, to: 5, label: "Suggested: User Need" },
      { from: 3, to: 5, label: "Technical basis" },
      { from: 5, to: 6, label: "Integrates with" },
    ]
  },
  startup: {
    name: "Startup Strategy",
    nodes: [
      { id: 1, label: "User Interview #12", type: "memory", icon: Brain, x: 25, y: 28, stagger: "animate-node-stagger-1" },
      { id: 2, label: "Competitor Analysis", type: "memory", icon: BookOpen, x: 70, y: 42, stagger: "animate-node-stagger-2" },
      { id: 3, label: "CAC Reduction Data", type: "memory", icon: Zap, x: 78, y: 80, stagger: "animate-node-stagger-3" },
      { id: 4, label: "Freemium Conversion", type: "idea", icon: Lightbulb, x: 78, y: 25, stagger: "animate-node-stagger-4" },
      { id: 5, label: "Self-Serve Onboarding", type: "idea", icon: Network, x: 70, y: 62, stagger: "animate-node-stagger-5" },
      { id: 6, label: "Viral Growth Loop", type: "insight", icon: Sparkles, x: 62, y: 58, stagger: "animate-node-stagger-6" },
    ],
    connections: [
      { from: 1, to: 4, label: "Pain point" },
      { from: 1, to: 2, label: "Validated" },
      { from: 2, to: 5, label: "Feature gap" },
      { from: 3, to: 5, label: "ROI driver" },
      { from: 5, to: 6, label: "Core flywheel" },
    ]
  },
  philosophy: {
    name: "Philosophy & Habits",
    nodes: [
      { id: 1, label: "Atomic Habits Chapter", type: "memory", icon: BookOpen, x: 25, y: 28, stagger: "animate-node-stagger-1" },
      { id: 2, label: "Morning Journaling", type: "memory", icon: Brain, x: 70, y: 42, stagger: "animate-node-stagger-2" },
      { id: 3, label: "Stoic Quotes Note", type: "memory", icon: Zap, x: 78, y: 80, stagger: "animate-node-stagger-3" },
      { id: 4, label: "Time-Blocking System", type: "idea", icon: Lightbulb, x: 78, y: 25, stagger: "animate-node-stagger-4" },
      { id: 5, label: "Deep Work Protocol", type: "idea", icon: Network, x: 70, y: 62, stagger: "animate-node-stagger-5" },
      { id: 6, label: "Compound Attention", type: "insight", icon: Sparkles, x: 62, y: 58, stagger: "animate-node-stagger-6" },
    ],
    connections: [
      { from: 1, to: 4, label: "Inspired by" },
      { from: 1, to: 2, label: "Daily trigger" },
      { from: 2, to: 5, label: "Focus ritual" },
      { from: 3, to: 5, label: "Mindset anchor" },
      { from: 5, to: 6, label: "Output multiplier" },
    ]
  }
};

export const HeroVisual = () => {
  const [activePreset, setActivePreset] = useState('ai');
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeData = datasets[activePreset];

  const handlePresetSwitch = (key) => {
    setActivePreset(key);
    playNodeChime(659.25);
  };

  return (
    <div className="animate-hero-canvas-frame relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-700/60 shadow-2xl p-4 overflow-hidden select-none">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-cyan-500/10 pointer-events-none" />

      {/* Hero Preset Switcher Buttons Header */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between bg-slate-950/80 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 text-xs">
        <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
          Presets:
        </span>

        <div className="flex items-center gap-1">
          {Object.entries(datasets).map(([key, data]) => (
            <button
              key={key}
              onClick={() => handlePresetSwitch(key)}
              className={`
                px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer
                ${activePreset === key
                  ? 'bg-violet-600 text-white shadow-glow-violet'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }
              `}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas for Lines with Keyframe Line Draw & Cycling Pulse */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {activeData.connections.map((conn, idx) => {
          const fromNode = activeData.nodes.find(n => n.id === conn.from);
          const toNode = activeData.nodes.find(n => n.id === conn.to);

          if (!fromNode || !toNode) return null;

          const isConnected = hoveredNode === conn.from || hoveredNode === conn.to;

          return (
            <g key={idx}>
              <line
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke={isConnected ? '#22D3EE' : conn.label.includes('Suggested') ? '#A78BFA' : '#334155'}
                strokeWidth={isConnected ? '3' : '2'}
                strokeDasharray={conn.label.includes('Suggested') ? '6 4' : 'none'}
                className="animate-svg-line-draw transition-all duration-300"
              />
            </g>
          );
        })}
      </svg>

      {/* Render 6 Nodes with Staggered Pop-In Keyframes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {activeData.nodes.map((node) => {
          const Icon = node.icon;
          const isHovered = hoveredNode === node.id;

          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => {
                setHoveredNode(node.id);
                playNodeChime(440 + node.id * 50);
              }}
              onMouseLeave={() => setHoveredNode(null)}
              className={`
                ${node.stagger} absolute pointer-events-auto cursor-pointer transition-all duration-300
                px-3 py-2 rounded-xl bg-slate-900/90 border backdrop-blur-md shadow-lg flex items-center gap-2 max-w-[160px]
                ${isHovered
                  ? 'scale-110 border-violet-400 shadow-glow-violet ring-2 ring-violet-400 text-white z-30'
                  : 'border-slate-700/80 text-slate-200 hover:border-slate-500'
                }
              `}
            >
              <div className={`p-1 rounded-lg ${node.type === 'memory' ? 'bg-cyan-950 text-cyan-400' : 'bg-violet-950 text-violet-400'}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold truncate leading-tight">{node.label}</span>
                <span className="text-[9px] font-mono text-slate-400 uppercase">{node.type}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Dataset: {activeData.name} • {activeData.nodes.length} Nodes</span>
      </div>
    </div>
  );
};

export default HeroVisual;
