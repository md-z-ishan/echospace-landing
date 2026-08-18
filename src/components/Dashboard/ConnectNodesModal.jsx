import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

export const ConnectNodesModal = ({
  isOpen,
  onClose,
  allNodes,
  onConnect
}) => {
  const [sourceNodeId, setSourceNodeId] = useState(allNodes[0]?.id || '');
  const [targetNodeId, setTargetNodeId] = useState(allNodes[1]?.id || '');
  const [label, setLabel] = useState('Inspired by');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sourceNodeId || !targetNodeId || sourceNodeId === targetNodeId) return;

    onConnect({
      from: sourceNodeId,
      to: targetNodeId,
      label,
      strength: 'strong',
      description: `User defined visual connection (${label}).`
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Connect Two Nodes 🔗">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Source Node (From)
          </label>
          <select
            value={sourceNodeId}
            onChange={(e) => setSourceNodeId(e.target.value)}
            className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
          >
            {allNodes.map((n) => (
              <option key={n.id} value={n.id}>
                {n.type === 'memory' ? '📄' : '💡'} {n.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Target Node (To)
          </label>
          <select
            value={targetNodeId}
            onChange={(e) => setTargetNodeId(e.target.value)}
            className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
          >
            {allNodes.map((n) => (
              <option key={n.id} value={n.id}>
                {n.type === 'memory' ? '📄' : '💡'} {n.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Relationship Label
          </label>
          <select
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
          >
            <option value="Inspired by">Inspired by 💡</option>
            <option value="Builds on">Builds on 🏗️</option>
            <option value="Discussed in">Discussed in 💬</option>
            <option value="Contradicts">Contradicts ⚡</option>
            <option value="Validates thesis">Validates thesis 🎯</option>
            <option value="Related to">Related to 🔗</option>
          </select>
        </div>

        {sourceNodeId === targetNodeId && (
          <p className="text-xs text-rose-500">Source and Target nodes must be different.</p>
        )}

        <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit" disabled={sourceNodeId === targetNodeId}>
            Create Connection
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ConnectNodesModal;
