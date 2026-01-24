'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaTerminal,
} from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] text-slate-400 pt-20 pb-10 overflow-hidden border-t border-white/5 font-sans">
      {/* Background Subtle Light Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <FaTerminal className="text-slate-950" size={20} />
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tighter">
                JABED<span className="text-cyan-400">.</span>DEV
              </h1>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              MERN Stack Specialist & Creative Web Engineer. Building
              high-performance applications with elegant user experiences.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: <FaGithub />,
                  href: 'https://github.com/Jabedhossain101',
                },
                {
                  icon: <FaLinkedin />,
                  href: 'https://www.linkedin.com/in/mdjabedhossain12',
                },
                {
                  icon: <FaFacebook />,
                  href: 'https://www.facebook.com/mdjabedhossain27/',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">
              Navigation
            </h2>
            <ul className="grid grid-cols-1 gap-4 text-sm font-medium">
              {[
                'Home',
                'About',
                'Projects',
                'Skills',
                'Education',
                'Contact',
              ].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 scale-0 group-hover:scale-100 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">
              Get in Touch
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                  <MdEmail className="text-cyan-400 text-lg" />
                </div>
                <span className="mt-1 break-all tracking-tight">
                  ahmedrafsan101@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                  <MdPhone className="text-cyan-400 text-lg" />
                </div>
                <span className="mt-1">01887686535</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                  <MdLocationOn className="text-cyan-400 text-lg" />
                </div>
                <span className="mt-1">Bashundhara R/A, Dhaka</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h2 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">
              Newsletter
            </h2>
            <p className="text-xs italic leading-relaxed">
              Let's connect and build something extraordinary. Subscribe for
              updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-cyan-500/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-cyan-500 text-slate-950 px-3 rounded-lg text-xs font-bold hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium tracking-wide">
            © {currentYear} <span className="text-white">Jabed Hossain</span>.
            Crafted with <span className="text-red-500 animate-pulse">❤</span>{' '}
            in Bangladesh.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors"
          >
            Back to Top
            <div className="p-2 rounded-full border border-white/10 group-hover:border-cyan-400 transition-colors">
              <FaArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
