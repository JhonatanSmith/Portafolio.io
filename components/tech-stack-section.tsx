import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Tag } from "@/components/tag";
import { techStackGroups } from "@/data/tech-stack";

export function TechStackSection() {
  return (
    <section id="stack" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Tech Stack"
            title="Tools presented in disciplined groups instead of a cluttered logo wall."
            description="The point is not to list everything. The point is to show the environments and technologies I regularly use to move from ingestion to modeling to deployment."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {techStackGroups.map((group, index) => (
            <AnimatedSection key={group.title} delay={0.05 * index}>
              <article className="section-card h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {group.title}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
