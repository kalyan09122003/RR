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
    },
  ];

  const techStack = [
    { name: "Next.js", type: "Frontend", level: "Expert" },
    { name: "React", type: "Frontend", level: "Expert" },
    { name: "Node.js", type: "Backend", level: "Expert" },
    { name: "Python", type: "Backend", level: "Expert" },
    { name: "TypeScript", type: "Language", level: "Expert" },
    { name: "PostgreSQL", type: "Database", level: "Expert" },
    { name: "MongoDB", type: "Database", level: "Expert" },
    { name: "AWS", type: "Cloud", level: "Expert" },
    { name: "Firebase", type: "Platform", level: "Expert" },
    { name: "Vercel", type: "Deployment", level: "Expert" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStory((prev) => (prev + 1) % stories.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, stories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="bg-[#0A0A0F] text-white font-inter overflow-x-hidden">
      <Header activeLink="/studio" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute right-0 top-0 w-1/3 h-full opacity-10"
          style={{
            background: `linear-gradient(45deg, ${stories[currentStory]?.color || "#00D4FF"} 0%, transparent 50%)`,
            transform: `translateX(${scrollY * 0.1}px)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-16 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-center min-h-[70vh]">
            <div className="col-span-8">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <Code2 className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs tracking-widest">
                    VENTUREMOND STUDIO
                  </span>
                </div>

                <h1 className="text-7xl font-black leading-[0.9] tracking-tight">
                  VENTURE
                  <br />
                  <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    ENGINEERING
                  </span>
                </h1>

                <div className="w-32 h-[2px] bg-gradient-to-r from-[#00D4FF] to-transparent" />

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                  We engineer breakthrough products from concept to scale.
                  Full-stack development, strategic design, and growth execution
                  for founders who think big.
                </p>

                <div className="flex gap-6">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300"
                  >
                    START VENTURE
                  </a>
                  <button className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wider hover:bg-white/5 transition-all duration-300">
                    VIEW PORTFOLIO
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative">
                <div className="space-y-6">
                  <div className="text-xs tracking-widest text-gray-500">
                    CAPABILITIES
                  </div>
                  <div className="space-y-4">
                    {[
                      "Research & Validation",
                      "MVP Development",
                      "Product Design",
                      "Go-to-Market",
                    ].map((capability, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                        <div className="text-sm font-medium">{capability}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Story Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-16">
          <div className="mb-20">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              OUR PROCESS
            </div>
            <h2 className="text-5xl font-black">Strategic Storytelling</h2>
          </div>

          <div className="relative">
            {/* Story Display */}
            <div className="grid grid-cols-12 gap-16 items-center min-h-[600px]">
              <div className="col-span-7">
                <div className="space-y-12">
                  <div>
                    <div className="flex items-center gap-6 mb-8">
                      <div
                        className="text-8xl font-black opacity-20"
                        style={{ color: stories[currentStory].color }}
                      >
                        {stories[currentStory].phase}
                      </div>
                      <div className="space-y-2">
                        <div
                          className="text-xs tracking-widest font-bold"
                          style={{ color: stories[currentStory].color }}
                        >
                          {stories[currentStory].title}
                        </div>
                        <div className="text-2xl font-bold">
                          {stories[currentStory].subtitle}
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      {stories[currentStory].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {stories[currentStory].details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 group"
                      >
                        <div
                          className="w-1 h-1 rounded-full group-hover:w-4 group-hover:h-4 transition-all duration-300"
                          style={{
                            backgroundColor: stories[currentStory].color,
                          }}
                        />
                        <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                          {detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-5">
                <div className="relative">
                  {/* Visual Element */}
                  <div className="w-80 h-80 relative mx-auto">
                    <div
                      className="absolute inset-0 rounded-full opacity-20 blur-xl"
                      style={{ backgroundColor: stories[currentStory].color }}
                    />
                    <div className="absolute inset-8 border border-white/10 rounded-full backdrop-blur-sm" />
                    <div
                      className="absolute inset-16 border rounded-full"
                      style={{ borderColor: stories[currentStory].color }}
                    />
                    <div
                      className="absolute inset-24 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: stories[currentStory].color }}
                    >
                      <div className="text-6xl font-black text-black">
                        {stories[currentStory].phase}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Controls */}
            <div className="flex items-center justify-between mt-16">
              <div className="flex items-center gap-6">
                <button
                  onClick={prevStory}
                  className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>

                <button
                  onClick={nextStory}
                  className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentStory === index ? "bg-white w-8" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Tech Stack */}
      <section className="py-32 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-16">
          <div className="mb-16">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              TECHNOLOGY
            </div>
            <h2 className="text-5xl font-black">Modern Stack</h2>
          </div>

          <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
            {techStack.map((tech, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="min-w-[280px] h-48 p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#00D4FF]/50 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">{tech.name}</div>
                    <div className="text-xs px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] rounded-full">
                      {tech.type}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm text-gray-400">
                      Proficiency Level
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] transition-all duration-1000"
                        style={{
                          width: hoveredService === index ? "100%" : "90%",
                        }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">{tech.level}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div>
                  <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                    READY TO BUILD
                  </div>
                  <h2 className="text-5xl font-black leading-tight">
                    Let's Engineer
                    <br />
                    <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                      Your Future
                    </span>
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Transform your vision into a scalable venture. Strategic
                  engineering meets bold execution.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300"
                >
                  START YOUR VENTURE
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <div className="text-right space-y-6">
                <div className="text-6xl font-black text-white/10">STUDIO</div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">
                    48 Hour Prototypes
                  </div>
                  <div className="text-sm text-gray-400">
                    100+ Products Launched
                  </div>
                  <div className="text-sm text-gray-400">
                    12x Average Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-bold tracking-[0.2em] mb-2">
                VENTURE<span className="text-[#00D4FF]">MOND</span>
              </div>
              <div className="text-xs text-gray-500">
                Engineering bold futures
              </div>
            </div>

            <div className="flex gap-12">
              <a href="/studio" className="text-xs tracking-wider text-white">
                Studio
              </a>
              <a
                href="/saas"
                className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                SaaS
              </a>
              <a
                href="/insights"
                className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Insights
              </a>
              <a
                href="/careers"
                className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <div className="text-xs text-gray-600">
              © 2025 Venturemond. Engineering the future.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
