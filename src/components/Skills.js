'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaReact, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa';
import { RiNodejsLine, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiRedux,
  SiNextdotjs,
} from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { TbBrandJavascript, TbBrandCpp } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { Cpu, Layers, Terminal, Wrench, ArrowUpRight } from 'lucide-react';

const categories = {
  Frontend: {
    num: '01',
    icon: <Layers size={20} className="text-violet-400" />,
    skills: [
      { name: 'React', color: '#61dafb', icon: <FaReact /> },
      { name: 'Next.js', color: '#ffffff', icon: <SiNextdotjs /> },
      { name: 'JavaScript', color: '#f7df1e', icon: <TbBrandJavascript /> },
      { name: 'Tailwind CSS', color: '#38bdf8', icon: <RiTailwindCssFill /> },
      { name: 'Redux', color: '#764abc', icon: <SiRedux /> },
    ],
  },
  Backend: {
    num: '02',
    icon: <Cpu size={20} className="text-blue-400" />,
    skills: [
      { name: 'Node.js', color: '#68a063', icon: <RiNodejsLine /> },
      { name: 'Express', color: '#fff', icon: <SiExpress /> },
      { name: 'MongoDB', color: '#4db33d', icon: <BiLogoMongodb /> },
      { name: 'Firebase', color: '#ffa611', icon: <SiFirebase /> },
      { name: 'JWT', color: '#f0db4f', icon: <SiJsonwebtokens /> },
    ],
  },
  Programming: {
    num: '03',
    icon: <Terminal size={20} className="text-fuchsia-400" />,
    skills: [
      { name: 'Java', color: '#5382a1', icon: <FaJava /> },
      { name: 'C++', color: '#00599c', icon: <TbBrandCpp /> },
      { name: 'Git Ops', color: '#f34f29', icon: <FaGitAlt /> },
    ],
  },
};

const TiltCard = ({ skill }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMove = e => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative group bg-[#0a0a0a] border border-white/5 p-8 overflow-hidden"
    >
      {/* Dynamic Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center gap-6"
        style={{ transform: 'translateZ(50px)' }}
      >
        <span
          className="text-5xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      className="relative min-h-screen py-32 bg-[#050505] overflow-hidden"
      id="skills"
    >
      {/* Background Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-violet-500" />
              <span className="text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">
                Stack // Technologies
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
              TECHNICAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 italic font-light">
                Ecosystem
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest border-l border-slate-800 pl-6">
              Architecting modern web solutions with a curated selection of
              industry-leading tools and frameworks.
            </p>
          </div>
        </div>

        {/* SKILLS GRID BY CATEGORY */}
        <div className="space-y-32">
          {Object.entries(categories).map(([title, content], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-12 group">
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-mono text-white/10 group-hover:text-violet-500/30 transition-colors font-black leading-none">
                    {content.num}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                      {title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {content.icon}
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        Advanced Proficiency
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block h-[1px] flex-grow mx-12 bg-slate-900" />
                <ArrowUpRight className="text-slate-800 group-hover:text-violet-500 transition-colors" />
              </div>

              {/* Skills Card Grid - No gap between cards for "Connected Grid" look */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-white/5">
                {content.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="border-r border-b border-white/5"
                  >
                    <TiltCard skill={skill} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vertical Title Decoration */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:block">
        <p className="[writing-mode:vertical-lr] text-[10px] tracking-[1em] text-slate-800 uppercase font-black">
          System Architecture // 2026
        </p>
      </div>
    </section>
  );
};

export default Skills;
