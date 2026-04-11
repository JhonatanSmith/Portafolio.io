import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-canvas text-text">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-10rem] top-[-8rem] h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[20rem] h-96 w-96 rounded-full bg-accent-2/15 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-accent-strong/10 blur-3xl" />
        <div className="grid-fade absolute inset-0 opacity-60" />
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
