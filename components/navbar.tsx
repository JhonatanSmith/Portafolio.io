"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      setIsScrolled(window.scrollY > 20);

      let current = "top";
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div
          className={cn(
            "rounded-full border px-4 py-3 transition duration-300",
            isScrolled
              ? "border-white/10 bg-[#09101dcc] shadow-soft backdrop-blur-xl"
              : "border-white/6 bg-transparent",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold text-white">
                JS
              </span>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
                <p className="text-xs text-muted">{siteConfig.shortRole}</p>
              </div>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition duration-300",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/6 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <ButtonLink href={siteConfig.resumeHref} target="_blank" rel="noreferrer" variant="secondary">
                Open Resume
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white lg:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setIsMenuOpen((state) => !state)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isMenuOpen ? (
            <nav className="mt-4 border-t border-white/10 pt-4 lg:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <ButtonLink
                  href={siteConfig.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="mt-2 w-full"
                >
                  Open Resume
                </ButtonLink>
              </div>
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
