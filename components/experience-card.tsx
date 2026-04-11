import { Briefcase, CalendarDays } from "lucide-react";
import { ExperienceItem } from "@/data/types";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="section-card relative p-6 sm:p-7">
      <div className="absolute -left-[0.85rem] top-8 hidden h-4 w-4 rounded-full border-4 border-canvas bg-accent lg:block" />

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Briefcase className="h-4 w-4 text-accent-2" />
            <span>{item.company}</span>
          </div>
          <h3 className="mt-3 font-heading text-2xl font-semibold text-white">{item.role}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <CalendarDays className="h-4 w-4 text-accent-2" />
          <span>{item.period}</span>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-200">
            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
