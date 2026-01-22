import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BadgeCheck, Clock, Factory, ShieldCheck, Wrench } from "lucide-react";
import { GlowGridBackdrop } from "@/components/landing/GlowGridBackdrop";
import { SectionHeading } from "@/components/landing/SectionHeading";
import heroImage from "@/assets/vente-hero.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";
import gallery07 from "@/assets/gallery-07.jpg";
import gallery08 from "@/assets/gallery-08.jpg";
import gallery09 from "@/assets/gallery-09.jpg";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-surface/70 p-4 shadow-card backdrop-blur">
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Factory;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-surface/60 p-6 shadow-card backdrop-blur transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function GalleryTile({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 will-change-transform hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <GlowGridBackdrop />
          <div className="container relative py-14 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-6 animate-fade-in">
                <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/70 px-3 py-1 text-xs text-muted-foreground shadow-card backdrop-blur">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  Produkcja zgodna z normami UE • precyzja • szczelność
                </p>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  Produkcja i montaż kanałów oraz kształtek wentylacyjnych
                </h1>
                <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                  Precyzyjne elementy HVAC pod Twój projekt — od doradztwa, przez produkcję, po terminową
                  realizację i montaż. Wydajność, trwałość i jakość, która się broni w praktyce.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button variant="hero" size="xl" asChild>
                    <a href="#kontakt">
                      Zapytaj o wycenę <ArrowRight />
                    </a>
                  </Button>
                  <Button variant="glass" size="xl" asChild>
                    <a href="#oferta">Zobacz ofertę</a>
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                  <Stat value="100×100" label="min. wymiar kanału (mm)" />
                  <Stat value="1500" label="max. długość odcinka (mm)" />
                  <Stat value="0.5–1.5" label="grubość blachy (mm)" />
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="relative rounded-3xl border border-border/60 bg-card/40 p-2 shadow-elevated backdrop-blur">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={heroImage}
                      alt="Produkcja kanałów wentylacyjnych – nowoczesna linia produkcyjna"
                      className="h-[360px] w-full object-cover md:h-[520px]"
                      loading="eager"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary-glow/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="o-firmie" className="container py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="O firmie"
                title="Doświadczenie HVAC, automatyzacja i realna jakość"
                description="Powstaliśmy z połączenia szczecińskich firm z wieloletnią praktyką. Dziś łączymy rzemiosło z automatyzacją — żeby dowieźć powtarzalność, szczelność i terminowość."
              />
            </div>
            <div className="md:col-span-7 grid gap-4">
              <InfoCard
                icon={Factory}
                title="Nowoczesna linia produkcyjna"
                description="Zautomatyzowany park maszynowy, który utrzymuje parametry i tolerancje w ryzach — seria po serii."
              />
              <InfoCard
                icon={ShieldCheck}
                title="Trwałość i zgodność"
                description="Materiały: stal ocynkowana i nierdzewna. Produkcja zgodna z europejskimi normami jakości."
              />
              <InfoCard
                icon={Clock}
                title="Terminowość"
                description="Proces zaprojektowany pod harmonogramy inwestycji: szybka wycena, klarowna komunikacja i sprawna realizacja."
              />
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section id="oferta" className="relative">
          <div className="container py-14 md:py-20">
            <SectionHeading
              eyebrow="Oferta"
              title="Kanały i kształtki: prostokątne oraz okrągłe"
              description="Produkcja elementów zgodnie z wymiarami podanymi przez klienta — dopasowana do projektu i warunków montażowych."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-surface/60 p-6 shadow-card backdrop-blur">
                <h3 className="text-lg font-semibold">Kanały prostokątne</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• standard i pod wymiar</li>
                  <li>• wzory przetłoczeń: trapez, Z</li>
                  <li>• stal ocynkowana / nierdzewna</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface/60 p-6 shadow-card backdrop-blur">
                <h3 className="text-lg font-semibold">Kształtki prostokątne</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• łuki symetryczne, kolana</li>
                  <li>• redukcje, trójniki i czwórniki</li>
                  <li>• dyfuzory i elementy na zamówienie</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border/60 bg-surface/60 p-6 shadow-card backdrop-blur">
                <h3 className="text-lg font-semibold">Elementy okrągłe</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• rury spiralne SPIRO</li>
                  <li>• kolana i kształtki okrągłe</li>
                  <li>• sprawne terminy realizacji</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AC */}
        <section id="klimatyzacja" className="container py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="Klimatyzacja"
                title="Doradztwo, sprzedaż i montaż klimatyzacji"
                description="Kompleksowa obsługa: dobór urządzeń, dostawa i montaż, uruchomienie oraz serwis. Komfort i oszczędność energii bez kompromisów."
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={Wrench}
                  title="Od doboru do uruchomienia"
                  description="Dobieramy rozwiązania do potrzeb i warunków obiektu — z naciskiem na efektywność oraz kulturę pracy."
                />
                <InfoCard
                  icon={BadgeCheck}
                  title="Serwis i wsparcie"
                  description="Utrzymanie, przeglądy i szybka reakcja — żeby system działał stabilnie w sezonie."
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-border/60 bg-card/30 p-6 shadow-card backdrop-blur">
                <p className="text-sm text-muted-foreground">Doświadczenie</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl bg-surface/70 p-4">
                    <p className="text-2xl font-semibold">10 lat</p>
                    <p className="text-sm text-muted-foreground">produkcji kanałów wentylacyjnych</p>
                  </div>
                  <div className="rounded-xl bg-surface/70 p-4">
                    <p className="text-2xl font-semibold">10 lat</p>
                    <p className="text-sm text-muted-foreground">doradztwa i montażu klimatyzacji</p>
                  </div>
                </div>
                <Button variant="hero" className="mt-6 w-full" asChild>
                  <a href="#kontakt">Skontaktuj się</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="dlaczego" className="container py-14 md:py-20">
          <SectionHeading
            eyebrow="Dlaczego my"
            title="Nacisk na detale: precyzja, termin, kompleksowość"
            description="Współpracujemy z deweloperami i prywatnymi inwestorami — stawiamy na jasne ustalenia i przewidywalną realizację."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Precyzja wykonania",
                desc: "Nowoczesny, zautomatyzowany park maszynowy.",
              },
              {
                title: "Indywidualne podejście",
                desc: "Produkcja pod konkretny projekt i warunki montażowe.",
              },
              {
                title: "Terminowość",
                desc: "Dotrzymujemy ustalonych harmonogramów.",
              },
              {
                title: "Kompleksowość",
                desc: "Produkcja, dostawa, montaż i serwis w jednym miejscu.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-surface/60 p-6 shadow-card backdrop-blur"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="galeria" className="container py-14 md:py-20">
          <SectionHeading
            eyebrow="Galeria"
            title="Realizacje i zaplecze produkcyjne"
            description="Kilka ujęć z produkcji i elementów HVAC — jakość widać w detalach."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-12">
            <GalleryTile src={gallery09} alt="Kanały wentylacyjne – detal" className="md:col-span-7 md:row-span-2" />
            <GalleryTile src={gallery06} alt="Produkcja HVAC – stanowisko" className="md:col-span-5" />
            <GalleryTile src={gallery07} alt="Kształtki wentylacyjne – element" className="md:col-span-5" />
            <GalleryTile src={gallery08} alt="Kanały i kształtki – montaż" className="md:col-span-4" />
            <GalleryTile src={gallery05} alt="Produkcja kanałów – linia" className="md:col-span-8" />
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="relative overflow-hidden">
          <div className="container py-14 md:py-20">
            <div className="rounded-3xl border border-border/60 bg-surface/60 p-8 shadow-elevated backdrop-blur md:p-12">
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-7">
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Skontaktuj się z nami</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Wyślij zapytanie lub zadzwoń — odpowiemy szybko i konkretnie.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-card/40 p-5">
                      <p className="text-sm text-muted-foreground">E-mail</p>
                      <a className="mt-1 block font-medium hover:underline" href="mailto:biuro@ventepolska.pl">
                        biuro@ventepolska.pl
                      </a>
                    </div>
                    <div className="rounded-2xl bg-card/40 p-5">
                      <p className="text-sm text-muted-foreground">Dział Wentylacji</p>
                      <a className="mt-1 block font-medium hover:underline" href="tel:+48796201999">
                        796 201 999
                      </a>
                    </div>
                    <div className="rounded-2xl bg-card/40 p-5">
                      <p className="text-sm text-muted-foreground">Dział Klimatyzacji</p>
                      <a className="mt-1 block font-medium hover:underline" href="tel:+48509088215">
                        509 088 215
                      </a>
                    </div>
                    <div className="rounded-2xl bg-card/40 p-5">
                      <p className="text-sm text-muted-foreground">Strona</p>
                      <a className="mt-1 block font-medium hover:underline" href="https://ventepolska.pl/" target="_blank" rel="noreferrer">
                        ventepolska.pl
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-2xl border border-border/60 bg-card/40 p-6 shadow-card">
                    <p className="text-sm text-muted-foreground">Szybka wiadomość</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Ten prototyp skupia się na warstwie wizualnej. Jeśli chcesz, dodamy formularz kontaktowy z wysyłką.
                    </p>
                    <div className="mt-5 grid gap-3">
                      <Button variant="hero" className="w-full" asChild>
                        <a href="mailto:biuro@ventepolska.pl?subject=Zapytanie%20Vente%20Polska">Napisz e-mail</a>
                      </Button>
                      <Button variant="glass" className="w-full" asChild>
                        <a href="#oferta">Wróć do oferty</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-10 flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Vente Polska. All rights reserved.</p>
              <p className="text-muted-foreground/80">Futuristic UI concept • React + Tailwind</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
