import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Briefcase, Award, User, PlusCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-[linear-gradient(135deg,#0f172a_0%,#0b1220_40%,#031028_100%)] text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-extrabold mb-8 text-cyan-300">NovaIntern</h1>
          <nav className="space-y-3">
            {[
              { icon: LayoutDashboard, label: "Dashboard" },
              { icon: Briefcase, label: "Internships" },
              { icon: Award, label: "Certificates" },
              { icon: User, label: "Profile" },
            ].map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition"
              >
                <item.icon className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <button className="w-full mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-300 text-slate-900 font-semibold shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1 transition">
          <PlusCircle className="w-4 h-4" /> Enroll New
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          Welcome Back 👋
        </motion.h2>

        {/* Ongoing Internships */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Ongoing Internships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
              >
                <p className="text-sm text-slate-400">Track</p>
                <p className="font-semibold text-lg">AI & Edge Apps</p>
                <p className="text-xs text-slate-400 mt-1">Mentor: Dr. Priya</p>

                <div className="mt-4">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Progress: 65%</p>
                </div>

                <button className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold shadow-xl">
                  Continue
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Completed Internships */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-emerald-300">Completed Internships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
              >
                <p className="text-sm text-slate-400">Track</p>
                <p className="font-semibold text-lg">Web3 Developer</p>
                <p className="text-xs text-slate-400 mt-1">Mentor: Mr. Kiran</p>

                <div className="mt-4 text-sm text-slate-400">
                  Completed: <span className="text-slate-200 font-semibold">Sep 2025</span>
                </div>

                <button className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-300 text-slate-900 font-semibold shadow-xl">
                  View Certificate
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
