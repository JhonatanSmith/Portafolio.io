import { GraduationCap, ScrollText } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { education, learningSignals } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Education"
            title="Academic grounding in statistics, reinforced by ongoing analytical depth."
            description="This section stays compact on purpose. It supports credibility without interrupting the portfolio flow."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection className="grid gap-5" delay={0.05}>
            {education.map((item) => (
              <article key={item.title} className="section-card p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-2">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.period}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">{item.institution}</p>
                    <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="section-card h-full p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-2">
                  <ScrollText className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Continuous learning
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                    Certification and study signals
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {learningSignals.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
