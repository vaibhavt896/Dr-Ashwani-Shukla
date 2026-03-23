"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Send,
  CheckCircle,
  Baby,
  Calendar,
} from "lucide-react";

interface FormData {
  parentName: string;
  childName: string;
  childAge: string;
  phone: string;
  clinic: string;
  reason: string;
  message: string;
}

const clinics = [
  {
    name: "Rambagh Clinic",
    badge: "Primary",
    badgeColor: "bg-sky text-white",
    address: "104A/252, P Road, Nehru Nagar, Ram Bagh, Kanpur — 208012",
    phone: "+919918601012",
    phoneDisplay: "+91 99186 01012",
    timings: "Mon–Fri: 2 PM–7 PM",
    timingsWeekend: "Sat–Sun: 2 PM–5 PM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shweta+Child+Care+Clinic+Rambagh+Kanpur",
    // Google Maps coordinate embed — no API key required
    embedUrl: "https://maps.google.com/maps?q=26.4677,80.3499&z=16&output=embed",
    osmLink: "https://www.google.com/maps/search/?api=1&query=Shweta+Child+Care+Clinic+Rambagh+Kanpur",
    whatsapp: "919918601012",
    gradient: "from-sky to-sky-dark",
    accentRgb: "52,152,219",
  },
  {
    name: "Barra Clinic",
    badge: "Branch",
    badgeColor: "bg-honey text-midnight",
    address: "Near Madhur Milan Guest House, Yadav Market Chauraha, Barra-2, Kanpur — 208027",
    phone: "+919918601013",
    phoneDisplay: "+91 99186 01013",
    timings: "Mon–Fri: 2 PM–7 PM",
    timingsWeekend: "Sat–Sun: 2 PM–5 PM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shweta+Child+Care+Clinic+Barra+Kanpur",
    // Google Maps coordinate embed — no API key required
    embedUrl: "https://maps.google.com/maps?q=26.3950,80.3788&z=16&output=embed",
    osmLink: "https://www.google.com/maps/search/?api=1&query=Shweta+Child+Care+Clinic+Barra+Kanpur",
    whatsapp: "919918601013",
    gradient: "from-honey to-honey-dark",
    accentRgb: "240,168,48",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const message = `*New Appointment Request*%0A%0AParent: ${data.parentName}%0AChild: ${data.childName} (Age: ${data.childAge})%0APhone: ${data.phone}%0AClinic: ${data.clinic}%0AReason: ${data.reason}%0AMessage: ${data.message || "N/A"}`;
    window.open(`https://wa.me/919918601012?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-br from-sunshine via-white to-sky/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
              <Calendar className="w-4 h-4 text-sky" />
              <span className="text-sm font-semibold text-sky">Book Appointment</span>
            </div>
            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-midnight mb-6">
              Visit Us or <span className="text-sky">Book Online</span>
            </h1>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Two convenient locations in Kanpur. Same doctor, same quality care.
            </p>
          </AnimatedSection>

          {/* Clinic cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {clinics.map((clinic, i) => (
              <AnimatedSection key={clinic.name} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden flex flex-col group"
                  style={{ boxShadow: "0 4px 24px -4px rgba(28,45,63,0.10), 0 1px 4px rgba(28,45,63,0.06)" }}
                  whileHover={{ y: -5, boxShadow: `0 20px 50px -8px rgba(${clinic.accentRgb},0.22), 0 4px 16px rgba(28,45,63,0.08)` }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  {/* ── LIVE MAP VIEW ── */}
                  <div className="relative h-[220px] sm:h-[260px] bg-[#e8eff4] overflow-hidden">
                    {/* Google Maps iframe — coordinate-based, no API key */}
                    <iframe
                      src={clinic.embedUrl}
                      className="absolute inset-0 w-full h-full border-0"
                      style={{ filter: "saturate(1.1) contrast(1.02)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map – ${clinic.name}`}
                    />

                    {/* Top-left: clinic badge pill */}
                    <div className={`absolute top-3 left-3 z-10 flex items-center gap-1.5 ${clinic.badgeColor} text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-md`}>
                      <motion.span
                        className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white/80" : "bg-midnight/30"}`}
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {clinic.badge}
                    </div>

                    {/* Top-right: open in maps link */}
                    <a
                      href={clinic.osmLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-slate px-2.5 py-1.5 rounded-full shadow hover:bg-white transition-colors"
                    >
                      <Navigation className="w-3 h-3" />
                      Open map
                    </a>

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

                    {/* Floating info chip anchored at bottom of map */}
                    <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center gap-3 bg-white/96 backdrop-blur-md rounded-2xl px-3 py-2.5 shadow-lg border border-white/50">
                      {/* Accent dot */}
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${clinic.gradient} flex items-center justify-center shrink-0 shadow`}>
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-extrabold text-midnight leading-tight truncate">{clinic.name}</p>
                        <p className="text-[11px] text-slate truncate">{clinic.address.split(",").slice(0, 2).join(",")}</p>
                      </div>
                      {/* Live indicator */}
                      <div className="flex items-center gap-1 shrink-0">
                        <motion.span
                          className="w-2 h-2 rounded-full bg-forest"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-[10px] font-semibold text-forest">Live</span>
                      </div>
                    </div>
                  </div>

                  {/* ── CARD BODY ── */}
                  <div className="px-5 pt-5 pb-5 flex flex-col gap-4 flex-1">
                    {/* Info rows */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-sky/10 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4 text-sky" />
                        </div>
                        <span className="text-sm text-slate leading-relaxed pt-1">{clinic.address}</span>
                      </div>

                      <a href={`tel:${clinic.phone}`} className="flex items-center gap-3 group/ph">
                        <div className="w-8 h-8 rounded-xl bg-forest/10 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-forest" />
                        </div>
                        <span className="text-sm font-semibold text-midnight group-hover/ph:text-sky transition-colors">{clinic.phoneDisplay}</span>
                      </a>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-honey/10 flex items-center justify-center shrink-0">
                          <Clock className="w-4 h-4 text-honey-dark" />
                        </div>
                        <div className="text-sm text-slate pt-1">
                          <span className="block font-medium text-midnight">{clinic.timings}</span>
                          <span className="text-slate/60 text-xs">{clinic.timingsWeekend}</span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-midnight/8 to-transparent" />

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={clinic.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${clinic.gradient} text-white font-semibold py-3 rounded-2xl text-sm hover:opacity-90 transition-all`}
                        style={{ boxShadow: `0 4px 16px -4px rgba(${clinic.accentRgb},0.5)` }}
                      >
                        <Navigation className="w-4 h-4" />
                        Directions
                      </a>
                      <a
                        href={`https://wa.me/${clinic.whatsapp}?text=Hello%2C%20I%20want%20to%20book%20an%20appointment%20at%20${encodeURIComponent(clinic.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#128C3F] font-semibold py-3 rounded-2xl text-sm hover:bg-[#25D366]/20 transition-colors"
                      >
                        <svg viewBox="0 0 32 32" className="w-4 h-4 fill-[#128C3F]">
                          <path d="M16.002 3C9.374 3 4 8.373 4 15c0 2.385.678 4.61 1.853 6.497L4 29l7.733-1.832A11.94 11.94 0 0 0 16.002 28C22.63 28 28 22.627 28 16S22.63 3 16.002 3Zm5.389 18.462c-.295-.148-1.747-.861-2.018-.96-.27-.098-.467-.148-.663.149-.196.296-.76.96-.932 1.157-.173.197-.345.222-.64.074-.296-.148-1.248-.46-2.376-1.467-.878-.782-1.47-1.748-1.642-2.044-.172-.296-.018-.456.13-.604.133-.132.295-.345.443-.518.148-.172.197-.296.296-.493.099-.197.05-.37-.025-.518-.075-.148-.663-1.601-.908-2.191-.24-.577-.482-.498-.663-.508l-.566-.01a1.086 1.086 0 0 0-.788.37c-.27.297-1.033 1.01-1.033 2.462s1.058 2.855 1.206 3.053c.148.197 2.082 3.178 5.044 4.458.705.304 1.255.485 1.684.622.707.225 1.351.193 1.86.117.567-.085 1.747-.714 1.994-1.403.246-.689.246-1.28.172-1.403-.074-.123-.27-.197-.566-.345Z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Booking Form */}
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl border border-midnight/5 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-honey/10 flex items-center justify-center">
                    <Baby className="w-6 h-6 text-honey-dark" />
                  </div>
                  <div>
                    <h2 className="font-[var(--font-display)] text-xl font-bold text-midnight">
                      Book Appointment via WhatsApp
                    </h2>
                    <p className="text-sm text-slate">
                      Fill this form and it will open WhatsApp with your details
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-forest mx-auto mb-4" />
                    <h3 className="font-[var(--font-display)] text-2xl font-bold text-midnight mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate mb-6">
                      Your appointment request has been sent via WhatsApp. We&apos;ll confirm shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sky font-semibold hover:underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-midnight mb-1.5">
                          Parent&apos;s Name *
                        </label>
                        <input
                          {...register("parentName", { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-midnight/10 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-sm"
                          placeholder="Your name"
                        />
                        {errors.parentName && (
                          <span className="text-xs text-coral mt-1">Required</span>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-midnight mb-1.5">
                          Child&apos;s Name *
                        </label>
                        <input
                          {...register("childName", { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-midnight/10 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-sm"
                          placeholder="Child's name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-midnight mb-1.5">
                          Child&apos;s Age
                        </label>
                        <input
                          {...register("childAge")}
                          className="w-full px-4 py-3 rounded-xl border border-midnight/10 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-sm"
                          placeholder="e.g., 6 months, 3 years"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-midnight mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          {...register("phone", { required: true })}
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-midnight/10 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-sm"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-midnight mb-1.5">
                          Preferred Clinic *
                        </label>
                        <select
                          {...register("clinic", { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-midnight/10 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Select clinic</option>
                          <option value="Rambagh">Rambagh (P Road)</option>
                          <option value="Barra">Barra-2</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-midnight mb-1.5">
                          Reason for Visit *
                        </label>
                        <select
                          {...register("reason", { required: true })}
                          className="w-full px-4 py-3 rounded-xl border border-midnight/10 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-sm bg-white"
                        >
                          <option value="">Select reason</option>
                          <option value="General Checkup">General Checkup</option>
                          <option value="Vaccination">Vaccination</option>
                          <option value="Illness/Fever">Illness / Fever</option>
                          <option value="NICU Consultation">NICU Consultation</option>
                          <option value="Growth Concern">Growth Concern</option>
                          <option value="Follow-up">Follow-up Visit</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-midnight mb-1.5">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        {...register("message")}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-midnight/10 focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-sm resize-none"
                        placeholder="Any specific concerns or preferred timing..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full magnetic-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-honey to-honey-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-honey/30 hover:shadow-honey/50 transition-all text-base"
                    >
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Email */}
          <div className="text-center mt-8">
            <a
              href="mailto:shwetachildcareclinic@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-slate hover:text-sky transition-colors"
            >
              <Mail className="w-4 h-4" />
              shwetachildcareclinic@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
