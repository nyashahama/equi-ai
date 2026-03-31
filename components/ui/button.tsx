import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 active:scale-[0.99]",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--primary)] text-[color:var(--primary-foreground)] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] hover:bg-[color:var(--primary-strong)]",
        secondary:
          "bg-[color:var(--card)] text-[color:var(--foreground)] border border-[color:var(--border)] hover:bg-[color:var(--card-strong)]",
        outline:
          "border border-[color:var(--border-strong)] bg-transparent text-[color:var(--foreground)] hover:bg-[color:var(--card)]",
        ghost:
          "text-[color:var(--muted-foreground)] hover:bg-[color:var(--card)] hover:text-[color:var(--foreground)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
