import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shwetachildcare.com"),
  title: {
    default: "Shweta Child Care Clinic — Best Pediatrician in Kanpur | Dr. Ashwani Shukla",
    template: "%s | Shweta Child Care Clinic, Kanpur",
  },
  description:
    "Dr. Ashwani Kumar Shukla — 25+ years experienced Pediatrician & Neonatologist in Kanpur. NICU/PICU specialist. Two clinic locations in Rambagh & Barra. Book appointment now.",
  keywords: [
    "pediatrician in Kanpur",
    "child specialist Kanpur",
    "best pediatrician Kanpur",
    "NICU Kanpur",
    "child doctor Barra Kanpur",
    "vaccination center Kanpur",
    "newborn care Kanpur",
    "Dr Ashwani Shukla",
    "Shweta Child Care Clinic",
    "neonatologist Kanpur",
  ],
  authors: [{ name: "Dr. Ashwani Kumar Shukla" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shweta Child Care Clinic",
    title: "Shweta Child Care Clinic — Best Pediatrician in Kanpur",
    description:
      "Dr. Ashwani Kumar Shukla — 25+ years experienced Pediatrician & Neonatologist. NICU/PICU specialist with 2 clinics in Kanpur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shweta Child Care Clinic — Best Pediatrician in Kanpur",
    description:
      "Dr. Ashwani Kumar Shukla — 25+ years experienced Pediatrician & Neonatologist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Shweta Child Care Clinic Pvt Ltd",
  description:
    "Leading pediatric & neonatal care clinic in Kanpur with 25+ years of experience. NICU & PICU specialist.",
  url: "https://shwetachildcare.com",
  telephone: ["+919918601012", "+919918601013"],
  email: "shwetachildcareclinic@gmail.com",
  medicalSpecialty: "Pediatrics",
  founder: {
    "@type": "Physician",
    name: "Dr. Ashwani Kumar Shukla",
    medicalSpecialty: "Pediatrics",
    description: "MBBS, MD — Pediatrician & Neonatologist with 25+ years experience",
    knowsAbout: [
      "Pediatrics",
      "Neonatology",
      "NICU Management",
      "PICU Management",
      "Child Healthcare",
    ],
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "104A/252, P Road, Nehru Nagar, Ram Bagh",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208012",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Near Madhur Milan Guest House, Yadav Market Chauraha, Barra-2",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "208027",
      addressCountry: "IN",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.1",
    reviewCount: "139",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
