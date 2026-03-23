"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import HeartbeatLine from "@/components/ui/HeartbeatLine";
import { Stethoscope, Award, HeartPulse, MapPin, Users } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Years Serving Children",
    color: "text-honey",
    bgColor: "bg-honey/10",
    glowColor: "rgba(240,168,48,0.15)",
    borderColor: "rgba(240,168,48,0.2)",
  },
  {
    icon: Stethoscope,
    value: 0,
    suffix: "",
    displayText: "MD",
    label: "Pediatrics — Advanced Specialist",
    color: "text-sky",
    bgColor: "bg-sky/10",
    glowColor: "rgba(52,152,219,0.15)",
    borderColor: "rgba(52,152,219,0.2)",
  },
  {
    icon: HeartPulse,
    value: 0,
    suffix: "",
    displayText: "NICU",
    label: "Neonatal Intensive Care Expert",
    color: "text-coral",
    bgColor: "bg-coral/10",
    glowColor: "rgba(255,107,107,0.15)",
    borderColor: "rgba(255,107,107,0.2)",
  },
  {
    icon: MapPin,
    value: 2,
    suffix: "",
    label: "Clinic Locations in Kanpur",
    color: "text-forest",
    bgColor: "bg-forest/10",
    glowColor: "rgba(46,204,113,0.15)",
    borderColor: "rgba(46,204,113,0.2)",
  },
  {
    icon: Users,
    value: 139,
    suffix: "+",
    label: "Patient Reviews Across Platforms",
    color: "text-sky",
    bgColor: "bg-sky/10",
    glowColor: "rgba(52,152,219,0.15)",
    borderColor: "rgba(52,152,219,0.2)",
  },
];

export default function TrustNumbers() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-midnight overflow-hidden">
      {/* === WORLD-CLASS: Aurora radial glow layers === */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(52,152,219,0.06), transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 80% 70%, rgba(240,168,48,0.06), transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(46,204,113,0.05), transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(52,152,219,0.06), transparent 60%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Fixed glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-sky/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-honey/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* === WORLD-CLASS: Scanning horizontal line === */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(52,152,219,0.4), rgba(240,168,48,0.4), transparent)",
        }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Numbers That Tell Our Story
          </h2>
          <p className="text-white/50 text-sm sm:text-lg max-w-xl mx-auto">
            Two decades of trust, thousands of healthy children
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div
                className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 text-center hover:bg-white/[0.08] transition-all duration-500 h-full overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Hover glow border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ border: `1px solid ${stat.borderColor}` }}
                />

                {/* === WORLD-CLASS: Corner accent lines === */}
                <div
                  className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    borderTop: `1.5px solid ${stat.borderColor.replace("0.2", "0.6")}`,
                    borderLeft: `1.5px solid ${stat.borderColor.replace("0.2", "0.6")}`,
                    borderRadius: "inherit",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    borderBottom: `1.5px solid ${stat.borderColor.replace("0.2", "0.6")}`,
                    borderRight: `1.5px solid ${stat.borderColor.replace("0.2", "0.6")}`,
                    borderRadius: "inherit",
                  }}
                />

                {/* Icon */}
                <div
                  className={`inline-flex w-12 h-12 rounded-2xl ${stat.bgColor} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                {/* Number */}
                <div
                  className={`font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold ${stat.color} mb-2`}
                >
                  {stat.displayText ? (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.3 + i * 0.1 }}
                    >
                      {stat.displayText}
                    </motion.span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>

                {/* Label */}
                <p className="text-white/50 text-sm font-medium">{stat.label}</p>

                {/* Hover glow spread */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl pointer-events-none"
                  style={{ background: stat.glowColor }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* === WORLD-CLASS: Heartbeat ECG line at bottom === */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <HeartbeatLine height={56} color="sky" className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
