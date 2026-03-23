"use client";

import { motion } from "framer-motion";

// Realistic ECG: P wave → QRS complex → T wave → long baseline → repeat
// ViewBox: 0 0 500 60, y=30 is baseline
const ECG_D =
  "M0,30 L60,30 " +
  // Cycle 1
  "L72,30 L78,22 L84,30 " +           // P wave
  "L92,30 L96,27 L100,0 L104,55 L108,30 " + // QRS
  "L116,30 L120,24 L128,20 L136,30 " + // T wave
  "L180,30 " +                          // long baseline
  // Cycle 2
  "L192,30 L198,22 L204,30 " +
  "L212,30 L216,27 L220,0 L224,55 L228,30 " +
  "L236,30 L240,24 L248,20 L256,30 " +
  "L300,30 " +
  // Cycle 3
  "L312,30 L318,22 L324,30 " +
  "L332,30 L336,27 L340,0 L344,55 L348,30 " +
  "L356,30 L360,24 L368,20 L376,30 " +
  "L500,30";

// Approximate total SVG path length for dasharray
const PATH_LENGTH = 650;

interface HeartbeatLineProps {
  className?: string;
  color?: "sky" | "coral" | "honey";
  height?: number;
}

const COLOR_MAP = {
  sky: { line: "#3498DB", glow: "rgba(52,152,219,", dot: "#3498DB", grad1: "#3498DB", grad2: "#2ECC71" },
  coral: { line: "#FF6B6B", glow: "rgba(255,107,107,", dot: "#FF6B6B", grad1: "#FF6B6B", grad2: "#F0A830" },
  honey: { line: "#F0A830", glow: "rgba(240,168,48,", dot: "#F0A830", grad1: "#F0A830", grad2: "#3498DB" },
};

export default function HeartbeatLine({
  className = "",
  color = "sky",
  height = 60,
}: HeartbeatLineProps) {
  const c = COLOR_MAP[color];
  const filterId = `ecg-glow-${color}`;
  const gradId = `ecg-grad-${color}`;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 60"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Glow blur filter */}
          <filter id={filterId} x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Horizontal gradient fade */}
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={c.grad1} stopOpacity="0" />
            <stop offset="15%" stopColor={c.grad1} stopOpacity="1" />
            <stop offset="55%" stopColor={c.grad2} stopOpacity="1" />
            <stop offset="85%" stopColor={c.grad1} stopOpacity="1" />
            <stop offset="100%" stopColor={c.grad1} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Static dim background trace */}
        <path
          d={ECG_D}
          fill="none"
          stroke={`${c.glow}0.08)`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated drawing line */}
        <motion.path
          d={ECG_D}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${filterId})`}
          strokeDasharray={PATH_LENGTH}
          animate={{ strokeDashoffset: [PATH_LENGTH, -PATH_LENGTH] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.3,
          }}
        />

        {/* Scanning glow dot that travels with the wave front */}
        <motion.circle
          r={4}
          fill={c.dot}
          filter={`url(#${filterId})`}
          animate={{
            /* Keyframe positions matching QRS peak at t=0.33, 0.65 */
            cx: [0, 60, 84, 100, 104, 108, 136, 220, 228, 256, 340, 344, 348, 376, 500],
            cy: [30, 30, 30, 0, 55, 30, 30, 0, 30, 30, 0, 55, 30, 30, 30],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.3,
            times: [0, 0.092, 0.13, 0.154, 0.16, 0.166, 0.209, 0.338, 0.35, 0.394, 0.523, 0.529, 0.535, 0.578, 1],
          }}
        />
      </svg>
    </div>
  );
}
