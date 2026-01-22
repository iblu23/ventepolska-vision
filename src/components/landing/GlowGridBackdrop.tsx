import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

type GlowGridBackdropProps = {
  className?: string;
};

/**
 * Signature interaction: pointer-reactive glow + subtle grid mask.
 * Uses CSS vars (--mx/--my) consumed by .bg-hero + .bg-grid utilities.
 */
export function GlowGridBackdrop({ className }: GlowGridBackdropProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        ref.current?.style.setProperty("--mx", `${x}%`);
        ref.current?.style.setProperty("--my", `${y}%`);
      });
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        "bg-hero",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-70 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
