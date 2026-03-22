import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-sunshine">
      <div className="text-center px-4">
        <div className="text-8xl font-[var(--font-display)] font-extrabold text-sky/20 mb-4">404</div>
        <h1 className="font-[var(--font-display)] text-3xl font-extrabold text-midnight mb-4">
          Page Not Found
        </h1>
        <p className="text-slate text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky to-sky-dark text-white font-bold px-8 py-4 rounded-full shadow-lg"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <a
            href="tel:+919918601012"
            className="inline-flex items-center gap-2 bg-white text-midnight font-bold px-8 py-4 rounded-full shadow-md border border-midnight/10"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
