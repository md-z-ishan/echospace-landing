import React, { useState } from 'react';
import Node from '../ui/Node';

export const NodeMap = ({
  nodes,
  connections,
  selectedNodeId,
  onSelectNode,
  revealConnections
}) => {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [hoveredConn, setHoveredConn] = useState(null);

  const getNode = (id) => nodes.find((n) => n.id === id);

  return (
    <div className="relative w-full h-[450px] lg:h-[540px] bg-slate-900 rounded-b-2xl lg:rounded-none overflow-hidden select-none">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

      {/* Subtle Grid Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Graphic Header Overlay */}
      <div className="absolute top-3 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 backdrop-blur-md text-[11px] font-mono text-slate-300">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>Interactive Knowledge Canvas</span>
      </div>

      {/* SVG Connections Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="solidConnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="aiConnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="1" />
          </linearGradient>
        </defs>

        {connections.map((conn, idx) => {
          const fromNode = getNode(conn.from);
          const toNode = getNode(conn.to);

          if (!fromNode || !toNode) return null;

          const isAI = conn.strength === 'ai';
          const isHighlighted =
            hoveredNodeId && (conn.from === hoveredNodeId || conn.to === hoveredNodeId);
          const isSelected =
            selectedNodeId && (conn.from === selectedNodeId || conn.to === selectedNodeId);

          const midX = (fromNode.x + toNode.x) / 2;
          const midY = (fromNode.y + toNode.y) / 2;

          return (
            <g key={`conn-${idx}`}>
              <line
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke={isAI ? "url(#aiConnGrad)" : "url(#solidConnGrad)"}
                strokeWidth={isSelected || isHighlighted ? 3 : isAI ? 2.2 : 1.8}
                strokeDasharray={isAI ? "5 5" : "none"}
                className={isAI ? "animate-reveal-line" : "transition-all duration-300"}
                opacity={hoveredNodeId || selectedNodeId ? (isHighlighted || isSelected ? 1 : 0.2) : 0.65}
              />
              {/* Floating Link Label */}
              <text
                x={`${midX}%`}
                y={`${midY}%`}
                fill={isAI ? "#C4B5FD" : "#CBD5E1"}
                fontSize="10"
                fontFamily="JetBrains Mono"
                textAnchor="middle"
                dy="-6"
                className="opacity-80 font-medium pointer-events-none drop-shadow"
              >
                {conn.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Nodes Render Layer */}
      {nodes.map((node) => {
        const isSelected = selectedNodeId === node.id;
        const isHovered = hoveredNodeId === node.id;

        return (
          <div
            key={node.id}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <Node
              node={node}
              isSelected={isSelected}
              isHovered={isHovered}
              onClick={() => onSelectNode(node.id)}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NodeMap;
