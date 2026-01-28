'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Rocket, ArrowUpRight, Code2, Globe } from 'lucide-react';
import { RiLiveLine } from 'react-icons/ri';
import Link from 'next/link';
import projects from '@/data/projects';

const Projects = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const setCanvasSize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
      init();
    };

    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.15)';
        ctx.fill();
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height) this.y = 0;
        this.draw();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < 40; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 2,
            Math.random() * 0.5,
            Math.random() * 0.5,
          ),
        );
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => p.update());
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 overflow-hidden bg-[#030712]"
      id="projects"
    >
      {/* Dynamic Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Decorative Orbs to match Hero/About */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto font-sansita">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Code2 size={14} /> My Portfolio
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight"
          >
            Proof of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">
              Excellence
            </span>
          </motion.h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto font-sans text-lg">
            Navigating through complex challenges to deliver high-performance,
            user-centric digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[3rem] p-4 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_50px_rgba(34,211,238,0.1)]">
                {/* Image Section with Overlay */}
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
                    Completed
                  </div>

                  {/* Tech Stack Floating */}
                  <div className="absolute bottom-6 left-8 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest font-sans"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed font-sans mb-10 line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3.5 bg-cyan-500 text-[#030712] rounded-2xl font-black text-xs uppercase tracking-tighter hover:bg-white transition-all shadow-xl shadow-cyan-500/20"
                      >
                        <Globe size={16} /> Live Demo
                      </motion.a>
                      <motion.a
                        href={project.gitLink}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3.5 bg-slate-800 text-white rounded-2xl hover:bg-slate-700 transition-all border border-white/10"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="group/arrow flex items-center justify-center w-14 h-14 rounded-full border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                    >
                      <ArrowUpRight className="group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Unique Shadow Behind Card on Hover */}
              <div
                className={`absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl -z-10 rounded-[4rem] transition-opacity duration-500 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
