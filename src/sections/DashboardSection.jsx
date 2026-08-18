import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Container from '../components/ui/Container';
import Sidebar from '../components/Dashboard/Sidebar';
import Controls from '../components/Dashboard/Controls';
import NodeMap from '../components/Dashboard/NodeMap';
import StatusBar from '../components/Dashboard/StatusBar';
import QuickAddModal from '../components/Dashboard/QuickAddModal';
import NodeInspector from '../components/Dashboard/NodeInspector';
import useNodeMap from '../hooks/useNodeMap';

export const DashboardSection = () => {
  const {
    nodes,
    allNodes,
    connections,
    coreConnectionsCount,
    suggestedConnectionsCount,
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
    addNode,
  } = useNodeMap();

  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [quickAddType, setQuickAddType] = useState('memory');

  const handleOpenQuickAdd = (type) => {
    setQuickAddType(type);
    setIsQuickAddOpen(true);
  };

  return (
    <section id="dashboard" className="py-16 md:py-24 bg-slate-900/5 relative overflow-hidden">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-800 text-xs font-bold font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Product Dashboard Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Create Your Knowledge Map
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Select memories or ideas, switch layouts (<strong className="text-slate-800">Cluster, Timeline, Categories</strong>), or click{' '}
            <strong className="text-violet-700">"Reveal Hidden Connections"</strong> to see AI suggested linkages.
          </p>
        </div>

        {/* Dashboard Frame Container */}
        <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Top Controls Header */}
          <Controls
            revealConnections={revealConnections}
            onToggleReveal={toggleRevealConnections}
            onOpenQuickAdd={handleOpenQuickAdd}
            suggestedCount={suggestedConnectionsCount}
            layoutMode={layoutMode}
            onChangeLayoutMode={setLayoutMode}
          />

          {/* Main Workspace Area (Sidebar + Canvas) */}
          <div className="flex flex-col lg:flex-row relative">
            <Sidebar
              nodes={nodes}
              selectedNodeId={selectedNodeId}
              onSelectNode={(id) => setSelectedNodeId(id === selectedNodeId ? null : id)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            <div className="flex-1 relative">
              <NodeMap
                nodes={nodes}
                connections={connections}
                selectedNodeId={selectedNodeId}
                onSelectNode={(id) => setSelectedNodeId(id === selectedNodeId ? null : id)}
                revealConnections={revealConnections}
              />

              {/* Node Inspector Drawer Overlay */}
              {selectedNode && (
                <NodeInspector
                  node={selectedNode}
                  allNodes={allNodes}
                  connections={connections}
                  onClose={() => setSelectedNodeId(null)}
                />
              )}
            </div>
          </div>

          {/* Bottom Status Bar */}
          <StatusBar
            itemCount={nodes.length}
            coreConnCount={coreConnectionsCount}
            suggestedConnCount={suggestedConnectionsCount}
            revealConnections={revealConnections}
          />
        </div>

        {/* Quick Add Modal */}
        <QuickAddModal
          isOpen={isQuickAddOpen}
          onClose={() => setIsQuickAddOpen(false)}
          initialType={quickAddType}
          onAdd={addNode}
        />
      </Container>
    </section>
  );
};

export default DashboardSection;
