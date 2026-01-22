import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const nav = [
  { label: "O firmie", href: "#o-firmie" },
  { label: "Oferta", href: "#oferta" },
  { label: "Klimatyzacja", href: "#klimatyzacja" },
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "Galeria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
];

export function LandingHeader() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(min-width: 768px)")?.matches ?? true;
  }, []);

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary shadow-card">
              <span className="text-xs font-semibold tracking-widest">VENTE</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Vente Polska</p>
              <p className="text-xs text-muted-foreground">HVAC • produkcja i montaż</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="glass"
              size="sm"
              className="hidden md:inline-flex"
              asChild
            >
              <a href="#kontakt">
                <Phone className="opacity-80" />
                Zapytaj o wycenę
              </a>
            </Button>
            <Button
              variant="glass"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-border/60 bg-background/80 backdrop-blur",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300 ease-out",
        )}
      >
        <div className="container py-4">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" className="mt-2" asChild>
              <a href="#kontakt">Zapytaj o wycenę</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
