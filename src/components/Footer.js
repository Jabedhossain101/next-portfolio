'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaTerminal } from 'react-icons/fa';
import { ArrowUp, Cpu } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home', num: '01' },
    { name: 'About', href: '#about', num: '02' },
    { name: 'Work', href: '#projects', num: '03' },
    { name: 'Stack', href: '#skills', num: '04' },
    { name: 'Education', href: '#education', num: '05' },
    { name: 'Connect', href: '#contact', num: '06' },
  ];

  return (
    <footer className="relative bg-[#050505] text-slate-500 pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Subtle Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* BRAND ARCHITECTURE (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-violet-500/20 bg-white/[0.02] flex items-center justify-center">
                <FaTerminal className="text-violet-400" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                  Jabed.
                </span>
                <span className="text-[10px] font-bold text-violet-500 tracking-[0.4em] uppercase font-mono">
                  Full-Stack Architect
                </span>
              </div>
            </div>

            <p className="text-lg font-light leading-relaxed max-w-sm text-slate-400">
              Designing and architecting high-performance digital systems.
              Focused on scalability, aesthetics, and technical excellence.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: <FaGithub />,
                  href: 'https://github.com/Jabedhossain101',
                },
                {
                  icon: <FaLinkedin />,
                  href: 'https://www.linkedin.com/in/mdjabedhossain12',
                },
                {
                  icon: <FaFacebook />,
                  href: 'https://www.facebook.com/mdjabedhossain27/',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* SYSTEM INDEX (4 Cols) */}
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10 opacity-30">
              System Index
            </h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-12">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  <span className="font-mono text-[9px] text-violet-500/40 group-hover:text-violet-400">
                    {link.num}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* STATUS PROTOCOL (3 Cols) */}
          <div className="lg:col-span-3 space-y-10">
            <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-10 opacity-30">
              Status Protocol
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-300 tracking-wider">
                  Available for Collaboration
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Cpu size={14} className="text-slate-700" />
                <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                  2026 Build // V1.0
                </span>
              </div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-violet-400 group pt-4"
              >
                Back to Origin{' '}
                <ArrowUp
                  size={14}
                  className="group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* --- FINAL LOGUE --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">
              © {currentYear} Transmission
            </span>
            <div className="w-8 h-[1px] bg-slate-800" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">
              Jabed Hossain
            </span>
          </div>

          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="text-slate-700">AIUB // CSE</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-700 italic">Crafted in</span>
              <span className="text-slate-400 underline underline-offset-4 decoration-violet-500/20 tracking-tighter">
                Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Side Decorative Overlay */}
      <div className="absolute right-0 bottom-0 p-12 opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[200px] font-black leading-none tracking-tighter uppercase">
          ARCHITECT
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
