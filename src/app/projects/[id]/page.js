'use client';
import React, { use } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Globe,
  ArrowLeft,
  Cpu,
  Rocket,
  ShieldAlert,
  Sparkles,
  Layout as LayoutIcon,
  Layers,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import projects from '@/data/projects';
import { RiLiveLine } from 'react-icons/ri';

export default function ProjectDetails({ params }) {
  const resolvedParams = use(params);
  const project = projects.find(p => p.id.toString() === resolvedParams.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white font-sansita">
        <Rocket size={48} className="text-cyan-500 mb-4 animate-bounce" />
        <h1 className="text-3xl font-black">Project Not Found</h1>
        <Link href="/#projects" className="mt-6 text-cyan-400 underline italic">
          Return to Galaxy
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-400 font-sansita">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Sticky Header Navigation */}
      <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="flex items-center gap-2 group text-sm font-bold tracking-widest text-slate-400 hover:text-white transition-all uppercase"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />{' '}
            Back
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={project.gitLink}
              target="_blank"
              className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={project.link}
              target="_blank"
              className="px-4 py-2 bg-cyan-500 text-[#020617] rounded-lg font-black text-xs uppercase flex items-center gap-2 hover:bg-white transition-all"
            >
              Live <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* --- HERO SECTION --- */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 text-cyan-400 mb-4 font-black uppercase tracking-widest text-sm">
              <Sparkles size={18} /> Project Case Study
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6">
              {project.title.split('–')[0]}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 italic mt-2">
                {project.title.split('–')[1] || 'Web Innovation'}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto min-h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
          </motion.div>
        </section>

        {/* --- CONTENT GRID --- */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Info (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] space-y-6"
            >
              <h2 className="text-3xl font-black text-white flex items-center gap-3 italic">
                <LayoutIcon className="text-cyan-400" /> Executive Overview
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed font-sans font-medium">
                {project.desc}
              </p>
            </motion.div>

            {/* Challenges & Plans Bento Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 rounded-[2.5rem] space-y-4"
              >
                <div className="p-3 bg-red-500/10 rounded-2xl w-fit text-red-400">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="text-xl font-black text-white italic">
                  Technical Challenges
                </h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {project.challenges}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/10 rounded-[2.5rem] space-y-4"
              >
                <div className="p-3 bg-cyan-500/10 rounded-2xl w-fit text-cyan-400">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-black text-white italic">
                  Future Roadmap
                </h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {project.futurePlans}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Sidebar Info (Col 3) */}
          <aside className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] sticky top-28"
            >
              <h3 className="text-lg font-black text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                <Layers size={18} className="text-cyan-400" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-300 font-sans group hover:border-cyan-500/50 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-[#020617] font-black rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
                >
                  <RiLiveLine size={20} /> Live Preview
                </a>
                <a
                  href={project.gitLink}
                  target="_blank"
                  className="w-full py-4 bg-slate-800 text-white font-black rounded-2xl flex items-center justify-center gap-3 border border-white/10 hover:bg-slate-700 transition-colors"
                >
                  <Github size={20} /> Source Code
                </a>
              </div>
            </motion.div>

            {/* Quote / Highlight */}
            <div className="p-6 border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-3xl italic text-slate-400 text-sm">
              "Every line of code in this project was written with scalability
              and user experience in mind."
            </div>
          </aside>
        </div>
      </main>

      {/* Footer Quote */}
      <footer className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-white/5">
        <p className="text-slate-500 font-medium italic">
          End of Case Study — Built by Md Jabed Hossain
        </p>
      </footer>
    </div>
  );
}
