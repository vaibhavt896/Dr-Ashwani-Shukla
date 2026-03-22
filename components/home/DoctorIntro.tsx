"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { GraduationCap, HeartPulse, BookOpen, Hospital, Award, Quote } from "lucide-react";

const highlights = [
  {
    icon: HeartPulse,
    title: "NICU/PICU Specialist",
    desc: "Not just a pediatrician — a critical care expert for newborns and children",
  },
  {
    icon: GraduationCap,
    title: "25+ Years Hands-On",
    desc: "Quarter century of dedicated experience in pediatric and neonatal care",
  },
  {
    icon: BookOpen,
    title: "Published Researcher",
    desc: "Published research in neonatal care, trains young pediatricians",
  },
  {
    icon: Hospital,
    title: "Multi-Hospital Affiliate",
    desc: "Associated with Kannika Hospital & Pravi IVF Centre, Kanpur",
  },
];

export default function DoctorIntro() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-sunshine overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-honey/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Doctor visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky/10 to-sky/5 rounded-[3rem] transform rotate-3" />
              <div className="relative bg-gradient-to-br from-sky/20 via-white to-honey/10 rounded-[2.5rem] p-8 lg:p-12 shadow-xl">
                {/* Doctor avatar placeholder */}
                <div className="relative mx-auto w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-sky to-sky-dark flex items-center justify-center shadow-2xl shadow-sky/30 mb-8">
                  <div className="text-center text-white">
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <svg viewBox="0 0 80 80" className="w-24 h-24 lg:w-32 lg:h-32" fill="none">
                        <circle cx="40" cy="28" r="14" fill="white" opacity="0.3" />
                        <circle cx="40" cy="26" r="8" fill="white" opacity="0.5" />
                        <path d="M22 62C22 48 32 40 40 40C48 40 58 48 58 62" stroke="white" strokeWidth="3" fill="none" opacity="0.4" />
                        <circle cx="40" cy="55" r="4" fill="white" opacity="0.6" />
                        <path d="M36 55H28C26 55 25 54 25 52V48" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                        <path d="M44 55H52C54 55 55 54 55 52V48" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                      </svg>
                    </motion.div>
                  </div>
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-sky/30"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-[var(--font-display)] text-2xl lg:text-3xl font-extrabold text-midnight mb-1">
                    Dr. Ashwani Kumar Shukla
                  </h3>
                  <p className="text-sky font-semibold text-lg mb-3">MBBS, MD — Pediatrics</p>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 bg-sky/10 text-sky text-xs font-bold px-3 py-1.5 rounded-full">
                      <Award className="w-3 h-3" />
                      Pediatrician
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-coral/10 text-coral text-xs font-bold px-3 py-1.5 rounded-full">
                      <HeartPulse className="w-3 h-3" />
                      Neonatologist
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <div>
            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 bg-sky/10 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-sky">Meet Your Doctor</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight mb-6 leading-tight">
                When Your Newborn Needs Care at{" "}
                <span className="text-coral">3 AM</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-lg text-slate leading-relaxed mb-8">
                You want a doctor who has managed thousands of NICU cases. A specialist
                who has spent 25 years keeping children alive and healthy — not a
                generalist, but someone whose entire life&apos;s work is children.
                That&apos;s Dr. Shukla.
              </p>
            </AnimatedSection>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <AnimatedSection key={item.title} delay={0.3 + i * 0.1} direction="right">
                  <div className="group p-4 rounded-2xl bg-white shadow-sm border border-midnight/5 hover:shadow-lg hover:border-sky/20 transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center mb-3 group-hover:bg-sky/20 transition-colors">
                      <item.icon className="w-5 h-5 text-sky" />
                    </div>
                    <h4 className="font-[var(--font-display)] font-bold text-midnight text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Testimonial quote */}
            <AnimatedSection delay={0.7} direction="right">
              <div className="relative bg-peach rounded-2xl p-6 border border-honey/20">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-honey/30" />
                <p className="relative text-midnight font-medium italic pl-6">
                  &quot;He is really God for kids. You can blindly trust Dr. Shukla
                  for your children.&quot;
                </p>
                <p className="text-sm text-slate mt-2 pl-6">— Parent review, Google</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
