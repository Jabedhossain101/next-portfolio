'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Rocket, Layout } from 'lucide-react';
import { RiLiveLine } from 'react-icons/ri';
import Link from 'next/link';
import projects from '@/data/projects'; // Alias '@/' use kora hoyeche

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const canvasRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const numStars = 350;
    const stars = [];

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.size = Math.random() * 1.2 + 0.3;
      }
      update() {
        this.z -= 1.5;
        if (this.z <= 0) this.reset();
      }
      draw() {
        const fx =
          (this.x - canvas.width / 2) * (canvas.width / this.z) +
          canvas.width / 2;
        const fy =
          (this.y - canvas.height / 2) * (canvas.width / this.z) +
          canvas.height / 2;
        const r = (canvas.width / this.z) * this.size;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.arc(fx, fy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numStars; i++) stars.push(new Star());

    const animate = () => {
      ctx.fillStyle = '#020617'; // Deep night blue background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', setCanvasSize);
    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  return (
    <section
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      id="projects"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 uppercase tracking-widest"
          >
            <Rocket size={16} /> My Portfolio
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Selected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Masterpieces
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl flex flex-col lg:flex-row h-full lg:h-80"
            >
              {/* Image Section */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 italic">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-2 bg-cyan-500 text-slate-950 rounded-full hover:bg-cyan-400 transition-all transform hover:scale-110"
                    >
                      <RiLiveLine size={20} />
                    </a>
                    <a
                      href={project.gitLink}
                      target="_blank"
                      className="p-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all transform hover:scale-110 border border-white/10"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors group/btn"
                  >
                    Case Study{' '}
                    <Layout
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              {/* Animated Glow on Hover */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-cyan-500/10 to-transparent ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
