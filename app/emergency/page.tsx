"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Phone,
  AlertTriangle,
  Clock,
  ThermometerSun,
  Droplets,
  Wind,
  Brain,
  Skull,
  Baby,
  HeartPulse,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const emergencySigns = [
  {
    icon: ThermometerSun,
    title: "High Fever",
    desc: "Temperature above 104°F (40°C) or fever in newborn above 100.4°F (38°C)",
    action: "Call immediately",
    urgency: "critical",
  },
  {
    icon: Wind,
    title: "Breathing Difficulty",
    desc: "Rapid breathing, chest pulling in, nostril flaring, bluish lips or fingertips",
    action: "Call immediately",
    urgency: "critical",
  },
  {
    icon: Droplets,
    title: "Severe Dehydration",
    desc: "No tears when crying, dry mouth, sunken eyes, no urination for 6+ hours",
    action: "Call immediately",
    urgency: "critical",
  },
  {
    icon: Brain,
    title: "Seizures / Convulsions",
    desc: "Uncontrollable shaking, rolling eyes, loss of consciousness, stiffening",
    action: "Call 911 & then us",
    urgency: "critical",
  },
  {
    icon: Skull,
    title: "Head Injury",
    desc: "Vomiting after head impact, excessive drowsiness, unequal pupils",
    action: "Go to ER immediately",
    urgency: "critical",
  },
  {
    icon: Baby,
    title: "Newborn Concerns",
    desc: "Not feeding, excessive jaundice, unusual crying, fever, lethargy in first 28 days",
    action: "Call immediately",
    urgency: "critical",
  },
  {
    icon: HeartPulse,
    title: "Allergic Reaction",
    desc: "Facial swelling, difficulty breathing after food/medicine, widespread hives",
    action: "Call immediately",
    urgency: "critical",
  },
  {
    icon: Droplets,
    title: "Persistent Vomiting/Diarrhea",
    desc: "Repeated vomiting, bloody stool, diarrhea lasting more than 24 hours in infants",
    action: "Call for guidance",
    urgency: "high",
  },
];

const dosDonts = {
  dos: [
    "Stay calm — your child needs you composed",
    "Note the time symptoms started",
    "Keep your child comfortable and hydrated (if possible)",
    "Call Dr. Shukla immediately for guidance",
    "If prescribed, give fever-reducing medicine (paracetamol by weight)",
    "Have your child's vaccination card ready",
  ],
  donts: [
    "Don't Google symptoms at 2 AM — call the doctor",
    "Don't give adult medicines to children",
    "Don't force feed a vomiting child",
    "Don't apply ice/cold water on a child with high fever",
    "Don't wait to see if it gets better for critical signs",
    "Don't self-medicate with antibiotics",
  ],
};

export default function EmergencyPage() {
  return (
    <>
      {/* Hero — Urgent */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-br from-coral/10 via-white to-peach/20 overflow-hidden">
        {/* Pulse rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-coral/10"
              style={{
                width: 300 + i * 200,
                height: 300 + i * 200,
                top: -(150 + i * 100),
                left: -(150 + i * 100),
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, delay: i * 0.8, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-coral/10 rounded-full px-5 py-2.5 mb-8 border border-coral/20">
              <AlertTriangle className="w-4 h-4 text-coral animate-pulse" />
              <span className="text-sm font-bold text-coral">Emergency Pediatric Care</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-midnight mb-6 leading-tight">
              Child Sick?{" "}
              <span className="text-coral">Call Now.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-slate max-w-2xl mx-auto mb-10">
              Don&apos;t wait. Don&apos;t search online. When your child needs urgent medical
              care, every minute counts. Dr. Shukla is available for emergency consultations.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="tel:+919918601012"
                className="group relative magnetic-btn flex items-center gap-3 bg-gradient-to-r from-coral to-red-500 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-coral/30"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <span>
                  <span className="block text-xs font-normal opacity-80">Rambagh</span>
                  +91 99186 01012
                </span>
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-coral"
                  animate={{ scale: [1, 1.15], opacity: [0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </a>
              <a
                href="tel:+919918601013"
                className="magnetic-btn flex items-center gap-3 bg-white text-midnight font-bold text-lg px-10 py-5 rounded-full shadow-lg border border-midnight/10"
              >
                <Phone className="w-6 h-6" />
                <span>
                  <span className="block text-xs font-normal text-slate">Barra</span>
                  +91 99186 01013
                </span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Signs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-midnight mb-4">
              When to Seek Emergency Care
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              If your child shows any of these signs, call us immediately. Trust your instincts —
              you&apos;re not overreacting.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {emergencySigns.map((sign, i) => (
              <motion.div
                key={sign.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="bg-coral/5 rounded-2xl p-6 border border-coral/10 hover:shadow-lg hover:border-coral/20 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <sign.icon className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="font-[var(--font-display)] font-bold text-midnight mb-2">
                    {sign.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-3">{sign.desc}</p>
                  <span className="text-xs font-bold text-coral uppercase">{sign.action}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's & Don'ts */}
      <section className="py-24 bg-sunshine">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-midnight mb-4">
              First Response: Do&apos;s & Don&apos;ts
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 border border-forest/10 h-full">
                <h3 className="font-[var(--font-display)] text-xl font-bold text-forest mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Do&apos;s
                </h3>
                <div className="space-y-3">
                  {dosDonts.dos.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-slate"
                    >
                      <CheckCircle className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-3xl p-8 border border-coral/10 h-full">
                <h3 className="font-[var(--font-display)] text-xl font-bold text-coral mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Don&apos;ts
                </h3>
                <div className="space-y-3">
                  {dosDonts.donts.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-slate"
                    >
                      <AlertTriangle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-midnight text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <p className="text-white/50 text-sm uppercase tracking-wider mb-4">Remember</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-white mb-6">
              You&apos;re Not Overreacting.
              <br />
              <span className="text-coral">Call the Doctor.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              It&apos;s always better to call and be reassured than to wait and worry.
              Dr. Shukla has been answering these calls for 25+ years.
            </p>
            <a
              href="tel:+919918601012"
              className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-coral to-red-500 text-white font-bold px-10 py-5 rounded-full shadow-xl text-lg"
            >
              <Phone className="w-6 h-6" />
              Call Dr. Shukla Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
