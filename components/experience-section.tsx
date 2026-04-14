import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { ExperienceCard } from "@/components/experience-card";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Experience"
            title="Career progression shaped by enterprise delivery and practical data work."
            description="Been here in data Science field for a While. Hoping to stay a little bit more."
          />
        </AnimatedSection>

        <div className="relative mt-10 space-y-5 lg:pl-10">
          <div className="absolute bottom-0 left-2 top-0 hidden w-px bg-gradient-to-b from-accent/0 via-accent/60 to-accent/0 lg:block" />
          {experience.map((item, index) => (
            <AnimatedSection key={`${item.company}-${item.period}`} delay={0.05 * index}>
              <ExperienceCard item={item} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
