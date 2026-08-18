import { useState } from 'react';
import { demoMemories, demoIdeas, demoConnections, suggestedConnections } from '../data/demoData';
import { playRevealSound, playLinkSound } from '../utils/audio';

// Coordinates for different layout modes
const layoutCoordinates = {
  cluster: {
    m1: { x: 20, y: 22 },
    m2: { x: 52, y: 18 },
    m3: { x: 82, y: 45 },
    m4: { x: 18, y: 78 },
    i1: { x: 35, y: 50 },
    i2: { x: 65, y: 72 },
    i3: { x: 48, y: 85 },
    i4: { x: 85, y: 20 },
  },
  timeline: {
    i4: { x: 12, y: 30 }, // Aug 06
    m4: { x: 23, y: 70 }, // Aug 08
    m3: { x: 34, y: 30 }, // Aug 10
    i3: { x: 46, y: 75 }, // Aug 12
    i2: { x: 58, y: 25 }, // Aug 13
    m2: { x: 70, y: 65 }, // Aug 14
    m1: { x: 82, y: 30 }, // Aug 15
    i1: { x: 92, y: 75 }, // Aug 16
  },
  category: {
    // Memories on Left Column (15% - 42%)
    m1: { x: 22, y: 20 },
    m2: { x: 22, y: 42 },
    m3: { x: 22, y: 64 },
    m4: { x: 22, y: 84 },
    // Ideas on Right Column (58% - 85%)
    i4: { x: 78, y: 20 },
    i1: { x: 78, y: 42 },
    i2: { x: 78, y: 64 },
    i3: { x: 78, y: 84 },
  }
};

const timelineDatesMap = {
  1: ["Aug 06"],
  2: ["Aug 06", "Aug 08", "Aug 10"],
  3: ["Aug 06", "Aug 08", "Aug 10", "Aug 12", "Aug 13"],
  4: ["Aug 06", "Aug 08", "Aug 10", "Aug 12", "Aug 13", "Aug 14", "Aug 15"],
  5: ["Aug 06", "Aug 08", "Aug 10", "Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Just Now"],
};

export const useNodeMap = () => {
  const [nodes, setNodes] = useState([...demoMemories, ...demoIdeas]);
  const [connections, setConnections] = useState(demoConnections);
  const [revealConnections, setRevealConnections] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'memory', 'idea'
  const [layoutMode, setLayoutMode] = useState('cluster'); // 'cluster', 'timeline', 'category'
  const [selectedTag, setSelectedTag] = useState(null); // Tag focus filter
  const [aiSimilarityThreshold, setAiSimilarityThreshold] = useState(60); // 50 - 95%
  const [timelineStep, setTimelineStep] = useState(5); // 1 - 5 time steps

  const addNode = (newNode) => {
    const createdNode = {
      ...newNode,
      id: `custom_${Date.now()}`,
      date: 'Just Now',
      x: Math.floor(Math.random() * 60) + 20,
      y: Math.floor(Math.random() * 60) + 20,
    };
    setNodes((prev) => [createdNode, ...prev]);

    if (nodes.length > 0) {
      const targetNode = nodes[0];
      const newConn = {
        from: createdNode.id,
        to: targetNode.id,
        label: "Newly Linked",
        strength: "medium",
        description: "Dynamically connected based on context vector proximity."
      };
      setConnections((prev) => [...prev, newConn]);
    }
    playLinkSound();
  };

  const addCustomConnection = (newConn) => {
    setConnections((prev) => [...prev, newConn]);
    playLinkSound();
  };

  const toggleRevealConnections = () => {
    const nextState = !revealConnections;
    setRevealConnections(nextState);
    if (nextState) {
      playRevealSound();
    }
  };

  // Map nodes with dynamic coordinates based on active layoutMode
  const positionedNodes = nodes.map((node) => {
    const coords = layoutCoordinates[layoutMode]?.[node.id] || { x: node.x, y: node.y };
    return {
      ...node,
      x: coords.x,
      y: coords.y,
    };
  });

  const activeDates = timelineDatesMap[timelineStep] || timelineDatesMap[5];

  const filteredNodes = positionedNodes.filter((node) => {
    const matchesSearch = node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          node.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          node.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === 'all' || node.type === activeFilter;
    const matchesTag = !selectedTag || node.tags.includes(selectedTag);
    const matchesTimeline = activeDates.includes(node.date);

    return matchesSearch && matchesFilter && matchesTag && matchesTimeline;
  });

  // Extract all unique tags across nodes
  const availableTags = Array.from(
    new Set(nodes.flatMap((node) => node.tags))
  );

  // Filter suggested connections based on AI similarity threshold
  const filteredSuggested = suggestedConnections.filter((conn) => {
    const match = conn.reasoning?.match(/(\d+)%/);
    const score = match ? parseInt(match[1]) : 75;
    return score >= aiSimilarityThreshold;
  });

  const activeConnections = revealConnections
    ? [...connections, ...filteredSuggested]
    : connections;

  const selectedNode = positionedNodes.find((n) => n.id === selectedNodeId) || null;

  return {
    nodes: filteredNodes,
    allNodes: positionedNodes,
    connections: activeConnections,
    coreConnectionsCount: connections.length,
    suggestedConnectionsCount: filteredSuggested.length,
    revealConnections,
    toggleRevealConnections,
    selectedNode,
    selectedNodeId,
    setSelectedNodeId,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    layoutMode,
    setLayoutMode,
    selectedTag,
    setSelectedTag,
    availableTags,
    aiSimilarityThreshold,
    setAiSimilarityThreshold,
    timelineStep,
    setTimelineStep,
    addNode,
    addCustomConnection,
  };
};

export default useNodeMap;
