import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

const focusAreas = [
  {
    title: "Engineering rigor",
    text: "I design systems that survive real workloads: maintainable pipelines, traceable transformations, and deployment patterns that are practical for teams.",
  },
  {
    title: "Applied AI with production constraints",
    text: "I care about orchestration, reliability, observability, and governance as much as model quality or LLM novelty.",
  },
  {
    title: "Business-aware delivery",
    text: "My work is shaped by enterprise and financial contexts where quality, clarity, and operational stability matter.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="About"
            title="Engineering, analytics, and modern AI."
            description="This is a little bit of me, what I do, and how I think about the work I want to do. If you want to know more, just reach out."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection className="section-card p-7 sm:p-9" delay={0.05}>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {siteConfig.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="space-y-4" delay={0.1}>
            {focusAreas.map((item) => (
              <article key={item.title} className="section-card p-6">
                <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
