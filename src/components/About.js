'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Globe2, Cpu, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Code2 className="text-cyan-400" />,
      label: 'Projects Done',
      value: '15+',
    },
    {
      icon: <Award className="text-blue-400" />,
      label: 'Experience',
      value: '2+ Years',
    },
    {
      icon: <Globe2 className="text-teal-400" />,
      label: 'Happy Clients',
      value: '10+',
    },
    {
      icon: <Cpu className="text-indigo-400" />,
      label: 'Tech Stack',
      value: '12+',
    },
  ];

  return (
    <section
      className="relative py-24 px-6 bg-[#030712] overflow-hidden"
      id="about"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 right-[-5%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto font-sansita">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image/Visual with unique frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 p-2 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[3rem] overflow-hidden group shadow-2xl">
              <img
                src="https://i.ibb.co.com/7x1dM3VT/DSC04383.jpg"
                alt="About Jabed"
                className="w-full h-[500px] object-cover rounded-[2.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
            </div>
            {/* Animated Frame behind */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-2xl -z-10 rounded-[4rem] animate-pulse" />
          </motion.div>

          {/* Right Side: Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                <User size={14} /> Who Am I
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Transforming Visions into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Digital Reality
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-sans">
                Hello! I am{' '}
                <strong className="text-white">MD Jabed Hossain</strong>, a
                passionate Full Stack Developer and the Co-Founder of{' '}
                <span className="text-cyan-400">AlgoWave Labs</span>. With a
                deep focus on the MERN Stack, I specialize in building robust
                backend systems and pixel-perfect frontends. My journey is
                driven by a curiosity to solve complex problems and create
                seamless user experiences.
              </p>
            </motion.div>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-slate-500 uppercase tracking-tighter font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote / Signoff */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-2xl italic text-slate-300"
            >
              "Coding is not just about writing lines of text; it's about
              architecting solutions that change how people interact with the
              world."
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
