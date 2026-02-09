'use client';
import React, { use } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Github,
  ArrowLeft,
  ShieldAlert,
  Layers,
  ExternalLink,
  Terminal,
  Zap,
  ArrowUpRight,
  Activity,
} from 'lucide-react';
import Link from 'next/link';
import projects from '@/data/projects';

export default function ProjectDetails({ params }) {
  const resolvedParams = use(params);
  const project = projects.find(p => p.id.toString() === resolvedParams.id);

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white font-mono p-6 text-center">
        <Terminal size={48} className="text-violet-500 mb-6 animate-pulse" />
        <h1 className="text-sm md:text-xl font-black tracking-[0.3em] md:tracking-[0.5em] uppercase">
          404 // SESSION_LOST
        </h1>
        <Link
          href="/#projects"
          className="mt-10 px-8 py-4 border border-violet-500/30 text-violet-400 text-[10px] font-black tracking-widest hover:bg-violet-500 hover:text-white transition-all"
        >
          RETURN_TO_BASE
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-slate-400 selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          style={{ y: yRange }}
          className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-transparent"
        />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-8 py-6 md:py-8 backdrop-blur-md bg-black/20">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 md:gap-4 bg-white/[0.03] border border-white/5 px-4 py-2 md:px-6 md:py-3 hover:border-violet-500/40 transition-all"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform text-violet-500"
            />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white">
              Back
            </span>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href={project.gitLink}
              target="_blank"
              className="p-2 md:p-4 bg-white/[0.03] border border-white/5 hover:text-violet-400 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={project.link}
              target="_blank"
              className="px-4 py-2 md:px-8 md:py-4 bg-violet-600 text-white font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center gap-2 hover:bg-violet-500 transition-all"
            >
              Live <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 md:pt-48 pb-20 max-w-[1400px] mx-auto px-6 md:px-8">
        {/* --- HEADER --- */}
        <section className="mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-[1px] bg-violet-500" />
              <span className="text-violet-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">
                Study // Case_{project.id}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-[8rem] font-black text-white leading-[1] mb-8 tracking-tighter uppercase">
              {project.title.split('–')[0]} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 italic font-light lowercase text-3xl md:text-6xl lg:text-[6rem]">
                {project.title.split('–')[1] || 'Web Architecture'}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-slate-900 border border-white/5 overflow-hidden"
          >
            <img
              src={project.img}
              className="w-full h-auto aspect-video object-cover grayscale md:opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 p-4 md:p-8 bg-black/60 backdrop-blur-xl border border-white/10 max-w-[250px] md:max-w-md">
              <p className="text-[8px] md:text-[10px] text-violet-400 font-black tracking-widest uppercase mb-1 md:mb-2 flex items-center gap-2">
                <Activity size={10} /> Technical Status
              </p>
              <h3 className="text-xs md:text-xl font-bold text-white tracking-tight leading-tight">
                Production Optimized
              </h3>
            </div>
          </motion.div>
        </section>

        {/* --- GRID --- */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* CONTENT */}
          <div className="lg:col-span-7 space-y-16 md:space-y-24">
            <section className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6 group">
                <span className="text-3xl md:text-5xl font-mono text-white/10 font-black group-hover:text-violet-500/20 transition-colors leading-none">
                  01
                </span>
                <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter">
                  System Overview
                </h2>
              </div>
              <p className="text-slate-400 text-lg md:text-2xl leading-[1.6] font-light border-l border-slate-800 pl-6 md:pl-10">
                {project.desc}
              </p>
            </section>

            {/* BENTO BLOCKS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-px bg-slate-800/20 md:border md:border-slate-800/50">
              <div className="p-8 md:p-12 bg-[#050505] border border-white/5 md:border-none space-y-4 md:space-y-6">
                <ShieldAlert className="text-violet-500" size={24} />
                <h4 className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  Obstacles
                </h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {project.challenges ||
                    'Managing complex state persistence and secure API handshakes.'}
                </p>
              </div>

              <div className="p-8 md:p-12 bg-[#050505] border border-white/5 md:border-none space-y-4 md:space-y-6">
                <Zap className="text-fuchsia-400" size={24} />
                <h4 className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  Optimizations
                </h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {project.futurePlans ||
                    'Next sprint includes edge-computing integration.'}
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-5 w-full">
            <div className="lg:sticky lg:top-40 space-y-8 md:space-y-12">
              <div className="p-6 md:p-10 bg-white/[0.02] border border-white/5 space-y-8 md:space-y-10">
                <div className="flex justify-between items-end">
                  <h3 className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                    Integrated Stack
                  </h3>
                  <Layers size={14} className="text-violet-500" />
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 md:px-5 md:py-3 border border-white/5 bg-[#050505] text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-violet-500/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.link}
                    target="_blank"
                    className="w-full py-4 md:py-5 bg-white text-black font-black flex items-center justify-center gap-3 uppercase text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em]"
                  >
                    Launch Session <ArrowUpRight size={14} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.gitLink}
                    target="_blank"
                    className="w-full py-4 md:py-5 border border-slate-800 text-white font-black flex items-center justify-center gap-3 uppercase text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] hover:border-white transition-colors"
                  >
                    View Source <Terminal size={14} />
                  </motion.a>
                </div>
              </div>

              {/* Architecture Tag - Hidden on mobile for better flow */}
              <div className="hidden lg:flex items-center gap-6 opacity-30">
                <div className="w-12 h-[1px] bg-slate-800" />
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
                  Architecture // v1.02
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="py-12 md:py-20 border-t border-white/5 text-center px-6">
        <p className="text-[8px] md:text-[9px] font-black text-slate-700 uppercase tracking-[0.5em] md:tracking-[0.8em] leading-loose">
          Engineered by <span className="text-white">Jabed Hossain</span> — 2026
          Build
        </p>
      </footer>
    </div>
  );
}
