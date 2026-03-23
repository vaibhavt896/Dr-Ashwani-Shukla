"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt degrees. Default 14 */
  intensity?: number;
  /** Wrapper div className (handles perspective) */
  wrapperClassName?: string;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 14,
  wrapperClassName = "",
}: TiltCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, visible: false });

  const rawX = useMotionValue(0); // normalized -0.5 → 0.5
  const rawY = useMotionValue(0);

  const springCfg = { stiffness: 260, damping: 28 };
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]), springCfg);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]), springCfg);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(nx);
    rawY.set(ny);
    setSpot({
      x: ((nx + 0.5) * 100),
      y: ((ny + 0.5) * 100),
      visible: true,
    });
  };

  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setSpot((s) => ({ ...s, visible: false }));
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${wrapperClassName}`}
      style={{ perspective: "900px" }}
    >
      <motion.div
        className={`relative w-full h-full ${className}`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Mouse-tracking spotlight */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 transition-opacity duration-300"
          style={{
            opacity: spot.visible ? 1 : 0,
            background: `radial-gradient(220px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.13), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Depth lift: content sits slightly "above" the card surface */}
        <div style={{ transform: "translateZ(18px)" }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
