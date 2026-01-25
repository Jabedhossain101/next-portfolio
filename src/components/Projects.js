'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Rocket, ExternalLink, ArrowUpRight } from 'lucide-react';
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
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0)
          this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0)
          this.directionY = -this.directionY;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      let numberOfParticles = (canvas.height * canvas.width) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 1.5 + 0.5;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let directionX = Math.random() * 1 - 0.5;
        let directionY = Math.random() * 1 - 0.5;
        let color = 'rgba(34, 211, 238, 0.2)';
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
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
      className="relative min-h-screen py-24 px-6 overflow-hidden bg-slate-800/50"
      id="projects"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto font-[family-name:var(--font-sansita)]">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Creative Portfolio
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight"
          >
            Digital <span className="text-cyan-400 italic">Showcase</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(34,211,238,0.1)] hover:border-cyan-500/30"
            >
              <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />

                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-6 left-8 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span
                        key={t}
                        className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 pt-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-3xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed line-clamp-3 mb-8">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-900 rounded-xl font-black text-sm uppercase tracking-tighter hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20"
                      >
                        <RiLiveLine size={18} /> Live Demo
                      </a>
                      <a
                        href={project.gitLink}
                        target="_blank"
                        className="p-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all border border-white/10"
                      >
                        <Github size={20} />
                      </a>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all group/arrow"
                    >
                      <ArrowUpRight className="group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
