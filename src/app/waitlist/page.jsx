"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WaitlistPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        teamSize: "",
        interest: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-[#0A0A0F] min-h-screen text-white font-inter selection:bg-[#00D4FF]/30 selection:text-[#00D4FF]">
            <Header activeLink="/waitlist" />

            <main className="relative pt-32 pb-20 px-6 md:px-16 min-h-screen flex flex-col justify-center overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-[#00D4FF] mb-6">
                                <Sparkles className="w-3 h-3" />
                                EARLY ACCESS
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-6">
                                Join the <br />
                                <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                                    Venturemond
                                </span>{" "}
                                <br />
                                Workspace
                            </h1>
                            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                                Be the first to experience our private, intelligent workspace for
                                modern teams. Secure, seamless, and built for scale.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                                <span>Priority access to new features</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                                <span>Exclusive community invites</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                                <span>Early bird pricing for life</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20 rounded-3xl blur-xl transform rotate-3" />

                        <div className="relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                                                Name <span className="text-[#EC4899]">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                                                placeholder="Jane Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                                                Email <span className="text-[#EC4899]">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                                                placeholder="jane@company.com"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="company" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                                                    placeholder="Acme Inc."
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="teamSize" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                                                    Team Size
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="teamSize"
                                                        name="teamSize"
                                                        value={formData.teamSize}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all"
                                                    >
                                                        <option value="" disabled>Select size</option>
                                                        <option value="1-5" className="bg-[#0A0A0F]">1–5</option>
                                                        <option value="6-20" className="bg-[#0A0A0F]">6–20</option>
                                                        <option value="20+" className="bg-[#0A0A0F]">20+</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="interest" className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                                                Why you're interested
                                            </label>
                                            <textarea
                                                id="interest"
                                                name="interest"
                                                rows={3}
                                                value={formData.interest}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all resize-none"
                                                placeholder="Tell us what you're building..."
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-black font-bold text-sm tracking-widest overflow-hidden rounded-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        <span className="relative flex items-center justify-center gap-2">
                                            JOIN WAITLIST
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </form>
                            ) : (
                                <div className="py-20 flex flex-col items-center text-center space-y-6 animate-fadeIn">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                                        <Check className="w-10 h-10 text-black" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">You're in!</h3>
                                    <p className="text-gray-400 max-w-xs mx-auto leading-relaxed">
                                        We'll notify you when early access opens. Welcome to the future of work.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-sm text-[#00D4FF] hover:text-white transition-colors mt-8"
                                    >
                                        Register another email
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
