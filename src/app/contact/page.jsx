"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Send,
  MessageCircle,
  Mail,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  User,
  Building,
  Target,
  Zap,
} from "lucide-react";
import Header from "../components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    {
      value: "studio",
      label: "Venture Studio",
      icon: Target,
      color: "#00D4FF",
    },
    { value: "saas", label: "SaaS Product", icon: Zap, color: "#8B5CF6" },
    {
      value: "consulting",
      label: "Strategic Consulting",
      icon: MessageCircle,
      color: "#EC4899",
    },
    {
      value: "other",
      label: "Something Else",
      icon: Building,
      color: "#10B981",
    },
  ];

  const budgetRanges = [
    "< $50K",
    "$50K - $100K",
    "$100K - $250K",
    "$250K - $500K",
    "$500K+",
  ];

  const timelineOptions = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "Just exploring",
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@venturemond.com",
      action: "mailto:hello@venturemond.com",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Book a 30min chat",
      action: "#",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Global • Remote-First",
      action: null,
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      action: null,
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#0A0A0F] text-white font-inter min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <div>
            <h1 className="text-5xl font-black mb-4">Message Sent!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300"
            >
              RETURN HOME
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0F] text-white font-inter overflow-x-hidden">
      <Header activeLink="/contact" />

      {/* Split Layout */}
      <section className="pt-20 min-h-screen">
        <div className="grid grid-cols-12 min-h-screen">
          {/* Left Side - Contact Info */}
          <div className="col-span-5 bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10 p-16 flex flex-col justify-center relative overflow-hidden">
            {/* Dynamic Background Effect */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px, #00D4FF 0%, transparent 50%)`,
              }}
            />

            <div className="relative z-10 space-y-16">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                  <MessageCircle className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs tracking-widest">GET IN TOUCH</span>
                </div>

                <h1 className="text-6xl font-black leading-[0.9] tracking-tight mb-8">
                  LET'S BUILD
                  <br />
                  <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                    TOGETHER
                  </span>
                </h1>

                <div className="w-32 h-[2px] bg-gradient-to-r from-[#00D4FF] to-transparent mb-8" />

                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  Ready to turn your vision into reality? Let's discuss how we
                  can help you build breakthrough products and scale your
                  venture.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#00D4FF] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          {info.title}
                        </div>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-lg font-medium hover:text-[#00D4FF] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-lg font-medium">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-span-7 p-16 flex items-center">
            <div className="w-full max-w-2xl">
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Basic Info */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 tracking-wider">
                          NAME *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 tracking-wider">
                          EMAIL *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm text-gray-400 tracking-wider">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-4">
                    <label className="text-sm text-gray-400 tracking-wider">
                      WHAT DO YOU NEED? *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {projectTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                projectType: type.value,
                              }))
                            }
                            className={`p-6 border rounded-xl transition-all duration-300 text-left ${
                              formData.projectType === type.value
                                ? "border-white/30 bg-white/5"
                                : "border-white/10 hover:border-white/20"
                            }`}
                          >
                            <Icon
                              className="w-6 h-6 mb-3"
                              style={{
                                color:
                                  formData.projectType === type.value
                                    ? type.color
                                    : "#gray",
                              }}
                            />
                            <div className="text-lg font-medium mb-1">
                              {type.label}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm text-gray-400 tracking-wider">
                        BUDGET RANGE
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white outline-none focus:border-[#00D4FF] transition-colors"
                      >
                        <option value="" className="bg-[#0A0A0F]">
                          Select budget
                        </option>
                        {budgetRanges.map((range) => (
                          <option
                            key={range}
                            value={range}
                            className="bg-[#0A0A0F]"
                          >
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm text-gray-400 tracking-wider">
                        TIMELINE
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white outline-none focus:border-[#00D4FF] transition-colors"
                      >
                        <option value="" className="bg-[#0A0A0F]">
                          Select timeline
                        </option>
                        {timelineOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="bg-[#0A0A0F]"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400 tracking-wider">
                      PROJECT DETAILS *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and challenges. The more detail, the better we can help."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-6 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-lg tracking-wider hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
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
                Let's build the future together
              </div>
            </div>

            <div className="flex gap-12">
              <a
                href="/studio"
                className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors"
              >
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
              © 2025 Venturemond. Let's build the future together.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
