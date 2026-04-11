import { ArrowUpRight, Github } from "lucide-react";
import { Tag } from "@/components/tag";
import { Project } from "@/data/types";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group section-card overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
<Image
          src={`/images/${project.image.split('/').pop()}`}
          alt={project.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101dcc] via-[#07101d40] to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/10 bg-[#08111fd9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-200 transition duration-300 hover:border-accent/40 hover:text-white"
            aria-label={`Open ${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-2 transition duration-300 hover:text-white"
        >
          View repository
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
