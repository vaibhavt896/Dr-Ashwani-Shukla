"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";

const locations = [
  {
    name: "Rambagh Clinic",
    tag: "Primary",
    address: "104A/252, P Road, Nehru Nagar, Ram Bagh, Kanpur — 208012",
    phone: "+919918601012",
    phoneDisplay: "+91 99186 01012",
    timings: "Mon–Fri: 2 PM–7 PM | Sat–Sun: 2 PM–5 PM",
    mapQuery: "Shweta+Child+Care+Clinic+Rambagh+Kanpur",
    gradient: "from-sky to-sky-dark",
    lightGradient: "from-sky/10 to-sky/5",
  },
  {
    name: "Barra Clinic",
    tag: "Branch",
    address: "Near Madhur Milan Guest House, Yadav Market Chauraha, Barra-2, Kanpur — 208027",
    phone: "+919918601013",
    phoneDisplay: "+91 99186 01013",
    timings: "Mon–Fri: 2 PM–7 PM | Sat–Sun: 2 PM–5 PM",
    mapQuery: "Shweta+Child+Care+Clinic+Barra+Kanpur",
    gradient: "from-honey to-honey-dark",
    lightGradient: "from-honey/10 to-honey/5",
  },
];

export default function TwoLocations() {
  return (
    <section className="relative py-24 lg:py-32 bg-sunshine overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-midnight/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <MapPin className="w-4 h-4 text-sky" />
            <span className="text-sm font-semibold text-sky">Two Locations</span>
          </div>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight mb-4">
            Visit Us at Either Clinic
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Same doctor, same quality, same care — at two convenient locations in Kanpur
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg shadow-midnight/5 overflow-hidden border border-midnight/5 hover:shadow-xl hover:border-sky/20 transition-all duration-500 h-full">
                {/* Map placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${loc.lightGradient} flex items-center justify-center`}>
                  <div className="text-center">
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MapPin className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${loc.gradient} text-white rounded-full p-2.5 shadow-lg`} />
                    </motion.div>
                    <p className="text-sm text-slate font-medium">{loc.name}</p>
                  </div>
                  {/* Tag */}
                  <span className={`absolute top-4 right-4 text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${loc.gradient}`}>
                    {loc.tag}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-midnight mb-4">
                    {loc.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm text-slate">
                      <MapPin className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                      {loc.address}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate">
                      <Clock className="w-4 h-4 text-sky shrink-0" />
                      {loc.timings}
                    </div>
                    <a
                      href={`tel:${loc.phone}`}
                      className="flex items-center gap-3 text-sm text-sky font-semibold hover:text-sky-dark transition-colors"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      {loc.phoneDisplay}
                    </a>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 magnetic-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r ${loc.gradient} text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm`}
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </a>
                    <a
                      href={`https://wa.me/91${loc.phone.replace('+91', '').replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 magnetic-btn inline-flex items-center justify-center gap-2 bg-forest/10 text-forest font-semibold py-3 rounded-xl hover:bg-forest/20 transition-all text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
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
