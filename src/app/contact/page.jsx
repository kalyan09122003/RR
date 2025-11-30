"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  ArrowUpRight,
  Send,
  MessageCircle,
  Mail,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  Building,
  Target,
  Zap,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });

  // multi-select project types
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]); // ['studio','saas']

  // multi-select services chosen from the auto-populated list
  const [chosenServices, setChosenServices] = useState([]); // array of service ids
  const [servicesOpen, setServicesOpen] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: "studio", label: "Venturemond Studio", icon: Target, color: "#00D4FF" },
    { value: "saas", label: "Venturemond SaaS", icon: Zap, color: "#8B5CF6" },
  ];

  const servicesByType = {
    studio: [
      { id: "research_validation", label: "Research & Validation" },
      { id: "mvp_product", label: "MVP / Product Development (Web, App, SaaS)" },
      { id: "strategy_roadmap", label: "Product Strategy & Roadmap" },
      { id: "growth_gtm", label: "Growth & Go-to-Market" },
    ],
    saas: [{ id: "venturemond_workspace", label: "Venturemond Workspace" }],
  };

  const budgetRanges = [
    "Under ₹2 Lakhs / $2,500",
    "₹2–5 Lakhs / $2,500–$6,000",
    "₹5–10 Lakhs / $6,000–$12,000",
    "Above ₹10 Lakhs / $12,000+",
  ];

  const timelineOptions = ["Immediately", "1-3 months", "3-6 months", "6-12 months", "Just exploring"];

  const contactInfo = [
    { icon: Mail, title: "Email Us", value: "hello@venturemond.com", action: "mailto:hello@venturemond.com" },
    { icon: Calendar, title: "Schedule Call", value: "Book a 30min chat", action: "#" },
    { icon: MapPin, title: "Location", value: "Global • Remote-First", action: null },
    { icon: Clock, title: "Response Time", value: "Within 24 hours", action: null },
  ];

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // derive available services based on selectedProjectTypes
  const availableServices = useMemo(() => {
    const set = new Map();
    selectedProjectTypes.forEach((ptype) => {
      (servicesByType[ptype] || []).forEach((s) => {
        if (!set.has(s.id)) set.set(s.id, s);
      });
    });
    return Array.from(set.values());
  }, [selectedProjectTypes]);

  // Remove chosen services that are no longer available when project type toggles
  useEffect(() => {
    if (chosenServices.length === 0) return;
    const availableIds = new Set(availableServices.map((s) => s.id));
    const filtered = chosenServices.filter((id) => availableIds.has(id));
    if (filtered.length !== chosenServices.length) setChosenServices(filtered);
  }, [availableServices, chosenServices]);

  // close dropdown on outside click
  const servicesRef = useRef(null);
  useEffect(() => {
    function onDocClick(e) {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(e.target)) setServicesOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // HANDLE INPUT CHANGE
  // also reliably set select color so selected option text is visible across browsers
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    // small cross-browser fix: make sure select shows white when value present,
    // and muted when placeholder/empty.
    try {
      if (type === "select-one") {
        e.target.style.color = value ? "#FFFFFF" : "#9CA3AF";
      }
    } catch (err) {
      // ignore (some environments are read-only)
    }
  };

  const toggleProjectType = (value) => {
    setSelectedProjectTypes((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const toggleServiceSelection = (serviceId) => {
    setChosenServices((prev) => (prev.includes(serviceId) ? prev.filter((s) => s !== serviceId) : [...prev, serviceId]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedProjectTypes.length === 0) {
      alert("Please select at least one option under 'What do you need?'");
      return;
    }
    if (chosenServices.length === 0) {
      alert("Please choose at least one service from the 'Choose a Service' list.");
      return;
    }

    setIsSubmitting(true);
    const payload = { ...formData, projectTypes: selectedProjectTypes, chosenServices };

    // TODO: replace with actual API call
    // await fetch("/api/contact", { method: "POST", headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });

    await new Promise((r) => setTimeout(r, 1100));
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
            <p className="text-xl text-gray-300 mb-8">Thanks for reaching out. We'll get back to you within 24 hours.</p>
            <a href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300">
              RETURN HOME
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // helper: render summary of chosen services (labels)
  const chosenServicesLabels = chosenServices
    .map((id) => {
      const s =
        availableServices.find((x) => x.id === id) ||
        Object.values(servicesByType).flat().find((x) => x.id === id);
      return s ? s.label : id;
    })
    .filter(Boolean);

  return (
    <div className="bg-[#0A0A0F] text-white font-inter overflow-x-hidden">
      <Header activeLink="/contact" />

      <section className="pt-20 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          {/* Left side */}
          <div className="col-span-1 lg:col-span-5 bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10 p-6 lg:p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px, #00D4FF 0%, transparent 50%)` }} />
            <div className="relative z-10 space-y-12 lg:space-y-16">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                  <MessageCircle className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs tracking-widest">GET IN TOUCH</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-black leading-[0.9] tracking-tight mb-8">
                  LET'S BUILD
                  <br />
                  <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">TOGETHER</span>
                </h1>

                <div className="w-32 h-[2px] bg-gradient-to-r from-[#00D4FF] to-transparent mb-8" />

                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">Ready to turn your vision into reality? Let's discuss how we can help you build breakthrough products and scale your venture.</p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#00D4FF] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                        {info.action ? <a href={info.action} className="text-lg font-medium hover:text-[#00D4FF] transition-colors">{info.value}</a> : <div className="text-lg font-medium">{info.value}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="col-span-1 lg:col-span-7 p-6 lg:p-16 flex items-center">
            <div className="w-full max-w-2xl">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 tracking-wider">NAME *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors" placeholder="Your name" />
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm text-gray-400 tracking-wider">EMAIL *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm text-gray-400 tracking-wider">COMPANY</label>
                      <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors" placeholder="Your company name" />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-4">
                    <label className="text-sm text-gray-400 tracking-wider">WHAT DO YOU NEED? *</label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="group" aria-label="Project types">
                      {projectTypes.map((type) => {
                        const Icon = type.icon;
                        const selected = selectedProjectTypes.includes(type.value);
                        return (
                          <button key={type.value} type="button" onClick={() => toggleProjectType(type.value)} aria-pressed={selected} className={`p-6 border rounded-xl transition-all duration-300 text-left flex items-start gap-4 ${selected ? "border-white/30 bg-white/5" : "border-white/10 hover:border-white/20"}`}>
                            <div className="w-8 h-8 rounded-md flex items-center justify-center mt-1" style={{ color: selected ? type.color : "#9CA3AF" }}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-lg font-medium mb-1">{type.label}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="text-sm text-gray-400">You can select multiple options</div>

                    {/* Multi-select Services dropdown */}
                    <div className="mt-4" ref={servicesRef}>
                      <label className="text-sm text-gray-400 tracking-wider">CHOOSE A SERVICE</label>

                      <div className="relative mt-2">
                        <button type="button" onClick={() => setServicesOpen((s) => !s)} className="w-full flex items-center justify-between px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-left">
                          <div className="flex items-center gap-3">
                            <div className="text-sm text-gray-300">
                              {chosenServicesLabels.length > 0 ? (
                                <span>{chosenServicesLabels.join(", ")}</span>
                              ) : availableServices.length === 0 ? (
                                <span className="text-gray-500">Select project type(s) first</span>
                              ) : (
                                <span className="text-gray-400">Choose one or more services</span>
                              )}
                            </div>
                          </div>

                          <div className="text-xs text-gray-400">{chosenServices.length > 0 ? `${chosenServices.length} selected` : (availableServices.length === 0 ? "" : "Select")}</div>
                        </button>

                        {/* dropdown panel */}
                        {servicesOpen && availableServices.length > 0 && (
                          <div className="absolute z-30 mt-2 w-full bg-[#07070b] border border-white/10 rounded-lg shadow-lg max-h-56 overflow-auto">
                            <ul className="divide-y divide-white/5">
                              {availableServices.map((s) => {
                                const checked = chosenServices.includes(s.id);
                                return (
                                  <li key={s.id} className="px-3">
                                    <label className="flex items-center gap-3 p-3 cursor-pointer hover:bg-white/2">
                                      <input type="checkbox" checked={checked} onChange={() => toggleServiceSelection(s.id)} className="w-4 h-4 rounded-sm accent-[#00D4FF]" />
                                      <span className="text-sm text-white">{s.label}</span>
                                    </label>
                                  </li>
                                );
                              })}
                            </ul>
                            <div className="p-3 flex justify-end gap-2">
                              <button type="button" onClick={() => { setChosenServices([]); setServicesOpen(false); }} className="text-sm text-gray-400 hover:text-white">Clear</button>
                              <button type="button" onClick={() => setServicesOpen(false)} className="px-3 py-1 bg-[#0b1220] rounded text-sm text-gray-200">Done</button>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="text-sm text-gray-500 mt-2">
                        {selectedProjectTypes.length > 0 ? (
                          <>Based on: {selectedProjectTypes.map((v) => projectTypes.find((p) => p.value === v)?.label || v).join(", ")}</>
                        ) : (
                          "No project type selected"
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm text-gray-400 tracking-wider">BUDGET RANGE</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white outline-none focus:border-[#00D4FF] transition-colors"
                      // ensure initial color right on mount (handled in effect below)
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-[#0A0A0F]">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm text-gray-400 tracking-wider">TIMELINE</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white outline-none focus:border-[#00D4FF] transition-colors"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option} className="bg-[#0A0A0F]">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400 tracking-wider">PROJECT DETAILS *</label>
                    <textarea name="message" required value={formData.message} onChange={handleInputChange} rows={6} className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00D4FF] transition-colors resize-none" placeholder="Tell us about your project, goals, and challenges. The more detail, the better we can help." />
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" disabled={isSubmitting} className={`w-full py-6 bg-gradient-to-r from-[#00D4FF] to-[#0EA5E9] text-black font-bold text-lg tracking-wider hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
                  {isSubmitting ? <><div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />SENDING MESSAGE...</> : <>SEND MESSAGE<Send className="w-5 h-5" /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
