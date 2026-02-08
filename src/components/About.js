'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Globe2, Cpu, Award, ArrowUpRight } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Code2 size={20} className="text-violet-400" />,
      label: 'Production Projects',
      value: '15+',
    },
    {
      icon: <Award size={20} className="text-blue-400" />,
      label: 'Industry Years',
      value: '02+',
    },
    {
      icon: <Globe2 size={20} className="text-fuchsia-400" />,
      label: 'Global Partners',
      value: '10+',
    },
    {
      icon: <Cpu size={20} className="text-emerald-400" />,
      label: 'Core Technologies',
      value: '12+',
    },
  ];

  return (
    <section
      className="relative py-20 md:py-32 px-4 md:px-6 bg-[#050505] overflow-hidden"
      id="about"
    >
      {/* Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '30px 30px', // Mobile e grid size ektu choto korlam
        }}
      />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: Visual - Mobile e upore thakbe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 lg:col-span-5 relative group px-4 md:px-0"
          >
            <div className="relative z-10 overflow-hidden bg-slate-900 aspect-[4/5] md:aspect-[3/4] border border-white/5">
              <img
                src="https://i.ibb.co.com/7x1dM3VT/DSC04383.jpg"
                alt="About Jabed"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            </div>

            {/* Architectural Frame Decoration */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-full h-full border border-violet-500/20 -z-10 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4" />

            <div className="absolute -top-4 -left-2 md:-left-4 p-3 md:p-4 bg-violet-600 text-black font-black text-[10px] md:text-xs tracking-widest uppercase">
              The Visionary
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-10 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-8 md:w-10 h-[1px] bg-violet-500" />
                <span className="text-violet-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  01 // Biography
                </span>
              </div>

              {/* Responsive Text Sizes */}
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-10">
                ENGINEERING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 italic font-light">
                  Aesthetics
                </span>
              </h2>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-light max-w-2xl">
                I am{' '}
                <span className="text-white font-medium">Jabed Hossain</span>.
                As a Co-Founder of{' '}
                <span className="text-violet-400 font-medium tracking-tight underline underline-offset-4 decoration-violet-500/30">
                  AlgoWave Labs
                </span>
                , I bridge the gap between complex backend logic and high-end
                digital experiences. My philosophy: if it doesn't scale, it's
                not finished.
              </p>
            </motion.div>

            {/* Technical Stats Grid - Mobile e grid-cols-2 */}
            <div className="grid grid-cols-2 gap-px bg-slate-800/30 border border-slate-800/50">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 md:p-8 bg-[#050505] group hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className="p-1.5 md:p-2 bg-white/5 border border-white/5 rounded-sm">
                      {stat.icon}
                    </div>
                    <ArrowUpRight
                      size={12}
                      className="text-slate-700 group-hover:text-violet-400 transition-colors"
                    />
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black text-white mb-1 tracking-tighter">
                    {stat.value}
                  </h4>
                  <p className="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Signature / Philosophy */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative pl-6 md:pl-8 border-l border-slate-800 py-2"
            >
              <p className="text-slate-500 italic text-base md:text-lg leading-relaxed font-light">
                "Code is the modern-day calligraphy. Every line should be
                written with precision, purpose, and a touch of art."
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-800 border border-white/10" />
                <span className="text-[10px] md:text-xs font-mono text-slate-600 uppercase tracking-widest">
                  Jabed Hossain, AIUB
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
