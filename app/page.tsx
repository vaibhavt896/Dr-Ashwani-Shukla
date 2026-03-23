import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

// Lazy load everything below the fold — reduces initial JS bundle significantly
const NameStory = dynamic(() => import("@/components/home/NameStory"));
const TrustNumbers = dynamic(() => import("@/components/home/TrustNumbers"));
const DoctorIntro = dynamic(() => import("@/components/home/DoctorIntro"));
const ServicesGrid = dynamic(() => import("@/components/home/ServicesGrid"));
const VaccinationCTA = dynamic(() => import("@/components/home/VaccinationCTA"));
const WhyParentsChoose = dynamic(() => import("@/components/home/WhyParentsChoose"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const TwoLocations = dynamic(() => import("@/components/home/TwoLocations"));
const EmergencyCTA = dynamic(() => import("@/components/home/EmergencyCTA"));

export default function Home() {
  return (
    <>
      <Hero />
      <NameStory />
      <TrustNumbers />
      <DoctorIntro />
      <ServicesGrid />
      <VaccinationCTA />
      <WhyParentsChoose />
      <Testimonials />
      <TwoLocations />
      <EmergencyCTA />
    </>
  );
}
