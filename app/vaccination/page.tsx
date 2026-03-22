"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Syringe,
  Shield,
  Calendar,
  CheckCircle,
  ChevronDown,
  Phone,
  Baby,
  ArrowRight,
  Info,
  Users,
} from "lucide-react";

interface Vaccine {
  name: string;
  prevents: string;
  type: "NIS" | "Optional";
}

interface VaxGroup {
  age: string;
  label: string;
  vaccines: Vaccine[];
}

const vaccinationSchedule: VaxGroup[] = [
  {
    age: "At Birth",
    label: "Birth",
    vaccines: [
      { name: "BCG", prevents: "Tuberculosis", type: "NIS" },
      { name: "OPV-0 (Oral Polio)", prevents: "Poliomyelitis", type: "NIS" },
      { name: "Hepatitis B — Birth dose", prevents: "Hepatitis B", type: "NIS" },
    ],
  },
  {
    age: "6 Weeks",
    label: "6 Wks",
    vaccines: [
      { name: "DTwP/DTaP-1", prevents: "Diphtheria, Tetanus, Pertussis", type: "NIS" },
      { name: "IPV-1", prevents: "Poliomyelitis", type: "NIS" },
      { name: "Hepatitis B-2", prevents: "Hepatitis B", type: "NIS" },
      { name: "Hib-1", prevents: "Haemophilus influenzae type B", type: "NIS" },
      { name: "Rotavirus-1", prevents: "Rotavirus diarrhea", type: "NIS" },
      { name: "PCV-1", prevents: "Pneumococcal disease", type: "NIS" },
    ],
  },
  {
    age: "10 Weeks",
    label: "10 Wks",
    vaccines: [
      { name: "DTwP/DTaP-2", prevents: "Diphtheria, Tetanus, Pertussis", type: "NIS" },
      { name: "IPV-2", prevents: "Poliomyelitis", type: "NIS" },
      { name: "Hib-2", prevents: "Haemophilus influenzae type B", type: "NIS" },
      { name: "Rotavirus-2", prevents: "Rotavirus diarrhea", type: "NIS" },
      { name: "PCV-2", prevents: "Pneumococcal disease", type: "NIS" },
    ],
  },
  {
    age: "14 Weeks",
    label: "14 Wks",
    vaccines: [
      { name: "DTwP/DTaP-3", prevents: "Diphtheria, Tetanus, Pertussis", type: "NIS" },
      { name: "IPV-3", prevents: "Poliomyelitis", type: "NIS" },
      { name: "Hib-3", prevents: "Haemophilus influenzae type B", type: "NIS" },
      { name: "Rotavirus-3", prevents: "Rotavirus diarrhea", type: "NIS" },
      { name: "PCV-3", prevents: "Pneumococcal disease", type: "NIS" },
    ],
  },
  {
    age: "6 Months",
    label: "6 Mo",
    vaccines: [
      { name: "OPV-1", prevents: "Poliomyelitis", type: "NIS" },
      { name: "Hepatitis B-3", prevents: "Hepatitis B", type: "NIS" },
      { name: "Influenza Vaccine-1", prevents: "Influenza (Flu)", type: "Optional" },
    ],
  },
  {
    age: "9 Months",
    label: "9 Mo",
    vaccines: [
      { name: "MMR-1 (or MR-1)", prevents: "Measles, Mumps, Rubella", type: "NIS" },
      { name: "Meningococcal Vaccine", prevents: "Meningococcal disease", type: "Optional" },
      { name: "PCV Booster", prevents: "Pneumococcal disease", type: "NIS" },
    ],
  },
  {
    age: "12 Months",
    label: "12 Mo",
    vaccines: [
      { name: "Hepatitis A-1", prevents: "Hepatitis A", type: "NIS" },
      { name: "Japanese Encephalitis-1", prevents: "Japanese Encephalitis", type: "NIS" },
    ],
  },
  {
    age: "15 Months",
    label: "15 Mo",
    vaccines: [
      { name: "MMR-2", prevents: "Measles, Mumps, Rubella", type: "NIS" },
      { name: "Varicella-1", prevents: "Chickenpox", type: "NIS" },
    ],
  },
  {
    age: "16–18 Months",
    label: "16-18 Mo",
    vaccines: [
      { name: "DTwP/DTaP Booster-1", prevents: "Diphtheria, Tetanus, Pertussis", type: "NIS" },
      { name: "IPV Booster-1", prevents: "Poliomyelitis", type: "NIS" },
      { name: "Hib Booster", prevents: "Haemophilus influenzae type B", type: "NIS" },
      { name: "Hepatitis A-2", prevents: "Hepatitis A", type: "NIS" },
    ],
  },
  {
    age: "4–6 Years",
    label: "4-6 Yrs",
    vaccines: [
      { name: "DTwP/DTaP Booster-2", prevents: "Diphtheria, Tetanus, Pertussis", type: "NIS" },
      { name: "IPV Booster-2", prevents: "Poliomyelitis", type: "NIS" },
      { name: "Varicella-2", prevents: "Chickenpox", type: "Optional" },
      { name: "Typhoid Conjugate Vaccine", prevents: "Typhoid fever", type: "Optional" },
    ],
  },
  {
    age: "10–12 Years",
    label: "10-12 Yrs",
    vaccines: [
      { name: "Tdap", prevents: "Tetanus, Diphtheria, Pertussis", type: "NIS" },
      { name: "HPV Vaccine (girls)", prevents: "Human Papillomavirus", type: "Optional" },
    ],
  },
];

export default function VaccinationPage() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [expandedVaccine, setExpandedVaccine] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-br from-mint via-white to-forest/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-forest/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-forest" />
                <span className="text-sm font-semibold text-forest">Vaccination Schedule 2026</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-midnight mb-6 leading-tight">
                Never Miss a{" "}
                <span className="text-forest">Vaccine</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-slate leading-relaxed mb-6">
                Complete vaccination schedule for Indian children — from birth to 12 years.
                Updated for 2026 as per IAP (Indian Academy of Pediatrics) guidelines.
                All vaccines available at both our clinics.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-forest to-forest-dark text-white font-bold px-8 py-4 rounded-full shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Book Vaccination
                </Link>
                <a
                  href="tel:+919918601012"
                  className="magnetic-btn inline-flex items-center gap-2 bg-white text-midnight font-bold px-8 py-4 rounded-full shadow-md border border-midnight/10"
                >
                  <Phone className="w-5 h-5" />
                  Call to Enquire
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Interactive Schedule */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-midnight mb-4">
              Age-Based Vaccination Schedule
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Select your child&apos;s age group to see which vaccines are due
            </p>
          </AnimatedSection>

          {/* Age selector */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
              {vaccinationSchedule.map((group, i) => (
                <motion.button
                  key={group.age}
                  onClick={() => {
                    setActiveGroup(i);
                    setExpandedVaccine(null);
                  }}
                  className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeGroup === i
                      ? "bg-forest text-white shadow-lg shadow-forest/30 scale-105"
                      : "bg-forest/10 text-forest hover:bg-forest/20"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {group.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Vaccine cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-mint/30 rounded-3xl p-6 lg:p-8 border border-forest/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center">
                      <Baby className="w-6 h-6 text-forest" />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-xl font-bold text-midnight">
                        {vaccinationSchedule[activeGroup].age}
                      </h3>
                      <p className="text-sm text-slate">
                        {vaccinationSchedule[activeGroup].vaccines.length} vaccines
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs bg-forest/10 text-forest font-bold px-2 py-1 rounded-full">NIS</span>
                    <span className="text-xs bg-honey/10 text-honey-dark font-bold px-2 py-1 rounded-full">Optional</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {vaccinationSchedule[activeGroup].vaccines.map((vaccine, i) => (
                    <motion.div
                      key={vaccine.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <button
                        onClick={() => setExpandedVaccine(expandedVaccine === i ? null : i)}
                        className="w-full"
                      >
                        <div
                          className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                            expandedVaccine === i
                              ? "bg-white shadow-md"
                              : "bg-white/60 hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle
                              className={`w-5 h-5 shrink-0 ${
                                vaccine.type === "NIS" ? "text-forest" : "text-honey-dark"
                              }`}
                            />
                            <div className="text-left">
                              <span className="font-semibold text-midnight text-sm block">
                                {vaccine.name}
                              </span>
                              {expandedVaccine === i && (
                                <motion.span
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  className="text-xs text-slate block mt-1"
                                >
                                  Prevents: {vaccine.prevents}
                                </motion.span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                vaccine.type === "NIS"
                                  ? "bg-forest/10 text-forest"
                                  : "bg-honey/10 text-honey-dark"
                              }`}
                            >
                              {vaccine.type}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-slate transition-transform ${
                                expandedVaccine === i ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Info note */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-sky/5 border border-sky/10">
              <Info className="w-5 h-5 text-sky shrink-0 mt-0.5" />
              <div className="text-sm text-slate">
                <strong className="text-midnight">NIS</strong> = National Immunization Schedule (Government recommended). <strong className="text-midnight">Optional</strong> = Recommended by IAP but not part of government program. Consult Dr. Shukla for personalized vaccination advice.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vaccinate */}
      <section className="py-24 bg-sunshine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-midnight mb-4">
              Why Timely Vaccination Matters
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Disease Prevention",
                desc: "Vaccines protect your child from life-threatening diseases like polio, measles, and whooping cough.",
              },
              {
                icon: Users,
                title: "Community Protection",
                desc: "When your child is vaccinated, they help protect other children who can't be vaccinated.",
              },
              {
                icon: Calendar,
                title: "Timing Is Critical",
                desc: "Vaccines work best when given at the recommended age. Delays can leave your child vulnerable.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-midnight/5 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="font-[var(--font-display)] font-bold text-midnight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-forest to-forest-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <Syringe className="w-12 h-12 text-white/30 mx-auto mb-6" />
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Book Your Child&apos;s Vaccination Today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              All vaccines available at both Rambagh and Barra clinics. Walk-ins welcome.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="magnetic-btn inline-flex items-center gap-2 bg-white text-forest font-bold px-8 py-4 rounded-full shadow-lg"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919918601012"
                className="magnetic-btn inline-flex items-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-full border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
