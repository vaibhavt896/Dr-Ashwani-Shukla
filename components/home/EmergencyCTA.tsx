"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Phone, AlertTriangle, Clock } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-midnight via-midnight to-[#0f1c2e] overflow-hidden">
      {/* Animated pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-coral/20"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              top: -(100 + i * 75),
              left: -(100 + i * 75),
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.8,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-coral/10 rounded-full px-5 py-2.5 mb-8 border border-coral/20">
            <AlertTriangle className="w-4 h-4 text-coral animate-pulse" />
            <span className="text-sm font-semibold text-coral">Child Sick at Night?</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Don&apos;t Wait. Don&apos;t Google Symptoms.{" "}
            <span className="text-coral">Call the Doctor.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            Dr. Shukla is available for emergency consultations. When your child needs
            urgent medical attention, every minute counts.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="tel:+919918601012"
              className="group relative magnetic-btn flex items-center gap-3 bg-gradient-to-r from-coral to-red-500 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-coral/30 hover:shadow-coral/50 transition-all"
            >
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              <span>
                <span className="block text-xs font-normal opacity-80">Rambagh Clinic</span>
                +91 99186 01012
              </span>
              {/* Pulsing ring */}
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-coral"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </a>

            <a
              href="tel:+919918601013"
              className="group magnetic-btn flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white font-bold text-lg px-10 py-5 rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <Phone className="w-6 h-6" />
              <span>
                <span className="block text-xs font-normal opacity-80">Barra Clinic</span>
                +91 99186 01013
              </span>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-10 flex items-center justify-center gap-2 text-white/30 text-sm">
            <Clock className="w-4 h-4" />
            Available for emergency consultations
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
