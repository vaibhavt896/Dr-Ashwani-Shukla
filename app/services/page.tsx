"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Baby,
  Syringe,
  Stethoscope,
  TrendingUp,
  HeartPulse,
  Users,
  Wind,
  Siren,
  Droplets,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Newborn & NICU Care",
    desc: "Expert neonatal intensive care for premature babies and critically ill newborns. Dr. Shukla has 25+ years of NICU experience managing the most delicate cases.",
    features: ["Premature baby care", "Neonatal resuscitation", "Low birth weight management", "Jaundice treatment"],
    href: "/nicu-picu",
    color: "coral",
  },
  {
    icon: HeartPulse,
    title: "PICU — Pediatric Intensive Care",
    desc: "When children need critical monitoring and treatment — severe infections, respiratory emergencies, and complex conditions requiring intensive care.",
    features: ["Severe pneumonia care", "Status asthmaticus", "Meningitis management", "Post-surgical care"],
    href: "/nicu-picu",
    color: "coral",
  },
  {
    icon: Syringe,
    title: "Vaccination & Immunization",
    desc: "Complete vaccination schedules from birth to adolescence. All government (NIS) and optional vaccines available at both clinics.",
    features: ["Complete NIS schedule", "Optional IAP vaccines", "Age-based tracker", "All vaccines in-stock"],
    href: "/vaccination",
    color: "forest",
  },
  {
    icon: Stethoscope,
    title: "General Pediatrics",
    desc: "Everyday childhood illnesses — fever, cough, cold, infections, ear problems, skin conditions, and seasonal diseases. Trusted treatment from an experienced specialist.",
    features: ["Fever management", "Respiratory infections", "Ear & throat care", "Skin conditions"],
    href: "/services/general-pediatrics",
    color: "sky",
  },
  {
    icon: TrendingUp,
    title: "Growth & Development",
    desc: "Monitoring milestones, addressing developmental concerns, and providing nutritional guidance to ensure your child grows healthy and strong.",
    features: ["Milestone tracking", "Height/weight monitoring", "Nutritional counseling", "Developmental screening"],
    href: "/services/growth-development",
    color: "honey",
  },
  {
    icon: Users,
    title: "Adolescent Health",
    desc: "Specialized care for teenagers — growth concerns, hormonal changes, nutrition, mental health awareness, and age-appropriate health guidance.",
    features: ["Puberty concerns", "Nutritional guidance", "Growth assessment", "Health counseling"],
    href: "/services/adolescent-health",
    color: "sky",
  },
  {
    icon: Wind,
    title: "Chronic Condition Management",
    desc: "Long-term care for childhood chronic conditions including asthma, diabetes, allergies, and cerebral palsy with regular monitoring.",
    features: ["Asthma management", "Childhood diabetes", "Allergy treatment", "Cerebral palsy care"],
    href: "/services/chronic-conditions",
    color: "forest",
  },
  {
    icon: Droplets,
    title: "Specialized Treatments",
    desc: "Targeted treatments for specific conditions — bed wetting, diarrhea management, congenital diseases, and developmental disorders.",
    features: ["Bed wetting treatment", "Diarrhea management", "Congenital conditions", "Developmental disorders"],
    href: "/services/specialized-treatments",
    color: "sky",
  },
  {
    icon: Siren,
    title: "Emergency Pediatric Care",
    desc: "When your child needs urgent medical attention — high fever, breathing difficulty, seizures, or any emergency. Available for immediate consultation.",
    features: ["24/7 phone guidance", "Urgent consultations", "Emergency triage", "Hospital referral support"],
    href: "/emergency",
    color: "coral",
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string; hover: string }> = {
  coral: { bg: "bg-coral/5", icon: "text-coral", badge: "bg-coral/10", hover: "hover:border-coral/20" },
  sky: { bg: "bg-sky/5", icon: "text-sky", badge: "bg-sky/10", hover: "hover:border-sky/20" },
  forest: { bg: "bg-forest/5", icon: "text-forest", badge: "bg-forest/10", hover: "hover:border-forest/20" },
  honey: { bg: "bg-honey/5", icon: "text-honey-dark", badge: "bg-honey/10", hover: "hover:border-honey/20" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-br from-sunshine via-white to-sky/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
              <Stethoscope className="w-4 h-4 text-sky" />
              <span className="text-sm font-semibold text-sky">Our Services</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-midnight mb-6 leading-tight">
              Complete{" "}
              <span className="text-sky">Pediatric Care</span>{" "}
              Under One Roof
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              From your baby&apos;s first breath to their teenage years — every stage of childhood,
              covered by 25+ years of specialist expertise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => {
              const colors = colorMap[service.color];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={service.href} className="block group">
                    <div className={`${colors.bg} rounded-3xl p-6 lg:p-8 border border-transparent ${colors.hover} hover:shadow-lg transition-all duration-500`}>
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl ${colors.badge} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                          <service.icon className={`w-7 h-7 ${colors.icon}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-[var(--font-display)] text-xl font-bold text-midnight mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate leading-relaxed mb-4">{service.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((f) => (
                              <span
                                key={f}
                                className={`text-xs font-medium px-3 py-1 rounded-full ${colors.badge} ${colors.icon}`}
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ArrowRight className="w-6 h-6 text-slate group-hover:text-midnight group-hover:translate-x-1 transition-all shrink-0 hidden lg:block" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-sky to-sky-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Call us and describe your concern. Dr. Shukla will guide you to the right care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="magnetic-btn inline-flex items-center gap-2 bg-white text-sky font-bold px-8 py-4 rounded-full shadow-lg"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919918601012"
                className="magnetic-btn inline-flex items-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-full border border-white/20"
              >
                Call: +91 99186 01012
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
