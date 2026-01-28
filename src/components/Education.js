'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'American International University-Bangladesh (AIUB)',
    year: '2023 - Present',
    details:
      'Focused on software engineering, full-stack development, and participated in competitive programming contests.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Principal Kazi Farukey College',
    year: '2020 - 2022',
    details:
      'Studied Science with emphasis on Physics, Chemistry, and Mathematics. Achieved GPA 5.00 out of 5.00.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Lakshmipur Adarsha Samad Govt. High School',
    year: '2018 - 2020',
    details:
      'Major in Science. Achieved GPA 5.00 with distinction in Mathematics and ICT.',
    color: 'from-indigo-500 to-purple-600',
  },
];

const Education = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const particles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedY: Math.random() * 0.3 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(34, 211, 238, 0.2)';
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.speedY;
        if (p.y < 0) p.y = canvas.height;
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
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 bg-[#020617] overflow-hidden"
      id="education"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
      />

      <div className="relative z-10 max-w-6xl mx-auto font-[family-name:var(--font-sansita)]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <GraduationCap size={14} /> Journey
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Academic <span className="text-cyan-400 italic">Timeline</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line (Visible only on Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* 1. Empty Box for Balance (Desktop Only) */}
                <div className="hidden md:block w-[45%]" />

                {/* 2. Timeline Circle (Desktop Only) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-cyan-500 items-center justify-center z-20 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>

                {/* 3. Education Card */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="w-full md:w-[45%] relative group"
                >
                  <div className="p-8 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-[2rem] hover:border-cyan-500/30 transition-all duration-500 shadow-xl group-hover:shadow-cyan-500/5">
                    {/* Year Tag */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r ${edu.color} text-slate-950 text-xs font-black mb-6 shadow-lg`}
                    >
                      <Calendar size={14} /> {edu.year}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>

                    <div className="flex items-start gap-2 text-slate-300 text-sm mb-6 opacity-80">
                      <School size={18} className="text-cyan-500 shrink-0" />
                      <span className="font-bold">{edu.institution}</span>
                    </div>

                    <p className="text-slate-400 text-base leading-relaxed">
                      {edu.details}
                    </p>

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
