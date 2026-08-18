import React, { useState } from 'react';
import Modal from './ui/Modal';
import Button from './ui/Button';
import { Network, UserCheck, Sparkles, Key } from 'lucide-react';
import { playNodeChime } from '../utils/audio';

export const SignInModal = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [email, setEmail] = useState('demo.user@echospace.ai');
  const [password, setPassword] = useState('••••••••••••');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    playNodeChime(880);
    setTimeout(() => {
      onLoginSuccess(email.split('@')[0]);
      setIsSubmitted(false);
      onClose();
    }, 600);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign In to EchoSpace Workspace 🔒">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-3 bg-violet-50 border border-violet-200 rounded-xl text-xs text-violet-800 flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-violet-600 shrink-0" />
          <span>Demo Account Loaded. Click <strong>Sign In</strong> to activate personal knowledge cloud.</span>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-400 font-mono"
          />
        </div>

        <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="accent-violet-600 rounded" />
            <span>Remember workspace session</span>
          </label>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Demo password reset link sent to ' + email); }} className="text-violet-600 font-semibold hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit" disabled={isSubmitted}>
            {isSubmitted ? 'Activating Session...' : 'Sign In to Workspace'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SignInModal;
