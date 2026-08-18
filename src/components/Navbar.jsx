import React, { useState, useEffect } from 'react';
import { Network, Menu, X, Sparkles, Moon, Sun } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';

export const Navbar = () => {
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
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-violet-400 shadow-glow-violet group-hover:scale-105 transition-transform">
              <Network className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-violet-600 transition-colors">
                EchoSpace
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase -mt-1">
                Visual Brain
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">
              Why EchoSpace
            </a>
            <a href="#dashboard" className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">
              Knowledge Map
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">
              How It Works
            </a>
            <a href="#use-cases" className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">
              Use Cases
            </a>
          </nav>

          {/* Theme Toggle & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            <a href="#dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 px-2 py-2">
              Sign In
            </a>
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
              className="p-2 rounded-lg border border-slate-200 text-slate-600"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-slate-100 mt-3 flex flex-col gap-4 animate-fade-in">
            <a 
              href="#problem" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-violet-600 py-1"
            >
              Why EchoSpace
            </a>
            <a 
              href="#dashboard" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-violet-600 py-1"
            >
              Knowledge Map Demo
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-violet-600 py-1"
            >
              How It Works
            </a>
            <a 
              href="#use-cases" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-violet-600 py-1"
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
