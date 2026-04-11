import { Container } from "@/components/container";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <Container>
        <div className="flex flex-col gap-4 rounded-3xl border border-white/8 bg-black/10 px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-200">{siteConfig.name}</p>
            <p className="mt-1">{siteConfig.shortRole}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
