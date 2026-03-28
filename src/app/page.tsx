import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Events from "@/components/Events";
import PartnerCTA from "@/components/PartnerCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <HowItWorks />
        <Events />
        <PartnerCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
