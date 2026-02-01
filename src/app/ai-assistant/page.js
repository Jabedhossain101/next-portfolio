'use client';
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Terminal,
  Cpu,
  Activity,
  Zap,
} from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function AIAssistant() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 pt-32 pb-10 px-6 flex flex-col items-center selection:bg-cyan-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full" />
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
          <Activity size={12} className="animate-pulse" /> Neural Network Active
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 tracking-tighter">
          Talk to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Assistant
          </span>
        </h1>
        <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl mx-auto uppercase tracking-widest">
          Expertise: MERN Stack • AI Solutions • Web Engineering
        </p>
      </motion.div>

      {/* Main Interface */}
      <div className="w-full max-w-5xl relative z-10 grid lg:grid-cols-4 gap-6 h-[700px]">
        {/* Sidebar Panel (Stats) */}
        <div className="hidden lg:flex flex-col gap-4 col-span-1">
          <div className="p-6 bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2">
              <Cpu size={14} /> System Status
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>Latency</span>
                  <span className="text-cyan-400">24ms</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '40%' }}
                    className="h-full bg-cyan-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>Logic Depth</span>
                  <span className="text-blue-400">98%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-[2rem] italic text-xs text-slate-400 leading-relaxed">
            "I'm trained on Jabed's portfolio, specializing in providing
            insights on his development workflow and the AlgoWave ecosystem."
          </div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-3 bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="px-8 py-5 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-xs font-black uppercase tracking-widest text-white">
                Jabed_Bot_v4.0
              </span>
            </div>
            <Terminal size={16} className="text-slate-500" />
          </div>

          {/* Messages container */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide"
          >
            <AnimatePresence>
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-4"
                >
                  <div className="p-5 bg-white/5 rounded-full text-cyan-400 border border-white/10">
                    <Zap size={32} />
                  </div>
                  <p className="text-slate-500 text-sm italic font-medium">
                    Initialization Complete. Standing by for queries...
                  </p>
                </motion.div>
              )}
              {messages.map(m => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 shadow-xl ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-cyan-400'}`}
                    >
                      {m.role === 'user' ? (
                        <User size={18} />
                      ) : (
                        <Bot size={18} />
                      )}
                    </div>
                    <div
                      className={`p-5 rounded-3xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)]' : 'bg-white/5 border border-white/5 text-slate-200'}`}
                    >
                      {m.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex gap-4 items-center text-cyan-400/50 text-[10px] font-black uppercase tracking-[0.3em]">
                <Activity size={14} className="animate-spin" /> Thinking...
              </div>
            )}
          </div>

          {/* Input Interface */}
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-black/40 border-t border-white/5"
          >
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Query Jabed's digital brain..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/40 focus:bg-white/10 transition-all text-sm font-medium pr-20"
              />
              <button
                type="submit"
                disabled={isLoading || !input}
                className="absolute right-3 p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-50 disabled:scale-100"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="mt-10 opacity-30 text-[10px] font-bold uppercase tracking-[0.5em]">
        Neural Core v4.0.2 // Secured by AES-256
      </footer>
    </div>
  );
}
