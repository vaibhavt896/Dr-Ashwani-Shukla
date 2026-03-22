"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Star, Quote, Heart, Shield, Sparkles } from "lucide-react";

const reviews = [
  {
    quote: "Best paediatrician in Kanpur. You can blindly trust him for your children. He is really God for kids.",
    author: "Neha S.",
    tag: "General Care",
    rating: 5,
    accent: "#6366F1",
    accentBg: "rgba(99,102,241,0.08)",
    floatDuration: 4.2,
    floatDelay: 0,
    floatAmp: 14,
  },
  {
    quote: "When my premature baby needed NICU care, Dr. Shukla was there around the clock. His expert handling saved my child.",
    author: "Amit K.",
    tag: "NICU Parent",
    rating: 5,
    accent: "#F43F5E",
    accentBg: "rgba(244,63,94,0.08)",
    floatDuration: 5.1,
    floatDelay: 0.6,
    floatAmp: 10,
  },
  {
    quote: "Most humble doctor you'll ever meet. Highly experienced, professional, and the clinic feels child-friendly.",
    author: "Sara K.",
    tag: "Pediatrics",
    rating: 5,
    accent: "#10B981",
    accentBg: "rgba(16,185,129,0.08)",
    floatDuration: 4.7,
    floatDelay: 1.2,
    floatAmp: 12,
  },
  {
    quote: "Our family paediatrician for 15 years. All three children under his care — his dedication is unmatched.",
    author: "Priya M.",
    tag: "15 Year Family",
    rating: 5,
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.08)",
    floatDuration: 5.8,
    floatDelay: 0.3,
    floatAmp: 16,
  },
  {
    quote: "Exceptional care — clean, well-maintained with all best facilities. Staff is very helpful and all vaccinations available.",
    author: "Meena R.",
    tag: "Vaccination",
    rating: 5,
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.08)",
    floatDuration: 4.5,
    floatDelay: 0.9,
    floatAmp: 11,
  },
  {
    quote: "His patience and calm during emergencies is incredible. I drove from Lucknow just because I trust him.",
    author: "Rohit V.",
    tag: "Emergency",
    rating: 5,
    accent: "#06B6D4",
    accentBg: "rgba(6,182,212,0.08)",
    floatDuration: 6.1,
    floatDelay: 1.5,
    floatAmp: 13,
  },
];

// Scattered absolute positions for desktop — organic, not grid
const POSITIONS = [
  { top: "2%",  left: "0%",   w: 300, rotate: -2.5, depth: 1.0 },
  { top: "5%",  left: "36%",  w: 320, rotate: 1.5,  depth: 0.85 },
  { top: "3%",  left: "70%",  w: 290, rotate: -1.2, depth: 0.9 },
  { top: "50%", left: "4%",   w: 310, rotate: 2.0,  depth: 0.9 },
  { top: "48%", left: "40%",  w: 330, rotate: -1.8, depth: 1.0 },
  { top: "52%", left: "72%",  w: 295, rotate: 1.0,  depth: 0.85 },
];

function ReviewCard({
  review,
  pos,
  mouseX,
  mouseY,
}: {
  review: typeof reviews[0];
  pos: typeof POSITIONS[0];
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
}) {
  const [hovered, setHovered] = useState(false);
  const parallaxX = useTransform(mouseX, [-600, 600], [-10 * pos.depth, 10 * pos.depth]);
  const parallaxY = useTransform(mouseY, [-400, 400], [-8 * pos.depth, 8 * pos.depth]);

  const initials = review.author.split(" ").map((w) => w[0]).join("");

  return (
    <motion.div
      className="absolute"
      style={{
        top: pos.top,
        left: pos.left,
        width: pos.w,
        x: parallaxX,
        y: parallaxY,
        zIndex: hovered ? 20 : 1,
      }}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: reviews.indexOf(review) * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Independent float */}
      <motion.div
        animate={{ y: [-review.floatAmp / 2, review.floatAmp / 2, -review.floatAmp / 2] }}
        transition={{ duration: review.floatDuration, repeat: Infinity, ease: "easeInOut", delay: review.floatDelay }}
      >
        {/* Hover lift */}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          animate={{
            scale: hovered ? 1.04 : 1,
            rotate: hovered ? 0 : pos.rotate,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="relative cursor-default"
        >
          {/* Glow aura — blooms on hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.1 : 0.95 }}
            transition={{ duration: 0.35 }}
            className="absolute -inset-3 rounded-[28px] blur-2xl pointer-events-none"
            style={{ background: review.accent, opacity: 0.2 }}
          />

          {/* Card */}
          <div
            className="relative rounded-[22px] bg-white overflow-hidden"
            style={{
              boxShadow: hovered
                ? `0 24px 60px -10px ${review.accent}30, 0 8px 24px -4px rgba(0,0,0,0.08)`
                : `0 8px 30px -8px rgba(0,0,0,0.10), 0 2px 8px -2px rgba(0,0,0,0.05)`,
              border: `1px solid ${review.accent}20`,
              transition: "box-shadow 0.4s ease",
            }}
          >
            {/* Colored top strip with gradient */}
            <div
              className="h-[3px] w-full"
              style={{ background: `linear-gradient(90deg, ${review.accent}, ${review.accent}60, transparent)` }}
            />

            {/* Soft tinted background */}
            <div className="absolute inset-0" style={{ background: review.accentBg }} />

            <div className="relative p-5">
              {/* Top row: tag + stars */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${review.accent}15`, color: review.accent }}
                >
                  {review.tag}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote
                  className="absolute -top-1 -left-1 w-5 h-5 opacity-15"
                  style={{ color: review.accent }}
                />
                <p className="text-[#0F172A]/80 text-[13px] leading-[1.65] pl-4">
                  {review.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${review.accent}, ${review.accent}90)` }}
                >
                  <span className="text-white font-extrabold text-[10px]">{initials}</span>
                </div>
                <div>
                  <p className="text-[#0F172A] font-bold text-xs leading-none">{review.author}</p>
                  <p className="text-[#94A3B8] text-[10px] mt-0.5">Google Review</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8%" });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 60, damping: 25 });
  const mouseY = useSpring(rawY, { stiffness: 60, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden bg-[#FAFBFF]">

      {/* Soft aurora blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 mb-5 px-4 py-1.5 rounded-full border border-indigo-100 bg-indigo-50/60"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-500 text-xs font-semibold tracking-wide uppercase">139+ Google Reviews · 4.1 Stars</span>
          </motion.div>

          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-tight mb-4">
            In their{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #6366F1 0%, #F43F5E 50%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              own words
            </span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-md mx-auto">
            Real parents. Real stories. 25 years of trust across Kanpur.
          </p>
        </motion.div>

        {/* Desktop — floating scattered canvas */}
        <div
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          className="relative hidden lg:block"
          style={{ height: 700 }}
        >
          {isInView && reviews.map((review, i) => (
            <ReviewCard
              key={i}
              review={review}
              pos={POSITIONS[i]}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}

          {/* Floating decorative elements between cards */}
          {[
            { top: "28%", left: "32%", color: "#6366F1", size: 8, dur: 3.1 },
            { top: "42%", left: "62%", color: "#F43F5E", size: 6, dur: 4.2 },
            { top: "18%", left: "52%", color: "#10B981", size: 10, dur: 3.7 },
            { top: "65%", left: "28%", color: "#F59E0B", size: 7, dur: 5.0 },
            { top: "75%", left: "58%", color: "#8B5CF6", size: 9, dur: 3.4 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                background: dot.color,
                opacity: 0.3,
              }}
              animate={{ y: [-8, 8, -8], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
          ))}
        </div>

        {/* Mobile — clean stacked cards */}
        <div className="lg:hidden space-y-4">
          {reviews.map((review, i) => {
            const initials = review.author.split(" ").map((w) => w[0]).join("");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: review.floatDuration, repeat: Infinity, ease: "easeInOut", delay: review.floatDelay }}
                  className="rounded-[22px] bg-white overflow-hidden"
                  style={{ boxShadow: `0 8px 30px -8px rgba(0,0,0,0.10)`, border: `1px solid ${review.accent}20` }}
                >
                  <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${review.accent}, transparent)` }} />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${review.accent}15`, color: review.accent }}>
                        {review.tag}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                      </div>
                    </div>
                    <p className="text-[#0F172A]/80 text-sm leading-relaxed mb-4">"{review.quote}"</p>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${review.accent}, ${review.accent}90)` }}>
                        <span className="text-white font-extrabold text-[10px]">{initials}</span>
                      </div>
                      <div>
                        <p className="text-[#0F172A] font-bold text-xs">{review.author}</p>
                        <p className="text-[#94A3B8] text-[10px]">Google Review</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex items-center justify-center gap-12"
        >
          {[
            { value: "139+", label: "Reviews on Google", color: "#6366F1" },
            { value: "4.1★", label: "Average Rating",    color: "#F59E0B" },
            { value: "25+",  label: "Years of Care",     color: "#10B981" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p
                className="font-[var(--font-display)] text-3xl font-extrabold leading-none"
                style={{ color: s.color }}
              >
                {s.value}
              </p>
              <p className="text-[#94A3B8] text-xs font-medium mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
