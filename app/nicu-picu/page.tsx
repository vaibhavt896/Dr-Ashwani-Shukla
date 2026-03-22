"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  HeartPulse,
  Baby,
  Shield,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Stethoscope,
  Quote,
} from "lucide-react";

const nicuServices = [
  "Premature baby care (preterm infants)",
  "Neonatal resuscitation",
  "Low birth weight infant management",
  "Respiratory distress syndrome treatment",
  "Jaundice management (phototherapy)",
  "Sepsis and infection management in newborns",
  "Feeding difficulties and nutritional support",
  "Birth asphyxia management",
  "Congenital condition monitoring",
];

const picuServices = [
  "Severe pneumonia and respiratory infections",
  "Status asthmaticus (severe asthma attacks)",
  "Meningitis and encephalitis",
  "Diabetic ketoacidosis in children",
  "Severe dehydration management",
  "Post-surgical pediatric care",
  "Seizure management",
  "Multi-organ support",
];

const whenToSeek = [
  { sign: "Baby born before 37 weeks (premature)", urgency: "high" },
  { sign: "Birth weight less than 2.5 kg", urgency: "high" },
  { sign: "Difficulty breathing or rapid breathing", urgency: "high" },
  { sign: "Baby appears blue or pale", urgency: "high" },
  { sign: "Persistent fever in newborn (above 100.4°F)", urgency: "high" },
  { sign: "Not feeding well or refusing feeds", urgency: "medium" },
  { sign: "Excessive crying or unusual irritability", urgency: "medium" },
  { sign: "Yellow skin/eyes deepening (jaundice)", urgency: "medium" },
];

const faqs = [
  {
    q: "How long will my baby need to stay in the NICU?",
    a: "NICU stays vary greatly depending on the condition. Premature babies may stay for weeks to months, while babies with specific conditions may stay only a few days. Dr. Shukla will give you a personalized timeline and keep you updated daily.",
  },
  {
    q: "Can I visit my baby in the NICU?",
    a: "Yes, parents are encouraged to be involved. Skin-to-skin contact (kangaroo care) is beneficial when medically appropriate. Our team will guide you on visiting hours and safe interaction.",
  },
  {
    q: "Is NICU care very expensive?",
    a: "We strive to keep costs reasonable and transparent. The cost depends on the duration of stay and treatments required. We'll discuss all costs upfront so there are no surprises.",
  },
  {
    q: "What makes Dr. Shukla's NICU care different?",
    a: "With 25+ years specifically in neonatal care, Dr. Shukla has managed thousands of NICU cases. His experience means faster diagnosis, better outcomes, and a calm, reassuring presence during your most stressful moments.",
  },
];

export default function NicuPicuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-br from-coral/5 via-white to-peach/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 bg-coral/10 rounded-full px-4 py-2 mb-6">
                  <HeartPulse className="w-4 h-4 text-coral" />
                  <span className="text-sm font-semibold text-coral">Critical Care Specialist</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-midnight mb-6 leading-tight">
                  NICU & PICU{" "}
                  <span className="text-coral">Expert Care</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg text-slate leading-relaxed mb-8">
                  When your newborn or child needs the most critical medical care, you need a
                  specialist — not a generalist. Dr. Shukla has spent 25+ years mastering
                  neonatal and pediatric intensive care, managing thousands of critical cases.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+919918601012"
                    className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-coral to-red-500 text-white font-bold px-8 py-4 rounded-full shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call for Emergency
                  </a>
                  <Link
                    href="/contact"
                    className="magnetic-btn inline-flex items-center gap-2 bg-white text-midnight font-bold px-8 py-4 rounded-full shadow-md border border-midnight/10"
                  >
                    Book Consultation
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-coral/10">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-midnight/5">
                  <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center">
                    <HeartPulse className="w-7 h-7 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] font-bold text-xl text-midnight">
                      Why NICU Matters
                    </h3>
                    <p className="text-sm text-slate">For your most fragile moments</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Specialized monitoring equipment for newborns",
                    "24/7 expert oversight by trained neonatologist",
                    "Temperature-controlled environment",
                    "Advanced respiratory support systems",
                    "Nutrition management for premature babies",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-start gap-3 text-sm text-slate"
                    >
                      <CheckCircle className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* NICU Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-coral/10 rounded-full px-4 py-2 mb-6">
                <Baby className="w-4 h-4 text-coral" />
                <span className="text-sm font-semibold text-coral">NICU — Neonatal ICU</span>
              </div>
              <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-midnight mb-4">
                Neonatal Intensive Care
              </h2>
              <p className="text-slate leading-relaxed mb-8">
                For newborns who need specialized medical attention — premature babies,
                low birth weight infants, and those with critical conditions at birth.
              </p>
              <div className="space-y-3">
                {nicuServices.map((service, i) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-coral/5 hover:bg-coral/10 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-coral shrink-0" />
                    <span className="text-sm font-medium text-midnight">{service}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 bg-sky/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-sky" />
                <span className="text-sm font-semibold text-sky">PICU — Pediatric ICU</span>
              </div>
              <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-midnight mb-4">
                Pediatric Intensive Care
              </h2>
              <p className="text-slate leading-relaxed mb-8">
                For older children who need intensive monitoring and treatment — severe
                infections, respiratory emergencies, and complex medical conditions.
              </p>
              <div className="space-y-3">
                {picuServices.map((service, i) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-sky/5 hover:bg-sky/10 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-sky shrink-0" />
                    <span className="text-sm font-medium text-midnight">{service}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* When to Seek NICU */}
      <section className="py-24 bg-sunshine">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
              <AlertTriangle className="w-4 h-4 text-coral" />
              <span className="text-sm font-semibold text-coral">When to Seek Help</span>
            </div>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-midnight mb-4">
              Warning Signs — When to Call Immediately
            </h2>
            <p className="text-slate text-lg">
              Trust your instincts. If something feels wrong, call us. You&apos;re not overreacting.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {whenToSeek.map((item, i) => (
              <motion.div
                key={item.sign}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`flex items-start gap-3 p-4 rounded-xl border ${
                  item.urgency === "high"
                    ? "bg-coral/5 border-coral/20"
                    : "bg-honey/5 border-honey/20"
                }`}
              >
                <AlertTriangle
                  className={`w-5 h-5 shrink-0 mt-0.5 ${
                    item.urgency === "high" ? "text-coral" : "text-honey-dark"
                  }`}
                />
                <span className="text-sm font-medium text-midnight">{item.sign}</span>
              </motion.div>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="mt-8 text-center">
            <a
              href="tel:+919918601012"
              className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-coral to-red-500 text-white font-bold px-8 py-4 rounded-full shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 99186 01012
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-midnight mb-4">
              Parent FAQs About NICU/PICU
            </h2>
            <p className="text-slate text-lg">
              We understand your concerns. Here are answers to common questions.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <details className="group bg-sunshine rounded-2xl border border-midnight/5 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-[var(--font-display)] font-bold text-midnight hover:text-sky transition-colors">
                    {faq.q}
                    <ArrowRight className="w-5 h-5 shrink-0 rotate-90 group-open:rotate-[270deg] transition-transform text-slate" />
                  </summary>
                  <div className="px-6 pb-6 text-slate leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Quote */}
      <section className="py-20 bg-gradient-to-r from-coral/5 to-peach">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Quote className="w-12 h-12 text-coral/30 mx-auto mb-6" />
            <p className="text-xl lg:text-2xl text-midnight font-medium italic leading-relaxed mb-6">
              &quot;Exceptional care for our newborn in the NICU. His expertise and compassionate
              approach reassured us during a very stressful time. We can never thank him enough.&quot;
            </p>
            <p className="text-slate font-semibold">— Parent, Pravi IVF Testimonial</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
