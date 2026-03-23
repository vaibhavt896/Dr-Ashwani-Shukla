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
    const mouse = { x: -9999, y: -9999 };

    // Retina-aware sizing
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
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

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onMouseLeave);

    // Build particle field
    const count = Math.min(65, Math.floor((W() * H()) / 16000));
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

        // Velocity damping
        p.vx *= 0.978;
        p.vy *= 0.978;

        // Boundary bounce with fade-in
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > W()) { p.x = W(); p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > H()) { p.y = H(); p.vy *= -1; }

        const [r, g, b] = COLORS[p.colorIdx];

        // Draw connections first (behind particles)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ex = p.x - p2.x;
          const ey = p.y - p2.y;
          const d = Math.sqrt(ex * ex + ey * ey);
          if (d < 110) {
            const [r2, g2, b2] = COLORS[p2.colorIdx];
            const alpha = (1 - d / 110) * 0.12;
            const mx = (p.x + p2.x) / 2;
            const my = (p.y + p2.y) / 2;
            const grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
            grad.addColorStop(0.5, `rgba(${(r + r2) >> 1},${(g + g2) >> 1},${(b + b2) >> 1},${alpha * 1.4})`);
            grad.addColorStop(1, `rgba(${r2},${g2},${b2},${alpha})`);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            // Slight curve through midpoint for organic feel
            ctx.quadraticCurveTo(
              mx + Math.sin(t + i) * 4,
              my + Math.cos(t + j) * 4,
              p2.x, p2.y
            );
            ctx.strokeStyle = grad;
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
          // Inner dot
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

      animId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => { resize(); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mouseleave", onMouseLeave);
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
