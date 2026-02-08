'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Globe, Layers } from 'lucide-react';
import Link from 'next/link';
import projects from '@/data/projects';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="relative min-h-screen py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-[#050505]"
      id="projects"
    >
      {/* Background Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px', // Mobile-এর জন্য গ্রিড একটু ছোট করা হয়েছে
        }}
      />

      {/* Subtle Ambient Aura */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-32 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-violet-500" />
              <span className="text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">
                Selected // Works
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 italic font-light">
                Showcase
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed uppercase tracking-widest border-l border-slate-800 pl-6 max-w-md">
              Exploring the intersection of performance and aesthetics through
              specialized web architectures.
            </p>
          </div>
        </div>

        {/* --- PROJECTS GRID --- */}
        {/* Mobile-এ border-x দিয়ে সেপারেট করা হয়েছে */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-800/20 border border-slate-800/50">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-[#050505] p-6 sm:p-8 md:p-12 transition-colors duration-700 hover:bg-white/[0.02]"
            >
              <div className="relative z-10">
                {/* Meta Header */}
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <span className="text-3xl md:text-4xl font-mono text-white/10 group-hover:text-violet-500/20 transition-colors font-black leading-none">
                    0{idx + 1}
                  </span>
                  <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Globe size={18} />
                    </a>
                  </div>
                </div>

                {/* Image Showcase */}
                <div className="relative aspect-video mb-8 md:mb-10 overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />

                  {/* Floating Tech Stack */}
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex flex-wrap gap-2 max-w-[90%]">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[8px] md:text-[9px] font-bold text-violet-200 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 md:space-y-6">
                  <div className="flex justify-between items-end group/title">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
                      {project.title}
                    </h3>
                    <Link href={`/projects/${project.id}`}>
                      <ArrowUpRight
                        className="text-slate-600 group-hover:text-violet-400 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all duration-300"
                        size={24}
                      />
                    </Link>
                  </div>

                  <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors duration-500">
                    {project.desc}
                  </p>

                  {/* CTA Area */}
                  <div className="pt-4 md:pt-6 flex items-center gap-4 md:gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-violet-400 border-b border-violet-500/30 pb-1 hover:border-violet-400 transition-all"
                    >
                      Live Protocol
                    </a>
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-slate-500 hover:text-white transition-colors"
                    >
                      Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA Bottom */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 border border-slate-800 rounded-sm group cursor-pointer transition-colors hover:border-violet-500/50 shadow-lg"
          >
            <Layers
              size={16}
              className="text-slate-500 group-hover:text-violet-400"
            />
            <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-slate-400 group-hover:text-white">
              View Full Archive
            </span>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Text - Hidden on mobile/tablet */}
      <div className="absolute right-10 bottom-32 hidden 2xl:block opacity-20">
        <p className="[writing-mode:vertical-lr] text-[10px] tracking-[1em] text-slate-400 uppercase font-black">
          Development // Archive
        </p>
      </div>
    </section>
  );
};

export default Projects;
