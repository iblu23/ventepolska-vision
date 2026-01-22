import { cn } from "@/lib/utils";
import { Motion3DTilt } from "./Motion3DTilt";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, description, className, children }: SectionHeadingProps) {
  return (
    <Motion3DTilt className={cn("h-full", className)}>
      <div className="group relative h-full rounded-3xl border border-teal-200/50 bg-white/80 p-6 md:p-8 shadow-xl shadow-teal-500/10 backdrop-blur-md transition-all duration-300 hover:shadow-teal-500/20 hover:border-teal-300/60 font-inherit">
        {/* Decorative side accent */}
        <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-teal-500/40" />

        {eyebrow ? (
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-2">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-slate-800 leading-tight">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed font-medium/80">
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="mt-6">
            {children}
          </div>
        ) : null}
      </div>
    </Motion3DTilt>
  );
}


