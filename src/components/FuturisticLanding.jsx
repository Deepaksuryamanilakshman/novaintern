import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FuturisticLanding() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#0f172a_0%,#0b1220_40%,#031028_100%)] text-slate-100 antialiased">
      {/* Neon/glass navbar */}
      <header className="backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300 flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-black/90" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">NovaIntern — Future Internships</h1>
          </div>

          <nav className="flex items-center gap-4 text-sm text-slate-200/80">
            <a href="#how" className="px-3 py-2 rounded-md hover:bg-white/5">How it works</a>
            <a href="#tracks" className="px-3 py-2 rounded-md hover:bg-white/5">Tracks</a>
            <a href="#apply" className="px-3 py-2 rounded-md hover:bg-white/5">Apply</a>
            <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-white/5">Dashboard</Link>
            <Link to="/login" className="px-3 py-2 rounded-md hover:bg-white/5 bg-white/2">Login</Link>
            <Link to="/signup" className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-300 text-slate-900 font-semibold shadow-xl">Sign up</Link>
            <button className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold shadow-xl">Enroll ₹100</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="flex-1">
          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Build the <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-rose-300">next-gen</span> software portfolio
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl">Hands-on micro-internships curated for students — project-first, mentor-backed, and instantly certified. Pay only ₹100 and start building products, not tutorials.</p>

          <div className="mt-8 flex items-center gap-4">
            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-300 text-slate-900 font-semibold shadow-2xl transform hover:-translate-y-1 transition">Start Internship</button>
            <button className="px-5 py-3 rounded-2xl border border-white/10 text-slate-200/90">Explore Tracks</button>
          </div>

          {/* Floating badges */}
          <div className="mt-8 flex gap-4">
            <div className="p-3 rounded-xl bg-white/6 backdrop-blur-sm border border-white/6 shadow-inner">
              <p className="text-xs text-slate-300">Avg Completion</p>
              <p className="text-lg font-bold">2 weeks</p>
            </div>
            <div className="p-3 rounded-xl bg-white/6 backdrop-blur-sm border border-white/6 shadow-inner">
              <p className="text-xs text-slate-300">Certificates Issued</p>
              <p className="text-lg font-bold">12,345+</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="flex-1 flex justify-center">
          <div className="relative w-[380px] h-[420px] rounded-3xl bg-gradient-to-br from-white/6 to-white/3 border border-white/8 p-6 backdrop-blur-md shadow-2xl">
            {/* Mock 3D device / card */}
            <div className="absolute -right-8 -top-10 w-48 h-48 rounded-2xl bg-gradient-to-br from-violet-400/40 to-cyan-300/30 blur-3xl animate-blob" />

            <div className="absolute inset-4 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-300">Track</p>
                    <p className="font-semibold text-lg">AI & Edge Apps</p>
                  </div>
                  <div className="text-xs text-slate-300">₹100</div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-slate-300">Project</p>
                  <p className="font-medium">Build an onboard ML model for a mobile prototype</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center text-black font-bold">N</div>
                  <div>
                    <p className="text-sm font-semibold">Mentor: Dr. Priya</p>
                    <p className="text-xs text-slate-400">4.8 mentor rating</p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-900 font-semibold">Join</button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tracks - futuristic glass cards */}
      <section id="tracks" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-slate-100 mb-8">Choose a futuristic track</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[{title:'Edge AI',desc:'Deploy ML models on constrained devices.'},{title:'Web3 Dev',desc:'Build smart contracts & dApps.'},{title:'Fullstack Product',desc:'Ship full production features.'}].map((t,i)=> (
            <motion.div key={i} whileHover={{ y:-8 }} className="p-6 rounded-2xl bg-gradient-to-tr from-white/4 to-white/2 border border-white/6 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Track</p>
                  <p className="text-xl font-semibold">{t.title}</p>
                </div>
                <div className="text-sm text-slate-300">₹100</div>
              </div>
              <p className="mt-4 text-slate-300 text-sm">{t.desc}</p>

              <div className="mt-6 flex justify-between items-center">
                <div className="text-xs text-slate-400">Duration: 1-2 weeks</div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-300 text-slate-900 font-semibold">Enroll</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works timeline */}
      <section id="how" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center">Micro-internship flow</h3>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500 h-full opacity-60" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {step:'1',title:'Enroll',desc:'Secure your spot with ₹100.'},
              {step:'2',title:'Attend',desc:'Watch short onboard videos & tasks.'},
              {step:'3',title:'Build',desc:'Deliver a working project.'},
              {step:'4',title:'Certify',desc:'Instant verifiable certificate.'}
            ].map((s,i)=> (
              <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1*i}} className="p-6 bg-white/4 rounded-2xl border border-white/6 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 flex items-center justify-center font-bold text-slate-900">{s.step}</div>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-slate-300">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-white/6 py-8">
        <div className="max-w-7xl mx-auto px-6 text-slate-400 flex justify-between items-center">
          <p>© 2025 NovaIntern — internships for tomorrow</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
