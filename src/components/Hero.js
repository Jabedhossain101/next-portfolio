'use client'; // Next.js App Router-er jonno proyojon
import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowDown } from 'react-icons/fa';

const RESUME_URL =
  'https://drive.google.com/file/d/1FIbJOj8h0g00rhw3W2y3D3FGJTa4Q5nH/view?usp=sharing';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(150);

  const roles = [
    'MERN Stack Developer',
    'Frontend Specialist',
    'Creative Web Engineer',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, speed]);

  const planets = [
    { name: 'Mercury', size: 6, color: '#b1b1b1', orbit: 70, duration: 8 },
    { name: 'Venus', size: 10, color: '#e5c27a', orbit: 100, duration: 12 },
    { name: 'Earth', size: 12, color: '#3fa7d6', orbit: 130, duration: 16 },
    { name: 'Mars', size: 9, color: '#c1440e', orbit: 160, duration: 20 },
    { name: 'Jupiter', size: 25, color: '#d6b67a', orbit: 210, duration: 30 },
  ];

  const starsArray = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-4 pt-20">
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {starsArray.map((star, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.4,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Solar System Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="relative w-16 h-16 rounded-full bg-orange-500 blur-xl shadow-[0_0_50px_orange]"></div>
        {planets.map((planet, index) => (
          <div
            key={index}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: `${planet.orbit * 2}px`,
              height: `${planet.orbit * 2}px`,
              animation: `spin ${planet.duration}s linear infinite`,
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                top: '50%',
                right: '-5px',
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                backgroundColor: planet.color,
                boxShadow: `0 0 15px ${planet.color}`,
              }}
            />
          </div>
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              MD Jabed Hossain
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-medium text-cyan-400 mb-6 h-10">
            {text}
            <span className="animate-ping text-white">|</span>
          </div>

          <p className="text-slate-400 text-lg max-w-lg mb-8 mx-auto lg:mx-0">
            I build modern, responsive web applications with smooth UI and
            delightful interactions. Specializing in MERN Stack and Creative Web
            Engineering.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-5 mb-10 text-2xl text-slate-400">
            <a
              href="https://github.com/Jabedhossain101"
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdjabedhossain12/"
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/mdjabedhossain27"
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              className="flex items-center gap-2 border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 font-bold py-3 px-8 rounded-full transition-all"
            >
              <FaArrowDown /> Resume
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <img
              src="https://i.ibb.co.com/0jPc1ttD/boss.png"
              alt="MD Jabed Hossain"
              className="relative w-64 md:w-80 rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
