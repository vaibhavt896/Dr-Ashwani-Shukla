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
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Newborn & NICU Care",
    desc: "Expert care for your most fragile moments. Premature baby care, neonatal resuscitation, and critical newborn support.",
    href: "/nicu-picu",
    color: "from-coral/20 to-coral/5",
    iconColor: "text-coral",
    iconBg: "bg-coral/10",
    featured: true,
  },
  {
    icon: Syringe,
    title: "Vaccination & Immunization",
    desc: "Complete vaccination schedules. All vaccines available at both clinics.",
    href: "/vaccination",
    color: "from-forest/20 to-forest/5",
    iconColor: "text-forest",
    iconBg: "bg-forest/10",
  },
  {
    icon: Stethoscope,
    title: "General Pediatrics",
    desc: "From fever to flu — trusted treatment for everyday childhood illnesses.",
    href: "/services/general-pediatrics",
    color: "from-sky/20 to-sky/5",
    iconColor: "text-sky",
    iconBg: "bg-sky/10",
  },
  {
    icon: TrendingUp,
    title: "Growth & Development",
    desc: "Milestones monitored, concerns addressed. Nutritional guidance included.",
    href: "/services/growth-development",
    color: "from-honey/20 to-honey/5",
    iconColor: "text-honey-dark",
    iconBg: "bg-honey/10",
  },
  {
    icon: HeartPulse,
    title: "PICU — Critical Care",
    desc: "When children need intensive care — specialized pediatric ICU expertise.",
    href: "/nicu-picu",
    color: "from-coral/20 to-coral/5",
    iconColor: "text-coral",
    iconBg: "bg-coral/10",
  },
  {
    icon: Users,
    title: "Adolescent Health",
    desc: "Growing up healthy, inside and out. Teen health issues and growth concerns.",
    href: "/services/adolescent-health",
    color: "from-sky/20 to-sky/5",
    iconColor: "text-sky",
    iconBg: "bg-sky/10",
  },
  {
    icon: Wind,
    title: "Chronic Conditions",
    desc: "Asthma, diabetes, allergies, cerebral palsy — managed with expert care.",
    href: "/services/chronic-conditions",
    color: "from-forest/20 to-forest/5",
    iconColor: "text-forest",
    iconBg: "bg-forest/10",
  },
  {
    icon: Siren,
    title: "Emergency Pediatric Care",
    desc: "Available when you need us most. Don't wait — call the doctor.",
    href: "/emergency",
    color: "from-coral/20 to-coral/5",
    iconColor: "text-coral",
    iconBg: "bg-coral/10",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-sunshine overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-sky/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-honey/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <Stethoscope className="w-4 h-4 text-sky" />
            <span className="text-sm font-semibold text-sky">Our Services</span>
          </div>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight mb-4">
            Complete Pediatric Care
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            From your baby&apos;s first breath to their teenage years — every stage of
            childhood, expertly covered.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={service.featured ? "sm:col-span-2 lg:col-span-2 sm:row-span-2" : ""}
            >
              <Link href={service.href} className="block h-full group">
                <div
                  className={`relative h-full bg-gradient-to-br ${service.color} rounded-3xl p-6 lg:p-8 border border-white/60 hover:border-white hover:shadow-xl transition-all duration-500 overflow-hidden ${
                    service.featured ? "flex flex-col justify-between min-h-[320px]" : ""
                  }`}
                >
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

                  <div className="relative">
                    <div
                      className={`inline-flex w-12 h-12 ${
                        service.featured ? "lg:w-16 lg:h-16" : ""
                      } rounded-2xl ${service.iconBg} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon
                        className={`w-6 h-6 ${
                          service.featured ? "lg:w-8 lg:h-8" : ""
                        } ${service.iconColor}`}
                      />
                    </div>

                    <h3
                      className={`font-[var(--font-display)] font-bold text-midnight mb-2 ${
                        service.featured ? "text-xl lg:text-2xl" : "text-base"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-slate leading-relaxed ${
                        service.featured ? "text-base max-w-md" : "text-sm"
                      }`}
                    >
                      {service.desc}
                    </p>
                  </div>

                  <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold text-midnight group-hover:text-sky transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
