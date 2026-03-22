"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowLeft, Phone, Calendar, ArrowRight } from "lucide-react";

const articles: Record<string, { title: string; category: string; content: React.ReactNode }> = {
  "newborn-first-30-days": {
    title: "Your Newborn's First 30 Days: What Every Kanpur Parent Should Know",
    category: "Newborn Care",
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-slate leading-relaxed">
          Congratulations on your new arrival! The first 30 days of your baby&apos;s life are incredible — and sometimes overwhelming. Here&apos;s what 25+ years of pediatric experience has taught Dr. Shukla about this precious period.
        </p>

        <h2 className="font-[var(--font-display)] text-2xl font-bold text-midnight mt-10 mb-4">Feeding Your Newborn</h2>
        <ul className="space-y-3 text-slate">
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sky rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Breastfeed within the first hour</strong> after birth if possible. Colostrum (the first milk) is incredibly beneficial.</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sky rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Feed every 2-3 hours</strong> — 8-12 times per day. Your baby&apos;s stomach is tiny (the size of a marble at birth).</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sky rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Wet diapers = good hydration.</strong> Expect 6-8 wet diapers per day after day 4.</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-sky rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">It&apos;s normal</strong> for newborns to lose up to 10% of birth weight in the first week. They should regain it by 2 weeks.</span></li>
        </ul>

        <h2 className="font-[var(--font-display)] text-2xl font-bold text-midnight mt-10 mb-4">Sleep Patterns</h2>
        <ul className="space-y-3 text-slate">
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-honey rounded-full mt-2 shrink-0" /><span>Newborns sleep 16-17 hours a day — but in short bursts of 2-4 hours.</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-honey rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Always place baby on their back</strong> to sleep. This is the safest position.</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-honey rounded-full mt-2 shrink-0" /><span>Keep the sleeping area firm and clear — no pillows, stuffed toys, or loose blankets.</span></li>
        </ul>

        <h2 className="font-[var(--font-display)] text-2xl font-bold text-midnight mt-10 mb-4">When to Call the Doctor Immediately</h2>
        <div className="bg-coral/5 rounded-2xl p-6 border border-coral/10">
          <ul className="space-y-3 text-slate">
            <li className="flex items-start gap-3"><span className="text-coral font-bold">!</span><span>Fever above 100.4°F (38°C) — in newborns, any fever is an emergency</span></li>
            <li className="flex items-start gap-3"><span className="text-coral font-bold">!</span><span>Refusing to feed or feeding very poorly</span></li>
            <li className="flex items-start gap-3"><span className="text-coral font-bold">!</span><span>Unusual lethargy or difficulty waking</span></li>
            <li className="flex items-start gap-3"><span className="text-coral font-bold">!</span><span>Difficulty breathing, fast breathing, or grunting sounds</span></li>
            <li className="flex items-start gap-3"><span className="text-coral font-bold">!</span><span>Yellow skin or eyes getting deeper (jaundice)</span></li>
            <li className="flex items-start gap-3"><span className="text-coral font-bold">!</span><span>No wet diapers for 6+ hours</span></li>
          </ul>
        </div>

        <h2 className="font-[var(--font-display)] text-2xl font-bold text-midnight mt-10 mb-4">Normal Newborn Things (Don&apos;t Worry!)</h2>
        <ul className="space-y-3 text-slate">
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-forest rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Sneezing</strong> — this is how babies clear their nasal passages. It doesn&apos;t mean they have a cold.</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-forest rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Hiccups</strong> — very common and not bothersome to the baby.</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-forest rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Mild jaundice</strong> — slight yellowing in the first week is common. Only deep/progressive yellowing needs treatment.</span></li>
          <li className="flex items-start gap-3"><span className="w-2 h-2 bg-forest rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Skin peeling</strong> — completely normal in the first 2 weeks, especially for overdue babies.</span></li>
        </ul>

        <div className="mt-10 p-6 bg-sky/5 rounded-2xl border border-sky/10">
          <p className="text-midnight font-medium italic">
            &quot;Remember — there&apos;s no such thing as a silly question when it comes to your newborn. If you&apos;re concerned about anything, call us. That&apos;s what we&apos;re here for.&quot;
          </p>
          <p className="text-sm text-slate mt-2">— Dr. Ashwani Kumar Shukla</p>
        </div>
      </div>
    ),
  },
  "vaccination-schedule-india-2026": {
    title: "Complete Vaccination Schedule for Indian Children (2026 Updated)",
    category: "Vaccination",
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-slate leading-relaxed">
          Vaccination is the single most effective way to protect your child from life-threatening diseases. Here is the complete, updated vaccination schedule for Indian children as recommended by the Indian Academy of Pediatrics (IAP) for 2026.
        </p>

        <div className="my-8 p-6 bg-forest/5 rounded-2xl border border-forest/10">
          <p className="text-midnight font-semibold mb-2">For the interactive version:</p>
          <p className="text-slate">
            Visit our <a href="/vaccination" className="text-forest font-semibold underline">Vaccination Schedule page</a> where you can select your child&apos;s age and see exactly which vaccines are due.
          </p>
        </div>

        <h2 className="font-[var(--font-display)] text-2xl font-bold text-midnight mt-10 mb-4">At Birth</h2>
        <ul className="space-y-2 text-slate">
          <li><strong className="text-midnight">BCG</strong> — Protects against tuberculosis</li>
          <li><strong className="text-midnight">OPV-0</strong> — First dose of oral polio vaccine</li>
          <li><strong className="text-midnight">Hepatitis B Birth Dose</strong> — Critical first protection</li>
        </ul>

        <h2 className="font-[var(--font-display)] text-2xl font-bold text-midnight mt-10 mb-4">6, 10, 14 Weeks — The Triple Series</h2>
        <p className="text-slate">These three visits are crucial. Your baby receives multiple vaccines at each visit:</p>
        <ul className="space-y-2 text-slate">
          <li><strong className="text-midnight">DTwP/DTaP</strong> — Diphtheria, Tetanus, Pertussis</li>
          <li><strong className="text-midnight">IPV</strong> — Inactivated Polio Vaccine</li>
          <li><strong className="text-midnight">Hib</strong> — Haemophilus influenzae</li>
          <li><strong className="text-midnight">Rotavirus</strong> — Prevents severe diarrhea</li>
          <li><strong className="text-midnight">PCV</strong> — Pneumococcal vaccine</li>
        </ul>

        <h2 className="font-[var(--font-display)] text-2xl font-bold text-midnight mt-10 mb-4">Key Points for Parents</h2>
        <div className="bg-honey/5 rounded-2xl p-6 border border-honey/10">
          <ul className="space-y-3 text-slate">
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-honey rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Don&apos;t delay vaccinations</strong> — they are timed for when your child needs protection most.</span></li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-honey rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Mild fever after vaccination is normal</strong> — it means the immune system is responding.</span></li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-honey rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">Keep a vaccination card</strong> — bring it to every clinic visit.</span></li>
            <li className="flex items-start gap-3"><span className="w-2 h-2 bg-honey rounded-full mt-2 shrink-0" /><span><strong className="text-midnight">All vaccines available</strong> at both our Rambagh and Barra clinics.</span></li>
          </ul>
        </div>
      </div>
    ),
  },
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug];

  if (!article) {
    return (
      <section className="py-32 text-center">
        <h1 className="font-[var(--font-display)] text-3xl font-bold text-midnight mb-4">
          Article Not Found
        </h1>
        <Link href="/parents-guide" className="text-sky hover:underline">
          View all articles
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="pt-16 pb-12 lg:pt-24 bg-gradient-to-b from-sunshine to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/parents-guide"
              className="inline-flex items-center gap-2 text-sm text-slate hover:text-midnight mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Parents&apos; Guide
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <span className="inline-block text-xs font-bold text-sky bg-sky/10 px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-sm text-slate">
              By Dr. Ashwani Kumar Shukla, MBBS, MD — Pediatrics
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {article.content}
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 bg-gradient-to-r from-sky to-sky-dark rounded-3xl p-8 text-center text-white">
              <h3 className="font-[var(--font-display)] text-2xl font-bold mb-4">
                Have Questions? Talk to Dr. Shukla
              </h3>
              <p className="text-white/80 mb-6">
                Book a consultation or call us for personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="magnetic-btn inline-flex items-center gap-2 bg-white text-sky font-bold px-8 py-4 rounded-full"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href="tel:+919918601012"
                  className="magnetic-btn inline-flex items-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-full border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
