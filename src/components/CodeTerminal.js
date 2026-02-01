'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Zap, Coffee, Database, Blocks } from 'lucide-react';

const codeSnippets = [
  {
    language: 'JavaScript',
    icon: <Zap size={10} />,
    color: 'text-yellow-400',
    code: `
// JavaScript: Business Logic
const AlgoWave = {
  status: 'active',
  optimize: (data) => {
    return data.map(node => ({
      ...node,
      latency: '0ms'
    }));
  }
};
AlgoWave.optimize(current_stack);`,
  },
  {
    language: 'React',
    icon: <Blocks size={10} />,
    color: 'text-cyan-400',
    code: `
// React: UI Component
export default function Interface() {
  return (
    <div className="system-grid">
      <Hero title="Jabed Hossain" />
      <Architecture stack={MERN} />
      <Deployment status="LIVE" />
    </div>
  );
}`,
  },
  {
    language: 'SQL',
    icon: <Database size={10} />,
    color: 'text-emerald-400',
    code: `
-- SQL: Database Schema
SELECT * FROM developers 
WHERE name = 'Jabed Hossain'
AND role = 'MERN_ARCHITECT';

UPDATE systems 
SET status = 'OPTIMIZED' 
WHERE integrity = 100;`,
  },
];

const CodeTerminal = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSnippet = codeSnippets[snippetIndex].code;

    // Typing and Deleting Logic
    const timer = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentSnippet.length) {
          // Typing
          setDisplayedCode(currentSnippet.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          // Deleting
          setDisplayedCode(currentSnippet.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else if (!isDeleting && charIndex === currentSnippet.length) {
          // Pause at the end before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex === 0) {
          // Move to next language
          setIsDeleting(false);
          setSnippetIndex(prev => (prev + 1) % codeSnippets.length);
        }
      },
      isDeleting ? 15 : 40,
    ); // Fast delete, steady type

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, snippetIndex]);

  return (
    <section className="relative py-32 bg-[#050505] px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Terminal Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-violet-500" />
              <span className="text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">
                Multistack // Runtime
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 italic font-light lowercase">
                Code
              </span>{' '}
              Lab
            </h2>
          </motion.div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-mono">
              Current: {codeSnippets[snippetIndex].language}
            </p>
            <p className="text-xs font-mono text-slate-400">
              root@jabed:~/{codeSnippets[snippetIndex].language.toLowerCase()}
              .src
            </p>
          </div>
        </div>

        {/* --- VS CODE WINDOW --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative group shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500/20 via-transparent to-blue-500/20 rounded-xl" />

          <div className="relative bg-[#0a0a0b] border border-white/5 rounded-xl overflow-hidden backdrop-blur-3xl">
            {/* Window Bar */}
            <div className="bg-[#111113] px-5 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px] tracking-widest uppercase">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={snippetIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`flex items-center gap-2 ${codeSnippets[snippetIndex].color} bg-white/5 px-2 py-0.5 rounded`}
                  >
                    {codeSnippets[snippetIndex].icon}{' '}
                    {codeSnippets[snippetIndex].language}
                  </motion.span>
                </AnimatePresence>
                <span className="hidden sm:inline opacity-30">
                  UTF-8 // Compiler_Ready
                </span>
              </div>
            </div>

            {/* Editor Content */}
            <div className="flex min-h-[400px]">
              <div className="hidden sm:flex flex-col text-right pr-4 pl-5 py-8 text-slate-700 font-mono text-xs select-none border-r border-white/5 bg-[#080809]">
                {[...Array(15)].map((_, i) => (
                  <span key={i} className="leading-[1.7]">
                    {i + 1}
                  </span>
                ))}
              </div>

              <div className="p-8 font-mono text-[13px] sm:text-sm leading-[1.7] w-full overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  <span className={codeSnippets[snippetIndex].color}>
                    {displayedCode}
                  </span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[2px] h-[18px] bg-white ml-1 align-middle"
                  />
                </pre>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="bg-[#080809] px-6 py-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em]">
              <div className="flex gap-6">
                <span className="flex items-center gap-1.5">
                  <Code2 size={12} /> {codeSnippets[snippetIndex].language}{' '}
                  Runtime
                </span>
                <span className="hidden sm:inline">Thread: Main_Subsystem</span>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5">
                  <Coffee size={12} /> Brain.Execute()
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeTerminal;
