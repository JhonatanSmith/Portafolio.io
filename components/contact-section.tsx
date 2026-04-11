import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: siteConfig.linkedinLabel,
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: siteConfig.githubLabel,
    href: siteConfig.github,
    icon: Github,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: undefined,
    icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <div className="section-card overflow-hidden p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <SectionHeading
                  label="Contact"
                  title="If the opportunity needs strong engineering fundamentals, this is the right conversation."
                  description="I am most interested in work that combines scalable data architecture, applied ML, platform thinking, and modern AI systems with real operational constraints."
                />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={`mailto:${siteConfig.email}`} icon>
                    Contact Me
                  </ButtonLink>
                  <ButtonLink href={siteConfig.linkedin} target="_blank" rel="noreferrer" variant="secondary">
                    Connect on LinkedIn
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/15 p-5 transition duration-300 hover:border-accent/30 hover:bg-white/6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-2">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm text-slate-100">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
