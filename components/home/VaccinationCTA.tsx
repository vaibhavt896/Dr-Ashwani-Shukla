"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Syringe, ChevronRight, Shield, Calendar, CheckCircle } from "lucide-react";

const ageGroups = [
  {
    label: "Birth",
    age: "At Birth",
    vaccines: ["BCG", "OPV-0", "Hepatitis B — Birth dose"],
  },
  {
    label: "6 Weeks",
    age: "6 Weeks",
    vaccines: ["DTwP/DTaP-1", "IPV-1", "Hep B-2", "Hib-1", "Rotavirus-1", "PCV-1"],
  },
  {
    label: "10 Weeks",
    age: "10 Weeks",
    vaccines: ["DTwP/DTaP-2", "IPV-2", "Hib-2", "Rotavirus-2", "PCV-2"],
  },
  {
    label: "14 Weeks",
    age: "14 Weeks",
    vaccines: ["DTwP/DTaP-3", "IPV-3", "Hib-3", "Rotavirus-3", "PCV-3"],
  },
  {
    label: "6 Months",
    age: "6 Months",
    vaccines: ["OPV-1", "Hepatitis B-3", "Influenza Vaccine-1"],
  },
  {
    label: "9 Months",
    age: "9 Months",
    vaccines: ["MMR-1", "Meningococcal (MenA)", "PCV Booster"],
  },
  {
    label: "12 Months",
    age: "12 Months",
    vaccines: ["Hepatitis A-1", "Japanese Encephalitis-1"],
  },
  {
    label: "15–18 Mo",
    age: "15–18 Months",
    vaccines: ["MMR-2", "Varicella-1", "DTwP/DTaP Booster-1", "IPV Booster", "Hib Booster"],
  },
];

export default function VaccinationCTA() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-mint)_0%,_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-forest/10 rounded-full px-4 py-2 mb-6">
                <Syringe className="w-4 h-4 text-forest" />
                <span className="text-sm font-semibold text-forest">Never Miss a Vaccine</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight mb-6 leading-tight">
                Your Child&apos;s Vaccination{" "}
                <span className="text-forest">Schedule</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-slate leading-relaxed mb-8">
                Tap your child&apos;s age group to see which vaccines are due.
                All vaccines are available at both our clinics. Don&apos;t delay — timely
                vaccination saves lives.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-2 mb-8">
                {ageGroups.map((group, i) => (
                  <motion.button
                    key={group.label}
                    onClick={() => setActiveGroup(i)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeGroup === i
                        ? "bg-forest text-white shadow-lg shadow-forest/30"
                        : "bg-forest/10 text-forest hover:bg-forest/20"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {group.label}
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/vaccination"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-forest to-forest-dark text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-forest/30 hover:shadow-forest/50 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Full Vaccination Schedule
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="magnetic-btn inline-flex items-center justify-center gap-2 bg-white text-midnight font-bold px-8 py-4 rounded-full shadow-md border border-midnight/10 hover:border-forest/30 hover:text-forest transition-all"
                >
                  Book Vaccination
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Interactive vaccine display */}
          <AnimatedSection direction="right">
            <div className="relative">
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-mint rounded-[2rem] transform rotate-2" />
              <div className="relative bg-white rounded-[2rem] shadow-xl p-6 lg:p-8 border border-forest/10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-midnight/5">
                  <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] font-bold text-midnight">
                      {ageGroups[activeGroup].age}
                    </h3>
                    <p className="text-sm text-slate">
                      {ageGroups[activeGroup].vaccines.length} vaccines due
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeGroup}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {ageGroups[activeGroup].vaccines.map((vaccine, i) => (
                      <motion.div
                        key={vaccine}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-mint/50 hover:bg-mint transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-forest shrink-0" />
                        <span className="font-medium text-midnight text-sm">{vaccine}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 pt-4 border-t border-midnight/5">
                  <p className="text-xs text-slate text-center">
                    All vaccines available at both Rambagh & Barra clinics
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
