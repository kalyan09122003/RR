"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Heart,
  Zap,
  Users,
  Globe,
  MapPin,
  Clock,
  Plus,
  Minus,
  Coffee,
  Laptop,
  Home,
  Plane,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const values = [
    {
      title: "Human-First",
      description:
        "We build for humans, not just metrics. Every decision starts with impact on real people.",
      icon: Heart,
      color: "#EC4899",
    },
    {
      title: "Rapid Execution",
      description:
        "Speed without sacrifice. We move fast but never compromise on quality or thoughtfulness.",
      icon: Zap,
      color: "#00D4FF",
    },
    {
      title: "Collective Intelligence",
      description:
        "The best ideas come from diverse perspectives. We actively seek different viewpoints.",
      icon: Users,
      color: "#8B5CF6",
    },
    {
      title: "Global Impact",
      description:
        "We're building for the world. Our solutions transcend borders and cultures.",
      icon: Globe,
      color: "#10B981",
    },
  ];

  const perks = [
    {
      icon: Coffee,
      title: "Flexible Hours",
      description: "Work when you're most productive",
    },
    {
      icon: Home,
      title: "Remote First",
      description: "Work from anywhere in the world",
    },
    {
      icon: Laptop,
      title: "Top Equipment",
      description: "MacBook Pro, monitors, whatever you need",
    },
    {
      icon: Plane,
      title: "Team Retreats",
      description: "Quarterly team gatherings worldwide",
    },
  ];

  const openRoles = [
    {
      id: 1,
      title: "Senior Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead product design for our flagship workspace platform. Shape user experiences for millions of users.",
      requirements: [
        "5+ years product design experience",
        "Portfolio showing complex B2B SaaS products",
        "Systems thinking approach to design",
        "Experience with design tokens and component systems",
      ],
      responsibilities: [
        "Lead end-to-end design for key product features",
        "Establish and evolve our design system",
        "Collaborate closely with engineering and product",
        "Conduct user research and usability testing",
      ],
    },
    {
      id: 2,
      title: "Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and scale our core platform. Work across the entire stack from React frontends to Node.js backends.",
      requirements: [
        "4+ years full-stack development experience",
        "Strong proficiency in React and Node.js",
        "Experience with TypeScript and modern tooling",
        "Understanding of scalable architecture patterns",
      ],
      responsibilities: [
        "Develop features across web and mobile platforms",
        "Optimize performance and scalability",
        "Participate in technical design decisions",
        "Mentor junior engineers",
      ],
    },
    {
      id: 3,
      title: "Growth Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description:
        "Drive user acquisition and retention through data-driven product decisions. Own the entire growth funnel.",
      requirements: [
        "3+ years product management experience",
        "Strong analytical and data interpretation skills",
        "Experience with growth metrics and experimentation",
        "B2B SaaS background preferred",
      ],
      responsibilities: [
        "Define and execute growth strategy",
        "Design and run growth experiments",
        "Analyze user behavior and conversion funnels",
        "Work cross-functionally to implement growth initiatives",
      ],
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0A0A0F] text-white font-inter overflow-x-hidden">
      <Header activeLink="/careers" />

      {/* Minimal Hero */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #EC4899 0%, transparent 50%)`,
          }}
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center relative z-10">
          <div className="space-y-8 sm:space-y-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#EC4899]" />
              <span className="text-[10px] sm:text-xs tracking-widest">JOIN OUR MISSION</span>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                BUILD THE
                <br />
                <span className="bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#00D4FF] bg-clip-text text-transparent">
                  FUTURE
                </span>
              </h1>

              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-[#EC4899] to-transparent mx-auto" />

              <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light px-4 sm:px-0">
                We're looking for extraordinary people to help us engineer
                breakthrough products and build the next generation of ventures.
              </p>
            </div>

            <div className="pt-6 sm:pt-8">
              <div className="text-[10px] sm:text-xs tracking-widest text-gray-500 mb-3 sm:mb-4">
                CURRENT OPENINGS
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#EC4899]">
                {openRoles.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
              OUR VALUES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">How We Think</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    transform: `translateY(${scrollY * (index % 2 === 0 ? -0.02 : 0.02)}px)`,
                  }}
                >
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${value.color}20` }}
                      >
                        <Icon
                          className="w-6 h-6 sm:w-8 sm:h-8"
                          style={{ color: value.color }}
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{value.title}</h3>
                    </div>

                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life at Venturemond */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-transparent to-[#EC4899]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
              LIFE HERE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">Work That Works</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div key={index} className="text-center space-y-4 sm:space-y-6 group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#EC4899] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">{perk.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{perk.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <div className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
              OPPORTUNITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">Open Roles</h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="group border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="p-4 sm:p-6 md:p-8 cursor-pointer"
                  onClick={() =>
                    setExpandedJob(expandedJob === role.id ? null : role.id)
                  }
                >
                  <div className="flex items-start sm:items-center justify-between gap-4">
                    <div className="space-y-2 sm:space-y-3 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-[#EC4899] transition-colors">
                          {role.title}
                        </h3>
                        <div className="px-2 sm:px-3 py-1 bg-[#EC4899]/20 text-[#EC4899] rounded-full text-[10px] sm:text-xs font-medium w-fit">
                          {role.department}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {role.location}
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          {role.type}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-300 mt-2 sm:mt-3 max-w-2xl">
                        {role.description}
                      </p>
                    </div>

                    <button className="p-2 sm:p-3 border border-white/20 rounded-full hover:bg-white/5 transition-all flex-shrink-0">
                      {expandedJob === role.id ? (
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedJob === role.id && (
                  <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 border-t border-white/10">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 pt-6 sm:pt-8">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#EC4899]">
                          Requirements
                        </h4>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {role.requirements.map((req, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300"
                            >
                              <div className="w-1 h-1 rounded-full bg-[#EC4899] mt-1.5 sm:mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#00D4FF]">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {role.responsibilities.map((resp, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300"
                            >
                              <div className="w-1 h-1 rounded-full bg-[#00D4FF] mt-1.5 sm:mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10 flex justify-center">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#EC4899] to-[#C084FC] text-white font-bold text-xs sm:text-sm tracking-wider hover:shadow-lg hover:shadow-[#EC4899]/25 transition-all duration-300"
                      >
                        <span className="hidden sm:inline">APPLY FOR THIS ROLE</span>
                        <span className="sm:hidden">APPLY NOW</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture CTA */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <div className="p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#EC4899]/20 via-[#8B5CF6]/20 to-[#00D4FF]/20 border border-white/10 rounded-2xl sm:rounded-3xl">
            <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 text-[#EC4899]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">Ready to Build?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
              Don't see a role that fits? We're always looking for exceptional
              people who share our vision. Let's talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#EC4899] to-[#C084FC] text-white font-bold text-xs sm:text-sm tracking-wider hover:shadow-lg hover:shadow-[#EC4899]/25 transition-all duration-300"
              >
                GET IN TOUCH
              </a>
              <a
                href="/insights"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-medium text-xs sm:text-sm tracking-wider hover:bg-white/5 transition-all duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
