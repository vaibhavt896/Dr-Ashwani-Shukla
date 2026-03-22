"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { servicesData } from "@/lib/services-data";
import {
  CheckCircle,
  AlertTriangle,
  Phone,
  ArrowRight,
  ArrowLeft,
  Stethoscope,
  TrendingUp,
  Users,
  Wind,
  Droplets,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  TrendingUp,
  Users,
  Wind,
  Droplets,
};

const colorMap: Record<string, { bg: string; icon: string; badge: string; gradient: string }> = {
  sky: { bg: "bg-sky/5", icon: "text-sky", badge: "bg-sky/10", gradient: "from-sky to-sky-dark" },
  honey: { bg: "bg-honey/5", icon: "text-honey-dark", badge: "bg-honey/10", gradient: "from-honey to-honey-dark" },
  forest: { bg: "bg-forest/5", icon: "text-forest", badge: "bg-forest/10", gradient: "from-forest to-forest-dark" },
  coral: { bg: "bg-coral/5", icon: "text-coral", badge: "bg-coral/10", gradient: "from-coral to-red-500" },
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <section className="py-32 text-center">
        <h1 className="font-[var(--font-display)] text-3xl font-bold text-midnight mb-4">
          Service Not Found
        </h1>
        <Link href="/services" className="text-sky hover:underline">
          View all services
        </Link>
      </section>
    );
  }

  const Icon = iconMap[service.icon] || Stethoscope;
  const colors = colorMap[service.color] || colorMap.sky;

  return (
    <>
      {/* Hero */}
      <section className={`relative pt-16 pb-24 lg:pt-24 lg:pb-32 ${colors.bg} overflow-hidden`}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-slate hover:text-midnight mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <div className={`inline-flex w-16 h-16 rounded-2xl ${colors.badge} items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-midnight mb-6">
                  {service.title}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg text-slate leading-relaxed mb-8">
                  {service.longDescription}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className={`magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white font-bold px-8 py-4 rounded-full shadow-lg`}
                  >
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+919918601012"
                    className="magnetic-btn inline-flex items-center gap-2 bg-white text-midnight font-bold px-8 py-4 rounded-full shadow-md border border-midnight/10"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Conditions list */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-midnight/5">
                <h3 className="font-[var(--font-display)] text-xl font-bold text-midnight mb-6">
                  Conditions We Treat
                </h3>
                <div className="space-y-3">
                  {service.conditions.map((condition, i) => (
                    <motion.div
                      key={condition}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className={`flex items-center gap-3 p-3 rounded-xl ${colors.bg} hover:shadow-sm transition-all`}
                    >
                      <CheckCircle className={`w-4 h-4 ${colors.icon} shrink-0`} />
                      <span className="text-sm font-medium text-midnight">{condition}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* When to visit */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-midnight mb-4">
              When Should You Visit?
            </h2>
            <p className="text-slate text-lg">
              Don&apos;t hesitate to bring your child for any of these concerns
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.whenToVisit.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.08}>
                <div className={`flex items-start gap-3 p-4 rounded-xl ${colors.bg} border ${colors.bg}`}>
                  <AlertTriangle className={`w-5 h-5 ${colors.icon} shrink-0 mt-0.5`} />
                  <span className="text-sm font-medium text-midnight">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faq.length > 0 && (
        <section className="py-24 bg-sunshine">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-midnight mb-4">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {service.faq.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <details className="group bg-white rounded-2xl border border-midnight/5 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-[var(--font-display)] font-bold text-midnight hover:text-sky transition-colors">
                      {faq.q}
                      <ArrowRight className="w-5 h-5 shrink-0 rotate-90 group-open:rotate-[270deg] transition-transform text-slate" />
                    </summary>
                    <div className="px-6 pb-6 text-slate leading-relaxed">{faq.a}</div>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`py-20 bg-gradient-to-r ${colors.gradient} text-center`}>
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Need Help With {service.title}?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Dr. Shukla has 25+ years of experience. Book a consultation today.
            </p>
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center gap-2 bg-white text-midnight font-bold px-8 py-4 rounded-full shadow-lg"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
