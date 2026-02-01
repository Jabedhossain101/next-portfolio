'use client';
import React, { use } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Github,
  ArrowLeft,
  ShieldAlert,
  Layout as LayoutIcon,
  Layers,
  ExternalLink,
  Code2,
  Terminal,
  Zap,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import projects from '@/data/projects';
import { RiLiveLine } from 'react-icons/ri';

export default function ProjectDetails({ params }) {
  const resolvedParams = use(params);
  const project = projects.find(p => p.id.toString() === resolvedParams.id);

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -300]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white font-mono">
        <Terminal size={48} className="text-violet-500 mb-6 animate-pulse" />
        <h1 className="text-xl font-black tracking-[0.5em] uppercase">
          404 // SESSION_LOST
        </h1>
        <Link
          href="/#projects"
          className="mt-10 px-10 py-4 border border-violet-500/30 text-violet-400 text-xs font-black tracking-widest hover:bg-violet-500 hover:text-white transition-all"
        >
          RETURN_TO_BASE
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-slate-400 selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
      {/* --- ADVANCED BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          style={{ y: yRange }}
          className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-transparent"
        />
      </div>

      {/* --- MINIMALIST TOP NAV --- */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-8">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group flex items-center gap-4 bg-white/[0.03] backdrop-blur-3xl border border-white/5 px-6 py-3 hover:border-violet-500/40 transition-all"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-2 transition-transform text-violet-500"
            />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
              Back to Work
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={project.gitLink}
              target="_blank"
              className="p-4 bg-white/[0.03] border border-white/5 hover:text-violet-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={project.link}
              target="_blank"
              className="px-8 py-4 bg-violet-600 text-white font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 hover:bg-violet-500 transition-all"
            >
              Live Protocol <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-48 pb-32 max-w-[1400px] mx-auto px-8">
        {/* --- CINEMATIC HEADER --- */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-violet-500" />
              <span className="text-violet-400 text-[10px] font-black uppercase tracking-[0.5em]">
                Study // Case_{project.id}
              </span>
            </div>

            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] mb-12 tracking-tighter uppercase">
              {project.title.split('–')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 italic font-light lowercase">
                {project.title.split('–')[1] || 'Web Architecture'}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-slate-900 overflow-hidden border border-white/5"
          >
            <img
              src={project.img}
              className="w-full h-auto aspect-video object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-10 left-10 p-8 bg-black/40 backdrop-blur-2xl border border-white/10 max-w-md hidden md:block">
              <p className="text-[10px] text-violet-400 font-black tracking-widest uppercase mb-2">
                Technical Status
              </p>
              <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                Optimized for Production Deployment
              </h3>
            </div>
          </motion.div>
        </section>

        {/* --- TECHNICAL ARCHITECTURE GRID --- */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* CONTENT: THE CORE (7 Cols) */}
          <div className="lg:col-span-7 space-y-24">
            <section className="space-y-10">
              <div className="flex items-center gap-6 group">
                <span className="text-5xl font-mono text-white/10 font-black group-hover:text-violet-500/20 transition-colors leading-none">
                  01
                </span>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                  System Overview
                </h2>
              </div>
              <p className="text-slate-400 text-2xl leading-[1.6] font-light border-l border-slate-800 pl-10">
                {project.desc}
              </p>
            </section>

            {/* CONNECTED BENTO BLOCKS */}
            <div className="grid md:grid-cols-2 gap-px bg-slate-800/20 border border-slate-800/50">
              <div className="p-12 bg-[#050505] space-y-6">
                <ShieldAlert className="text-violet-500" size={28} />
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                  Obstacles
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {project.challenges ||
                    'Managing complex state persistence and secure API handshakes within a high-concurrency environment.'}
                </p>
              </div>

              <div className="p-12 bg-[#050505] space-y-6">
                <Zap className="text-fuchsia-400" size={28} />
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                  Optimizations
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {project.futurePlans ||
                    'Next sprint includes edge-computing integration and neural-based SEO content generation modules.'}
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR: META & STACK (5 Cols) */}
          <aside className="lg:col-span-5">
            <div className="sticky top-40 space-y-12">
              {/* Stack Block */}
              <div className="p-10 bg-white/[0.02] border border-white/5 space-y-10">
                <div className="flex justify-between items-end">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                    Integrated Stack
                  </h3>
                  <Layers size={16} className="text-violet-500" />
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-5 py-3 border border-white/5 bg-[#050505] text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-violet-500/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={project.link}
                    target="_blank"
                    className="w-full py-5 bg-white text-black font-black flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.3em]"
                  >
                    Launch Session <ArrowUpRight size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={project.gitLink}
                    target="_blank"
                    className="w-full py-5 border border-slate-800 text-white font-black flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.3em] hover:border-white transition-colors"
                  >
                    View Source <Terminal size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Architecture Tag */}
              <div className="flex items-center gap-6 opacity-30">
                <div className="w-12 h-[1px] bg-slate-800" />
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
                  Architecture // v1.02
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* --- MINIMALIST FOOTER --- */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.8em]">
          Engineered by <span className="text-white">Jabed Hossain</span> — 2026
          Build
        </p>
      </footer>
    </div>
  );
}
