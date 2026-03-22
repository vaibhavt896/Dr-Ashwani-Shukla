"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BookOpen, ArrowRight, Clock, Calendar, Baby, Syringe } from "lucide-react";

const articles = [
  {
    slug: "newborn-first-30-days",
    title: "Your Newborn's First 30 Days: What Every Kanpur Parent Should Know",
    excerpt:
      "Everything you need to know about caring for your newborn — feeding, sleeping, warning signs, and when to call the doctor.",
    category: "Newborn Care",
    readTime: "8 min read",
    icon: Baby,
    color: "coral",
  },
  {
    slug: "vaccination-schedule-india-2026",
    title: "Complete Vaccination Schedule for Indian Children (2026 Updated)",
    excerpt:
      "Updated vaccination schedule as per IAP guidelines. Know which vaccines your child needs and when. Includes both NIS and optional vaccines.",
    category: "Vaccination",
    readTime: "10 min read",
    icon: Syringe,
    color: "forest",
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  coral: { bg: "bg-coral/5", icon: "text-coral", badge: "bg-coral/10" },
  forest: { bg: "bg-forest/5", icon: "text-forest", badge: "bg-forest/10" },
};

export default function ParentsGuidePage() {
  return (
    <>
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-br from-sunshine via-white to-peach/20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
              <BookOpen className="w-4 h-4 text-honey-dark" />
              <span className="text-sm font-semibold text-honey-dark">Parents&apos; Guide</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-midnight mb-6">
              Expert Advice for{" "}
              <span className="text-honey">Every Parent</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Evidence-based articles by Dr. Ashwani Shukla to help you navigate
              parenthood with confidence. No jargon, no fear-mongering — just
              practical guidance from 25+ years of experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article, i) => {
              const colors = colorMap[article.color];
              return (
                <AnimatedSection key={article.slug} delay={i * 0.1}>
                  <Link href={`/parents-guide/${article.slug}`} className="block group">
                    <div className={`${colors.bg} rounded-3xl p-6 lg:p-8 border border-transparent hover:shadow-lg transition-all duration-500`}>
                      <div className="flex flex-col sm:flex-row items-start gap-6">
                        <div className={`w-14 h-14 rounded-2xl ${colors.badge} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                          <article.icon className={`w-7 h-7 ${colors.icon}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${colors.badge} ${colors.icon}`}>
                              {article.category}
                            </span>
                            <span className="text-xs text-slate flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h2 className="font-[var(--font-display)] text-xl lg:text-2xl font-bold text-midnight mb-3 group-hover:text-sky transition-colors">
                            {article.title}
                          </h2>
                          <p className="text-slate leading-relaxed mb-4">{article.excerpt}</p>
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-midnight group-hover:text-sky transition-colors">
                            Read article
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-16">
            <p className="text-slate">
              More articles coming soon. Have a topic you&apos;d like covered?{" "}
              <Link href="/contact" className="text-sky font-semibold hover:underline">
                Let us know
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
