import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]",
  {
    variants: {
      variant: {
        default:
          "border-[color:var(--border-strong)] bg-[color:var(--accent)] text-[color:var(--accent-foreground)]",
        secondary:
          "border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--muted-foreground)]",
        outline: "border-[color:var(--border-strong)] text-[color:var(--foreground)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
