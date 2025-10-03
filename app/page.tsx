import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/Contactsection";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skill";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="relative bg-[#212121] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
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

        <section id="certifications">
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
