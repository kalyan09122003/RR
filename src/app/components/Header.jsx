"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  // Click outside drawer closes it
  useEffect(() => {
    function handleClick(e) {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Studio", href: "/studio" },
    { name: "SaaS", href: "/saas" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  // Active check
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    const seg1 = pathname.split("/")[1];
    const seg2 = href.split("/")[1];
    return seg1 === seg2;
  };

  return (
    <>
      {/* HEADER BAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#0A0A0F]/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 text-sm font-bold tracking-[0.2em]"
            >
              <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
              <div className="flex items-center gap-1">
                <span>VENTURE</span>
                <span className="text-[#00D4FF]">MOND</span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative text-xs tracking-wider transition-all ${isActive(item.href)
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {item.name.toUpperCase()}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#00D4FF] transition-all ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              ))}


            </nav>

            {/* MOBILE BUTTONS */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-[#00D4FF]"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-1/2 min-w-[280px] bg-[#0A0A0F]/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          borderTopLeftRadius: "24px",
          borderBottomLeftRadius: "24px",
        }}
      >
        <nav className="flex flex-col gap-2 pt-24 px-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`py-4 px-4 rounded-lg text-base ${isActive(item.href)
                ? "text-white font-semibold bg-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {item.name}
            </Link>
          ))}


        </nav>
      </aside>
    </>
  );
}
