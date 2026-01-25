'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaCode,
  FaTools,
  FaEnvelope,
  FaGraduationCap,
  FaArrowDown,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Menu, X, Download, Zap } from 'lucide-react'; // Mix of Lucide for cleaner look

const RESUME_URL =
  'https://drive.google.com/file/d/1FIbJOj8h0g00rhw3W2y3D3FGJTa4Q5nH/view?usp=sharing';

const navLinks = [
  { href: '#home', icon: FaHome, text: 'Home' },
  { href: '#about', icon: FaUser, text: 'About' },
  { href: '#projects', icon: FaCode, text: 'Projects' },
  { href: '#skills', icon: FaTools, text: 'Skills' },
  { href: '#contact', icon: FaEnvelope, text: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll hole Navbar background change hobe
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = async e => {
    e.preventDefault();
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`relative flex items-center justify-between p-2 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 pl-4"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="text-slate-950 fill-slate-950" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              JABED<span className="text-cyan-400"> </span>HOSSAIN
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center bg-slate-800/20 backdrop-blur-md border border-white/5 rounded-full px-2 py-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-5 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2 hover:bg-white/5 relative group"
                >
                  {link.text}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-1/2"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeClick}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
            >
              <Download size={16} /> Resume
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 lg:hidden"
          >
            <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-all"
                  >
                    <span className="text-lg font-semibold">{link.text}</span>
                    <link.icon className="text-xl" />
                  </a>
                ))}
                <button
                  onClick={handleResumeClick}
                  className="w-full mt-4 flex items-center justify-center gap-3 bg-blue-600 p-4 rounded-2xl font-bold text-white shadow-xl shadow-blue-600/20"
                >
                  <Download size={20} /> Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
