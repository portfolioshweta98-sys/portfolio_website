import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/Contactsection";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skill";
import TestimonialSection from "@/components/TestimonialSection";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <section id="about">
          <Hero />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="certifications" className="relative">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,rgba(0,119,182,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,119,182,0.02)_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
            )}
          />
          <CertificatesSection />
        </section>

        <section id="testimonials">
          <TestimonialSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
