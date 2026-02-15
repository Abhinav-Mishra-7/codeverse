"use client";

// OPTION B — Premium Modern SaaS Landing Page
import { motion } from "framer-motion";
import { Link } from "react-router"; // For React Router. If Next.js → use next/link.

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
  viewport: { once: true },
});

export default function LandingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-hidden">

      {/* ===================================================================== */}
      {/* =============================== NAVBAR =============================== */}
      {/* ===================================================================== */}

      <header className="sticky top-0 z-50 bg-background/40 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="h-11 w-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-from to-primary-to shadow-lg shadow-primary-from/40"
            >
              <span className="font-bold text-button-text text-lg">CV</span>
            </motion.div>

            <div className="leading-tight">
              <p className="uppercase tracking-[0.25em] text-xs text-muted-foreground font-semibold">
                CodeVerse
              </p>
              <p className="text-[11px] text-muted-foreground/70">Competitive OS</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#ai" className="hover:text-foreground transition">AI Engine</a>
            <a href="#architecture" className="hover:text-foreground transition">Architecture</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden md:inline-block px-5 py-1.5 rounded-full border border-border/70 text-sm text-muted-foreground hover:text-foreground hover:border-primary-from transition"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-primary-from to-primary-to text-button-text shadow-md shadow-primary-from/40 text-sm font-semibold hover:-translate-y-[2px] transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>


      {/* ===================================================================== */}
      {/* ================================ HERO ================================ */}
      {/* ===================================================================== */}

      <section className="relative overflow-hidden pt-24 pb-32">

        {/* Spotlight Background */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-from/25 blur-[180px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-primary-to/20 blur-[200px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

          {/* ---------------- HERO TEXT ---------------- */}
          <motion.div
            {...fade(0)}
            className="flex-1 space-y-7"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              The future of{" "}
              <span className="bg-gradient-to-r from-primary-from via-primary-to to-primary-from bg-clip-text text-transparent">
                coding education
              </span>{" "}
              is here.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              A next-generation competitive programming platform engineered for
              precision, speed, real-time collaboration, and AI-assisted
              problem-solving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/signup"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-primary-from to-primary-to text-button-text shadow-xl shadow-primary-from/40 text-base font-semibold hover:-translate-y-1 transition"
              >
                Start For Free →
              </Link>
              <a
                href="#features"
                className="px-7 py-3 rounded-full border border-border/70 bg-background/40 text-sm text-muted-foreground hover:border-primary-from hover:text-foreground transition"
              >
                Explore Features
              </a>
            </div>

            <div className="pt-4 text-sm text-muted-foreground flex flex-wrap gap-4">
              <span>🚀 0.7s interactive load</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
              <span>🧪 10k+ problems</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
              <span>⚡ 1M+ submissions/day</span>
            </div>
          </motion.div>


          {/* ---------------- HERO EDITOR MOCK ---------------- */}
          <motion.div
            {...fade(0.1)}
            className="flex-1 w-full max-w-lg"
          >
            <div className="rounded-2xl bg-card/90 border border-border/60 shadow-2xl shadow-black/50 p-5 backdrop-blur-xl">

              {/* Fake header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <p className="text-[13px] text-muted-foreground">main.cpp</p>
              </div>

              {/* Fake Code */}
              <pre className="bg-[#141118] border border-border/60 rounded-xl p-4 text-[13px] text-slate-200 leading-relaxed overflow-auto max-h-64">
{`// CodeVerse AI-Optimized Sandbox
#include <bits/stdc++.h>
using namespace std;
int main(){
  long n; cin >> n;
  vector<long>a(n);
  for(long i=0;i<n;i++) cin>>a[i];
  sort(a.begin(),a.end());
  cout<<a[n/2];
}`}
              </pre>

              {/* Verdict */}
              <div className="grid grid-cols-3 gap-3 mt-4 text-[12px]">
                <div className="bg-background/40 p-2 rounded-lg">
                  <p className="text-muted-foreground text-[10px] uppercase">Verdict</p>
                  <p className="text-emerald-400 font-semibold">Accepted</p>
                </div>
                <div className="bg-background/40 p-2 rounded-lg">
                  <p className="text-muted-foreground text-[10px] uppercase">Runtime</p>
                  <p className="text-foreground font-semibold">0.18s</p>
                </div>
                <div className="bg-background/40 p-2 rounded-lg">
                  <p className="text-muted-foreground text-[10px] uppercase">Score</p>
                  <p className="text-primary-from font-semibold">+100</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ===================================================================== */}
      {/* ============================= FEATURES =============================== */}
      {/* ===================================================================== */}

      <section id="features" className="py-24 bg-background/60 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            {...fade()}
            className="text-3xl md:text-5xl font-semibold text-center"
          >
            Powerful tools for{" "}
            <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
              unstoppable developers
            </span>
          </motion.h2>

          <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Engineered from scratch for performance, collaboration, and AI-powered productivity.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {[
              {
                icon: "⚡",
                title: "Ultra-fast Judge Engine",
                text: "Gzipped APIs (80% lighter), optimized DB indexes, and instant verdict streaming.",
              },
              {
                icon: "🤖",
                title: "AI Code Assistant",
                text: "Gemini-powered debugging, explanations, refactoring, and auto-test generation.",
              },
              {
                icon: "💬",
                title: "Live Contest Rooms",
                text: "Real-time leaderboards, chatrooms, and editorial updates—all socket-powered.",
              },
              {
                icon: "🔐",
                title: "Enterprise Security",
                text: "JWT, rate limits, Redis blacklist, hashed passwords, and secure cookies.",
              },
              {
                icon: "📊",
                title: "Team Analytics",
                text: "Real-time dashboards, weekly reports, and skill progression using Redash.",
              },
              {
                icon: "💎",
                title: "Premium Pro Mode",
                text: "Unlimited AI tokens, custom testcases, private problem banks, and more.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                {...fade(0.05 + i * 0.05)}
                className="p-6 rounded-2xl border border-border/50 bg-card/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.text}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* ===================================================================== */}
      {/* =============================== AI DEMO =============================== */}
      {/* ===================================================================== */}

      <section id="ai" className="py-24 border-t border-border/40 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          
          <motion.h2 {...fade()} className="text-3xl md:text-5xl font-semibold text-center">
            AI that upgrades{" "}
            <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
              your coding superpowers.
            </span>
          </motion.h2>

          <p className="text-center text-muted-foreground max-w-xl mx-auto mt-4">
            Token-by-token streaming responses. Deep reasoning. Auto-detection of mistakes.
          </p>

          <motion.div
            {...fade(0.1)}
            className="mt-16 rounded-2xl bg-background/70 border border-border/50 p-6 shadow-xl shadow-black/40"
          >
            <p className="text-[13px] font-medium text-muted-foreground mb-4">AI Chat Demo</p>

            <div className="bg-[#141118] text-[13px] text-slate-200 rounded-xl p-5 border border-border/50 shadow-inner">
{`User: Why is my code failing for edge cases?

AI:
Let's examine your logic...

1. You're sorting the array — correct.
2. But for an even-length input, you're selecting a[n/2] instead of the lower median.
3. Try using a[(n-1)/2] to make it consistent.`}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ===================================================================== */}
      {/* ========================== ARCHITECTURE =============================== */}
      {/* ===================================================================== */}

      <section id="architecture" className="py-24 border-t border-border/40 bg-background/70">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2 {...fade()} className="text-3xl md:text-5xl font-semibold text-center">
            A rock-solid foundation{" "}
            <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
              built for scale.
            </span>
          </motion.h2>

          <p className="max-w-2xl mx-auto text-center text-muted-foreground mt-3">
            A fully tuned stack ready for 1M daily executions, 100k live users,
            and enterprise-level reliability.
          </p>


          <div className="mt-16 grid lg:grid-cols-2 gap-10">

            <motion.div
              {...fade(0)}
              className="rounded-2xl bg-card/80 border border-border/50 p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• React 18 + Vite super-fast dev server</li>
                <li>• Tailwind + Motion for smooth animations</li>
                <li>• Editor powered by Monaco-like components</li>
                <li>• Route-based lazy loading</li>
              </ul>
            </motion.div>

            <motion.div
              {...fade(0.1)}
              className="rounded-2xl bg-card/80 border border-border/50 p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Node.js + Express microservices</li>
                <li>• MongoDB Atlas + Redis hot caching</li>
                <li>• Judge0 integration w/ sandbox limits</li>
                <li>• Razorpay secure billing</li>
              </ul>
            </motion.div>

            <motion.div
              {...fade(0.15)}
              className="rounded-2xl bg-card/80 border border-border/50 p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Real-time Layer</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Socket.IO for leaderboard + chat</li>
                <li>• SSE for AI streaming</li>
                <li>• Zero refresh contest room updates</li>
              </ul>
            </motion.div>

            <motion.div
              {...fade(0.2)}
              className="rounded-2xl bg-card/80 border border-border/50 p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• JWT + secure cookies</li>
                <li>• Redis blacklist for logout safety</li>
                <li>• Rate limits per endpoint</li>
                <li>• Hashed passwords + input validation</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ===================================================================== */}
      {/* =============================== PRICING =============================== */}
      {/* ===================================================================== */}

      <section id="pricing" className="py-24 border-t border-border/40 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            {...fade()}
            className="text-3xl md:text-5xl font-semibold text-center"
          >
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-primary-from to-primary-to bg-clip-text text-transparent">
              pricing.
            </span>
          </motion.h2>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-3">
            Start free. Upgrade anytime. No hidden fees.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {/* Free */}
            <motion.div
              {...fade(0)}
              className="p-8 rounded-2xl border border-border/50 bg-background/60 shadow-lg shadow-black/20"
            >
              <h3 className="text-xl font-semibold">Developer</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Perfect for individuals.
              </p>

              <div className="mt-6 text-4xl font-bold">$0</div>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Unlimited problems</li>
                <li>• Public contests</li>
                <li>• Basic AI assistant</li>
                <li>• Judge0 execution</li>
              </ul>

              <Link
                to="/signup"
                className="mt-7 block w-full text-center rounded-full bg-gradient-to-r from-primary-from to-primary-to py-2.5 font-semibold text-button-text shadow-lg hover:-translate-y-1 transition"
              >
                Get Started Free
              </Link>
            </motion.div>

            {/* Teams */}
            <motion.div
              {...fade(0.1)}
              className="p-8 rounded-2xl border border-border/50 bg-background/70 shadow-lg"
            >
              <h3 className="text-xl font-semibold">Teams & Universities</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                For clubs, bootcamps, and institutions.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>• Private contests</li>
                <li>• Internal problem banks</li>
                <li>• Advanced analytics</li>
                <li>• SSO • Org-wide leaderboards</li>
              </ul>

              <a
                href="#"
                className="mt-7 block w-full text-center rounded-full border border-border/60 py-2.5 font-semibold hover:border-primary-from transition"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ===================================================================== */}
      {/* ================================ FOOTER =============================== */}
      {/* ===================================================================== */}

      <footer className="py-10 border-t border-border/40 bg-background/80 text-muted-foreground text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} CodeVerse. Built for speed & scale.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Docs</a>
            <a href="#" className="hover:text-foreground">Status</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </footer>

    </main>
  );
}