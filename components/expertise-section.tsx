import { Bot, BrainCircuit, Cloud, Database } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Tag } from "@/components/tag";
import { expertiseItems } from "@/data/expertise";

const icons = {
  data: Database,
  ml: BrainCircuit,
  genai: Bot,
  cloud: Cloud,
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Core Expertise"
            title="Knowledge and experience across data, ML, GenAI, and cloud engineering."
            description="Each area reflects the kind of systems I build and the engineering problems I like to solve: scalable data movement, model-backed analytics, cloud-native operations, and LLM applications grounded in useful architecture."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {expertiseItems.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <AnimatedSection key={item.title} delay={0.05 * index}>
                <article className="section-card h-full p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-2">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">{item.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.focus.map((entry) => (
                      <Tag key={entry}>{entry}</Tag>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
