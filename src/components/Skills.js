'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// Sobgulo icon react-icons theke thik bhabe import kora hoyeche
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
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
import { Cpu, Layers, Terminal, Wrench } from 'lucide-react';

const categories = {
  Frontend: {
    icon: <Layers className="text-blue-400" />,
    skills: [
      { name: 'React', color: '#61dafb', icon: <FaReact /> },
      { name: 'Next.js', color: '#ffffff', icon: <SiNextdotjs /> },
      { name: 'JavaScript', color: '#f7df1e', icon: <TbBrandJavascript /> },
      { name: 'Tailwind CSS', color: '#38bdf8', icon: <RiTailwindCssFill /> },
      { name: 'Redux', color: '#764abc', icon: <SiRedux /> },
    ],
  },
  Backend: {
    icon: <Cpu className="text-green-400" />,
    skills: [
      { name: 'Node.js', color: '#68a063', icon: <RiNodejsLine /> },
      { name: 'Express', color: '#fff', icon: <SiExpress /> },
      { name: 'MongoDB', color: '#4db33d', icon: <BiLogoMongodb /> },
      { name: 'Firebase', color: '#ffa611', icon: <SiFirebase /> },
      { name: 'JWT', color: '#f0db4f', icon: <SiJsonwebtokens /> },
    ],
  },
  Tools: {
    icon: <Wrench className="text-orange-400" />,
    skills: [
      { name: 'Git', color: '#f34f29', icon: <FaGitAlt /> },
      { name: 'GitHub', color: '#ffffff', icon: <FaGithub /> },
      { name: 'VS Code', color: '#007acc', icon: <VscVscode /> },
    ],
  },
  Programming: {
    icon: <Terminal className="text-purple-400" />,
    skills: [
      { name: 'Java', color: '#5382a1', icon: <FaJava /> },
      { name: 'C++', color: '#00599c', icon: <TbBrandCpp /> },
    ],
  },
};

const TiltCard = ({ skill }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-10deg', '15deg']);

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
      whileHover={{ scale: 1.05 }}
      className="relative group p-6 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-500"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full"
        style={{ background: skill.color }}
      />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <span
          className="text-5xl transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </span>
        <span className="text-sm font-semibold tracking-wider text-slate-300 group-hover:text-white transition-colors text-center">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5,
      speed: Math.random() * 0.3 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen py-24 bg-[#020617] overflow-hidden"
      id="skills"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      />

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 uppercase tracking-widest"
          >
            <Cpu size={16} /> Expertise & Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Tech Universe
            </span>{' '}
            🚀
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Navigating the full stack to build high-performance web applications
            with the latest technologies.
          </p>
        </div>

        <div className="grid gap-16">
          {Object.entries(categories).map(([title, content], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 shadow-inner">
                  {content.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-100 uppercase tracking-widest">
                  {title}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-700 to-transparent ml-4" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {content.skills.map(skill => (
                  <TiltCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
