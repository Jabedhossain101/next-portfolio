'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  MessageSquare,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    // Ekhane apni EmailJS ba kono backend API integrate korte paren
    console.log('Form Submitted:', formData);
    alert('Message sent successfully! (Backend integration pending)');
  };

  return (
    <section
      className="relative py-24 px-6 bg-[#020617] overflow-hidden"
      id="contact"
    >
      {/* Background Decorative Orbs */}
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 uppercase tracking-widest"
          >
            <MessageSquare size={16} /> Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold">
              Great Together
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 underline decoration-cyan-500 decoration-4 underline-offset-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="text-cyan-400" />,
                  label: 'Email',
                  value: 'ahmedrafsan101@gmail.com',
                  link: 'mailto:ahmedrafsan101@gmail.com',
                },
                {
                  icon: <Phone className="text-cyan-400" />,
                  label: 'Phone',
                  value: '+880 1XXXXXXXXX',
                  link: 'tel:+8801XXXXXXXXX',
                },
                {
                  icon: <MapPin className="text-cyan-400" />,
                  label: 'Location',
                  value: 'Lakshmipur, Chittagong, Bangladesh',
                  link: '#',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                      {item.label}
                    </p>
                    <p className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Connection */}
            <div className="pt-8">
              <p className="text-slate-500 font-mono text-sm mb-4 uppercase tracking-[0.3em]">
                Social Profiles
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Github />,
                    link: 'https://github.com/Jabedhossain101',
                  },
                  {
                    icon: <Linkedin />,
                    link: 'https://www.linkedin.com/in/mdjabedhossain12/',
                  },
                  {
                    icon: <Facebook />,
                    link: 'https://www.facebook.com/mdjabedhossain27',
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all transform hover:-translate-y-2"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-8 md:p-12 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all"
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10 transition-all resize-none"
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black rounded-2xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
