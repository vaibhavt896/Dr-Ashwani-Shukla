"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [visible, setVisible] = useState(false);

  // Exact cursor position (inner dot)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring-lagged ring
  const ringX = useSpring(dotX, { stiffness: 120, damping: 16, mass: 0.08 });
  const ringY = useSpring(dotY, { stiffness: 120, damping: 16, mass: 0.08 });

  useEffect(() => {
    setMounted(true);

    // Only enable on pointer-fine (desktop mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor]"
      );
      setHovering(!!el);
    };

    const onDown = () => setPressing(true);
    const onUp = () => setPressing(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  const ringSize = pressing ? 22 : hovering ? 52 : 36;

  return (
    <>
      {/* Outer aura ring — spring lagged */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1.5px solid",
          mixBlendMode: "normal",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? 1 : 0,
          borderColor: hovering ? "rgba(240,168,48,0.7)" : "rgba(52,152,219,0.5)",
          scale: pressing ? 0.85 : 1,
        }}
        transition={{ width: { duration: 0.25 }, height: { duration: 0.25 }, scale: { duration: 0.1 } }}
      />

      {/* Inner glow dot — follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 6 : 4,
          height: hovering ? 6 : 4,
          background: hovering
            ? "rgba(240,168,48,0.95)"
            : "rgba(52,152,219,0.9)",
          opacity: visible ? 1 : 0,
          boxShadow: hovering
            ? "0 0 12px 3px rgba(240,168,48,0.5)"
            : "0 0 8px 2px rgba(52,152,219,0.4)",
        }}
      />
    </>
  );
}
