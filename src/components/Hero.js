'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Terminal, Cpu, Globe, ArrowUpRight } from 'lucide-react';

const RESUME_URL =
  'https://drive.google.com/file/d/1UFnYDAOd07Ibe0FbOwXRzBSyHz-y2VbH/view?usp=sharing';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [mounted, setMounted] = useState(false);

  const roles = [
    'MERN Stack Developer',
    'Software Architect',
    'Digital Innovator',
  ];

  useEffect(() => {
    setMounted(true);
    const handleTyping = () => {
      const current = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 120);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  if (!mounted) return <div className="min-h-screen bg-[#050505]"></div>;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] text-[#fafafa] px-6 overflow-hidden font-sans">
      {/* --- ADVANCED BACKGROUND LAYER --- */}
      {/* 1. Technical Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. Abstract Radial Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* LEFT: HEADING & INTRO (8 Cols) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-violet-500 flex items-center justify-center">
                    <Terminal size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-blue-500 flex items-center justify-center">
                    <Globe size={14} />
                  </div>
                </div>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-500">
                  Global Tech Standard
                </p>
              </div>

              <h1 className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-10">
                CODE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400">
                  WITHOUT
                </span>{' '}
                <br />
                LIMITS
              </h1>

              <div className="flex flex-wrap gap-x-12 gap-y-6 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-xl font-light text-slate-300">
                    {text}
                  </span>
                </div>

                <div className="hidden md:block h-10 w-[1px] bg-slate-800" />

                <p className="max-w-xs text-sm text-slate-500 leading-relaxed uppercase tracking-wider">
                  Crafting scalable architectures for the next generation of web
                  applications.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: IMAGE & STATS (4 Cols) */}
          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src="https://i.ibb.co.com/rfLN1hWN/jero.jpg"
                  alt="Jabed Hossain"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Meta Info */}
              <div className="absolute -bottom-6 -left-6 right-6 p-6 bg-white/[0.03] backdrop-blur-2xl border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-violet-400 font-bold tracking-widest uppercase mb-1">
                      Company Status
                    </p>
                    <h4 className="text-lg font-bold tracking-tight">
                      Co-Founder, AlgoWave
                    </h4>
                  </div>
                  <ArrowUpRight className="text-slate-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-10 border-t border-slate-900 flex flex-wrap justify-between items-center gap-10"
        >
          <div className="flex gap-8">
            <motion.a
              href="#projects"
              whileHover={{ x: 5 }}
              className="text-sm font-bold tracking-widest flex items-center gap-3 border-b border-violet-500 pb-2 transition-all hover:text-violet-400"
            >
              EXPLORE WORK <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href={RESUME_URL}
              target="_blank"
              whileHover={{ x: 5 }}
              className="text-sm font-bold tracking-widest flex items-center gap-3 border-b border-slate-700 pb-2 transition-all hover:text-white"
            >
              GET CV <Cpu size={16} />
            </motion.a>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex gap-6 text-slate-500">
              <a
                href="https://github.com/Jabedhossain101"
                className="hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mdjabedhossain12/"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/mdjabedhossain27"
                className="hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em]">
                AIUB Student
              </p>
              <p className="text-xs font-mono">B.Sc. in CSE</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* VERTICAL DECORATION */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-4">
        <span className="[writing-mode:vertical-lr] text-[10px] tracking-[0.5em] text-slate-700 uppercase">
          Scroll to explore
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-violet-500/50 to-transparent" />
      </div>
    </section>
  );
}
