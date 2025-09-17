import MainContent from "@/components/MainContent";
import PhoneMockup from "@/components/PhoneMockup";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-12 md:py-20 gap-8 md:gap-20 items-center md:items-start">
      <MainContent />
      <PhoneMockup />
    </section>
  );
}
