"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Syringe, Star, Shield, Clock, MapPin, Award, Heart, Stethoscope } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

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

// DNA double-helix SVG path generator
function DnaHelix() {
  const points = Array.from({ length: 18 }, (_, i) => i);
  return (
    <svg
      className="absolute left-[2%] top-[5%] h-[90%] w-16 pointer-events-none opacity-[0.04]"
      viewBox="0 0 60 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Strand A */}
      <motion.path
        d={points
          .map((i) => {
            const y = (i / (points.length - 1)) * 600;
            const x = 30 + 22 * Math.sin((i / (points.length - 1)) * Math.PI * 5);
            return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
          })
          .join(" ")}
        stroke="#3498DB"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={{ strokeDashoffset: [0, -600] }}
        strokeDasharray="600"
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* Strand B (offset by half period) */}
      <motion.path
        d={points
          .map((i) => {
            const y = (i / (points.length - 1)) * 600;
            const x = 30 - 22 * Math.sin((i / (points.length - 1)) * Math.PI * 5);
            return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
          })
          .join(" ")}
        stroke="#F0A830"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={{ strokeDashoffset: [0, -600] }}
        strokeDasharray="600"
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0.3 }}
      />
      {/* Cross rungs */}
      {points.filter((_, i) => i % 2 === 1).map((i) => {
        const y = (i / (points.length - 1)) * 600;
        const xA = 30 + 22 * Math.sin((i / (points.length - 1)) * Math.PI * 5);
        const xB = 30 - 22 * Math.sin((i / (points.length - 1)) * Math.PI * 5);
        return (
          <line
            key={i}
            x1={xA.toFixed(1)}
            y1={y.toFixed(1)}
            x2={xB.toFixed(1)}
            y2={y.toFixed(1)}
            stroke="#2ECC71"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        );
      })}
    </svg>
  );
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
    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          mouseX.set(e.clientX - (rect.left + rect.width / 2));
          mouseY.set(e.clientY - (rect.top + rect.height / 2));
        }
        rafId = null;
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative h-[calc(100vh-72px)] max-h-[900px] min-h-[500px] sm:min-h-[580px] md:min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-sunshine via-white to-peach/30"
      ref={containerRef}
    >
      {/* === WORLD-CLASS LAYER 1: Interactive particle network === */}
      <ParticleCanvas />

      {/* === WORLD-CLASS LAYER 2: DNA helix left edge === */}
      <DnaHelix />

      {/* === WORLD-CLASS LAYER 3: Animated radial aurora behind hero === */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(52,152,219,0.07), transparent 70%)",
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 80% 60%, rgba(240,168,48,0.06), transparent 65%)",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

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
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
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

        {/* === WORLD-CLASS: Rotating halo ring around doctor === */}
        <motion.div
          className="absolute left-[22%] top-[8%] bottom-[8%] right-[4%] rounded-full pointer-events-none"
          style={{
            border: "1px dashed rgba(52,152,219,0.12)",
            borderRadius: "50%",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-[18%] top-[5%] bottom-[5%] right-[1%] rounded-full pointer-events-none"
          style={{
            border: "1px dashed rgba(240,168,48,0.08)",
            borderRadius: "50%",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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

        {/* ── Credential badges with arrow connectors ── */}
        {(
          [
            {
              label: "NICU",
              sub: "Specialist",
              color: "from-coral to-rose-500",
              shadowColor: "rgba(255,107,107,0.45)",
              icon: Heart,
              top: "12%",
              left: "14%",
              floatY: [-6, 0, -6],
              arrowDir: "right" as const,
            },
            {
              label: "25+ Yrs",
              sub: "Experience",
              color: "from-sky to-blue-500",
              shadowColor: "rgba(52,152,219,0.45)",
              icon: Award,
              top: "33%",
              left: "8%",
              floatY: [-4, 4, -4],
              arrowDir: "right" as const,
            },
            {
              label: "PICU",
              sub: "Expert",
              color: "from-forest to-emerald-600",
              shadowColor: "rgba(46,204,113,0.45)",
              icon: Stethoscope,
              top: "56%",
              left: "12%",
              floatY: [-5, 2, -5],
              arrowDir: "right" as const,
            },
            {
              label: "4.1 ★",
              sub: "Google Rating",
              color: "from-honey to-amber-500",
              shadowColor: "rgba(240,168,48,0.45)",
              icon: Star,
              top: "18%",
              right: "10%",
              floatY: [-6, 1, -6],
              arrowDir: "left" as const,
            },
            {
              label: "MD",
              sub: "Pediatrics",
              color: "from-midnight to-slate-600",
              shadowColor: "rgba(28,45,63,0.45)",
              icon: Award,
              top: "43%",
              right: "8%",
              floatY: [-4, 3, -4],
              arrowDir: "left" as const,
            },
          ] as const
        ).map((badge, i) => {
          const isRight = badge.arrowDir === "right";
          return (
            <motion.div
              key={badge.label}
              className="absolute pointer-events-auto z-30 flex items-center"
              style={{
                top: badge.top,
                left: "left" in badge ? badge.left : undefined,
                right: "right" in badge ? badge.right : undefined,
                flexDirection: isRight ? "row" : "row-reverse",
              }}
              initial={{ opacity: 0, x: isRight ? -30 : 30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.2, type: "spring", stiffness: 180, damping: 18 }}
              whileHover={{ scale: 1.08 }}
            >
              {/* Badge pill */}
              <motion.div
                animate={{ y: [...badge.floatY] }}
                transition={{ duration: 3.2 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                className={`relative flex items-center gap-2.5 bg-gradient-to-br ${badge.color} text-white pl-3 pr-4 py-2.5 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20`}
                style={{ boxShadow: `0 8px 24px -4px ${badge.shadowColor}` }}
              >
                {/* Live pulse dot */}
                <span className="relative flex-shrink-0">
                  <motion.span
                    className="absolute inline-flex w-full h-full rounded-full bg-white/60"
                    animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-white" />
                </span>

                <badge.icon className="w-4 h-4 flex-shrink-0 opacity-90" />
                <div>
                  <p className="font-extrabold text-xs leading-none tracking-wide">{badge.label}</p>
                  <p className="text-white/70 text-[10px] leading-none mt-0.5">{badge.sub}</p>
                </div>
              </motion.div>

              {/* Arrow connector — looping march animation */}
              <div
                className="flex items-center mx-1.5 overflow-hidden"
                style={{ width: 36, flexDirection: isRight ? "row" : "row-reverse" }}
              >
                {[0, 1, 2].map((dot) => (
                  <motion.svg
                    key={dot}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className="flex-shrink-0"
                    style={{ marginRight: isRight ? 2 : 0, marginLeft: isRight ? 0 : 2 }}
                    animate={{ opacity: [0, 1, 0], x: isRight ? ["-4px", "0px", "4px"] : ["4px", "0px", "-4px"] }}
                    transition={{
                      duration: 1.0,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: dot * 0.22,
                    }}
                  >
                    <polygon
                      points={isRight ? "0,1 9,5 0,9" : "9,1 0,5 9,9"}
                      fill="rgba(52,152,219,0.55)"
                    />
                  </motion.svg>
                ))}
              </div>
            </motion.div>
          );
        })}

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 shadow-sm border border-sky/10"
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
              className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-midnight leading-[1.08] mb-4"
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
                    className={`absolute -bottom-2 left-0 h-[3px] sm:h-[5px] rounded-full ${currentWord.underline}`}
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
              className="text-sm sm:text-base lg:text-lg text-slate max-w-xl mb-6 leading-relaxed"
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
                className="magnetic-btn group inline-flex items-center gap-2.5 bg-gradient-to-r from-honey to-honey-dark text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-honey/30 hover:shadow-honey/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/vaccination"
                className="magnetic-btn group inline-flex items-center gap-2.5 bg-white text-midnight font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-midnight/5 hover:shadow-midnight/10 border border-midnight/10 hover:border-sky/30 hover:text-sky transition-all duration-300"
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
