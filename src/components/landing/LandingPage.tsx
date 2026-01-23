import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BadgeCheck, Clock, Factory, ShieldCheck, Wrench, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GlowGridBackdrop } from "@/components/landing/GlowGridBackdrop";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Motion3DTilt, ParallaxLayer } from "@/components/landing/Motion3DTilt";
import { HeroCarousel } from "@/components/landing/HeroCarousel";
import { HeroButton } from "@/components/landing/HeroButton";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import heroImage from "@/assets/vente-hero.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";
import gallery07 from "@/assets/gallery-07.jpg";
import gallery08 from "@/assets/gallery-08.jpg";
import gallery09 from "@/assets/gallery-09.jpg";

// Gallery images array
const galleryImages = [
  { src: gallery05, alt: "Gallery Image 1" },
  { src: gallery06, alt: "Gallery Image 2" },
  { src: gallery07, alt: "Gallery Image 3" },
  { src: gallery08, alt: "Gallery Image 4" },
  { src: gallery09, alt: "Gallery Image 5" },
];

// Memoized to prevent unnecessary re-renders
const FullscreenGallery = memo(({
  isOpen,
  currentIndex,
  onClose,
  onPrevious,
  onNext
}: {
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  const { t } = useTranslation();
  
  if (!isOpen) return null;

  const currentImage = galleryImages[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20 md:p-3"
        aria-label="Close gallery"
      >
        <X className="h-6 w-6 md:h-5 md:w-5" />
      </button>

      {/* Previous button */}
      <button
        onClick={onPrevious}
        className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 md:h-5 md:w-5" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 z-10 rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20 md:p-3"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 md:h-5 md:w-5" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
        {currentIndex + 1} / {galleryImages.length}
      </div>

      {/* Main image */}
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2 rounded-lg bg-black/50 p-2 max-w-[90vw] overflow-x-auto">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              // This will be handled by parent component
              const event = new CustomEvent('goToImage', { detail: index });
              window.dispatchEvent(event);
            }}
            className={cn(
              "h-12 w-12 md:h-12 md:w-12 min-w-[48px] overflow-hidden rounded border-2 transition-all flex-shrink-0",
              index === currentIndex
                ? "border-teal-400 opacity-100"
                : "border-transparent opacity-60 hover:opacity-80"
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
});

FullscreenGallery.displayName = "FullscreenGallery";

const Stat = memo(({ value, label }: { value: string; label: string }) => (
  <Motion3DTilt tiltMax={4} liftAmount={8} className="h-full">
    <div className="h-full rounded-xl border border-teal-200/50 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:border-teal-300/60">
      <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-800">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  </Motion3DTilt>
));

Stat.displayName = "Stat";



const InfoCard = memo(({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Factory;
  title: string;
  description: string;
}) => (
  <div className="group h-full rounded-2xl border border-teal-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:border-teal-300/60">
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-100/80 text-teal-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
));

InfoCard.displayName = "InfoCard";



const GalleryTile = memo(({
  src,
  alt,
  className,
  onClick,
  index
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  index?: number;
}) => (
  <Motion3DTilt tiltMax={3} liftAmount={6} className={cn("h-full", className)}>
    <div
      className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card h-full cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
    </div>
  </Motion3DTilt>
));

GalleryTile.displayName = "GalleryTile";

// Unified Panel style - moved to constant to prevent recreation on every render
const unifiedPanelStyle = {
  background: "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(240, 253, 250, 1) 100%)"
};
const UnifiedPanel = memo(({ children, className }: { children: React.ReactNode; className?: string }) => (
  <Motion3DTilt className={cn("h-full", className)}>
    <div
      className="relative overflow-hidden rounded-3xl border border-teal-200/40 bg-white p-8 shadow-lg shadow-teal-500/5 md:p-12"
      style={unifiedPanelStyle}
    >
      {children}
    </div>
  </Motion3DTilt>
));

UnifiedPanel.displayName = "UnifiedPanel";



export function LandingPage() {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);
  const [acVisible, setAcVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  // Intersection observer for scroll-triggered animations
  useEffect(() => {
    const observers = new Map();
    
    const setupObserver = (id: string, setState: (visible: boolean) => void) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setState(true);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.set(id, observer);
      }
    };

    setupObserver('hero', setHeroVisible);
    setupObserver('o-firmie', setAboutVisible);
    setupObserver('oferta', setOfferVisible);
    setupObserver('klimatyzacja', setAcVisible);
    setupObserver('dlaczego', setWhyVisible);
    setupObserver('kontakt', setContactVisible);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Memoize event handlers to prevent unnecessary re-renders
  const openGallery = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Handle custom event for thumbnail navigation
  useEffect(() => {
    const handleGoToImage = (event: CustomEvent) => {
      setCurrentImageIndex(event.detail);
    };

    window.addEventListener('goToImage', handleGoToImage as EventListener);
    return () => {
      window.removeEventListener('goToImage', handleGoToImage as EventListener);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          closeGallery();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGalleryOpen, closeGallery, goToPrevious, goToNext]);

  return (
    <div className="min-h-screen bg-background">
      <FullscreenGallery
        isOpen={isGalleryOpen}
        currentIndex={currentImageIndex}
        onClose={closeGallery}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
      <main>
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden">
          <GlowGridBackdrop />
          <div className="container relative py-4 md:py-6 lg:py-8">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-6 animate-fade-in">
                <Motion3DTilt tiltMax={5} liftAmount={12} className="h-full">
                  {/* Panel with matte glass + aqua rim border */}
                  <div className="h-full rounded-2xl border border-teal-200/40 bg-white p-6 md:p-8 shadow-lg shadow-teal-500/5"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,253,250,0.7) 100%)",
                    }}
                  >
                    {/* Badge - depth 1.6 (foreground) */}
                    <ParallaxLayer depth={1.6}>
                      <Motion3DTilt tiltMax={15} liftAmount={15} className="hidden md:block">
                        <p className="group inline-flex items-center gap-2 rounded-full border border-teal-200/50 bg-white px-4 py-1.5 text-xs text-muted-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-400/50 cursor-default">
                          <BadgeCheck className="h-4 w-4 md:h-5 md:w-5 text-teal-600 transition-all duration-500 group-hover:scale-140 group-hover:rotate-[360deg] group-hover:text-teal-500" />
                          <span className="group-hover:text-slate-800 transition-colors duration-300">
                            {t('landing.hero.badge')}
                          </span>
                        </p>
                      </Motion3DTilt>
                      {/* Mobile version without heavy 3D tilt */}
                      <p className="md:hidden group inline-flex items-center gap-2 rounded-full border border-teal-200/50 bg-white px-4 py-1.5 text-xs text-muted-foreground shadow-sm transition-all duration-300 active:shadow-lg active:shadow-teal-500/20 active:border-teal-400/50 cursor-default">
                        <BadgeCheck className="h-5 w-5 text-teal-600 transition-all duration-500 group-active:scale-125 group-active:rotate-[360deg] group-active:text-teal-500" />
                        <span className="group-active:text-slate-800 transition-colors duration-300">
                          {t('landing.hero.badge')}
                        </span>
                      </p>
                    </ParallaxLayer>

                    {/* Main Content Panel - depth 1.3 (mid) */}
                    <ParallaxLayer depth={1.3}>
                      <div className="group relative mt-6 rounded-3xl border border-teal-200/50 bg-white p-6 md:p-8 shadow-xl shadow-teal-500/10 transition-all duration-300 hover:shadow-teal-500/20 hover:border-teal-300/60">
                        {/* Decorative side accent */}
                        <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-teal-500/40" />

                        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold tracking-tight text-slate-800 leading-[1.15]">
                          <span className={`inline-block ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                            {Array.from("Produkcja i montaż").map((char, index) => (
                              <span
                                key={index}
                                className={`inline-block ${heroVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                                style={{
                                  animationDelay: heroVisible ? `${index * 0.05}s` : '0s',
                                  animationFillMode: 'both'
                                }}
                              >
                                {char === ' ' ? '\u00A0' : char}
                              </span>
                            ))}
                          </span> <br />
                          <span className={`inline-block ${heroVisible ? 'animate-fade-in' : 'opacity-0'} bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent`}>
                            {Array.from("kanałów oraz kształtki").map((char, index) => (
                              <span
                                key={index}
                                className={`inline-block ${heroVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                                style={{
                                  animationDelay: heroVisible ? `${(index + 18) * 0.05}s` : '0s',
                                  animationFillMode: 'both'
                                }}
                              >
                                {char === ' ' ? '\u00A0' : char}
                              </span>
                            ))}
                          </span> <br />
                          <span className={`inline-block ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                            {Array.from("wentylacyjnych").map((char, index) => (
                              <span
                                key={index}
                                className={`inline-block ${heroVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                                style={{
                                  animationDelay: heroVisible ? `${(index + 18) * 0.05}s` : '0s',
                                  animationFillMode: 'both'
                                }}
                              >
                                {char}
                              </span>
                            ))}
                          </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base md:text-lg text-slate-600 leading-relaxed font-medium/80">
                          Precyzyjne elementy HVAC pod Twój projekt — od doradztwa, przez produkcję, po terminową
                          realizację i montaż. Wydajność, trwałość i jakość, która się broni w praktyce.
                        </p>
                      </div>
                    </ParallaxLayer>

                    {/* CTA Buttons - depth 1.6 (foreground) */}
                    <ParallaxLayer depth={1.6}>
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3">
                        <HeroButton href="#kontakt">
                          {t('landing.hero.cta_quote')}
                        </HeroButton>
                        <HeroButton href="#oferta" withTilt>
                          {t('landing.hero.cta_offer')}
                        </HeroButton>
                        <HeroButton href="#galeria" withTilt>
                          {t('landing.hero.cta_gallery')}
                        </HeroButton>
                      </div>
                    </ParallaxLayer>

                    {/* Stat cards - depth 1.6 (foreground) */}
                    <ParallaxLayer depth={1.6}>
                      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                        <Stat value="100x100" label={t('landing.stats.min_dimension')} />
                        <Stat value="1500" label={t('landing.stats.max_length')} />
                        <Stat value="0.5-1.5" label={t('landing.stats.sheet_thickness')} />
                      </div>
                    </ParallaxLayer>
                  </div>
                </Motion3DTilt>
              </div>

              <div className="md:col-span-6 h-full min-h-[500px] md:min-h-0">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / EXPERIENCE - Unified Panel */}
        <section id="o-firmie" className="container py-6 md:py-4 md:py-5">
          <UnifiedPanel>
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <SectionHeading
                  className="h-full"
                  eyebrow="O firmie"
                  title={
                    <>
                      <span className={`inline-block ${aboutVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        {Array.from("Doświadczenie HVAC,").map((char, index) => (
                          <span
                            key={index}
                            className={`inline-block ${aboutVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                            style={{
                              animationDelay: aboutVisible ? `${index * 0.05}s` : '0s',
                              animationFillMode: 'both'
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>{' '}
                      <span className={`inline-block ${aboutVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        {Array.from("automatyzacja i realna jakość").map((char, index) => (
                          <span
                            key={index}
                            className={`inline-block ${aboutVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                            style={{
                              animationDelay: aboutVisible ? `${(index + 20) * 0.05}s` : '0s',
                              animationFillMode: 'both'
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </>
                  }
                  description={t('landing.about.description')}
                />
              </div>
              <div className="md:col-span-7 grid gap-4">
                <Motion3DTilt tiltMax={4} liftAmount={8} className="h-full">
                  <InfoCard
                    icon={Factory}
                    title={t('landing.about.production_line')}
                    description={t('landing.about.production_line_desc')}
                  />
                </Motion3DTilt>
                <Motion3DTilt tiltMax={4} liftAmount={8} className="h-full">
                  <InfoCard
                    icon={ShieldCheck}
                    title={t('landing.about.durability')}
                    description={t('landing.about.durability_desc')}
                  />
                </Motion3DTilt>
                <Motion3DTilt tiltMax={4} liftAmount={8} className="h-full">
                  <InfoCard
                    icon={Clock}
                    title={t('landing.about.timeliness')}
                    description={t('landing.about.timeliness_desc')}
                  />
                </Motion3DTilt>
              </div>
            </div>
          </UnifiedPanel>
        </section>

        {/* OFFER */}
        <section id="oferta" className="relative">
          <div className="container py-6 md:py-4 md:py-5">
            <UnifiedPanel>
              <SectionHeading
                eyebrow="Oferta"
                title={
                  <>
                    <span className={`inline-block ${offerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                      {Array.from("Kanały i kształtki: prostokątne oraz okrągłe").map((char, index) => (
                        <span
                          key={index}
                          className={`inline-block ${offerVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                          style={{
                            animationDelay: offerVisible ? `${index * 0.05}s` : '0s',
                            animationFillMode: 'both'
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                  </>
                }
                description={t('landing.offer.description')}
              />

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <Motion3DTilt tiltMax={4} liftAmount={8} className="h-full">
                  <div className="h-full rounded-2xl border border-teal-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:border-teal-300/60">
                    <h3 className="text-lg font-semibold text-slate-800">{t('landing.offer.rectangular_ducts')}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-500">
                      <li>{t('landing.offer.rectangular_ducts_list')}</li>
                    </ul>
                  </div>
                </Motion3DTilt>
                <Motion3DTilt tiltMax={4} liftAmount={8} className="h-full">
                  <div className="h-full rounded-2xl border border-teal-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:border-teal-300/60">
                    <h3 className="text-lg font-semibold text-slate-800">{t('landing.offer.rectangular_fittings')}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>{t('landing.offer.rectangular_fittings_list')}</li>
                    </ul>
                  </div>
                </Motion3DTilt>
                <Motion3DTilt tiltMax={4} liftAmount={8} className="h-full">
                  <div className="h-full rounded-2xl border border-teal-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:border-teal-300/60">
                    <h3 className="text-lg font-semibold text-slate-800">{t('landing.offer.round_elements')}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li>{t('landing.offer.round_elements_list')}</li>
                    </ul>
                  </div>
                </Motion3DTilt>
              </div>
            </UnifiedPanel>
          </div>
        </section>

        {/* AC */}
        <section id="klimatyzacja" className="container py-6 md:py-4 md:py-5">
          <UnifiedPanel>
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <SectionHeading
                  eyebrow="Klimatyzacja"
                  title={
                    <>
                      <span className={`inline-block ${acVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        {Array.from("Doradztwo, sprzedaż i").map((char, index) => (
                          <span
                            key={index}
                            className={`inline-block ${acVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                            style={{
                              animationDelay: acVisible ? `${index * 0.05}s` : '0s',
                              animationFillMode: 'both'
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>{' '}
                      <span className={`inline-block ${acVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                        {Array.from("montaż klimatyzacji").map((char, index) => (
                          <span
                            key={index}
                            className={`inline-block ${acVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                            style={{
                              animationDelay: acVisible ? `${(index + 23) * 0.05}s` : '0s',
                              animationFillMode: 'both'
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </>
                  }
                  description={t('landing.air_conditioning.description')}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InfoCard
                      icon={Wrench}
                      title={t('landing.air_conditioning.from_selection_to_startup')}
                      description={t('landing.air_conditioning.from_selection_to_startup_desc')}
                    />
                    <InfoCard
                      icon={BadgeCheck}
                      title={t('landing.air_conditioning.service_and_support')}
                      description={t('landing.air_conditioning.service_and_support_desc')}
                    />
                  </div>
                </SectionHeading>
              </div>
              <div className="md:col-span-5">
                <Motion3DTilt tiltMax={5} liftAmount={8} className="h-full">
                  <div className="h-full rounded-3xl border border-teal-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:border-teal-300/60">
                    <p className="text-sm text-muted-foreground">Doświadczenie</p>
                    <div className="mt-4 grid gap-3">
                      <div className="rounded-xl bg-teal-50/50 p-4 border border-teal-100/50">
                        <p className="text-xl md:text-2xl font-semibold text-slate-800">10 lat</p>
                        <p className="text-sm text-slate-500">produkcji kanałów wentylacyjnych</p>
                      </div>
                      <div className="rounded-xl bg-teal-50/50 p-4 border border-teal-100/50">
                        <p className="text-xl md:text-2xl font-semibold text-slate-800">10 lat</p>
                        <p className="text-sm text-slate-500">doradztwa i montażu klimatyzacji</p>
                      </div>
                    </div>
                    <HeroButton href="#kontakt">
                      Skontaktuj się
                    </HeroButton>
                  </div>
                </Motion3DTilt>
              </div>
            </div>
          </UnifiedPanel>
        </section>

        {/* WHY */}
        <section id="dlaczego" className="container py-6 md:py-4 md:py-5">
          <UnifiedPanel>
            <SectionHeading
              eyebrow="Dlaczego my"
              title={
                <>
                  <span className={`inline-block ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    {Array.from("Nacisk na detale:").map((char, index) => (
                      <span
                        key={index}
                        className={`inline-block ${whyVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                        style={{
                          animationDelay: whyVisible ? `${index * 0.05}s` : '0s',
                          animationFillMode: 'both'
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>{' '}
                  <span className={`inline-block ${whyVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    {Array.from("precyzja, termin, kompleksowość").map((char, index) => (
                      <span
                        key={index}
                        className={`inline-block ${whyVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                        style={{
                          animationDelay: whyVisible ? `${(index + 18) * 0.05}s` : '0s',
                          animationFillMode: 'both'
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                </>
              }
              description={t('landing.why_us.description')}
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: t('landing.why_us.precision'),
                  desc: t('landing.why_us.precision_desc'),
                },
                {
                  title: t('landing.why_us.individual_approach'),
                  desc: t('landing.why_us.individual_approach_desc'),
                },
                {
                  title: t('landing.why_us.timeliness_wu'),
                  desc: t('landing.why_us.timeliness_wu_desc'),
                },
                {
                  title: t('landing.why_us.comprehensiveness'),
                  desc: t('landing.why_us.comprehensiveness_desc'),
                },
              ].map((item) => (
                <Motion3DTilt key={item.title} tiltMax={4} liftAmount={8}>
                  <div
                    className="h-full rounded-2xl border border-teal-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:border-teal-300/60"
                  >
                    <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </Motion3DTilt>
              ))}
            </div>
          </UnifiedPanel>
        </section>

        {/* GALLERY */}
        <section id="galeria" className="container py-6 md:py-4 md:py-5">
          <UnifiedPanel>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
              <GalleryTile
                src={gallery09}
                alt="Kanały wentylacyjne – detal"
                className="md:col-span-7 md:row-span-2"
                onClick={() => openGallery(0)}
                index={0}
              />
              <GalleryTile
                src={gallery06}
                alt="Produkcja HVAC – stanowisko"
                className="md:col-span-5"
                onClick={() => openGallery(1)}
                index={1}
              />
              <GalleryTile
                src={gallery07}
                alt="Kształtki wentylacyjne – element"
                className="md:col-span-5"
                onClick={() => openGallery(2)}
                index={2}
              />
              <GalleryTile
                src={gallery08}
                alt="Kanały i kształtki – montaż"
                className="md:col-span-4"
                onClick={() => openGallery(3)}
                index={3}
              />
              <GalleryTile
                src={gallery05}
                alt="Produkcja kanałów – linia"
                className="md:col-span-8"
                onClick={() => openGallery(4)}
                index={4}
              />
            </div>
          </UnifiedPanel>
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="relative overflow-hidden">
          <div className="container py-6 md:py-4 md:py-5">
            <UnifiedPanel>
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-7">
                  <Motion3DTilt tiltMax={4} liftAmount={8} className="h-full">
                    <div className="group relative rounded-3xl border border-teal-200/50 bg-white p-6 md:p-8 shadow-xl shadow-teal-500/10 transition-all duration-300 hover:shadow-teal-500/20 hover:border-teal-300/60 w-full h-full">
                      {/* Decorative side accent */}
                      <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-teal-500/40" />

                      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-800 leading-tight">
                        <span className={`inline-block ${contactVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                          {Array.from("Skontaktuj się").map((char, index) => (
                            <span
                              key={index}
                              className={`inline-block ${contactVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                              style={{
                                animationDelay: contactVisible ? `${index * 0.05}s` : '0s',
                                animationFillMode: 'both'
                              }}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </span>
                          ))}
                        </span>{' '}
                        <span className={`inline-block ${contactVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                          {Array.from("z nami").map((char, index) => (
                            <span
                              key={index}
                              className={`inline-block ${contactVisible ? 'animate-fade-in bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent' : 'opacity-0'}`}
                              style={{
                                animationDelay: contactVisible ? `${(index + 15) * 0.05}s` : '0s',
                                animationFillMode: 'both'
                              }}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </span>
                          ))}
                        </span>
                      </h2>
                      <p className="mt-4 text-lg text-slate-600 leading-relaxed font-medium/80">
                        {t('landing.contact.description')}
                      </p>
                      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
                        <div className="rounded-2xl bg-teal-50/50 p-5 border border-teal-100/50 shadow-sm">
                          <p className="text-sm font-medium text-teal-700/80 uppercase tracking-wider">{t('landing.contact.email_label')}</p>
                          <a className="mt-2 block text-lg font-semibold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent hover:text-teal-600 transition-colors hover:underline" href="mailto:biuro@ventepolska.pl">
                            biuro@ventepolska.pl
                          </a>
                        </div>
                        <div className="rounded-2xl bg-teal-50/50 p-5 border border-teal-100/50 shadow-sm">
                          <p className="text-sm font-medium text-teal-700/80 uppercase tracking-wider">{t('landing.contact.ventilation_dept')}</p>
                          <a className="mt-2 block text-lg font-semibold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent hover:text-teal-600 transition-colors hover:underline" href="tel:+48796201999">
                            796 201 999
                          </a>
                        </div>
                        <div className="rounded-2xl bg-teal-50/50 p-5 border border-teal-100/50 shadow-sm">
                          <p className="text-sm font-medium text-teal-700/80 uppercase tracking-wider">{t('landing.contact.ac_dept')}</p>
                          <a className="mt-2 block text-lg font-semibold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent hover:text-teal-600 transition-colors hover:underline" href="tel:+48509088215">
                            509 088 215
                          </a>
                        </div>
                        <div className="rounded-2xl bg-teal-50/50 p-5 border border-teal-100/50 shadow-sm">
                          <p className="text-sm font-medium text-teal-700/80 uppercase tracking-wider">{t('landing.contact.website_label')}</p>
                          <a className="mt-2 block text-lg font-semibold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent hover:text-teal-600 transition-colors hover:underline" href="https://ventepolska.pl/" target="_blank" rel="noreferrer">
                            ventepolska.pl
                          </a>
                        </div>
                      </div>
                    </div>
                  </Motion3DTilt>
                </div>


                <div className="md:col-span-5">
                  <Motion3DTilt tiltMax={4} liftAmount={8}>
                    <div className="h-full rounded-xl border border-teal-200/50 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10 hover:border-teal-300/60">
                      <p className="text-sm text-muted-foreground">{t('landing.contact.quick_message')}</p>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                        {t('landing.contact.prototype_note')}
                      </p>
                      <div className="mt-5 grid gap-3">
                        <Button variant="hero" className="w-full min-h-[48px] text-base px-6 py-4" asChild>
                          <a href="mailto:biuro@ventepolska.pl?subject=Zapytanie%20Vente%20Polska">{t('landing.contact.write_email')}</a>
                        </Button>
                        <Button variant="glass" className="w-full" asChild>
                          <a href="#oferta">{t('landing.contact.back_to_offer')}</a>
                        </Button>
                      </div>
                    </div>
                  </Motion3DTilt>
                </div>
              </div>
            </UnifiedPanel>
          </div>
        </section>

        <footer className="mt-10 flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between container pb-6">
          <p>{t('landing.footer.copyright', { year: new Date().getFullYear() })}</p>
          <p className="text-muted-foreground/80">{t('landing.footer.tech')}</p>
        </footer>
      </main>
    </div>
  );
}
