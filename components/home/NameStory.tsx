"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
      className="relative py-24 lg:py-36 bg-white overflow-hidden"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-sunshine)_0%,_transparent_70%)]" />

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
        {/* Devanagari */}
        <AnimatedSection>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-7xl sm:text-8xl lg:text-9xl font-bold text-honey/80 animate-glow select-none leading-none">
              शवेता
            </span>
          </motion.div>
        </AnimatedSection>

        {/* English transliteration */}
        <AnimatedSection delay={0.3}>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight mb-6">
            SHWETA
          </h2>
        </AnimatedSection>

        {/* Translation */}
        <AnimatedSection delay={0.5}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-honey" />
            <p className="text-xl sm:text-2xl text-slate font-medium italic">
              Pure. Bright. A child&apos;s name for a child&apos;s clinic.
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-honey" />
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

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-12 mx-auto w-24 h-1 bg-gradient-to-r from-sky via-honey to-sky rounded-full"
          style={{ originX: 0.5 }}
        />
      </motion.div>
    </section>
  );
}
