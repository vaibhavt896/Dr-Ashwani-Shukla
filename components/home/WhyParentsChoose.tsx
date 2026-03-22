"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Clock, HeartPulse, Building2, Landmark } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "25+ Years, One Focus",
    desc: "While other doctors diversify, Dr. Shukla has spent a quarter century doing one thing: making children healthy. This singular dedication means deeper expertise.",
    gradient: "from-sky/20 to-sky/5",
    iconColor: "text-sky",
    number: "01",
  },
  {
    icon: HeartPulse,
    title: "NICU Specialist",
    desc: "When your newborn's life is at stake, you need a doctor trained in the most critical care — not a generalist. Dr. Shukla has managed thousands of NICU cases.",
    gradient: "from-coral/20 to-coral/5",
    iconColor: "text-coral",
    number: "02",
  },
  {
    icon: Building2,
    title: "Two Clinics, One Standard",
    desc: "Whether you visit Rambagh or Barra, you get the same doctor, same care, same equipment. Convenience without compromise.",
    gradient: "from-forest/20 to-forest/5",
    iconColor: "text-forest",
    number: "03",
  },
  {
    icon: Landmark,
    title: "A Registered Pvt Ltd Company",
    desc: "We're not just a clinic — we're a registered company committed to institutional standards of care, transparency, and accountability.",
    gradient: "from-honey/20 to-honey/5",
    iconColor: "text-honey-dark",
    number: "04",
  },
];

export default function WhyParentsChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-sunshine to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-sky">Why Parents Trust Us</span>
          </div>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight mb-4">
            Not Just a Clinic — <span className="text-sky">A Commitment</span>
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            What sets Shweta Child Care apart from every other option in Kanpur
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${reason.gradient} rounded-3xl p-8 lg:p-10 border border-white/60 hover:shadow-xl transition-all duration-500 h-full overflow-hidden`}>
                {/* Large number watermark */}
                <span className="absolute top-4 right-6 text-7xl font-[var(--font-display)] font-extrabold text-midnight/[0.03] select-none">
                  {reason.number}
                </span>

                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <reason.icon className={`w-6 h-6 ${reason.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-[var(--font-display)] text-xl font-bold text-midnight mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-slate leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
