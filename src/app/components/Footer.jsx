import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0F] text-white py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Logo & Description */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Venture Mond Logo" className="h-8 w-auto object-contain" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                Venture <span className="text-[#00D4FF]">Mond</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Venture Mond is a Next-Gen Venture Studio & SaaS Company. Innovating the Future, One Byte at a Time. Where ideas become products — and products become ventures that scale.
                        </p>
                    </div>

                    {/* Column 2: Explore */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Explore</h3>
                        <ul className="space-y-4">
                            <li><a href="/studio" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Studio</a></li>
                            <li><a href="/saas" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">SaaS</a></li>
                            <li><a href="/insights" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Insights</a></li>
                            <li><a href="/careers" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Careers</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#00D4FF] mt-0.5 shrink-0" />
                                <a href="mailto:hello@venturemond.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    hello@venturemond.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#EC4899] mt-0.5 shrink-0" />
                                <span className="text-gray-400 text-sm leading-relaxed">
                                    4th Floor, Bizness Square, Hitec City, Hyderabad – 500084
                                </span>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/venturemond" target="_blank" rel="noopener noreferrer" className="inline-block">
                                    <Linkedin className="w-6 h-6 text-[#00D4FF] hover:text-white transition-colors" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
                    © {new Date().getFullYear()} Venture Mond. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
