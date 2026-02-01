'use client';
import React, { use } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Github,
  ArrowLeft,
  Rocket,
  ShieldAlert,
  Sparkles,
  Layout as LayoutIcon,
  Layers,
  ExternalLink,
  CheckCircle2,
  Code2,
  Terminal,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import projects from '@/data/projects'; // Ensure this path matches your file structure
import { RiLiveLine } from 'react-icons/ri';

export default function ProjectDetails({ params }) {
  const resolvedParams = use(params);
  const project = projects.find(p => p.id.toString() === resolvedParams.id);

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-white">
        <Rocket size={48} className="text-blue-500 mb-4 animate-bounce" />
        <h1 className="text-3xl font-bold tracking-tighter uppercase">
          404: Mission Missing
        </h1>
        <Link
          href="/#projects"
          className="mt-6 px-8 py-3 bg-blue-600 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all"
        >
          Return to Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-400 overflow-x-hidden">
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          style={{ y: yRange }}
          className="absolute inset-0 opacity-40"
        >
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full blur-[1px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                opacity: Math.random(),
              }}
            />
          ))}
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/5 via-transparent to-[#030712]" />
      </div>

      {/* --- PREMIUM NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="group flex items-center gap-3 bg-slate-900/50 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-2xl hover:bg-slate-800 transition-all"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform text-cyan-400"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Back
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={project.gitLink}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Live Preview <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-40 pb-20 max-w-7xl mx-auto px-6">
        {/* --- CINEMATIC HEADER --- */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
              <Code2 size={14} /> Case Study Analysis
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white leading-[0.85] mb-10 tracking-tighter">
              {project.title.split('–')[0]}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-4 italic">
                {project.title.split('–')[1] || 'Web Innovation'}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative p-2 md:p-4 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-3xl overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />
            <img
              src={project.img}
              className="relative z-10 w-full h-auto aspect-video object-cover rounded-[3rem] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
              alt={project.title}
            />
          </motion.div>
        </section>

        {/* --- DATA ARCHITECTURE GRID --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Content */}
          <div className="lg:col-span-7 space-y-12">
            <section className="relative p-10 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[3.5rem] overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Terminal size={140} />
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4 tracking-tight">
                <LayoutIcon className="text-blue-500" /> Executive Overview
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed font-light first-letter:text-5xl first-letter:font-bold first-letter:text-blue-400 first-letter:mr-3">
                {project.desc}
              </p>
            </section>

            {/* Bento Grid: Challenges & Logic */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-gradient-to-br from-slate-900 to-red-950/20 border border-red-500/10 rounded-[3rem] group">
                <ShieldAlert
                  className="text-red-500 mb-6 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
                  Technical Barriers
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.challenges ||
                    'Managing real-time state synchronization and ensuring high-availability database connections while scaling the application architecture.'}
                </p>
              </div>

              <div className="p-10 bg-gradient-to-br from-slate-900 to-blue-950/20 border border-blue-500/10 rounded-[3rem] group">
                <Zap
                  className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
                  Core Optimization
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.futurePlans ||
                    'Upcoming updates include enhanced AI integration, automated SEO optimization, and a revamped dashboard for deeper user insights.'}
                </p>
              </div>
            </div>
          </div>

          {/* Side Control Panel */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="sticky top-32 p-10 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[3.5rem] shadow-2xl">
              <div className="mb-10">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 flex justify-between">
                  Interface Integrity <span>100%</span>
                </h3>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                  />
                </div>
              </div>

              <h3 className="text-[10px] font-black text-slate-400 mb-6 uppercase tracking-[0.3em] flex items-center gap-2">
                <Layers size={14} className="text-blue-500" /> Integrated
                Technology
              </h3>

              <div className="flex flex-wrap gap-2 mb-12">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold text-slate-300 uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all uppercase text-[10px] tracking-widest"
                >
                  <RiLiveLine size={20} /> Access Application
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href={project.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-5 bg-slate-800/50 text-white font-bold rounded-2xl flex items-center justify-center gap-3 border border-white/10 hover:bg-slate-700 transition-all uppercase text-[10px] tracking-widest"
                >
                  <Github size={20} /> Repository
                </motion.a>
              </div>

              <div className="mt-12 pt-10 border-t border-white/5 text-center">
                <CheckCircle2
                  size={24}
                  className="text-cyan-500 mx-auto mb-4"
                />
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed">
                  Engineered with Clean Architecture <br /> & Responsive
                  Optimization
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-24 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.6em]">
            Developed by{' '}
            <span className="text-slate-400">Md Jabed Hossain</span> — © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
