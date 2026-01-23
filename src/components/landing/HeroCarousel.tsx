import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Import images
import heroImage from "@/assets/vente-hero.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";
import gallery07 from "@/assets/gallery-07.jpg";

const images = [
    { src: heroImage, alt: "Vente Polska Hero" },
    { src: gallery05, alt: "Production Line" },
    { src: gallery06, alt: "Ventilation Ducts" },
    { src: gallery07, alt: "HVAC Installation" },
];

export function HeroCarousel({ className }: { className?: string }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={cn("relative h-full w-full overflow-hidden rounded-3xl border border-teal-200/40 bg-card/40 shadow-lg shadow-teal-500/5", className)}>
            {/* Images */}
            {images.map((img, index) => (
                <div
                    key={img.src}
                    className={cn(
                        "absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out",
                        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                    />
                </div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute inset-0 z-20 flex items-center justify-between px-4 pointer-events-none">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="group h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white pointer-events-auto transition-transform hover:scale-110 active:scale-95"
                >
                    <ChevronLeft className="h-6 w-6 transition-transform duration-2000 ease-in-out group-hover:animate-spin" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="group h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white pointer-events-auto transition-transform hover:scale-110 active:scale-95"
                >
                    <ChevronRight className="h-6 w-6 transition-transform duration-2000 ease-in-out group-hover:animate-spin" />
                </Button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all duration-300 shadow-sm transition-transform duration-2000 ease-in-out group-hover:animate-spin",
                            index === currentIndex
                                ? "bg-white w-6"
                                : "bg-white/50 hover:bg-white/80"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
