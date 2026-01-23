import { Button } from "@/components/ui/button";
import { Motion3DTilt } from "@/components/landing/Motion3DTilt";
import { ArrowRight } from "lucide-react";
import { memo } from "react";

// Shared solid background styles
const solidBackgroundStyle = {
    background: "white",
    transform: 'translateZ(-20px)',
};

interface HeroButtonProps {
    href: string;
    children: React.ReactNode;
    withTilt?: boolean;
}

// Memoized button to prevent unnecessary re-renders
export const HeroButton = memo(({ href, children, withTilt = false }: HeroButtonProps) => {
    const buttonContent = (
        <div className="relative group">
            <Button variant="hero" size="lg" className="flex w-full items-center justify-between gap-2 px-6 py-4 relative z-10 min-h-[52px] sm:min-h-[56px] text-base sm:text-lg touch-manipulation" asChild>
                <a href={href} className="flex items-center justify-center font-bold" style={{ perspective: '1000px' }}>
                    <span className="text-white transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(20,184,166,0.8)] group-active:drop-shadow-[0_0_12px_rgba(20,184,166,0.8)]">
                        {children}
                    </span>
                    <div
                        className="cta-arrow-container ml-2 md:ml-3 flex items-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-2 group-hover:scale-110 group-active:translate-x-2 group-active:scale-110"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'rotateY(0deg) rotateZ(0deg) translateZ(0px)'
                        }}
                    >
                        <ArrowRight
                            className="h-5 w-5 md:h-6 md:w-6 shrink-0 stroke-[2.5px] md:stroke-[3px] text-white transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.9)] group-active:drop-shadow-[0_0_15px_rgba(20,184,166,0.9)]"
                        />
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @media (min-width: 768px) {
                                .group:hover .cta-arrow-container {
                                    transform: rotateY(0deg) rotateZ(-5deg) translateZ(20px) !important;
                                }
                            }
                            @media (max-width: 767px) {
                                .group:active .cta-arrow-container {
                                    transform: rotateY(0deg) rotateZ(-3deg) translateZ(10px) !important;
                                }
                            }
                        `}} />
                    </div>
                </a>
            </Button>


            {/* Hover effects */}
            <div
                className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 ease-out group-hover:border-teal-500/60 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.6),0_0_60px_rgba(20,184,166,0.3)] md:group-hover:shadow-[0_0_40px_rgba(20,184,166,0.8),0_0_80px_rgba(20,184,166,0.4)] md:group-hover:transform-gpu md:group-hover:-translate-y-2 md:group-hover:scale-[1.03] pointer-events-none"
                style={solidBackgroundStyle}
            />

            {/* Active click state */}
            <div
                className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-150 active:border-teal-500/80 active:shadow-[0_0_40px_rgba(20,184,166,0.8),0_0_80px_rgba(20,184,166,0.4)] active:transform-gpu pointer-events-none"
                style={solidBackgroundStyle}
            />

            {/* Simple edge glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
              <div
                className="absolute inset-0 rounded-xl border-2 border-teal-500/40 shadow-[0_0_20px_rgba(20,184,166,0.8)]"
              />
            </div>

        </div>
    );

    if (withTilt) {
        return (
            <Motion3DTilt tiltMax={4} liftAmount={8} className="w-full">
                {buttonContent}
            </Motion3DTilt>
        );
    }

    return buttonContent;
});

HeroButton.displayName = "HeroButton";
