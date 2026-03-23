"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Heart, Shield, Baby } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/general-pediatrics", label: "General Pediatrics", icon: Baby },
      { href: "/services/vaccination", label: "Vaccination", icon: Shield },
      { href: "/nicu-picu", label: "NICU / PICU", icon: Heart },
      { href: "/services/growth-development", label: "Growth & Development", icon: Baby },
    ],
  },
  { href: "/nicu-picu", label: "NICU/PICU" },
  { href: "/vaccination", label: "Vaccination" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        rafId = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top emergency bar */}
      <div className="bg-midnight text-white text-sm py-2 px-4 flex items-center justify-center gap-4 relative z-[60]">
        <span className="hidden sm:inline opacity-80">24/7 Emergency Pediatric Care</span>
        <a
          href="tel:+919918601012"
          className="flex items-center gap-1.5 font-semibold text-honey hover:text-white transition-colors"
        >
          <Phone className="w-3.5 h-3.5 animate-pulse-gentle" />
          +91 99186 01012
        </a>
        <span className="opacity-40 hidden sm:inline">|</span>
        <a
          href="tel:+919918601013"
          className="hidden sm:flex items-center gap-1.5 font-semibold text-honey hover:text-white transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          +91 99186 01013
        </a>
      </div>

      {/* Main navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-midnight/5"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-sky to-sky-dark flex items-center justify-center shadow-lg shadow-sky/30 group-hover:shadow-sky/50 transition-shadow">
                  <span className="text-white font-[var(--font-display)] font-bold text-lg lg:text-xl">
                    श
                  </span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-honey rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-display)] font-bold text-midnight text-base lg:text-lg leading-tight tracking-tight">
                  Shweta Child Care
                </span>
                <span className="text-[10px] lg:text-xs text-slate font-medium tracking-wider uppercase">
                  Dr. Ashwani Shukla
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate hover:text-sky rounded-xl hover:bg-sky/5 transition-all"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl shadow-midnight/10 border border-midnight/5 p-2 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-sunshine transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-lg bg-sky/10 flex items-center justify-center group-hover/item:bg-sky/20 transition-colors">
                                <child.icon className="w-4 h-4 text-sky" />
                              </div>
                              <span className="text-sm font-medium text-midnight">
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-slate hover:text-sky rounded-xl hover:bg-sky/5 transition-all"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex magnetic-btn items-center gap-2 bg-gradient-to-r from-honey to-honey-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-honey/30 hover:shadow-honey/50 transition-all"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919918601012"
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-coral/10 text-coral hover:bg-coral/20 transition-colors"
                aria-label="Call emergency"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-midnight/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-midnight/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="p-5 pt-[72px] flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-midnight font-medium hover:bg-sunshine transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-midnight/10">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-honey to-honey-dark text-white font-semibold py-3.5 rounded-full shadow-lg"
                  >
                    Book Appointment
                  </Link>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="tel:+919918601012"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-coral/5 text-coral font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Rambagh: +91 99186 01012
                  </a>
                  <a
                    href="tel:+919918601013"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-coral/5 text-coral font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Barra: +91 99186 01013
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
