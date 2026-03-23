"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import OrbitalRings from "@/components/ui/OrbitalRings";

export default function NameStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-36 bg-white overflow-hidden"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-sunshine)_0%,_transparent_70%)]" />

      {/* === WORLD-CLASS: Orbital rings system around the whole section center === */}
      <OrbitalRings />

      {/* === WORLD-CLASS: Animated grain/noise texture overlay === */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
          mixBlendMode: "multiply",
          opacity: 0.025,
        }}
      />

      {/* Floating particles — fixed positions to avoid hydration mismatch */}
      {[
        { top: "18%", left: "8%",  duration: 3.2, delay: 0 },
        { top: "25%", left: "22%", duration: 4.1, delay: 0.4 },
        { top: "72%", left: "14%", duration: 3.8, delay: 0.8 },
        { top: "55%", left: "35%", duration: 5.0, delay: 1.2 },
        { top: "33%", left: "50%", duration: 4.4, delay: 0.2 },
        { top: "80%", left: "60%", duration: 3.6, delay: 1.6 },
        { top: "20%", left: "70%", duration: 4.8, delay: 0.6 },
        { top: "65%", left: "80%", duration: 3.3, delay: 1.0 },
        { top: "42%", left: "90%", duration: 4.2, delay: 1.4 },
        { top: "85%", left: "42%", duration: 5.2, delay: 0.3 },
        { top: "15%", left: "55%", duration: 3.9, delay: 1.8 },
        { top: "50%", left: "6%",  duration: 4.6, delay: 0.7 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-honey/40"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      <motion.div
        style={{ opacity, scale }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* === WORLD-CLASS: Devanagari with multi-layer glow + letter stagger === */}
        <AnimatedSection>
          <motion.div
            className="mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Outer glow layer */}
            <motion.span
              className="absolute inset-0 text-5xl sm:text-7xl lg:text-9xl font-bold leading-none select-none blur-2xl"
              style={{ color: "rgba(240,168,48,0.25)" }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              शवेता
            </motion.span>

            {/* Main text */}
            <span className="relative text-5xl sm:text-7xl lg:text-9xl font-bold text-honey/80 animate-glow select-none leading-none">
              शवेता
            </span>

            {/* === WORLD-CLASS: Sparkle particles burst on load === */}
            {[
              { x: -60, y: -40, delay: 0.8, color: "#3498DB" },
              { x: 70,  y: -50, delay: 1.0, color: "#F0A830" },
              { x: -80, y: 20,  delay: 1.2, color: "#2ECC71" },
              { x: 90,  y: 30,  delay: 0.9, color: "#FF6B6B" },
              { x: 20,  y: -70, delay: 1.1, color: "#3498DB" },
              { x: -30, y: 60,  delay: 1.3, color: "#F0A830" },
            ].map((spark, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full pointer-events-none"
                style={{ background: spark.color }}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                whileInView={{
                  x: [0, spark.x * 1.5, spark.x],
                  y: [0, spark.y * 1.5, spark.y],
                  scale: [0, 1.5, 0.8],
                  opacity: [0, 1, 0.4],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: spark.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        </AnimatedSection>

        {/* English transliteration */}
        <AnimatedSection delay={0.3}>
          {/* === WORLD-CLASS: Letter-by-letter stagger reveal === */}
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight mb-6 overflow-hidden">
            {"SHWETA".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 40, rotateX: -60 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ perspective: "500px" }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </AnimatedSection>

        {/* Translation */}
        <AnimatedSection delay={0.5}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              className="h-px bg-gradient-to-r from-transparent to-honey"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <p className="text-base sm:text-xl text-slate font-medium italic">
              Pure. Bright. A child&apos;s name for a child&apos;s clinic.
            </p>
            <motion.div
              className="h-px bg-gradient-to-l from-transparent to-honey"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>
        </AnimatedSection>

        {/* Emotional subtitle */}
        <AnimatedSection delay={0.7}>
          <p className="text-base sm:text-lg text-slate/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Dr. Ashwani Shukla and his wife Alka named their clinic after what
            every child deserves — <strong className="text-midnight">a pure start and a bright future.</strong>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.9}>
          <p className="text-sm text-slate/60 max-w-lg mx-auto leading-relaxed">
            When a terrified parent brings a sick child at 2 AM, they&apos;re not visiting a
            &quot;healthcare facility&quot; — they&apos;re trusting a father who named his life&apos;s
            work after his own child.
          </p>
        </AnimatedSection>

        {/* === WORLD-CLASS: Animated gradient decorative line === */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-12 mx-auto w-24 h-1 rounded-full"
          style={{
            originX: 0.5,
            background: "linear-gradient(90deg, #3498DB, #F0A830, #2ECC71, #3498DB)",
            backgroundSize: "200% 100%",
          }}
        />
      </motion.div>
    </section>
  );
}
