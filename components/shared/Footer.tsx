import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const footerLinks = {
  clinic: [
    { href: "/about", label: "About Us" },
    { href: "/about#story", label: "Our Story" },
    { href: "/contact", label: "Contact" },
    { href: "/emergency", label: "Emergency Care" },
  ],
  services: [
    { href: "/services/general-pediatrics", label: "General Pediatrics" },
    { href: "/nicu-picu", label: "NICU / PICU Care" },
    { href: "/vaccination", label: "Vaccination" },
    { href: "/services/growth-development", label: "Growth & Development" },
  ],
  parents: [
    { href: "/vaccination", label: "Vaccination Schedule" },
    { href: "/parents-guide", label: "Parents' Guide" },
    { href: "/emergency", label: "When to Call" },
    { href: "/contact", label: "Book Appointment" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-midnight text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-honey/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top CTA */}
        <div className="bg-gradient-to-r from-sky to-sky-dark rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white/30 rounded-full" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full" />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold mb-2">
                Your child&apos;s health can&apos;t wait.
              </h3>
              <p className="text-white/80 text-lg">
                Book an appointment or call us now for immediate consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="magnetic-btn inline-flex items-center justify-center gap-2 bg-white text-sky font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919918601012"
                className="magnetic-btn inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky to-sky-dark flex items-center justify-center">
                <span className="text-white font-[var(--font-display)] font-bold text-lg">श</span>
              </div>
              <div>
                <div className="font-[var(--font-display)] font-bold text-base">Shweta Child Care</div>
                <div className="text-xs text-white/50">Pvt Ltd</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Named after purity. Built for every child. 25+ years of dedicated pediatric care in Kanpur.
            </p>
            <p className="text-xs text-white/30">
              CIN: U85320UP2017PTC092338
            </p>
          </div>

          {/* Clinic */}
          <div>
            <h4 className="font-[var(--font-display)] font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Clinic
            </h4>
            <ul className="space-y-3">
              {footerLinks.clinic.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-honey transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[var(--font-display)] font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-honey transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[var(--font-display)] font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919918601012"
                  className="flex items-start gap-2 text-sm text-white/70 hover:text-honey transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <span className="block text-white/40 text-xs">Rambagh</span>
                    +91 99186 01012
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919918601013"
                  className="flex items-start gap-2 text-sm text-white/70 hover:text-honey transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <span className="block text-white/40 text-xs">Barra</span>
                    +91 99186 01013
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:shwetachildcareclinic@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-honey transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  Email Us
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Mon–Fri: 2–7 PM
                  <br />
                  Sat–Sun: 2–5 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5">
            <MapPin className="w-5 h-5 text-honey shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-white/90 mb-1">Rambagh Clinic</div>
              <div className="text-xs text-white/50">
                104A/252, P Road, Nehru Nagar, Ram Bagh, Kanpur — 208012
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5">
            <MapPin className="w-5 h-5 text-honey shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-white/90 mb-1">Barra Clinic</div>
              <div className="text-xs text-white/50">
                Near Madhur Milan Guest House, Yadav Market Chauraha, Barra-2, Kanpur — 208027
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} Shweta Child Care Clinic Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-coral fill-coral" /> for every child
          </p>
        </div>
      </div>
    </footer>
  );
}
