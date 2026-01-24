'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Rocket, Layout } from 'lucide-react';
import { RiLiveLine } from 'react-icons/ri';
import Link from 'next/link';
import projects from '@/data/projects';

const Projects = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null); // Full section track korar jonno
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    const setCanvasSize = () => {
      // Ati ekhon section-er full scrollable height nibe
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

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10)
            this.x += 3;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 3;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10)
            this.y += 3;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 3;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      // Screen size onujayi particle density adjust kora hoyeche
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size * 2;
        let y = Math.random() * (canvas.height - size * 2) + size * 2;
        let directionX = Math.random() * 1.5 - 0.75;
        let directionY = Math.random() * 1.5 - 0.75;
        let color =
          i % 2 === 0
            ? 'rgba(34, 211, 238, 0.25)'
            : 'rgba(255, 255, 255, 0.15)';
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance =
            (particles[a].x - particles[b].x) *
              (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) *
              (particles[a].y - particles[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            let opacityValue = 1 - distance / 25000;
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacityValue * 0.1})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      );
      gradient.addColorStop(0, '#020617');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = event => {
      // Mouse position track kora hocche scroll position soho
      const rect = section.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    window.addEventListener('resize', setCanvasSize);
    section.addEventListener('mousemove', handleMouseMove);

    // Initial setup
    setCanvasSize();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      section.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 overflow-hidden bg-black"
      id="projects"
    >
      {/* Background Canvas: Full cover fixed positions */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      />

      {/* Modern Gradient Orbs for extra depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 uppercase tracking-widest"
          >
            <Rocket size={16} /> Selected Work
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Proof of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold">
              Excellence
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/40 transition-all duration-500 shadow-2xl flex flex-col lg:flex-row lg:h-80"
            >
              <div className="lg:w-2/5 relative overflow-hidden bg-slate-800">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                />
              </div>

              <div className="lg:w-3/5 p-8 flex flex-col justify-between relative">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-2.5 bg-cyan-500 text-slate-950 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1"
                    >
                      <RiLiveLine size={20} />
                    </a>
                    <a
                      href={project.gitLink}
                      target="_blank"
                      className="p-2.5 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all transform hover:-translate-y-1 border border-white/10"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-2 group/btn uppercase tracking-widest"
                  >
                    View Details{' '}
                    <Layout
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-cyan-500/5 to-transparent ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
