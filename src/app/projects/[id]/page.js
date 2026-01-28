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
} from 'lucide-react';
import Link from 'next/link';
import projects from '@/data/projects'; // Apnar data file
import { RiLiveLine } from 'react-icons/ri';

export default function ProjectDetails({ params }) {
  // Params theke ID ta extract kora (Next.js 15+ standard)
  const resolvedParams = use(params);
  const project = projects.find(p => p.id.toString() === resolvedParams.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center text-white">
        <h1 className="text-2xl font-sansita">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white py-24 px-6 font-sansita overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group font-sans"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image & Tech */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
            </div>

            <div className="p-8 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem]">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <Cpu size={20} className="text-cyan-400" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-sans font-bold text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl md:text-6xl font-black leading-tight mb-6"
              >
                {project.title.split('–')[0]}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic text-3xl md:text-4xl mt-2">
                  {project.title.split('–')[1] || ''}
                </span>
              </motion.h1>
              <p className="text-slate-400 text-lg leading-relaxed font-sans">
                {project.desc}
              </p>
            </div>

            {/* Features/Challenges Section */}
            <div className="grid gap-6">
              <div className="flex gap-4 p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl">
                <ShieldAlert className="text-cyan-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-cyan-400 mb-1">
                    Key Challenges
                  </h4>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl">
                <Sparkles className="text-blue-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-black text-blue-400 mb-1">
                    Future Plans
                  </h4>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {project.futurePlans}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-5 pt-6">
              <a
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 px-8 py-4 bg-cyan-500 text-[#030712] rounded-2xl font-black uppercase tracking-tighter hover:bg-white transition-all shadow-xl shadow-cyan-500/20"
              >
                <RiLiveLine size={20} /> Live Preview
              </a>
              <a
                href={project.gitLink}
                target="_blank"
                className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-2xl hover:bg-slate-700 transition-all border border-white/10"
              >
                <Github size={20} /> Source Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
