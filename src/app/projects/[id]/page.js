'use client';
import React, { use } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Github,
  ArrowLeft,
  Cpu,
  Rocket,
  ShieldAlert,
  Sparkles,
  Layout as LayoutIcon,
  Layers,
  ExternalLink,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import projects from '@/data/projects';
import { RiLiveLine } from 'react-icons/ri';

export default function ProjectDetails({ params }) {
  const resolvedParams = use(params);
  const project = projects.find(p => p.id.toString() === resolvedParams.id);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-white">
        <Rocket size={48} className="text-blue-500 mb-4 animate-pulse" />
        <h1 className="text-3xl font-bold tracking-tighter">
          Mission Aborted: Project Not Found
        </h1>
        <Link
          href="/#projects"
          className="mt-6 px-6 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-all"
        >
          Return to Base
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-blue-500/30 selection:text-blue-400">
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full" />
      </div>

      {/* --- NAV BAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#030712]/40 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="flex items-center gap-2 group text-xs font-bold tracking-[0.2em] text-slate-400 hover:text-white transition-all uppercase"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden md:block text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-2">
              Quick Access —
            </span>
            <a
              href={project.gitLink}
              target="_blank"
              className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={project.link}
              target="_blank"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-xs uppercase flex items-center gap-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-6">
        {/* --- HEADER SECTION --- */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles size={12} /> Case Study 0{project.id}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              {project.title.split('–')[0]}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2">
                {project.title.split('–')[1] || 'Digital Excellence'}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/50"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

            {/* Quick Specs Overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4">
              {['MERN Stack', 'Next.js', 'High Performance'].map((spec, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest"
                >
                  {spec}
                </div>
              ))}
            </div>
          </motion.div>
        </header>

        {/* --- CONTENT GRID --- */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Body (Left) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <section className="p-8 md:p-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                  <LayoutIcon size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Executive Overview
                </h2>
              </div>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                {project.desc}
              </p>
            </section>

            {/* Features/Challenges Bento */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-gradient-to-br from-slate-900 to-red-950/20 border border-red-500/10 rounded-[3rem] group">
                <ShieldAlert
                  className="text-red-500 mb-6 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-xl font-bold text-white mb-4 italic uppercase tracking-wider">
                  The Hurdles
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.challenges}
                </p>
              </div>

              <div className="p-10 bg-gradient-to-br from-slate-900 to-blue-950/20 border border-blue-500/10 rounded-[3rem] group">
                <Rocket
                  className="text-blue-500 mb-6 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-xl font-bold text-white mb-4 italic uppercase tracking-wider">
                  The Vision
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.futurePlans}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 p-8 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl">
              <h3 className="text-xs font-black text-slate-400 mb-8 uppercase tracking-[0.3em] flex items-center gap-2">
                <Layers size={14} className="text-blue-400" /> Technology Used
              </h3>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-slate-300 uppercase tracking-tighter hover:border-blue-500/50 hover:text-white transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase text-xs tracking-widest"
                >
                  <RiLiveLine size={18} /> Launch Live App
                </a>
                <a
                  href={project.gitLink}
                  target="_blank"
                  className="w-full py-5 bg-white/5 text-white font-bold rounded-2xl flex items-center justify-center gap-3 border border-white/10 hover:bg-white/10 transition-all uppercase text-xs tracking-widest"
                >
                  <Github size={18} /> View Source
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 text-cyan-400 mb-4">
                  <CheckCircle2 size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Quality Guaranteed
                  </span>
                </div>
                <p className="text-slate-500 text-xs italic leading-relaxed">
                  "Optimized for performance, SEO, and seamless user
                  interaction."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 text-center">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-10" />
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
          Designed & Engineered by{' '}
          <span className="text-slate-400">Jabed Hossain</span>
        </p>
      </footer>
    </div>
  );
}
