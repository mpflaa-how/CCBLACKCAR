import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import LocalEdge from "../components/LocalEdge";
import WhyPrivate from "../components/WhyPrivate";
import BookingSteps from "../components/BookingSteps";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <LocalEdge />
      <WhyPrivate />
      <BookingSteps />
      <FAQ />
      <FinalCTA />
    </>
  );
}
