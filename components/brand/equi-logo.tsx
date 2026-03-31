import { cn } from "@/lib/utils";

type EquiLogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showWordmark?: boolean;
};

export function EquiLogo({
  className,
  iconClassName,
  textClassName,
  showWordmark = true,
}: EquiLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex size-10 items-center justify-center overflow-hidden rounded-2xl border border-emerald-400/25 bg-[linear-gradient(180deg,rgba(99,241,171,0.18),rgba(7,17,12,0.96))] shadow-[0_0_24px_rgba(99,241,171,0.18)]",
          iconClassName,
        )}
      >
        <div className="absolute inset-[5px] rounded-[0.8rem] border border-white/8" />
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className="relative z-10 size-6 text-emerald-300"
          fill="none"
        >
          <path
            d="M32 6L49 12V26C49 37.4 42.2 47.3 32 53C21.8 47.3 15 37.4 15 26V12L32 6Z"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M24 24H39"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 32H36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 40H34"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showWordmark ? (
        <div className={cn("flex items-baseline gap-1", textClassName)}>
          <span className="font-mono text-sm uppercase tracking-[0.32em] text-[color:var(--primary)]">
            Equi
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
            .ai
          </span>
        </div>
      ) : null}
    </div>
  );
}
