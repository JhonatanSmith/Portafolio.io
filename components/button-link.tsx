import { ArrowUpRight } from "lucide-react";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn, withBasePath } from "@/lib/utils"; // 👈 Importa withBasePath

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  icon = false,
  href,
  ...props
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-gradient-to-r from-accent to-accent-strong text-white shadow-[0_10px_40px_rgba(96,165,250,0.28)] hover:translate-y-[-1px] hover:shadow-[0_18px_50px_rgba(96,165,250,0.34)]",
    secondary:
      "border border-white/12 bg-white/6 text-text hover:border-accent/50 hover:bg-white/10",
    ghost:
      "text-slate-200 hover:bg-white/6",
  } as const;

  // 👇 Lógica dinámica usando tu helper
  let finalHref = href || "#";
  if (finalHref.startsWith("/") && !finalHref.startsWith("//")) {
    finalHref = withBasePath(finalHref);
  }

  return (
    <a
      href={finalHref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        styles[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}