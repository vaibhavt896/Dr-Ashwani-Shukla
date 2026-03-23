"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const totalMs = duration * 1000;
    let rafId: number;

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / totalMs, 1);
      // Ease-out cubic — fast start, smooth finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(update);
      }
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  );
}
