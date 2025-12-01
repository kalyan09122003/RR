"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Shield,
  Zap,
  Brain,
  Lock,
  Globe,
  Users,
  BarChart3,
  Cloud,
  Monitor,
  Smartphone,
  Command,
  Link,
  Search,
  Compass,
  Code,
  Rocket,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SaasPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);

  const features = [
    {
      title: "Intelligent Architecture",
      description: "Every system is designed for automation, analytics, and adaptability.",
      color: "#00D4FF",
      icon: Brain,
      preview: "Self-optimizing systems",
    },
    {
      title: "Privacy by Design",
      description: "Your data stays secure — always.",
      color: "#8B5CF6",
      icon: Lock,
      preview: "Zero-knowledge encryption",
    },
    {
      title: "Cloud-Native Scalability",
      description: "Optimized for global performance and uptime.",
      color: "#EC4899",
      icon: Cloud,
      preview: "99.99% Uptime SLA",
    },
    {
      title: "Experience-Led Design",
      description: "Modern, minimal, and intuitive interfaces.",
      color: "#10B981",
      icon: Monitor,
      preview: "User-centric interfaces",
    },
    {
      title: "Seamless Integrations",
      description: "Works with the tools your business already uses.",
      color: "#F59E0B",
      icon: Link,
      preview: "API-first connectivity",
    },
  ];

  const products = [
    {
      name: "Venturemond Automate",
      tagline: "Automate Everything, Effortlessly",
      description:
        "No-code workflow engine that connects tools and automates operations",
      status: "Prototype",
      color: "#00D4FF",
    },
    {
      name: "Venturemond CRM",
      tagline: "The CRM That Thinks Ahead",
      description: "Smart CRM designed for startups and scaling teams to manage customers efficiently.",
      status: "Research",
      color: "#8B5CF6",
    },
    {
      name: "Venturemond Desk AI",
      tagline: "Your Team’s AI Second Brain",
      description: "Document intelligence and summarization assistant for professionals.",
      status: "Concept",
      color: "#EC4899",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-[#0A0A0F] text-white font-inter overflow-x-hidden">
      <Header activeLink="/saas" />

      {/* Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dynamic Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #8B5CF6 0%, transparent 50%)`,
          }}
        />

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" />
          <div
            className="absolute top-40 right-32 w-1 h-1 bg-[#EC4899] rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#8B5CF6] rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="col-span-1 lg:col-span-7">
              <div className="space-y-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-xs tracking-widest">
                    VENTUREMOND SAAS
                  </span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-8xl font-black leading-[0.85] tracking-tight">
                    INTELLIGENT
                    <br />
                    <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#00D4FF] bg-clip-text text-transparent">
                      SOFTWARE
                    </span>
                  </h1>

                  <div className="w-40 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-transparent" />

                  <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                    Privacy-first business tools that combine collaboration,
                    automation, and secure cloud architecture for modern teams.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href="https://workplace.venturemond.com/index.php/login"
                    className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] text-white font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-[#8B5CF6]/25 transition-all duration-300 text-center"
                  >
                    EXPLORE WORKSPACE
                  </a>

                  <a
                    href="/waitlist"
                    className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wider hover:bg-white/5 transition-all duration-300"
                  >
                    JOIN WAITLIST
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-5 hidden lg:block">
              <div className="relative">
                {/* Product Preview Mockup */}
                <div className="relative">
                  <div className="w-96 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#8B5CF6] rounded-full" />
                        <div className="text-sm font-medium">
                          Venturemond Workspace
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/20 rounded w-3/4" />
                        <div className="h-2 bg-white/10 rounded w-1/2" />
                        <div className="h-2 bg-white/15 rounded w-2/3" />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-[#00D4FF]/30 rounded" />
                        <div className="w-8 h-8 bg-[#EC4899]/30 rounded" />
                        <div className="w-8 h-8 bg-[#10B981]/30 rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B5CF6]/20 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Innovation Section */}
      <section className="py-32 bg-[#0A0A0F] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                Software that thinks, scales, and performs.
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Venturemond SaaS is our product innovation division — focused on building modern,
                  cloud-first tools that make technology frictionless.
                </p>
                <p>
                  We design products where privacy, intelligence, and experience converge — giving teams
                  better control, speed, and visibility.
                </p>
                <p>
                  Every platform we build is engineered to simplify complexity, automate processes, and help
                  organizations focus on growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 rounded-3xl blur-2xl" />
              <div className="relative p-10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <blockquote className="text-2xl font-light italic text-white leading-relaxed">
                  “We don’t just build software. We build systems that work smarter.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venturemond Workspace Section */}
      <section className="py-32 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="col-span-1 lg:col-span-6">
              <div className="mb-8">
                <div className="text-xs tracking-[0.3em] text-[#8B5CF6] mb-4">UNIFIED WORKSPACE</div>
                <h2 className="text-4xl lg:text-6xl font-black mb-6">Private. Smart. Seamless.</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  Venturemond Workspace is a unified, intelligent workspace designed for teams that value
                  privacy and performance.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  It brings collaboration, storage, and automation into one secure environment — built for
                  modern businesses.
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Secure document and file collaboration",
                  "AI-assisted productivity tools",
                  "Workflow automation",
                  "Role-based user controls",
                  "Private cloud deployment",
                  "Integration-ready APIs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Product Showcase */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              PRODUCT SUITE
            </div>
            <h2 className="text-4xl lg:text-6xl font-black">Intelligent Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative h-80 p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                onMouseEnter={() => setIsInView(true)}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${product.color}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: `${product.color}20`,
                          color: product.color,
                        }}
                      >
                        {product.status}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                        {product.name}
                      </h3>
                      <div
                        className="text-sm font-medium"
                        style={{ color: product.color }}
                      >
                        {product.tagline}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button
                      className="text-xs tracking-wider hover:tracking-widest transition-all duration-300"
                      style={{ color: product.color }}
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process Section */}
      <section className="py-32 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              From concept to product — <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                fast, focused, and reliable.
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our SaaS engineering process is built around clarity, speed, and adaptability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                icon: Search,
                title: "Discovery & Problem Definition",
                desc: "Identify pain points worth solving through research and insight.",
                color: "#00D4FF"
              },
              {
                step: "2",
                icon: Compass,
                title: "Product Architecture",
                desc: "Design scalable systems and user-first experiences that stand the test of growth.",
                color: "#8B5CF6"
              },
              {
                step: "3",
                icon: Code,
                title: "Development & Integration",
                desc: "Build fast, test early, and refine continuously — ensuring high-performance delivery.",
                color: "#EC4899"
              },
              {
                step: "4",
                icon: Rocket,
                title: "Launch & Iterate",
                desc: "Deploy, monitor, and evolve using feedback for constant product improvement.",
                color: "#10B981"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl group-hover:opacity-20 transition-opacity">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-white/5 group-hover:scale-110 transition-transform duration-300" style={{ color: item.color }}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ backgroundColor: item.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Product Deep Dive */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 to-[#00D4FF]/5 transform skew-y-2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="mb-20 text-center">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              FLAGSHIP PRODUCT
            </div>
            <h2 className="text-4xl lg:text-6xl font-black">Venturemond Workspace</h2>
            <p className="text-gray-400 text-lg mt-6">
              Your private, intelligent command center
            </p>
          </div>

          {/* Feature Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="col-span-1 lg:col-span-7">
              <div className="space-y-12">
                <div className="flex flex-wrap items-center gap-4 lg:gap-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`p-4 rounded-full border transition-all duration-300 ${activeFeature === index
                          ? "border-white/30 bg-white/5"
                          : "border-white/10 hover:border-white/20"
                          }`}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{
                            color:
                              activeFeature === index
                                ? features[activeFeature].color
                                : "#gray",
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: features[activeFeature].color }}
                    />
                    <h3 className="text-3xl font-bold">
                      {features[activeFeature].title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {features[activeFeature].description}
                  </p>

                  <div className="text-sm text-gray-500">
                    {features[activeFeature].preview}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-5">
              <div className="relative">
                <div className="w-full h-96 relative">
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                    style={{ backgroundColor: features[activeFeature].color }}
                  />
                  <div className="absolute inset-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-8">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center space-y-6">
                        <div
                          className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${features[activeFeature].color}20`,
                          }}
                        >
                          {React.createElement(features[activeFeature].icon, {
                            size: 32,
                            color: features[activeFeature].color,
                          })}
                        </div>
                        <div className="space-y-2">
                          <div className="text-lg font-bold">
                            {features[activeFeature].title}
                          </div>
                          <div className="text-xs text-gray-500">
                            Interactive Demo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex gap-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 transition-all duration-300 rounded-full ${activeFeature === index ? "w-8 bg-white" : "w-2 bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Focus */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              SECURITY FIRST
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-6">Privacy by Design</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enterprise-grade security without compromising user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: "Zero-Knowledge",
                desc: "End-to-end encryption",
              },
              {
                icon: Shield,
                title: "SOC 2 Compliant",
                desc: "Industry standards",
              },
              {
                icon: Cloud,
                title: "Private Cloud",
                desc: "Dedicated infrastructure",
              },
              {
                icon: Command,
                title: "Audit Logs",
                desc: "Complete transparency",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white/5 border border-white/10 text-center hover:border-[#8B5CF6]/30 transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#8B5CF6] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diagonal CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#EC4899]/10 transform -skew-y-3" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="col-span-1 lg:col-span-3 space-y-8">
              <div>
                <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                  GET STARTED
                </div>
                <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                  Experience the
                  <br />
                  <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                    Future of Work
                  </span>
                </h2>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                Join thousands of teams building with privacy-first tools. Start
                your free trial today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="/waitlist"
                  className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] text-white font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-[#8B5CF6]/25 transition-all duration-300 text-center"
                >
                  JOIN WAITLIST
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wider hover:bg-white/5 transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-16 bg-[#8B5CF6]/20 rounded border border-[#8B5CF6]/30" />
                  <div className="h-24 bg-[#00D4FF]/20 rounded border border-[#00D4FF]/30" />
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-20 bg-[#EC4899]/20 rounded border border-[#EC4899]/30" />
                  <div className="h-16 bg-[#10B981]/20 rounded border border-[#10B981]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
