import { useState } from 'react';
import { demoMemories, demoIdeas, demoConnections, suggestedConnections } from '../data/demoData';

export const useNodeMap = () => {
  const [nodes, setNodes] = useState([...demoMemories, ...demoIdeas]);
  const [connections, setConnections] = useState(demoConnections);
  const [revealConnections, setRevealConnections] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'memory', 'idea'

  const addNode = (newNode) => {
    const createdNode = {
      ...newNode,
      id: `custom_${Date.now()}`,
      date: 'Just Now',
      x: Math.floor(Math.random() * 60) + 20,
      y: Math.floor(Math.random() * 60) + 20,
    };
    setNodes((prev) => [createdNode, ...prev]);

    // Automatically link new custom node to an existing node for demo delight
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
  };

  const toggleRevealConnections = () => {
    setRevealConnections((prev) => !prev);
  };

  const filteredNodes = nodes.filter((node) => {
    const matchesSearch = node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          node.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          node.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === 'all' || node.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const activeConnections = revealConnections
    ? [...connections, ...suggestedConnections]
    : connections;

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || null;

  return {
    nodes: filteredNodes,
    allNodes: nodes,
    connections: activeConnections,
    coreConnectionsCount: connections.length,
    suggestedConnectionsCount: suggestedConnections.length,
    revealConnections,
    toggleRevealConnections,
    selectedNode,
    selectedNodeId,
    setSelectedNodeId,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    addNode,
  };
};

export default useNodeMap;
