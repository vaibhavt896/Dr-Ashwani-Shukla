"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  colorIdx: number;
  opacity: number;
  baseOpacity: number;
  type: "dot" | "cross" | "ring";
  pulsePhase: number;
}

// Brand color palette (r, g, b)
const COLORS: [number, number, number][] = [
  [52, 152, 219],   // sky
  [240, 168, 48],   // honey
  [46, 204, 113],   // forest
  [255, 107, 107],  // coral (rare)
];

const COLOR_WEIGHTS = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3]; // sky dominant

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let mouseMoveRaf: number | null = null;
    const mouse = { x: -9999, y: -9999 };

    // Retina-aware sizing
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2x for performance
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Throttle mousemove via RAF — prevents 100+ calls/sec
    const onMouse = (e: MouseEvent) => {
      if (mouseMoveRaf) return;
      mouseMoveRaf = requestAnimationFrame(() => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouseMoveRaf = null;
      });
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener("mousemove", onMouse, { passive: true });
    canvas.addEventListener("mouseleave", onMouseLeave);

    // Pause animation when canvas is off-screen
    const observer = new IntersectionObserver(
      (entries) => { isVisible = entries[0].isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    // Fewer particles — from 65 down to ~35 max (still looks great)
    const count = Math.min(35, Math.floor((W() * H()) / 20000));
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2.2 + 0.8,
      colorIdx: COLOR_WEIGHTS[Math.floor(Math.random() * COLOR_WEIGHTS.length)],
      opacity: Math.random() * 0.45 + 0.1,
      baseOpacity: Math.random() * 0.45 + 0.1,
      type: Math.random() < 0.12 ? "cross" : Math.random() < 0.08 ? "ring" : "dot",
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const drawCross = (
      x: number, y: number, sz: number,
      r: number, g: number, b: number, a: number
    ) => {
      const arm = sz * 2.5;
      ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(x - arm, y); ctx.lineTo(x + arm, y);
      ctx.moveTo(x, y - arm); ctx.lineTo(x, y + arm);
      ctx.stroke();
    };

    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Skip draw when off-screen — saves significant CPU
      if (!isVisible) return;

      ctx.clearRect(0, 0, W(), H());
      t += 0.012;

      particles.forEach((p, i) => {
        // Pulse opacity
        p.opacity = p.baseOpacity * (0.7 + 0.3 * Math.sin(t + p.pulsePhase));

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && dist > 0) {
          const force = ((130 - dist) / 130) * 0.0018;
          p.vx += (dx / dist) * force * 60;
          p.vy += (dy / dist) * force * 60;
        }

        p.vx *= 0.978;
        p.vy *= 0.978;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > W()) { p.x = W(); p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > H()) { p.y = H(); p.vy *= -1; }

        const [r, g, b] = COLORS[p.colorIdx];

        // Connections — reduced threshold 110→80 cuts O(n²) work significantly
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ex = p.x - p2.x;
          const ey = p.y - p2.y;
          const d2 = ex * ex + ey * ey;
          if (d2 < 6400) { // 80² = 6400, avoids sqrt on every pair
            const d = Math.sqrt(d2);
            const alpha = (1 - d / 80) * 0.12;
            const [r2, g2, b2] = COLORS[p2.colorIdx];
            // Simple line instead of gradient+quadratic curve (much cheaper)
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${(r + r2) >> 1},${(g + g2) >> 1},${(b + b2) >> 1},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw particle
        if (p.type === "cross") {
          drawCross(p.x, p.y, p.size, r, g, b, p.opacity * 0.9);
        } else if (p.type === "ring") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r},${g},${b},${p.opacity * 0.6})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity})`;
          ctx.fill();
        }
      });
    };

    animate();

    const onResize = () => { resize(); };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      if (mouseMoveRaf) cancelAnimationFrame(mouseMoveRaf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
      aria-hidden="true"
    />
  );
}
