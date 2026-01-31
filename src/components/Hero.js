'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowDown } from 'react-icons/fa';
import { Sparkles, MousePointer2, ExternalLink } from 'lucide-react';

const RESUME_URL =
  'https://drive.google.com/file/d/1FIbJOj8h0g00rhw3W2y3D3FGJTa4Q5nH/view?usp=sharing';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(150);
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);

  const roles = [
    'MERN Stack Developer',
    'Frontend Specialist',
    'Creative Web Engineer',
  ];

  useEffect(() => {
    setMounted(true);
    setStars(
      Array.from({ length: 50 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 3 + 2,
      })),
    );

    const handleTyping = () => {
      const current = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 70 : speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, speed]);

  if (!mounted) return <div className="min-h-screen bg-[#030712]"></div>;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] text-white px-6">
      {/* --- PREMIUM BACKGROUND LAYER --- */}
      {/* 1. Animated Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: star.duration, repeat: Infinity }}
            className="absolute bg-blue-400 rounded-full"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* 2. Gradient Orbs (Ambient Lighting) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6 uppercase tracking-widest">
            <Sparkles size={14} /> Available for projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Creating{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Digital
            </span>{' '}
            <br />
            Masterpieces
          </h1>

          <div className="text-2xl md:text-3xl font-light text-slate-300 mb-8 h-12 flex items-center gap-3">
            I am a{' '}
            <span className="font-semibold text-white border-b-2 border-cyan-500 pb-1">
              {text}
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-1 h-8 bg-cyan-500"
            />
          </div>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Crafting high-performance web experiences with the{' '}
            <strong>MERN Stack</strong>. I turn complex ideas into elegant,
            user-centric digital realities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
            >
              Start a Project <MousePointer2 size={18} />
            </motion.a>

            <motion.a
              href={RESUME_URL}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border border-slate-700 bg-slate-900/50 backdrop-blur-md rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all"
            >
              Download CV <FaArrowDown size={16} />
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-6">
            <span className="text-slate-500 text-sm font-mono uppercase tracking-tighter">
              Follow Me —
            </span>
            {[
              {
                icon: <FaGithub />,
                link: 'https://github.com/Jabedhossain101',
              },
              {
                icon: <FaLinkedin />,
                link: 'https://www.linkedin.com/in/mdjabedhossain12/',
              },
              {
                icon: <FaFacebook />,
                link: 'https://www.facebook.com/mdjabedhossain27',
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                className="text-slate-400 hover:text-cyan-400 text-xl transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Glassmorphism Card Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl rotate-6 translate-x-4 translate-y-4" />

          <div className="relative z-10 p-4 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden group">
            <img
              src="https://i.ibb.co.com/rfLN1hWN/jero.jpg"
              alt="Jabed Hossain"
              className="w-72 md:w-[450px] rounded-[2.5rem] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Overlay Info */}
            <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-cyan-400 font-mono text-sm mb-1">Co-Founder</p>
              <h3 className="text-xl font-bold">AlgoWave Labs</h3>
            </div>
          </div>

          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -top-6 -right-6 p-5 bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="text-3xl font-bold text-blue-400">2+</div>
            <div className="text-xs text-slate-400 uppercase tracking-widest">
              Years Exp.
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}
