import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#0f172a_0%,#0b1220_40%,#031028_100%)] text-slate-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300 flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-black/90" />
          </div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold shadow-xl transform hover:-translate-y-1 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="text-sm text-rose-400 mt-4">{error}</p>}

        <p className="text-center text-sm text-slate-400 mt-4">
          New here?{" "}
          <a href="/signup" className="text-cyan-400 hover:underline">
            Create an account
          </a>
        </p>
      </motion.div>
    </div>
  );
}
