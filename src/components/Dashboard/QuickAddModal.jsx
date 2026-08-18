import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

export const QuickAddModal = ({
  isOpen,
  onClose,
  initialType = 'memory',
  onAdd
}) => {
  const [type, setType] = useState(initialType);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Personal');
  const [snippet, setSnippet] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const parsedTags = tagsInput
      ? tagsInput.split(',').map((t) => t.trim()).filter(Boolean)
      : ['Custom'];

    onAdd({
      title: title.trim(),
      type,
      category,
      snippet: snippet.trim() || 'No detailed snippet provided.',
      tags: parsedTags,
      icon: type === 'memory' ? 'BookOpen' : 'Lightbulb',
    });

    // Reset form
    setTitle('');
    setSnippet('');
    setTagsInput('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Create New ${type === 'memory' ? 'Memory Node 📄' : 'Idea Node 💡'}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type Selector */}
        <div className="flex gap-3 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => setType('memory')}
            className={`flex-1 py-2 rounded-lg transition-all ${type === 'memory' ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-600'}`}
          >
            Memory 📄
          </button>
          <button
            type="button"
            onClick={() => setType('idea')}
            className={`flex-1 py-2 rounded-lg transition-all ${type === 'idea' ? 'bg-white text-violet-700 shadow-sm' : 'text-slate-600'}`}
          >
            Idea 💡
          </button>
        </div>

        {/* Title Input */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Thought Title *
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={type === 'memory' ? 'e.g. Article on Quantum Computing' : 'e.g. Dynamic Graph Neural Net Concept'}
            className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        {/* Snippet Input */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Snippet / Notes
          </label>
          <textarea
            rows="3"
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
            placeholder="Key insights, quotes, or thoughts to link..."
            className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        {/* Tags Input */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Tags (comma separated)
          </label>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="e.g. AI, Research, Sprint2"
            className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400 font-mono text-xs"
          />
        </div>

        {/* Form Actions */}
        <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit">
            Add to Knowledge Graph
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default QuickAddModal;
