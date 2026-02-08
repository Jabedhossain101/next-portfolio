'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School } from 'lucide-react';

const educationData = [
  {
    num: '01',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'American International University-Bangladesh (AIUB)',
    year: '2023 - Present',
    details:
      'Specializing in Software Engineering and Full-Stack Architectures. Active participant in advanced system design and competitive programming.',
    status: 'In Progress',
    color: 'from-violet-500 to-blue-500',
  },
  {
    num: '02',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Principal Kazi Farukey College',
    year: '2020 - 2022',
    details:
      'Focus on Science & Mathematics. Achieved GPA 5.00/5.00 with a foundation in analytical physics and complex calculus.',
    status: 'Completed',
    color: 'from-blue-500 to-fuchsia-500',
  },
  {
    num: '03',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Lakshmipur Adarsha Samad Govt. High School',
    year: '2018 - 2020',
    details:
      'Major in Science. Distinction in ICT and Mathematics. GPA 5.00/5.00.',
    status: 'Completed',
    color: 'from-fuchsia-500 to-violet-500',
  },
];

const Education = () => {
  return (
    <section
      className="relative py-20 md:py-32 px-4 md:px-6 bg-[#050505] overflow-hidden"
      id="education"
    >
      {/* Background Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-32 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-violet-500" />
              <span className="text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">
                Milestones // Academic
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              KNOWLEDGE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 italic font-light">
                Trajectory
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed uppercase tracking-widest border-l border-slate-800 pl-6 max-w-sm">
              Documenting the intellectual journey from core foundations to
              advanced computer science engineering.
            </p>
          </div>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className="grid grid-cols-1 border-t border-white/5">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 border-b border-white/5 hover:bg-white/[0.01] transition-colors duration-500"
            >
              {/* Year & Index (3 Cols on Desktop) */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between items-center lg:items-start">
                <div className="flex flex-col lg:block">
                  <span className="text-3xl md:text-4xl font-mono text-white/5 font-black group-hover:text-violet-500/20 transition-colors leading-none">
                    {edu.num}
                  </span>
                  <div className="mt-2 md:mt-4 flex items-center gap-2 md:gap-3">
                    <Calendar size={12} className="text-violet-400" />
                    <span className="text-[10px] md:text-xs font-black tracking-widest text-slate-400 uppercase">
                      {edu.year}
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <span className="text-[9px] font-bold text-slate-700 uppercase tracking-widest">
                    ACADEMIC // BLUEPRINT
                  </span>
                </div>
              </div>

              {/* Degree & Institution (6 Cols on Desktop) */}
              <div className="lg:col-span-6 space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} animate-pulse`}
                    />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      {edu.status}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight md:leading-none group-hover:text-violet-400 transition-colors">
                    {edu.degree}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <School size={16} className="text-slate-600 shrink-0" />
                  <span className="text-base md:text-lg font-light tracking-tight group-hover:text-slate-200 transition-colors">
                    {edu.institution}
                  </span>
                </div>

                <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-light max-w-xl group-hover:text-slate-400 transition-colors">
                  {edu.details}
                </p>
              </div>

              {/* Visual Decorative (3 Cols on Desktop) */}
              <div className="lg:col-span-3 flex lg:justify-end items-center lg:items-start pt-2 lg:pt-4">
                <div className="p-3 md:p-4 border border-white/5 rounded-full opacity-40 lg:opacity-20 group-hover:opacity-100 group-hover:border-violet-500/50 transition-all">
                  <GraduationCap
                    size={24}
                    className="text-slate-500 group-hover:text-violet-400"
                  />
                </div>
              </div>

              {/* Hover Line Accent (Hidden on small mobile for cleaner look) */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] md:w-1 bg-gradient-to-b ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM DECORATION --- */}
        <div className="mt-12 md:mt-20 flex flex-col items-center opacity-20">
          <p className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-slate-500 uppercase font-black mb-4 text-center">
            Continuous Learning // Evolution
          </p>
          <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </div>

      {/* Side Text Decoration - Hidden on screens smaller than 2XL */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden 2xl:block">
        <p className="[writing-mode:vertical-lr] text-[10px] tracking-[1em] text-slate-800 uppercase font-black">
          ACADEMIA // BLUEPRINT
        </p>
      </div>
    </section>
  );
};

export default Education;
