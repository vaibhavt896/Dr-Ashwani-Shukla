"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Syringe, Star, Shield, Clock, MapPin, Award, Heart, Stethoscope } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const floatingShapes = [
  { size: 80, color: "bg-sky/10", top: "10%", left: "5%", delay: 0 },
  { size: 120, color: "bg-honey/10", top: "20%", right: "8%", delay: 1 },
  { size: 60, color: "bg-mint", top: "60%", left: "10%", delay: 2 },
  { size: 90, color: "bg-peach", top: "70%", right: "5%", delay: 0.5 },
  { size: 50, color: "bg-sky/8", top: "40%", left: "80%", delay: 1.5 },
  { size: 70, color: "bg-honey/8", top: "80%", left: "50%", delay: 2.5 },
];

const trustItems = [
  { icon: Star, label: "25+ Years Experience" },
  { icon: Shield, label: "NICU & PICU Specialist" },
  { icon: MapPin, label: "2 Locations in Kanpur" },
  { icon: Clock, label: "Emergency Care Available" },
];

// Typewriter cycling words — three emotionally resonant variations
const CYCLING_WORDS = [
  {
    prefix: "a",
    word: "Parent",
    gradient: "from-honey via-amber-400 to-honey-dark",
    glow: "rgba(245,158,11,0.35)",
    underline: "bg-honey/40",
  },
  {
    prefix: "a",
    word: "Guardian",
    gradient: "from-sky via-blue-400 to-sky-dark",
    glow: "rgba(56,189,248,0.35)",
    underline: "bg-sky/40",
  },
  {
    prefix: "a",
    word: "Family",
    gradient: "from-forest via-emerald-400 to-emerald-600",
    glow: "rgba(16,185,129,0.35)",
    underline: "bg-forest/40",
  },
];

function useTypewriter() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");

  useEffect(() => {
    const current = CYCLING_WORDS[wordIdx].word;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), 1800);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("erasing"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
        return () => clearTimeout(t);
      } else {
        setWordIdx((i) => (i + 1) % CYCLING_WORDS.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIdx]);

  return { wordIdx, displayed, phase };
}


export default function Hero() {
  const { wordIdx, displayed, phase } = useTypewriter();
  const currentWord = CYCLING_WORDS[wordIdx];
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [8, -8]);
  const rotateY = useTransform(springX, [-300, 300], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-[calc(100vh-72px)] max-h-[900px] min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-sunshine via-white to-peach/30" ref={containerRef}>
      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color} animate-blob`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            animationDelay: `${shape.delay}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: shape.delay * 0.3 }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #1C2D3F 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Doctor image — absolutely fills right portion, full height */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block pointer-events-none">

        {/* Ambient glow blobs behind doctor */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 top-1/4 w-72 h-72 rounded-full bg-sky/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-1/3 bottom-1/4 w-56 h-56 rounded-full bg-honey/20 blur-3xl"
        />

        {/* Left edge fade — blends into page */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-sunshine via-sunshine/80 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-white/70 to-transparent" />

        {/* Doctor photo */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative w-full h-full"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Shimmer sweep on photo */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 5 }}
            className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-12 pointer-events-none"
          />
          <Image
            src="/Dr Ashwani Shukla.png"
            alt="Dr. Ashwani Kumar Shukla — Pediatrician & Neonatologist, Kanpur"
            fill
            className="object-contain object-[center_20%]"
            priority
            sizes="(max-width: 1280px) 50vw, 720px"
          />
        </motion.div>

        {/* Credential badges — hugging the doctor's figure edges */}
        {[
          { label: "NICU",     sub: "Specialist",    color: "from-coral/90 to-rose-500/90",     icon: Heart,       top: "14%", left: "18%" },
          { label: "25+ Yrs",  sub: "Experience",    color: "from-sky/90 to-blue-500/90",       icon: Award,       top: "34%", left: "12%" },
          { label: "PICU",     sub: "Expert",         color: "from-forest/90 to-emerald-600/90", icon: Stethoscope, top: "57%", left: "16%" },
          { label: "4.1 ★",   sub: "Google Rating",  color: "from-honey/90 to-amber-500/90",    icon: Star,        top: "20%", right: "14%" },
          { label: "MD",       sub: "Pediatrics",     color: "from-midnight/80 to-slate-700/90", icon: Award,       top: "44%", right: "12%" },
        ].map((badge, i) => (
          <motion.div
            key={badge.label}
            className="absolute pointer-events-auto z-30"
            style={{ top: badge.top, left: (badge as {left?: string}).left, right: (badge as {right?: string}).right }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.18, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.12 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className={`relative flex items-center gap-2 bg-gradient-to-br ${badge.color} text-white px-3.5 py-2.5 rounded-2xl shadow-xl backdrop-blur-sm border border-white/25`}
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.2, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full"
              />
              <badge.icon className="w-4 h-4 flex-shrink-0" />
              <div>
                <p className="font-extrabold text-xs leading-none">{badge.label}</p>
                <p className="text-white/75 text-[10px] leading-none mt-0.5">{badge.sub}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Name tag — sits at bottom center of image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-auto whitespace-nowrap"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-white/70 text-center">
            <p className="font-[var(--font-display)] text-midnight font-extrabold text-sm leading-tight">
              Dr. Ashwani Kumar Shukla
            </p>
            <p className="text-slate text-xs font-medium mt-0.5">
              MBBS, MD — Pediatrics & Neonatology
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-sm border border-sky/10"
            >
              <span className="w-2 h-2 bg-forest rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate">
                Kanpur&apos;s Trusted Pediatric Care Since 2000
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-midnight leading-[1.08] mb-4"
            >
              Every Child Deserves{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky to-sky-dark bg-clip-text text-transparent">
                  a Doctor
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-honey/30 rounded-full -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ originX: 0 }}
                />
              </span>{" "}
              Who Cares Like{" "}
              {/* Typewriter cycling word — ghost reserves max width so layout never shifts */}
              <span className="relative inline-block whitespace-nowrap">
                {/* Ghost: invisible longest word locks the bounding box */}
                <span aria-hidden="true" className="invisible select-none">a&nbsp;Guardian</span>
                {/* Real content: absolutely overlaid, left-aligned */}
                <span className="absolute left-0 top-0 bottom-0 flex items-center">
                  {/* Glow bloom */}
                  <motion.span
                    className="absolute inset-0 rounded-lg blur-2xl -z-10"
                    animate={{ opacity: [0.4, 0.85, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ background: currentWord.glow }}
                  />
                  {/* Animated underline */}
                  <motion.span
                    key={`underline-${wordIdx}`}
                    className={`absolute -bottom-2 left-0 h-[5px] rounded-full ${currentWord.underline}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${(displayed.length / currentWord.word.length) * 100}%` }}
                    transition={{ duration: 0.05, ease: "linear" }}
                  />
                  {/* Prefix "a" with right margin for space */}
                  <span className={`bg-gradient-to-r ${currentWord.gradient} bg-clip-text text-transparent mr-[0.22em]`}>
                    {currentWord.prefix}
                  </span>
                  {/* Per-character animated letters */}
                  {displayed.split("").map((char, i) => (
                    <motion.span
                      key={`${wordIdx}-${i}`}
                      className={`bg-gradient-to-r ${currentWord.gradient} bg-clip-text text-transparent`}
                      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {/* Blinking cursor */}
                  <motion.span
                    className={`inline-block w-[3px] h-[0.85em] rounded-sm ml-[2px] align-middle bg-gradient-to-b ${currentWord.gradient}`}
                    animate={{ opacity: phase === "pausing" ? [1, 0, 1] : 1 }}
                    transition={{ duration: 0.6, repeat: phase === "pausing" ? Infinity : 0, ease: "easeInOut" }}
                  />
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base lg:text-lg text-slate max-w-xl mb-6 leading-relaxed"
            >
              <strong className="text-midnight">Dr. Ashwani Kumar Shukla</strong> — 25+ years of
              dedicated pediatric & neonatal care in Kanpur. Two clinics.
              One mission: <em>healthy, happy children.</em>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <Link
                href="/contact"
                className="magnetic-btn group inline-flex items-center gap-2.5 bg-gradient-to-r from-honey to-honey-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-honey/30 hover:shadow-honey/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/vaccination"
                className="magnetic-btn group inline-flex items-center gap-2.5 bg-white text-midnight font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-midnight/5 hover:shadow-midnight/10 border border-midnight/10 hover:border-sky/30 hover:text-sky transition-all duration-300"
              >
                <Syringe className="w-5 h-5" />
                Vaccination Schedule
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-sky" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column spacer — actual image is absolutely positioned above */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M0 50C240 80 480 20 720 50C960 80 1200 20 1440 50V80H0V50Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
