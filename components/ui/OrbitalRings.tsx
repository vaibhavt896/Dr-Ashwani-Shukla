"use client";

import { motion } from "framer-motion";

interface Ring {
  diameter: number;
  duration: number;
  direction: 1 | -1;
  dots: { color: string; startAngle: number; size: number }[];
  opacity: number;
  dashPattern: string;
}

const rings: Ring[] = [
  {
    diameter: 260,
    duration: 14,
    direction: 1,
    opacity: 0.18,
    dashPattern: "4 8",
    dots: [
      { color: "#3498DB", startAngle: 0,   size: 6 },
      { color: "#F0A830", startAngle: 180, size: 5 },
    ],
  },
  {
    diameter: 380,
    duration: 22,
    direction: -1,
    opacity: 0.13,
    dashPattern: "6 10",
    dots: [
      { color: "#2ECC71", startAngle: 60,  size: 5 },
      { color: "#3498DB", startAngle: 180, size: 4 },
      { color: "#F0A830", startAngle: 300, size: 5 },
    ],
  },
  {
    diameter: 500,
    duration: 34,
    direction: 1,
    opacity: 0.08,
    dashPattern: "3 12",
    dots: [
      { color: "#3498DB", startAngle: 45,  size: 4 },
      { color: "#FF6B6B", startAngle: 225, size: 3 },
    ],
  },
];

export default function OrbitalRings() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden scale-50 sm:scale-75 lg:scale-100"
      aria-hidden="true"
    >
      {rings.map((ring, ri) => {
        const r = ring.diameter / 2;
        return (
          <motion.div
            key={ri}
            className="absolute rounded-full"
            style={{
              width: ring.diameter,
              height: ring.diameter,
              border: `1px dashed rgba(52,152,219,${ring.opacity})`,
            }}
            animate={{ rotate: ring.direction === 1 ? 360 : -360 }}
            transition={{
              duration: ring.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {ring.dots.map((dot, di) => {
              const rad = (dot.startAngle * Math.PI) / 180;
              const x = r + r * Math.cos(rad) - dot.size / 2;
              const y = r + r * Math.sin(rad) - dot.size / 2;
              return (
                <div
                  key={di}
                  className="absolute rounded-full"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    left: x,
                    top: y,
                    background: dot.color,
                    boxShadow: `0 0 ${dot.size * 2}px ${dot.size}px ${dot.color}55`,
                  }}
                />
              );
            })}
          </motion.div>
        );
      })}

      {/* Central pulse ring */}
      <motion.div
        className="absolute rounded-full border border-honey/20"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        style={{ width: 120, height: 120 }}
      />
      <motion.div
        className="absolute rounded-full border border-sky/20"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.25, 0, 0.25],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
        style={{ width: 120, height: 120 }}
      />
    </div>
  );
}
