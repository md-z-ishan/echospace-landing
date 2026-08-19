import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import Container from '../components/ui/Container';
import Sidebar from '../components/Dashboard/Sidebar';
import Controls from '../components/Dashboard/Controls';
import NodeMap from '../components/Dashboard/NodeMap';
import StatusBar from '../components/Dashboard/StatusBar';
import QuickAddModal from '../components/Dashboard/QuickAddModal';
import ConnectNodesModal from '../components/Dashboard/ConnectNodesModal';
import AiAssistantDrawer from '../components/Dashboard/AiAssistantDrawer';
import AnalyticsModal from '../components/Dashboard/AnalyticsModal';
import CommandPalette from '../components/CommandPalette';
import NodeInspector from '../components/Dashboard/NodeInspector';
import DemoDataBanner from '../components/Dashboard/DemoDataBanner';
import useNodeMap from '../hooks/useNodeMap';

export const DashboardSection = ({ externalCommandPaletteToggle, externalDemoRevealTrigger }) => {
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
    selectedTag,
    setSelectedTag,
    availableTags,
    aiSimilarityThreshold,
    setAiSimilarityThreshold,
    timelineStep,
    setTimelineStep,
    addNode,
    addCustomConnection,
  } = useNodeMap();

  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [quickAddType, setQuickAddType] = useState('memory');

  useEffect(() => {
    if (externalCommandPaletteToggle !== undefined && externalCommandPaletteToggle !== false) {
      setIsCommandPaletteOpen(true);
    }
  }, [externalCommandPaletteToggle]);

  useEffect(() => {
    if (externalDemoRevealTrigger !== undefined && externalDemoRevealTrigger !== false) {
      if (!revealConnections) {
        toggleRevealConnections();
      }
    }
  }, [externalDemoRevealTrigger]);

  const handleOpenQuickAdd = (type) => {
    setQuickAddType(type);
    setIsQuickAddOpen(true);
  };

  return (
    <section id="dashboard" className="py-16 md:py-24 bg-slate-900/5 dark:bg-slate-950/40 relative overflow-hidden transition-colors">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 text-xs font-bold font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
            <span>Interactive Product Dashboard Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Create Your Knowledge Map
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Press <strong className="font-mono text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950 px-2 py-0.5 rounded border border-violet-200 dark:border-violet-800">⌘K</strong> for Command Palette, test <strong className="text-slate-800 dark:text-slate-200">Time Travel Slider</strong>, or click{' '}
            <strong className="text-violet-700 dark:text-violet-400">"Ask AI Brain"</strong> for contextual node insights.
          </p>
        </div>

        {/* ACDYON Honesty Requirement: Demo Data Disclosure Banner */}
        <DemoDataBanner />

        {/* Dashboard Frame Container */}
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Top Controls Header */}
          <Controls
            revealConnections={revealConnections}
            onToggleReveal={toggleRevealConnections}
            onOpenQuickAdd={handleOpenQuickAdd}
            onOpenConnectModal={() => setIsConnectModalOpen(true)}
            onOpenAiDrawer={() => setIsAiDrawerOpen(true)}
            onOpenAnalyticsModal={() => setIsAnalyticsOpen(true)}
            suggestedCount={suggestedConnectionsCount}
            layoutMode={layoutMode}
            onChangeLayoutMode={setLayoutMode}
            aiThreshold={aiSimilarityThreshold}
            onChangeAiThreshold={setAiSimilarityThreshold}
            timelineStep={timelineStep}
            onChangeTimelineStep={setTimelineStep}
            allNodes={allNodes}
            connections={connections}
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
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
              availableTags={availableTags}
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

              {/* Ask AI Brain Drawer Overlay */}
              {isAiDrawerOpen && (
                <AiAssistantDrawer
                  isOpen={isAiDrawerOpen}
                  onClose={() => setIsAiDrawerOpen(false)}
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

        {/* Connect Nodes Modal */}
        <ConnectNodesModal
          isOpen={isConnectModalOpen}
          onClose={() => setIsConnectModalOpen(false)}
          allNodes={allNodes}
          onConnect={addCustomConnection}
        />

        {/* Graph Analytics Modal */}
        <AnalyticsModal
          isOpen={isAnalyticsOpen}
          onClose={() => setIsAnalyticsOpen(false)}
          allNodes={allNodes}
          connections={connections}
        />

        {/* Raycast Style Command Palette (Cmd+K) */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={setIsCommandPaletteOpen}
          allNodes={allNodes}
          onSelectNode={(id) => setSelectedNodeId(id)}
          onOpenQuickAdd={handleOpenQuickAdd}
          onToggleReveal={toggleRevealConnections}
          onChangeLayoutMode={setLayoutMode}
        />
      </Container>
    </section>
  );
};

export default DashboardSection;
