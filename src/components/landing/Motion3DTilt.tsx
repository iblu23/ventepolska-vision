import React from "react";
import { cn } from "@/lib/utils";

interface Motion3DTiltProps {
    children: React.ReactNode;
    className?: string;
    showGlow?: boolean;
    // Keeping these props to avoid breaking consumers, but they will be ignored
    tiltMax?: number;
    liftAmount?: number;
}

export function Motion3DTilt({
    children,
    className,
    showGlow = true,
}: Motion3DTiltProps) {
    // Static version - no motion hooks

    return (
        <div className={cn("relative group/tilt", className)}>
            {/* Aqua Rim Glow - soft teal edge light */}
            {showGlow && (
                <>
                    {/* Base rim (always visible, subtle) */}
                    <div
                        className="absolute -inset-px -z-10 rounded-[inherit] opacity-30 transition-opacity duration-300 group-hover/tilt:opacity-60"
                        style={{
                            background: "linear-gradient(135deg, rgba(45, 212, 191, 0.3) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 100%)",
                        }}
                    />
                    {/* Hover glow intensification */}
                    <div
                        className="absolute -inset-1 -z-20 rounded-[inherit] opacity-0 blur-md transition-opacity duration-500 group-hover/tilt:opacity-40"
                        style={{
                            background: "linear-gradient(135deg, rgba(45, 212, 191, 0.4), rgba(6, 182, 212, 0.2))",
                        }}
                    />
                </>
            )}

            {/* Content static wrapper */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}

// Parallax layer helper - now just a static passthrough
export function ParallaxLayer({
    children,
    className,
}: {
    children: React.ReactNode;
    depth?: number; // Ignored
    className?: string;
}) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
