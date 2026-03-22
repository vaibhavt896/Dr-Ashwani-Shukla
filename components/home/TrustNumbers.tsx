"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Stethoscope, Award, HeartPulse, MapPin, Users } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Years Serving Children",
    color: "text-honey",
    bgColor: "bg-honey/10",
  },
  {
    icon: Stethoscope,
    value: 0,
    suffix: "",
    displayText: "MD",
    label: "Pediatrics — Advanced Specialist",
    color: "text-sky",
    bgColor: "bg-sky/10",
  },
  {
    icon: HeartPulse,
    value: 0,
    suffix: "",
    displayText: "NICU",
    label: "Neonatal Intensive Care Expert",
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    icon: MapPin,
    value: 2,
    suffix: "",
    label: "Clinic Locations in Kanpur",
    color: "text-forest",
    bgColor: "bg-forest/10",
  },
  {
    icon: Users,
    value: 139,
    suffix: "+",
    label: "Patient Reviews Across Platforms",
    color: "text-sky",
    bgColor: "bg-sky/10",
  },
];

export default function TrustNumbers() {
  return (
    <section className="relative py-20 lg:py-28 bg-midnight overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-honey/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Numbers That Tell Our Story
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Two decades of trust, thousands of healthy children
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {/* Icon */}
                <div
                  className={`inline-flex w-12 h-12 rounded-2xl ${stat.bgColor} items-center justify-center mb-4`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                {/* Number */}
                <div
                  className={`font-[var(--font-display)] text-4xl lg:text-5xl font-extrabold ${stat.color} mb-2`}
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

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${stat.bgColor}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
