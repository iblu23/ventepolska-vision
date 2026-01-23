import { cn } from "@/lib/utils";

type MeshGradientProps = {
  className?: string;
  animated?: boolean;
};

export function MeshGradient({ className, animated = false }: MeshGradientProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-mesh",
        className
      )}
      style={
        animated
          ? {
              animation: "mesh-move 20s ease-in-out infinite",
            }
          : undefined
      }
    />
  );
}

type FloatingOrbsProps = {
  className?: string;
  animated?: boolean;
};

export function FloatingOrbs({ className, animated = true }: FloatingOrbsProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-orbs",
        className
      )}
      style={
        animated
          ? {
              animation: "orbs-float 15s ease-in-out infinite",
            }
          : undefined
      }
    />
  );
}
