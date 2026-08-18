import React, { useState, useEffect } from 'react';
import { Network, Menu, X, Sparkles, Moon, Sun, Search } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';
import { playNodeChime } from '../utils/audio';

export const Navbar = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
      playNodeChime(880);
    } else {
      document.documentElement.classList.remove('dark');
      playNodeChime(523.25);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-violet-600 flex items-center justify-center text-violet-400 dark:text-white shadow-glow-violet group-hover:scale-105 transition-transform">
              <Network className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                EchoSpace
              </span>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 tracking-widest uppercase -mt-1">
                Visual Brain
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Why EchoSpace
            </a>
            <a href="#dashboard" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Knowledge Map
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              How It Works
            </a>
            <a href="#use-cases" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Use Cases
            </a>
          </nav>

          {/* Command Palette Trigger, Theme Toggle & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cmd+K Quick Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-500 text-xs font-mono text-slate-500 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 bg-white dark:bg-slate-900 hover:bg-violet-50/50 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
              title="Open Command Palette (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search</span>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-bold">⌘K</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-sm active:scale-95"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400 animate-spin" /> : <Moon className="w-4 h-4 text-violet-600" />}
            </button>

            {/* Start Free CTA */}
            <Button 
              variant="primary" 
              size="md" 
              icon={Sparkles}
              onClick={() => {
                const el = document.getElementById('dashboard');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-violet-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-slate-100 dark:border-slate-800 mt-3 flex flex-col gap-4 animate-fade-in bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl">
            <a 
              href="#problem" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 py-1"
            >
              Why EchoSpace
            </a>
            <a 
              href="#dashboard" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 py-1"
            >
              Knowledge Map Demo
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 py-1"
            >
              How It Works
            </a>
            <a 
              href="#use-cases" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 py-1"
            >
              Use Cases
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <Button 
                variant="primary" 
                size="md" 
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('dashboard');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Create Your First Map
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
