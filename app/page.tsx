import Hero from "@/components/home/Hero";
import NameStory from "@/components/home/NameStory";
import TrustNumbers from "@/components/home/TrustNumbers";
import DoctorIntro from "@/components/home/DoctorIntro";
import ServicesGrid from "@/components/home/ServicesGrid";
import VaccinationCTA from "@/components/home/VaccinationCTA";
import WhyParentsChoose from "@/components/home/WhyParentsChoose";
import Testimonials from "@/components/home/Testimonials";
import TwoLocations from "@/components/home/TwoLocations";
import EmergencyCTA from "@/components/home/EmergencyCTA";

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
