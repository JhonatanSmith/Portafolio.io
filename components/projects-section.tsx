import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Selected Projects"
            title="A focused set of projects that show depth, curiosity, and execution."
            description="The current portfolio references are reframed as a knowledge hub: study tools, analytics work, cloud learning, and practical applications that reinforce an engineering-first profile."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.05 * index}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
