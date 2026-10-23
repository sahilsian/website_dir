import Contact from "@/components/Contact";
import { About, Clients, CtaBand, Hero, Projects, Services, Team, Testimonials, Trust, Values } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Services />
      <Projects />
      <CtaBand />
      <Trust />
      <Team />
      <Clients />
      <Testimonials />
      <Contact />
    </>
  );
}
