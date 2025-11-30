"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Target,
  Rocket,
  BarChart3,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "../components/Header";

export default function StudioPage() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  const stories = [
    {
      phase: "01",
      title: "RESEARCH & VALIDATION",
      subtitle: "Deep Market Intelligence",
      description:
        "We dive deep into market dynamics, user behaviors, and competitive landscapes to validate your vision before a single line of code is written.",
      color: "#00D4FF",
      details: [
        "Competitive Analysis & Market Sizing",
        "User Interview & Behavioral Research",
        "Product-Market Fit Validation",
        "Technical Feasibility Assessment",
      ],
      metrics: [
        { label: "Interviews", value: "50+" },
        { label: "Markets", value: "10+" },
      ],
    },
    {
      phase: "02",
      title: "MVP DEVELOPMENT",
      subtitle: "Rapid Prototyping",
      description:
        "From concept to functional prototype in weeks, not months. We build core features that prove your value proposition in the real world.",
      color: "#0EA5E9",
      details: [
        "Rapid Prototyping & Wireframing",
        "Full-Stack Development",
        "API Architecture & Database Design",
        "Core Feature Implementation",
      ],
      metrics: [
        { label: "Prototypes", value: "48h" },
        { label: "Sprints", value: "2-4" },
      ],
    },
    {
      phase: "03",
      title: "PRODUCT DESIGN",
      subtitle: "User-Centric Experiences",
      description:
        "Beautiful, intuitive interfaces that users love to use. We design for humans first, technology second.",
      color: "#8B5CF6",
      details: [
        "UI/UX Design & User Journey Mapping",
        "Design System Development",
        "Interactive Prototyping",
        "Usability Testing & Optimization",
      ],
      metrics: [
        { label: "Design Sprints", value: "2" },
        { label: "Usability Tests", value: "10+" },
      ],
    },
    {
      phase: "04",
      title: "GO-TO-MARKET",
      subtitle: "Strategic Launch",
      description:
        "Launch strategically with data-driven growth plans. We don't just build products, we ensure they reach the right users.",
      color: "#EC4899",
      details: [
        "Launch Strategy & Market Positioning",
        "Growth Experimentation",
        "Analytics Implementation",
        "Performance Optimization",
      ],
      metrics: [
        { label: "Channels", value: "SEO,PPC,PR" },
        { label: "Growth Experiments", value: "5+" },
      ],
    },
  ];

  const techStack = [
    { name: "Next.js", type: "Frontend", desc: "SSR + static" },
    { name: "React", type: "Frontend", desc: "UI + state" },
    { name: "Node.js", type: "Backend", desc: "API servers" },
    { name: "Python", type: "Backend", desc: "ML & workers" },
    { name: "TypeScript", type: "Language", desc: "Type safety" },
    { name: "PostgreSQL", type: "Database", desc: "Relational" },
    { name: "MongoDB", type: "Database", desc: "Document store" },
    { name: "AWS", type: "Cloud", desc: "Infra & services" },
    { name: "Firebase", type: "Platform", desc: "Auth & realtime" },
    { name: "Vercel", type: "Deployment", desc: "Hosting" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // auto-play stories
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, stories.length]);

  const goPrev = () => setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  const goNext = () => setCurrentStory((prev) => (prev + 1) % stories.length);
  const togglePlay = () => setIsPlaying((p) => !p);

  // convenience
  const active = stories[currentStory];

  return (
    <div className="bg-[#0A0A0F] text-white font-inter overflow-x-hidden">
      <Header activeLink="/studio" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00D4FF]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="col-span-1 lg:col-span-7">
              <div className="space-y-8 lg:space-y-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <Lightbulb className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs tracking-widest">VENTURE STUDIO</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                  WE BUILD
                  <br />
                  <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                    UNICORNS
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                  A new breed of venture studio. We combine capital, engineering,
                  and design to build category-defining companies from scratch.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white text-black font-bold text-sm tracking-wider hover:bg-gray-200 transition-colors"
                  >
                    START A VENTURE
                  </a>
                  <button className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wider hover:bg-white/5 transition-all duration-300">
                    VIEW PORTFOLIO
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-5 hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-square relative">
                  <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-16 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket className="w-24 h-24 text-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Story */}
      <section className="py-32 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">OUR PROCESS</div>
            <h2 className="text-4xl lg:text-6xl font-black">From Zero to One</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-[600px]">
            <div className="col-span-1 lg:col-span-5 order-2 lg:order-1">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="text-6xl lg:text-8xl font-black text-white/5">{active.phase}</div>
                  <h3 className="text-3xl lg:text-4xl font-bold">{active.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{active.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {active.metrics?.map((metric, idx) => (
                    <div key={idx} className="p-4 bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-[#00D4FF]">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-16">
                  <div className="flex gap-2">
                    {stories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentStory(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentStory === idx ? "bg-[#00D4FF]" : "bg-white/20"}`}
                        aria-label={`Go to step ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button onClick={goPrev} className="p-3 border border-white/10 hover:bg-white/5 rounded-full transition-all" aria-label="Previous">
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button onClick={goNext} className="p-3 border border-white/10 hover:bg-white/5 rounded-full transition-all" aria-label="Next">
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <button onClick={togglePlay} className="p-3 border border-white/10 hover:bg-white/5 rounded-full transition-all" aria-label={isPlaying ? "Pause" : "Play"}>
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[400px] lg:h-[600px] bg-gradient-to-br from-[#00D4FF]/5 to-[#8B5CF6]/5 border border-white/10 rounded-3xl overflow-hidden p-8 lg:p-12">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                      <Code2 className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <div className="px-4 py-2 bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-bold rounded-full">ACTIVE PHASE</div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-2">{active.subtitle}</h3>
                    <p className="text-gray-300">{active.description}</p>

                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {active.details.map((d, i) => (
                        <li key={i} className="text-sm text-gray-300">• {d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="text-sm text-gray-400">{active.phase} • {active.title}</div>
                    <div className="flex gap-2">
                      <button className="px-3 py-2 bg-white/5 rounded text-sm">Learn More</button>
                      <a href="/contact" className="px-3 py-2 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black rounded text-sm font-semibold">Work with us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Stack - Horizontal Scroll */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-8">Built With Speed</h2>
          <p className="text-gray-400 max-w-2xl">We use a modern, opinionated stack to ship products in weeks, not months.</p>
        </div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

          <div className="flex gap-6 pb-4 overflow-x-auto px-6 lg:px-16 no-scrollbar">
            {techStack.map((tech, idx) => (
              <div key={idx} className="min-w-[240px] h-48 p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#00D4FF]/50 transition-all duration-300 flex-shrink-0">
                <div className="text-lg font-bold mb-2">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.type}</div>
                <div className="text-xs text-gray-500 mt-2">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div>
                  <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">READY TO BUILD</div>
                  <h2 className="text-4xl md:text-5xl font-black leading-tight">
                    Let's Engineer
                    <br />
                    <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">Your Future</span>
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">Transform your vision into a scalable venture. Strategic engineering meets bold execution.</p>

                <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-sm tracking-wider hover:shadow-lg transition-all duration-300">
                  START YOUR VENTURE
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <div className="text-right space-y-6">
                <div className="text-4xl md:text-6xl font-black text-white/10">STUDIO</div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">48 Hour Prototypes</div>
                  <div className="text-sm text-gray-400">100+ Products Launched</div>
                  <div className="text-sm text-gray-400">12x Average Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-center flex-col md:flex-row gap-8 md:gap-0">
            <div>
              <div className="text-sm font-bold tracking-[0.2em] mb-2 text-center md:text-left">VENTURE<span className="text-[#00D4FF]">MOND</span></div>
              <div className="text-xs text-gray-500 text-center md:text-left">Building the future, one venture at a time.</div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <a href="/studio" className="text-xs tracking-wider text-white">Studio</a>
              <a href="/saas" className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors">SaaS</a>
              <a href="/insights" className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors">Insights</a>
              <a href="/careers" className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors">Careers</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <div className="text-xs text-gray-600">© 2025 Venturemond. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
