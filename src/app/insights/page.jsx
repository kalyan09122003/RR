"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Filter,
  Search,
  TrendingUp,
  Brain,
  Lightbulb,
  Target,
  Bookmark,
  Share,
  Eye,
  CheckCircle,
  Layers,
  Map,
  Trophy,
  Zap,
  Building2,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const categories = [
    "All",
    "Product Strategy",
    "Engineering",
    "Design",
    "Growth",
    "Industry Trends",
  ];

  const articles = [
    {
      id: 1,
      title: "The Future of Privacy-First Product Development",
      excerpt:
        "How modern teams are building products that prioritize user privacy without sacrificing innovation or growth potential.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Product Strategy",
      featured: true,
      views: "2.4k",
      color: "#00D4FF",
    },
    {
      id: 2,
      title: "The Execution Gap: Why Most Startups Fail After the Idea Stage",
      excerpt:
        "Ideas are cheap. Execution is everything. A deep dive into the operational pitfalls that sink promising ventures.",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Strategy",
      featured: false,
      views: "1.8k",
      color: "#8B5CF6",
    },
    {
      id: 3,
      title: "Design Systems That Scale: Lessons from 100+ Products",
      excerpt:
        "What we learned building design systems for ventures across fintech, healthcare, and consumer tech.",
      author: "Alex Kim",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Design",
      featured: true,
      views: "3.1k",
      color: "#EC4899",
    },
    {
      id: 4,
      title: "Designing Systems That Scale — Lessons from Venturemond Builds",
      excerpt:
        "How we architect software for high-growth environments, ensuring reliability without sacrificing velocity.",
      author: "Jordan Lee",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      category: "Engineering",
      featured: false,
      views: "1.5k",
      color: "#10B981",
    },
    {
      id: 5,
      title: "Why Speed Without Structure Kills Innovation",
      excerpt:
        "Moving fast doesn't mean breaking things. Why disciplined agility wins over chaotic speed.",
      author: "Taylor Singh",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Leadership",
      featured: false,
      views: "2.7k",
      color: "#F59E0B",
    },
    {
      id: 6,
      title: "The Future of Collaboration: Building Venturemond Workspace",
      excerpt:
        "Behind the scenes of building our flagship workspace platform—privacy, performance, and the future of work.",
      author: "Casey Wong",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Product",
      featured: false,
      views: "1.9k",
      color: "#EF4444",
    },
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0F] text-white font-inter overflow-x-hidden">
      <Header activeLink="/insights" />

      {/* Magazine-Style Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{
            background: `linear-gradient(-45deg, #00D4FF 0%, #8B5CF6 50%, #EC4899 100%)`,
            transform: `translateX(${scrollY * 0.05}px) rotate(12deg)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="col-span-1 lg:col-span-8">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <Brain className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs tracking-widest">
                    VENTURE INSIGHTS
                  </span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                    INSIGHTS &
                    <br />
                    <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                      INTELLIGENCE
                    </span>
                  </h1>

                  <div className="w-32 h-[2px] bg-gradient-to-r from-[#00D4FF] to-transparent" />

                  <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                    Deep analysis, strategic thinking, and practical insights
                    from building breakthrough products and scaling modern
                    ventures.
                  </p>
                </div>


              </div>
            </div>

            <div className="col-span-1 lg:col-span-4">
              <div className="space-y-8">
                <div className="text-xs tracking-widest text-gray-500 mb-6">
                  TRENDING TOPICS
                </div>
                <div className="space-y-4">
                  {[
                    "AI Integration",
                    "Remote Teams",
                    "Product Strategy",
                    "Growth Metrics",
                  ].map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <TrendingUp className="w-4 h-4 text-[#00D4FF] group-hover:scale-110 transition-transform" />
                      <span className="text-sm group-hover:text-white transition-colors">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Ventures We've Built Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Ventures <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">We've Built.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A glimpse into some of the projects and ideas we've executed through Venturemond Studio and SaaS.
            </p>
          </div>

          <div className="bg-[#1A1A1F] border border-white/10 rounded-2xl overflow-hidden">
            {/* Header Row */}
            <div className="hidden lg:grid grid-cols-12 border-b border-white/10 bg-white/5 p-6 text-xs tracking-widest font-bold text-gray-500 uppercase">
              <div className="col-span-4">Case</div>
              <div className="col-span-6">Description</div>
              <div className="col-span-2 text-right">Division</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/10">
              {[
                {
                  case: "Smart Agri Management Platform",
                  desc: "Digitizing agricultural operations with real-time analytics for farmers and distributors.",
                  division: "Studio"
                },
                {
                  case: "Learning Management System for Universities",
                  desc: "Full-stack LMS for seamless online learning and administration.",
                  division: "Studio"
                },
                {
                  case: "Department of IT — Government Project",
                  desc: "Collaborative initiative to digitize internal workflows securely.",
                  division: "Studio"
                },
                {
                  case: "Venturemond Workspace",
                  desc: "Our flagship product redefining team collaboration and private cloud infrastructure.",
                  division: "SaaS"
                }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 p-6 hover:bg-white/5 transition-colors items-start lg:items-center gap-4 lg:gap-0">
                  <div className="col-span-12 lg:col-span-4">
                    <div className="font-bold text-white text-lg mb-1">{item.case}</div>
                    <div className="lg:hidden mt-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.division === 'Studio'
                        ? 'bg-[#00D4FF]/10 text-[#00D4FF]'
                        : 'bg-[#8B5CF6]/10 text-[#8B5CF6]'
                        }`}>
                        {item.division}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </div>
                  <div className="hidden lg:flex col-span-2 justify-end">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.division === 'Studio'
                      ? 'bg-[#00D4FF]/10 text-[#00D4FF]'
                      : 'bg-[#8B5CF6]/10 text-[#8B5CF6]'
                      }`}>
                      {item.division}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles - Masonry Grid */}
      <section className="py-32 bg-gradient-to-b from-transparent to-[#00D4FF]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Thoughts from <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">the Desk.</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Perspectives on building, scaling, and leading in a fast-changing world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <div
                key={article.id}
                className={`group relative bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden ${index % 3 === 0 ? "md:row-span-2" : ""
                  }`}
                onMouseEnter={() => setHoveredCard(article.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  minHeight: index % 3 === 0 ? "400px" : "320px",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${article.color}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: `${article.color}20`,
                          color: article.color,
                        }}
                      >
                        {article.category}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>

                    <h3
                      className={`font-bold leading-tight group-hover:text-white transition-colors ${index % 3 === 0 ? "text-xl" : "text-lg"
                        }`}
                    >
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/10">
                    {/* Metadata removed as per request */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Insights Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-[#00D4FF]/5 via-[#8B5CF6]/5 to-[#EC4899]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Product Insights.</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Inside stories from our build process — tech choices, product design, and what we learned along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "How We Validate Products Before Writing a Single Line of Code",
                color: "#00D4FF"
              },
              {
                icon: Layers,
                title: "Why We Chose Next.js and Node.js for Venturemond's Core Stack",
                color: "#8B5CF6"
              },
              {
                icon: Map,
                title: "Turning Feedback into Product Roadmaps: Our 4-Step Approach",
                color: "#EC4899"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative p-8 bg-[#0A0A0F] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: item.color }}>
                    Read Story <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Builds. Real Results. Section */}
      <section className="py-32 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="col-span-1 lg:col-span-4 sticky top-32">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Real Builds. <br />
                <span className="text-[#10B981]">Real Results.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Startups, founders, and companies we've helped turn ideas into growth stories.
              </p>
              <button className="px-6 py-3 bg-white text-black font-bold text-sm rounded-full hover:bg-gray-200 transition-colors">
                VIEW ALL CASE STUDIES
              </button>
            </div>

            <div className="col-span-1 lg:col-span-8 space-y-6">
              {[
                {
                  metric: "10K",
                  sub: "Monthly Deliveries",
                  title: "How a Logistics Startup Scaled to 10K Deliveries a Month with Our MVP Framework",
                  icon: Trophy,
                  color: "#F59E0B"
                },
                {
                  metric: "60",
                  sub: "Days to Launch",
                  title: "Building an EdTech Platform in 60 Days — A Studio Sprint Story",
                  icon: Zap,
                  color: "#00D4FF"
                },
                {
                  metric: "GOV",
                  sub: "Sector Focus",
                  title: "What We Learned Building for the Government Sector",
                  icon: Building2,
                  color: "#8B5CF6"
                }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row items-start md:items-center gap-8 p-8 bg-[#0A0A0F] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-full md:w-48">
                    <div className="text-4xl lg:text-5xl font-black mb-1" style={{ color: item.color }}>
                      {item.metric}
                    </div>
                    <div className="text-xs tracking-wider text-gray-500 uppercase font-bold">
                      {item.sub}
                    </div>
                  </div>
                  <div className="flex-1 border-l border-white/10 md:pl-8 pt-4 md:pt-0 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                      Read Case Study <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Story CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <div className="p-8 lg:p-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Your story could be <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">next.</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              We build ventures worth sharing — products that inspire, scale, and last. Partner
              with us to create something that makes it to this page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] text-white font-bold text-sm tracking-wider rounded-full hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300">
                Partner With Venturemond
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm tracking-wider rounded-full hover:bg-white/10 transition-all duration-300">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
