import { cn } from "@/lib/utils";
import { GlowGridBackdrop } from "@/components/landing/GlowGridBackdrop";
import { MeshGradient, FloatingOrbs } from "@/components/landing/ModernBackgrounds";

type BackgroundDemoProps = {
  className?: string;
};

export function BackgroundDemo({ className }: BackgroundDemoProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 p-4", className)}>
      {/* Original GlowGrid */}
      <div className="relative h-48 rounded-lg overflow-hidden border border-teal-200/50">
        <GlowGridBackdrop />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white/80 px-3 py-1 rounded text-sm font-medium">GlowGrid</span>
        </div>
      </div>

      {/* Mesh Gradient */}
      <div className="relative h-48 rounded-lg overflow-hidden border border-teal-200/50">
        <MeshGradient animated={true} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white/80 px-3 py-1 rounded text-sm font-medium">Mesh Gradient</span>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="relative h-48 rounded-lg overflow-hidden border border-teal-200/50">
        <FloatingOrbs animated={true} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white/80 px-3 py-1 rounded text-sm font-medium">Floating Orbs</span>
        </div>
      </div>

      {/* Combined Mesh + Orbs */}
      <div className="relative h-48 rounded-lg overflow-hidden border border-teal-200/50">
        <MeshGradient animated={true} className="opacity-60" />
        <FloatingOrbs animated={true} className="opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white/80 px-3 py-1 rounded text-sm font-medium">Mesh + Orbs</span>
        </div>
      </div>

      {/* Static Mesh */}
      <div className="relative h-48 rounded-lg overflow-hidden border border-teal-200/50">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white/80 px-3 py-1 rounded text-sm font-medium">Static Mesh</span>
        </div>
      </div>

      {/* Static Orbs */}
      <div className="relative h-48 rounded-lg overflow-hidden border border-teal-200/50">
        <div className="absolute inset-0 bg-orbs" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white/80 px-3 py-1 rounded text-sm font-medium">Static Orbs</span>
        </div>
      </div>
    </div>
  );
}
