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
  MessageCircle,
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
    name: "Rambagh Clinic (Primary)",
    address: "104A/252, P Road, Nehru Nagar, Ram Bagh, Kanpur — 208012",
    phone: "+919918601012",
    phoneDisplay: "+91 99186 01012",
    timings: "Mon–Fri: 2 PM–7 PM | Sat–Sun: 2 PM–5 PM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shweta+Child+Care+Clinic+Rambagh+Kanpur",
    whatsapp: "919918601012",
    gradient: "from-sky to-sky-dark",
  },
  {
    name: "Barra Clinic",
    address: "Near Madhur Milan Guest House, Yadav Market Chauraha, Barra-2, Kanpur — 208027",
    phone: "+919918601013",
    phoneDisplay: "+91 99186 01013",
    timings: "Mon–Fri: 2 PM–7 PM | Sat–Sun: 2 PM–5 PM",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shweta+Child+Care+Clinic+Barra+Kanpur",
    whatsapp: "919918601013",
    gradient: "from-honey to-honey-dark",
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
                <div className="bg-white rounded-3xl shadow-lg border border-midnight/5 overflow-hidden h-full">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${clinic.gradient} p-6 text-white`}>
                    <h3 className="font-[var(--font-display)] text-xl font-bold mb-1">
                      {clinic.name}
                    </h3>
                    <p className="text-white/80 text-sm">{clinic.timings}</p>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                      <span className="text-sm text-slate">{clinic.address}</span>
                    </div>
                    <a
                      href={`tel:${clinic.phone}`}
                      className="flex items-center gap-3 text-sm font-semibold text-sky hover:text-sky-dark transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      {clinic.phoneDisplay}
                    </a>
                    <div className="flex items-center gap-3 text-sm text-slate">
                      <Clock className="w-5 h-5 shrink-0" />
                      {clinic.timings}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={clinic.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r ${clinic.gradient} text-white font-semibold py-3 rounded-xl shadow-md text-sm`}
                      >
                        <Navigation className="w-4 h-4" />
                        Directions
                      </a>
                      <a
                        href={`https://wa.me/${clinic.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-forest/10 text-forest font-semibold py-3 rounded-xl text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${clinic.phone}`}
                        className="inline-flex items-center justify-center w-12 bg-coral/10 text-coral rounded-xl"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
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
