'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Zap, ArrowUpRight } from 'lucide-react';

const RESUME_URL =
  'https://drive.google.com/file/d/1UFnYDAOd07Ibe0FbOwXRzBSyHz-y2VbH/view?usp=sharing';

const navLinks = [
  { href: '#home', text: 'Index', num: '01' },
  { href: '#about', text: 'About', num: '02' },
  { href: '#projects', text: 'Projects', num: '03' },
  { href: '#skills', text: 'Stack', num: '04' },
  { href: '#education', text: 'Education', num: '05' },
  { href: '#contact', text: 'Connect', num: '06' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = e => {
    e.preventDefault();
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`relative flex items-center justify-between transition-all duration-500`}
        >
          {/* --- LOGO SECTION --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden border border-violet-500/20 bg-[#0a0a0a]">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-blue-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <Zap
                className="text-violet-400 group-hover:scale-110 transition-transform duration-500"
                size={18}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tighter text-white">
                JABED.
              </span>
              <span className="text-[10px] font-bold text-violet-500 tracking-[0.3em] uppercase opacity-80 font-mono">
                Architect
              </span>
            </div>
          </motion.div>

          {/* --- DESKTOP NAVIGATION (Center) --- */}
          <ul
            className={`hidden lg:flex items-center gap-1 p-1 rounded-sm transition-all duration-500 ${
              scrolled
                ? 'bg-white/[0.03] backdrop-blur-3xl border border-white/5 shadow-2xl'
                : 'bg-transparent'
            }`}
          >
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="text-[9px] text-violet-500/50 group-hover:text-violet-400 font-mono">
                    {link.num}
                  </span>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          {/* --- ACTION BUTTON --- */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={handleResumeClick}
              className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-white border-b border-violet-500 pb-1 hover:text-violet-400 transition-colors"
            >
              CV/RESUME{' '}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </motion.button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-sm text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[90] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-3xl"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-0 right-0 w-4/5 h-full bg-[#0a0a0a] border-l border-white/5 p-12 flex flex-col justify-center">
              <div className="space-y-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-end gap-4 group"
                  >
                    <span className="text-xl font-mono text-violet-500 tracking-tighter">
                      {link.num}
                    </span>
                    <span className="text-5xl font-black text-white group-hover:text-violet-400 transition-colors tracking-tighter uppercase">
                      {link.text}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-20">
                <button
                  onClick={handleResumeClick}
                  className="w-full py-6 border border-violet-500/30 text-violet-400 font-black tracking-[0.3em] uppercase text-xs hover:bg-violet-500 hover:text-white transition-all"
                >
                  Download CV
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
