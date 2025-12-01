"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Zap,
  ArrowDown,
  Circle,
  Triangle,
  Square,
  Star,
  Hexagon,
  Shield,
  ArrowRight,
  Lock,
  Brain,
  Target,
  Lightbulb,
  RefreshCw,
  Layers,
} from "lucide-react";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDivision, setActiveDivision] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(scrolled / maxScroll);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDivision((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0A0A0F] text-white font-inter overflow-x-hidden">
      <Header activeLink="/" />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <Circle
          className="absolute w-2 h-2 text-[#00D4FF]/30"
          style={{
            left: `${mousePosition.x * 0.001}%`,
            top: `${20 + mousePosition.y * 0.01}%`,
            transform: `rotate(${scrollProgress * 360}deg)`,
          }}
        />
        <Triangle
          className="absolute w-3 h-3 text-[#8B5CF6]/20"
          style={{
            right: `${mousePosition.x * 0.002}%`,
            top: `${40 + mousePosition.y * 0.005}%`,
            transform: `rotate(${-scrollProgress * 180}deg)`,
          }}
        />
        <Square
          className="absolute w-4 h-4 text-[#EC4899]/15"
          style={{
            left: `${80 - mousePosition.x * 0.001}%`,
            bottom: `${30 + mousePosition.y * 0.01}%`,
            transform: `rotate(${scrollProgress * 270}deg)`,
          }}
        />
      </div>

      {/* Experimental Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Side Typography */}
        <div className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center z-20">
          <div className="text-xs tracking-[0.3em] text-gray-500 font-light">
            VENTURE MOND
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full max-w-7xl mx-auto px-6 pt-24 md:px-16 md:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column - Main Headline */}
            <div className="col-span-1 md:col-span-7">
              <div className="space-y-8">
                <div className="overflow-hidden">
                  <h1 className="text-5xl md:text-[5.5rem] font-black leading-[0.9] tracking-tight">
                    <div className="translate-y-0 animate-slideUp">BOLD</div>
                    <div
                      className="translate-y-0 animate-slideUp"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                        IDEAS
                      </span>
                    </div>
                    <div
                      className="translate-y-0 animate-slideUp"
                      style={{ animationDelay: "0.2s" }}
                    >
                      TO
                    </div>
                    <div
                      className="translate-y-0 animate-slideUp"
                      style={{ animationDelay: "0.3s" }}
                    >
                      SCALE
                    </div>
                  </h1>
                </div>

                <div className="w-24 h-[2px] bg-gradient-to-r from-[#00D4FF] to-transparent" />

                <p className="text-lg text-gray-300 max-w-md leading-relaxed font-light">
                  Venturemond builds and scales the next generation of ventures and software products
                  combining product strategy, design, and engineering to turn bold ideas into scalable realities.
                </p>
              </div>
            </div>

            {/* Right Column - Interactive Metrics */}
            <div className="col-span-1 md:col-span-5 relative mt-12 md:mt-0">
              <div className="space-y-12">
                <div className="relative">
                  <div className="text-6xl font-black text-white/10">01</div>
                  <div className="absolute top-0 left-16">
                    <div className="text-2xl font-bold text-[#00D4FF]">48H</div>
                    <div className="text-sm text-gray-400">
                      Idea to Prototype
                    </div>
                  </div>
                </div>

                <div className="relative ml-12">
                  <div className="text-6xl font-black text-white/10">02</div>
                  <div className="absolute top-0 left-16">
                    <div className="text-2xl font-bold text-[#8B5CF6]">
                      100+
                    </div>
                    <div className="text-sm text-gray-400">
                      Products Launched
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="text-6xl font-black text-white/10">03</div>
                  <div className="absolute top-0 left-16">
                    <div className="text-2xl font-bold text-[#EC4899]">12X</div>
                    <div className="text-sm text-gray-400">Average Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="text-xs tracking-widest text-gray-500">EXPLORE</div>
            <ArrowDown className="w-4 h-4 text-[#00D4FF] animate-bounce" />
          </div>
        </div>

        {/* Background Gradient Effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #00D4FF 0%, transparent 50%)`,
          }}
        />
      </section>

      {/* Floating Division Showcase */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-12 md:mb-24">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              TWO DIVISIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-black">ONE MISSION</h2>
          </div>

          <div className="relative h-auto md:h-[600px] flex flex-col md:block gap-8">
            {/* Studio Division */}
            <div
              className={`relative md:absolute w-full md:w-[500px] h-[400px] transition-all duration-1000 ${activeDivision === 0
                ? "md:left-0 md:top-0 z-20"
                : "md:left-1/4 md:top-20 z-10"
                }`}
            >
              <div className="relative h-full p-8 md:p-12 bg-gradient-to-br from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 backdrop-blur-xl">
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-[#00D4FF]" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs tracking-widest text-[#00D4FF] mb-2">
                      STUDIO
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      Venture Engineering
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      End-to-end product development from research and
                      validation to MVP engineering and go-to-market execution.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-500">
                      Research & Validation
                    </div>
                    <div className="text-xs text-gray-500">MVP Development</div>
                    <div className="text-xs text-gray-500">
                      Full-Stack Engineering
                    </div>
                    <div className="text-xs text-gray-500">GTM Strategy</div>
                  </div>

                  <a
                    href="/studio"
                    className="inline-flex items-center gap-2 text-[#00D4FF] text-sm font-medium group"
                  >
                    Explore Studio
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* SaaS Division */}
            <div
              className={`relative md:absolute w-full md:w-[500px] h-[400px] transition-all duration-1000 ${activeDivision === 1
                ? "md:right-0 md:top-0 z-20"
                : "md:right-1/4 md:top-20 z-10"
                }`}
            >
              <div className="relative h-full p-8 md:p-12 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/20 backdrop-blur-xl">
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-[#8B5CF6]" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs tracking-widest text-[#8B5CF6] mb-2">
                      SAAS
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      Intelligent Software
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Privacy-first, scalable business tools that combine
                      collaboration, automation, and secure cloud architecture.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-500">
                      Venturemond Workspace
                    </div>
                    <div className="text-xs text-gray-500">
                      Private Collaboration
                    </div>
                    <div className="text-xs text-gray-500">
                      Intelligent Automation
                    </div>
                    <div className="text-xs text-gray-500">
                      Secure Architecture
                    </div>
                  </div>

                  <a
                    href="/saas"
                    className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-medium group"
                  >
                    Explore SaaS
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 gap-3">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveDivision(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeDivision === index ? "bg-white" : "bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venturemond Workspace Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <div>
                <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                  WORKSPACE
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  Private. <br />
                  <span className="text-gray-500">Smart.</span> <br />
                  <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    Seamless.
                  </span>
                </h2>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Venturemond Workspace is a private, intelligent workspace for teams that value privacy,
                performance, and productivity. It combines collaboration, automation, and secure cloud
                infrastructure into a single modern platform.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/waitlist" className="px-8 py-4 bg-white text-black font-bold text-sm tracking-wider hover:scale-105 transition-transform duration-300">
                  JOIN WAITLIST
                </a>
                <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wider hover:bg-white/5 transition-colors">
                  REQUEST ACCESS
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/20 via-[#8B5CF6]/20 to-[#EC4899]/20 blur-3xl rounded-full opacity-50" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 space-y-6">
                {[
                  { text: "Secure cloud collaboration", icon: Shield, color: "text-[#00D4FF]" },
                  { text: "Integrated productivity tools", icon: Zap, color: "text-[#8B5CF6]" },
                  { text: "Workflow automation", icon: Sparkles, color: "text-[#EC4899]" },
                  { text: "Role-based access control", icon: Lock, color: "text-[#00D4FF]" },
                  { text: "API & integration ready", icon: Code2, color: "text-[#8B5CF6]" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className={`p-2 rounded-lg bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Process Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-16 md:mb-24 text-center">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-6">
              METHODOLOGY
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl mx-auto">
              A simple, structured approach to <br />
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                building success.
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#00D4FF]/20 via-[#8B5CF6]/20 to-[#EC4899]/20 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "Understand your goals and challenges.",
                  color: "group-hover:text-[#00D4FF]",
                  bg: "group-hover:bg-[#00D4FF]/10",
                  border: "group-hover:border-[#00D4FF]/50",
                },
                {
                  step: "02",
                  title: "Validate",
                  desc: "Confirm opportunity and market fit.",
                  color: "group-hover:text-[#8B5CF6]",
                  bg: "group-hover:bg-[#8B5CF6]/10",
                  border: "group-hover:border-[#8B5CF6]/50",
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "Design and develop the product.",
                  color: "group-hover:text-[#EC4899]",
                  bg: "group-hover:bg-[#EC4899]/10",
                  border: "group-hover:border-[#EC4899]/50",
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "Execute your go-to-market plan.",
                  color: "group-hover:text-[#00D4FF]",
                  bg: "group-hover:bg-[#00D4FF]/10",
                  border: "group-hover:border-[#00D4FF]/50",
                },
                {
                  step: "05",
                  title: "Scale",
                  desc: "Optimize, iterate, and grow.",
                  color: "group-hover:text-[#8B5CF6]",
                  bg: "group-hover:bg-[#8B5CF6]/10",
                  border: "group-hover:border-[#8B5CF6]/50",
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className={`h-full p-6 bg-[#0A0A0F] border border-white/5 rounded-2xl transition-all duration-300 ${item.border} ${item.bg} hover:-translate-y-2`}>
                    <div className="text-4xl font-black text-white/5 mb-4 group-hover:text-white/10 transition-colors">
                      {item.step}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors ${item.color}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connector Dot */}
                  <div className="hidden md:block absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-white/10 -translate-y-1/2 z-20 group-hover:bg-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm tracking-widest hover:scale-105 transition-transform duration-300 rounded-full"
            >
              START A PROJECT
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Founders Choose Venturemond Section */}
      <section className="relative py-24 bg-[#0A0A0F] overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-2xl mb-8 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6">
              Why Founders Choose <br />
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Venturemond
              </span>
            </h2>
          </div>

          <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
            {[
              {
                title: "Full-Stack Execution",
                desc: "From strategy to development everything in house.",
                icon: Layers,
                color: "text-[#00D4FF]",
                bg: "bg-[#00D4FF]/10",
              },
              {
                title: "Founder-Led Thinking",
                desc: "We think like co-builders, not vendors.",
                icon: Brain,
                color: "text-[#EC4899]",
                bg: "bg-[#EC4899]/10",
              },
              {
                title: "Outcome Focused",
                desc: "Each project ties to measurable results.",
                icon: Target,
                color: "text-[#8B5CF6]",
                bg: "bg-[#8B5CF6]/10",
              },
              {
                title: "Scalable Systems",
                desc: "We build for long-term growth.",
                icon: Lightbulb,
                color: "text-yellow-400",
                bg: "bg-yellow-400/10",
              },
              {
                title: "Speed + Precision",
                desc: "Rapid execution without compromise.",
                icon: RefreshCw,
                color: "text-[#10B981]",
                bg: "bg-[#10B981]/10",
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-8 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed md:text-right">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric CTA Section */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
            <div className="col-span-1 md:col-span-2">
              <div className="space-y-8">
                <div>
                  <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                    READY TO BEGIN
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black leading-tight">
                    Let's Engineer
                    <br />
                    <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                      Your Vision
                    </span>
                  </h2>
                </div>

                <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                  Transform your boldest ideas into scalable products through
                  strategic engineering and design excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300 text-center"
                  >
                    START PROJECT
                  </a>
                  <a
                    href="/insights"
                    className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wider hover:bg-white/5 transition-all duration-300 text-center"
                  >
                    VIEW INSIGHTS
                  </a>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20 rounded-full blur-xl" />
                <div className="absolute inset-8 border border-white/10 rounded-full backdrop-blur-sm" />
                <div className="absolute inset-16 border border-[#00D4FF]/30 rounded-full" />
                <div className="absolute inset-24 bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] rounded-full flex items-center justify-center">
                  <Zap className="w-12 h-12 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <Footer />

      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          transform: translateY(100%);
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
