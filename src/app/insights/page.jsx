"use client";

import { useState, useEffect } from "react";
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
      title: "Scaling Engineering Teams in Remote-First Environments",
      excerpt:
        "Key strategies for building distributed engineering cultures that maintain velocity and quality.",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Engineering",
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
      title: "Growth Hacking vs. Sustainable Growth: A Data-Driven Analysis",
      excerpt:
        "Why sustainable growth strategies outperform viral marketing tactics in the long term.",
      author: "Jordan Lee",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      category: "Growth",
      featured: false,
      views: "1.5k",
      color: "#10B981",
    },
    {
      id: 5,
      title: "AI Integration in B2B SaaS: Beyond the Hype",
      excerpt:
        "Practical approaches to implementing AI features that users actually want and need.",
      author: "Taylor Singh",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Industry Trends",
      featured: false,
      views: "2.7k",
      color: "#F59E0B",
    },
    {
      id: 6,
      title: "The Psychology of Product-Market Fit",
      excerpt:
        "Understanding user behavior patterns that indicate true product-market fit versus vanity metrics.",
      author: "Casey Wong",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Product Strategy",
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-full sm:w-auto">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search insights..."
                      className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-full sm:w-64"
                    />
                  </div>
                  <button className="px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white/5 transition-all w-full sm:w-auto">
                    <Filter className="w-4 h-4 inline mr-2" />
                    Filter
                  </button>
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

      {/* Category Navigation */}
      <section className="py-8 border-y border-white/5 sticky top-20 z-40 bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-4 lg:gap-8 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs tracking-wider whitespace-nowrap py-2 px-4 rounded-full transition-all duration-300 flex-shrink-0 ${selectedCategory === category
                  ? "bg-white/10 text-white font-medium"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles - Magazine Layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              FEATURED
            </div>
            <h2 className="text-4xl lg:text-4xl font-black">Latest Intelligence</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Featured Article */}
            <div className="col-span-1 lg:col-span-8">
              <div
                className="group relative h-[500px] lg:h-96 overflow-hidden cursor-pointer rounded-2xl border border-white/10"
                onMouseEnter={() => setHoveredCard(featuredArticles[0]?.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${featuredArticles[0]?.color || "#00D4FF"} 0%, transparent 50%)`,
                  }}
                />

                <div className="relative z-10 h-full p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-t from-[#0A0A0F]/80 to-transparent">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${featuredArticles[0]?.color}20`,
                          color: featuredArticles[0]?.color,
                        }}
                      >
                        FEATURED
                      </div>
                      <div className="text-xs text-gray-400">
                        {featuredArticles[0]?.category}
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold leading-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                      {featuredArticles[0]?.title}
                    </h3>

                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                      {featuredArticles[0]?.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredArticles[0]?.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredArticles[0]?.readTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        {featuredArticles[0]?.views}
                      </div>
                    </div>

                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured */}
            <div className="col-span-1 lg:col-span-4 space-y-8">
              {featuredArticles.slice(1).map((article) => (
                <div
                  key={article.id}
                  className="group relative p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer rounded-2xl"
                  onMouseEnter={() => setHoveredCard(article.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${article.color}, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 space-y-4">
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
                      <div className="flex gap-2">
                        <Bookmark className="w-4 h-4 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                        <Share className="w-4 h-4 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold leading-tight group-hover:text-white transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.views}</span>
                    </div>
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
            <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
              ALL INSIGHTS
            </div>
            <h2 className="text-4xl font-black">Complete Archive</h2>
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
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>{article.readTime}</span>
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <div className="p-8 lg:p-16 bg-gradient-to-br from-[#00D4FF]/20 via-[#8B5CF6]/20 to-[#EC4899]/20 border border-white/10 rounded-3xl">
            <Lightbulb className="w-16 h-16 mx-auto mb-8 text-[#00D4FF]" />
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Stay Ahead</h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Get our latest insights delivered weekly. Deep analysis, strategic
              frameworks, and practical advice for modern builders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-sm tracking-wider rounded-full hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
