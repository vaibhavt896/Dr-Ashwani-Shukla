"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import {
  GraduationCap,
  HeartPulse,
  BookOpen,
  Hospital,
  Award,
  Users,
  Building2,
  Clock,
  Baby,
  Quote,
  ArrowRight,
  Star,
} from "lucide-react";

const timeline = [
  { year: "~2000", title: "Journey Begins", desc: "Dr. Ashwani Kumar Shukla completes MBBS and MD in Pediatrics, beginning a lifelong mission dedicated to children's health." },
  { year: "2000s", title: "NICU Expertise", desc: "Develops deep expertise in Neonatal Intensive Care, managing thousands of critical newborn cases across Kanpur hospitals." },
  { year: "2017", title: "Shweta Child Care Founded", desc: "Establishes Shweta Child Care Clinic Pvt Ltd — named after purity, named for every child. Two clinic locations in Kanpur." },
  { year: "2020s", title: "25+ Years Strong", desc: "Now one of Kanpur's most trusted pediatricians with 139+ patient reviews, continuing to mentor young doctors and publish research." },
];

const affiliations = [
  { name: "Kannika Hospital Pvt Ltd", role: "Visiting Pediatrician" },
  { name: "Pravi IVF Centre, Kanpur", role: "Pediatric & Neonatal Consultant" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-br from-sunshine via-white to-peach/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-honey/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 mb-6 shadow-sm">
                  <span className="text-sm font-semibold text-sky">Our Story</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-midnight mb-6 leading-tight">
                  A Clinic Born from{" "}
                  <span className="text-honey">a Parent&apos;s Love</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg text-slate leading-relaxed mb-6">
                  Dr. Ashwani Kumar Shukla and his wife Alka didn&apos;t just start a clinic — they
                  built a sanctuary for children. Named &quot;Shweta&quot; (शवेता — meaning pure and bright),
                  the clinic carries the belief that every child deserves the purest start in life.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-lg text-slate leading-relaxed mb-8">
                  For over 25 years, Dr. Shukla has been the doctor Kanpur parents trust at
                  2 AM — a NICU specialist who treats every child as his own.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-honey to-honey-dark text-white font-bold px-8 py-4 rounded-full shadow-lg"
                  >
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Doctor card */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky/10 to-sky/5 rounded-[3rem] transform rotate-3" />
                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-xl border border-sky/10">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-sky to-sky-dark flex items-center justify-center shadow-xl shadow-sky/30 mb-6">
                    <svg viewBox="0 0 60 60" className="w-16 h-16" fill="none">
                      <circle cx="30" cy="22" r="10" fill="white" opacity="0.4" />
                      <path d="M16 48C16 38 22 32 30 32C38 32 44 38 44 48" stroke="white" strokeWidth="2.5" fill="none" opacity="0.5" />
                    </svg>
                  </div>
                  <div className="text-center mb-6">
                    <h2 className="font-[var(--font-display)] text-2xl font-extrabold text-midnight">
                      Dr. Ashwani Kumar Shukla
                    </h2>
                    <p className="text-sky font-semibold">MBBS, MD — Pediatrics</p>
                    <p className="text-sm text-slate mt-1">Senior Pediatrician & Neonatologist</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Award, label: "25+ Years", sublabel: "Experience" },
                      { icon: HeartPulse, label: "NICU/PICU", sublabel: "Specialist" },
                      { icon: Building2, label: "2 Clinics", sublabel: "In Kanpur" },
                      { icon: Star, label: "4.1★", sublabel: "Rating" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 p-3 rounded-xl bg-sunshine"
                      >
                        <item.icon className="w-5 h-5 text-sky" />
                        <div>
                          <div className="text-sm font-bold text-midnight">{item.label}</div>
                          <div className="text-xs text-slate">{item.sublabel}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Name Story */}
      <section id="story" className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-6xl sm:text-7xl font-bold text-honey/70 animate-glow leading-none">शवेता</span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-midnight mt-6 mb-4">
              The Meaning Behind the Name
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-lg text-slate leading-relaxed max-w-2xl mx-auto mb-6">
              <strong>&quot;Shweta&quot;</strong> (शवेता) means <em>pure, bright, white</em> in Sanskrit.
              The directors — Dr. Ashwani Kumar Shukla and Alka Shukla — named their clinic after
              what they believe every child deserves: a pure start and a bright future.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="bg-peach rounded-2xl p-6 max-w-lg mx-auto border border-honey/20">
              <Quote className="w-8 h-8 text-honey/30 mx-auto mb-3" />
              <p className="text-midnight italic font-medium">
                &quot;A clinic born from a parent&apos;s love — built to care for every parent&apos;s child.&quot;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-sunshine">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-midnight mb-4">
              25+ Years of Dedication
            </h2>
            <p className="text-lg text-slate">A journey devoted entirely to children&apos;s health</p>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky via-honey to-forest" />

            {timeline.map((item, i) => (
              <AnimatedSection
                key={item.year}
                delay={i * 0.15}
                direction={i % 2 === 0 ? "left" : "right"}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 -translate-x-1/2 bg-white border-4 border-sky rounded-full z-10" />

                {/* Content */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                  <span className="inline-block bg-sky/10 text-sky font-bold text-sm px-3 py-1 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-midnight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Affiliations */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Qualifications */}
            <AnimatedSection>
              <h2 className="font-[var(--font-display)] text-2xl font-extrabold text-midnight mb-8">
                Qualifications & Expertise
              </h2>
              <div className="space-y-4">
                {[
                  { icon: GraduationCap, title: "MBBS", desc: "Bachelor of Medicine, Bachelor of Surgery" },
                  { icon: GraduationCap, title: "MD — Pediatrics", desc: "Doctor of Medicine — Specialization in Pediatric Care" },
                  { icon: HeartPulse, title: "NICU Management", desc: "Expert in Neonatal Intensive Care — premature and critically ill newborns" },
                  { icon: HeartPulse, title: "PICU Management", desc: "Pediatric Intensive Care for critically ill children" },
                  { icon: BookOpen, title: "Research & Publications", desc: "Published papers in neonatal/pediatric care journals" },
                  { icon: Users, title: "Mentorship", desc: "Trains and mentors young pediatricians in NICU & PICU management" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-sunshine hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-sky" />
                    </div>
                    <div>
                      <h4 className="font-bold text-midnight">{item.title}</h4>
                      <p className="text-sm text-slate">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Affiliations + Company Info */}
            <div>
              <AnimatedSection direction="right">
                <h2 className="font-[var(--font-display)] text-2xl font-extrabold text-midnight mb-8">
                  Hospital Affiliations
                </h2>
                <div className="space-y-4 mb-12">
                  {affiliations.map((aff) => (
                    <div key={aff.name} className="flex items-start gap-4 p-4 rounded-2xl bg-sunshine">
                      <Hospital className="w-5 h-5 text-sky mt-0.5" />
                      <div>
                        <h4 className="font-bold text-midnight">{aff.name}</h4>
                        <p className="text-sm text-slate">{aff.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <h2 className="font-[var(--font-display)] text-2xl font-extrabold text-midnight mb-8">
                  Company Details
                </h2>
                <div className="bg-midnight text-white rounded-3xl p-8">
                  <h3 className="font-[var(--font-display)] font-bold text-lg mb-4">
                    Shweta Child Care Clinic Pvt Ltd
                  </h3>
                  <div className="space-y-3 text-sm text-white/70">
                    <p><strong className="text-white/90">CIN:</strong> U85320UP2017PTC092338</p>
                    <p><strong className="text-white/90">Type:</strong> Private Limited Company</p>
                    <p><strong className="text-white/90">Incorporated:</strong> 2017</p>
                    <p><strong className="text-white/90">Directors:</strong> Ashwani Kumar Shukla, Alka Shukla</p>
                    <p><strong className="text-white/90">Registered Address:</strong> 104A/252 Shree Laxmi Villa, Rambagh, P Road, Kanpur 208012</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-sky to-sky-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Ready to Meet Dr. Shukla?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book an appointment at either of our two clinics in Kanpur.
            </p>
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center gap-2 bg-white text-sky font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
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
