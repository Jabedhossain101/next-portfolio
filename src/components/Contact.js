'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  MessageSquare,
  Loader2,
  ArrowUpRight,
} from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        result => {
          alert('Transmission Successful. I will contact you shortly.');
          setFormData({ name: '', email: '', message: '' });
          e.target.reset();
        },
        error => alert('Transmission Failed. Please verify your connection.'),
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      className="relative py-20 md:py-32 px-4 md:px-6 bg-[#050505] overflow-hidden"
      id="contact"
    >
      {/* Background Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Aura */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet-600/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-violet-500" />
              <span className="text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">
                Connection // Portal
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              START A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 italic font-light">
                Conversation
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed uppercase tracking-widest border-l border-slate-700 pl-6 max-w-sm">
              Ready to architect the next generation of digital products? Drop a
              transmission below.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: INFORMATION (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10 md:space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                Node Details
              </h3>
              <div className="grid gap-px bg-slate-800/30 border border-slate-800/50">
                {[
                  {
                    icon: <Mail size={18} />,
                    label: 'Email',
                    value: 'ahmedrafsan101@gmail.com',
                    link: 'mailto:ahmedrafsan101@gmail.com',
                  },
                  {
                    icon: <Phone size={18} />,
                    label: 'Secure Line',
                    value: '+880 1887686535',
                    link: 'tel:+8801887686535',
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: 'Base Location',
                    value: 'Dhaka, Bangladesh',
                    link: '#',
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-[#050505] hover:bg-white/[0.03] transition-colors group"
                  >
                    <div className="text-slate-400 group-hover:text-violet-400 transition-colors shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      {' '}
                      {/* Text overflow protection */}
                      <p className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm md:text-base font-medium text-slate-200 group-hover:text-white transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">
                Digital Presence
              </p>
              <div className="flex gap-3 md:gap-4">
                {[
                  {
                    icon: <Github size={20} />,
                    link: 'https://github.com/Jabedhossain101',
                  },
                  {
                    icon: <Linkedin size={20} />,
                    link: 'https://www.linkedin.com/in/mdjabedhossain12/',
                  },
                  {
                    icon: <Facebook size={20} />,
                    link: 'https://www.facebook.com/mdjabedhossain27',
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 bg-white/[0.03] text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: TRANSMISSION FORM (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 p-6 md:p-12 relative shadow-2xl"
          >
            {/* Form Decoration - Hidden on very small screens to avoid overlap */}
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] hidden sm:block">
              <MessageSquare size={100} className="text-white" />
            </div>

            <form
              ref={form}
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6 md:space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    Identity
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Enter full name"
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-slate-700 text-white outline-none focus:border-violet-500 transition-all font-normal placeholder:text-slate-600 text-sm md:text-base"
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    Electronic Mail
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="email@example.com"
                    className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-slate-700 text-white outline-none focus:border-violet-500 transition-all font-normal placeholder:text-slate-600 text-sm md:text-base"
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                  Transmission Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Describe your vision or project inquiry..."
                  className="w-full px-0 py-3 md:py-4 bg-transparent border-b border-slate-700 text-white outline-none focus:border-violet-500 transition-all font-normal resize-none placeholder:text-slate-600 text-sm md:text-base"
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <motion.button
                disabled={isSending}
                whileHover={!isSending ? { gap: '24px' } : {}}
                type="submit"
                className="group flex items-center gap-4 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white pt-4 md:pt-8 disabled:opacity-50"
              >
                {isSending ? 'PROCESSING...' : 'INITIALIZE TRANSMISSION'}
                {isSending ? (
                  <Loader2 size={16} className="animate-spin text-violet-500" />
                ) : (
                  <ArrowUpRight
                    size={18}
                    className="text-violet-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Text - Hidden on mobile/tablet */}
      <div className="absolute left-10 bottom-10 hidden 2xl:block opacity-20">
        <p className="[writing-mode:vertical-lr] text-[10px] tracking-[1em] text-slate-400 uppercase font-black">
          COMMS // ENCRYPTED
        </p>
      </div>
    </section>
  );
};

export default Contact;
