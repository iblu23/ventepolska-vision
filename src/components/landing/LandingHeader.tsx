import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Motion3DTilt } from "./Motion3DTilt";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useTranslation } from "react-i18next";

export function LandingHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  
  const nav = useMemo(() => [
    { label: t('landing.sections.about'), href: "#o-firmie" },
    { label: t('landing.sections.services'), href: "#oferta" },
    { label: t('landing.sections.air_conditioning'), href: "#klimatyzacja" },
    { label: t('landing.sections.why_us'), href: "#dlaczego" },
    { label: t('landing.hero.cta_gallery'), href: "#galeria" },
    { label: t('landing.sections.contact'), href: "#kontakt" },
  ], [t]);
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
        <div className="container flex h-24 items-center justify-between gap-4">
          <a href="#" className="group flex items-center gap-3">
            <img
              src="/logo-brand.png"
              alt="Vente Polska Logo"
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-800">Vente Polska</p>
              <p className="text-xs text-muted-foreground">{t('landing.header.tagline')}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <div key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="relative block px-4 py-2 text-base font-medium transition-all duration-300 transform-gpu"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <span className="relative z-10 block bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent font-bold transition-all duration-300">
                    {item.label}
                  </span>
                  
                  {/* Glass panel background */}
                  <div className="absolute inset-0 rounded-xl border border-teal-200/50 bg-white/70 shadow-lg shadow-teal-500/5 backdrop-blur-sm transition-all duration-300 group-hover:border-teal-300/60 group-hover:shadow-teal-500/20"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,253,250,0.7) 100%)",
                      transform: 'translateZ(-20px)',
                    }}
                  />
                  
                  {/* Hover effects */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-teal-500/60 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.6),0_0_60px_rgba(20,184,166,0.3)] group-hover:transform-gpu"
                    style={{
                      transform: 'translateZ(-25px) translateZ(0px)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  
                  {/* Active click state */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-150 active:border-teal-500/80 active:shadow-[0_0_40px_rgba(20,184,166,0.8),0_0_80px_rgba(20,184,166,0.4)] active:transform-gpu"
                    style={{
                      transform: 'translateZ(-35px) translateZ(0px)',
                    }}
                  />
                  
                  {/* Volumetric edge glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-xl border-2 border-teal-500/40 shadow-[0_0_20px_rgba(20,184,166,0.8),inset_0_0_20px_rgba(20,184,166,0.2)]"
                      style={{
                        filter: 'blur(2px)',
                      }}
                    />
                  </div>
                  
                  {/* Glass reflection ripple */}
                  <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent transform scale-0 group-hover:scale-150 transition-transform duration-700"
                      style={{
                        transformOrigin: 'center',
                      }}
                    />
                  </div>
                  
                  {/* Lens flare */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-teal-300/40 via-teal-200/20 to-transparent animate-pulse" />
                  </div>
                  
                  {/* Circuit patterns */}
                  <div className="absolute inset-0 rounded-xl opacity-10 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-xl"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(20,184,166,0.1) 2px, rgba(20,184,166,0.1) 4px)`,
                      }}
                    />
                  </div>
                </a>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <div className="relative group hidden md:inline-flex">
              <Motion3DTilt tiltMax={4} liftAmount={8} className="w-full">
                <a
                  href="#kontakt"
                  className="relative block px-4 py-2 text-base font-medium transition-all duration-300 transform-gpu"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <span className="relative z-10 flex items-center bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent font-bold transition-all duration-300">
                    <Phone className="mr-2 h-4 w-4 text-teal-600 transition-colors duration-300" />
                    {t('landing.hero.cta_quote')}
                  </span>
                  
                  {/* Glass panel background */}
                  <div className="absolute inset-0 rounded-xl border border-teal-200/50 bg-white/70 shadow-lg shadow-teal-500/5 backdrop-blur-sm transition-all duration-300 group-hover:border-teal-300/60 group-hover:shadow-teal-500/20"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,253,250,0.7) 100%)",
                      transform: 'translateZ(-20px)',
                    }}
                  />
                  
                  {/* Hover effects */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-teal-500/60 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.6),0_0_60px_rgba(20,184,166,0.3)] group-hover:transform-gpu"
                    style={{
                      transform: 'translateZ(-25px) translateZ(0px)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  
                  {/* Active click state */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-150 active:border-teal-500/80 active:shadow-[0_0_40px_rgba(20,184,166,0.8),0_0_80px_rgba(20,184,166,0.4)] active:transform-gpu"
                    style={{
                      transform: 'translateZ(-35px) translateZ(0px)',
                    }}
                  />
                  
                  {/* Volumetric edge glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-xl border-2 border-teal-500/40 shadow-[0_0_20px_rgba(20,184,166,0.8),inset_0_0_20px_rgba(20,184,166,0.2)]"
                      style={{
                        filter: 'blur(2px)',
                      }}
                    />
                  </div>
                  
                  {/* Glass reflection ripple */}
                  <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent transform scale-0 group-hover:scale-150 transition-transform duration-700"
                      style={{
                        transformOrigin: 'center',
                      }}
                    />
                  </div>
                  
                  {/* Lens flare */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-teal-300/40 via-teal-200/20 to-transparent animate-pulse" />
                  </div>
                  
                  {/* Circuit patterns */}
                  <div className="absolute inset-0 rounded-xl opacity-10 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-xl"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(20,184,166,0.1) 2px, rgba(20,184,166,0.1) 4px)`,
                      }}
                    />
                  </div>
                </a>
              </Motion3DTilt>
            </div>
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
        <div className="container py-6">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent hover:bg-white/80 hover:shadow-md hover:shadow-teal-500/10 transition-all duration-300 min-h-[44px] flex items-center"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" className="mt-4 min-h-[48px] text-base px-6 py-3" asChild>
              <a href="#kontakt" onClick={() => setOpen(false)}>
                <Phone className="mr-2 h-4 w-4" />
                {t('landing.hero.cta_quote')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
