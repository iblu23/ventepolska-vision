import { Button } from "@/components/ui/button";
import { Motion3DTilt } from "@/components/landing/Motion3DTilt";
import { ArrowRight } from "lucide-react";
import { memo } from "react";

// Shared glassmorphism effect styles
const glassBackgroundStyle = {
    background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,253,250,0.7) 100%)",
    transform: 'translateZ(-20px)',
};

const hoverEffectStyle = {
    transform: 'translateZ(-25px) translateZ(0px)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

const activeEffectStyle = {
    transform: 'translateZ(-35px) translateZ(0px)',
};

const blurFilterStyle = {
    filter: 'blur(2px)',
};

const rippleOriginStyle = {
    transformOrigin: 'center',
};

const patternStyle = {
    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(20,184,166,0.1) 2px, rgba(20,184,166,0.1) 4px)`,
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
            <Button variant="hero" size="lg" className="w-full relative z-10 min-h-[48px] text-base px-6 py-4" asChild>
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

            {/* Glass panel background */}
            <div
                className="absolute inset-0 rounded-xl border border-teal-200/50 bg-white/70 shadow-lg shadow-teal-500/5 backdrop-blur-sm transition-all duration-300 group-hover:border-teal-300/60 group-hover:shadow-teal-500/20 pointer-events-none"
                style={glassBackgroundStyle}
            />

            {/* Hover effects */}
            <div
                className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-teal-500/60 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.6),0_0_60px_rgba(20,184,166,0.3)] group-hover:transform-gpu pointer-events-none"
                style={hoverEffectStyle}
            />

            {/* Active click state */}
            <div
                className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-150 active:border-teal-500/80 active:shadow-[0_0_40px_rgba(20,184,166,0.8),0_0_80px_rgba(20,184,166,0.4)] active:transform-gpu pointer-events-none"
                style={activeEffectStyle}
            />

            {/* Volumetric edge glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                <div
                    className="absolute inset-0 rounded-xl border-2 border-teal-500/40 shadow-[0_0_20px_rgba(20,184,166,0.8),inset_0_0_20px_rgba(20,184,166,0.2)]"
                    style={blurFilterStyle}
                />
            </div>

            {/* Glass reflection ripple */}
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent transform scale-0 group-hover:scale-150 transition-transform duration-700"
                    style={rippleOriginStyle}
                />
            </div>

            {/* Lens flare */}
            <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-teal-300/40 via-teal-200/20 to-transparent animate-pulse" />
            </div>

            {/* Circuit patterns */}
            <div className="absolute inset-0 rounded-xl opacity-10 transition-opacity duration-300 pointer-events-none">
                <div
                    className="absolute inset-0 rounded-xl"
                    style={patternStyle}
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
