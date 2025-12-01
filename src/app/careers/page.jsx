"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Lightbulb,
  Rocket,
  Handshake,
  Mail,
  Linkedin,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const traits = [
    {
      title: "Innovative.",
      icon: Lightbulb,
      color: "#F59E0B",
    },
    {
      title: "Collaborative.",
      icon: Handshake,
      color: "#00D4FF",
    },
    {
      title: "Fast-paced.",
      icon: Rocket,
      color: "#EC4899",
    },
  ];

  const openRoles = [
    {
      id: 1,
      title: "Full Stack Developer",
      experience: "0–3 years",
      description:
        "Build scalable web applications using React.js, Node.js, and MongoDB. Collaborate with designers and founders to bring product ideas to life.",
      tags: ["Engineering", "Remote", "Full-time"],
    },
    {
      id: 2,
      title: "Business Development Executive",
      experience: "0–3 years",
      description:
        "Identify partnerships, manage client relationships, and contribute to the growth of Venturemond’s SaaS and venture initiatives.",
      tags: ["Business", "Remote", "Full-time"],
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #00D4FF 0%, transparent 40%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight">
            Join the <br />
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              Venturemond Journey.
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            We’re building the next generation of ventures and SaaS products — and we’re looking for passionate innovators, creators, and builders to join us.
          </p>
        </div>
      </section>

      {/* Culture/Values Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
                Founder-led. <br />
                Execution-focused. <br />
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Driven by Impact.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                At Venturemond, we believe execution beats ideas. Our teams thrive on innovation, collaboration, and ownership — building real-world solutions that matter.
              </p>
              <p className="text-gray-300 text-lg font-medium">
                If you love startups, cutting-edge tech, and hands-on product building, you’ll feel right at home with us.
              </p>
            </div>
            <div className="grid gap-6">
              {traits.map((trait, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-6 bg-[#0A0A0F] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${trait.color}20` }}
                  >
                    <trait.icon className="w-6 h-6" style={{ color: trait.color }} />
                  </div>
                  <h3 className="text-xl font-bold">{trait.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Open Positions</h2>
            <p className="text-gray-400 text-lg">
              We’re looking for curious minds, self-starters, and team players ready to make an impact.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="group p-8 bg-white/5 border border-white/10 hover:border-[#00D4FF]/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#00D4FF] transition-colors">
                      {role.title}
                    </h3>
                    <div className="text-sm text-gray-400 font-medium tracking-wider">
                      {role.experience}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {role.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#00D4FF]/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <div className="p-12 border border-white/10 rounded-3xl bg-[#0A0A0F] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899]" />

            <h2 className="text-3xl font-black mb-6">How to Apply</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Interested in joining our team? We’d love to hear from you. Send us your resume or LinkedIn profile — we’ll get back to you within 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:career@venturemond.com"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
              >
                <Mail className="w-5 h-5 text-[#00D4FF]" />
                <span className="font-medium group-hover:text-white transition-colors">career@venturemond.com</span>
              </a>
              <a
                href="https://linkedin.com/company/venturemond"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
                <span className="font-medium group-hover:text-white transition-colors">Venturemond LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-8">
            Ready to Build the <br />
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Future with Us?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join Venturemond’s growing team of builders, innovators, and strategists. Let’s create what’s next — together.
          </p>
          <a
            href="mailto:career@venturemond.com"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] text-white font-bold text-sm tracking-wider rounded-full hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300"
          >
            APPLY NOW → career@venturemond.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
