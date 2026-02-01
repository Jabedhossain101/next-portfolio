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
      className="relative min-h-screen py-32 px-6 overflow-hidden bg-[#050505]"
      id="projects"
    >
      {/* Background Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle Ambient Aura */}
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-violet-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-32 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-violet-500" />
              <span className="text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">
                Selected // Works
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 italic font-light">
                Showcase
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest border-l border-slate-800 pl-6">
              Exploring the intersection of performance and aesthetics through
              specialized web architectures.
            </p>
          </div>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-800/20 border border-slate-800/50">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-[#050505] p-8 md:p-12 transition-colors duration-700 hover:bg-white/[0.02]"
            >
              <div className="relative z-10">
                {/* Meta Header */}
                <div className="flex justify-between items-start mb-12">
                  <span className="text-4xl font-mono text-white/10 group-hover:text-violet-500/20 transition-colors font-black leading-none">
                    0{idx + 1}
                  </span>
                  <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Globe size={20} />
                    </a>
                  </div>
                </div>

                {/* Image Showcase - Adjusted for Lightweight feel */}
                <div className="relative aspect-video mb-10 overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    /* Grayscale komiye deya hoyeche ebong default opacity bariye 90% kora hoyeche */
                    className="w-full h-full object-cover grayscale-[0.2] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  {/* Gradient overlay-ti aro halka (lightweight) kora hoyeche */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />

                  {/* Floating Tech Stack on Image */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold text-violet-200 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end group/title">
                    <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
                      {project.title}
                    </h3>
                    <Link href={`/projects/${project.id}`}>
                      <ArrowUpRight
                        className="text-slate-600 group-hover:text-violet-400 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all duration-300"
                        size={28}
                      />
                    </Link>
                  </div>

                  <p className="text-slate-400 text-lg font-light leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors duration-500">
                    {project.desc}
                  </p>

                  {/* CTA Area */}
                  <div className="pt-6 flex items-center gap-6">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      className="text-[10px] font-black tracking-[0.3em] uppercase text-violet-400 border-b border-violet-500/30 pb-1 hover:border-violet-400 transition-all"
                    >
                      Live Protocol
                    </motion.a>
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 hover:text-white transition-colors"
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
        <div className="mt-20 flex justify-center">
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 px-8 py-4 border border-slate-800 rounded-sm group cursor-pointer transition-colors hover:border-violet-500/50 shadow-lg"
          >
            <Layers
              size={18}
              className="text-slate-500 group-hover:text-violet-400"
            />
            <span className="text-xs font-black tracking-[0.4em] uppercase text-slate-400 group-hover:text-white">
              View Full Archive
            </span>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-10 bottom-32 hidden 2xl:block opacity-20">
        <p className="[writing-mode:vertical-lr] text-[10px] tracking-[1em] text-slate-400 uppercase font-black">
          Development // Archive
        </p>
      </div>
    </section>
  );
};

export default Projects;
