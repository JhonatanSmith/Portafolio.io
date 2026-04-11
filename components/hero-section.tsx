
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Tag } from "@/components/tag";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="top" className="relative scroll-mt-28 pb-14 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedSection className="max-w-3xl">
            <span className="eyebrow">Data platforms, ML systems, and GenAI products</span>
            <h1 className="mt-6 max-w-4xl text-balance font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Building production-grade data and AI systems with engineering discipline.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {siteConfig.heroSummary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projects" icon>
                View Projects
              </ButtonLink>
              <ButtonLink href={siteConfig.resumeHref} target="_blank" rel="noreferrer" variant="secondary">
                Open Resume
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                Contact Me
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteConfig.heroHighlights.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:justify-self-end">
            <div className="section-card relative overflow-hidden p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2/70 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Based in Medellin
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-bold text-white">
                    {siteConfig.name}
                  </h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                    {siteConfig.shortBio}
                  </p>
                </div>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img
  src="images/smith.png"
  alt="Portrait of Jhonatan Smith"
  className="object-cover w-full h-full"
/>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {siteConfig.profileSignals.map((signal) => (
                  <div key={signal.title} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {signal.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{signal.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
                  Current focus
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  Clean architecture, ETL and ELT foundations, production ML pipelines,
                  and LLM applications built for enterprise environments.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
