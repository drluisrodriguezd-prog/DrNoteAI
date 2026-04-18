import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[12px] text-sm font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-[rgba(125,235,209,0.38)] bg-[linear-gradient(180deg,#9bf5e0_0%,#44d3b4_56%,#158264_100%)] text-[#04130f] shadow-[0_16px_28px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-10px_18px_rgba(0,0,0,0.28)] hover:brightness-105",
        secondary:
          "border border-[rgba(160,178,204,0.16)] bg-[linear-gradient(180deg,#202b3f_0%,#151d2e_58%,#0b111b_100%)] text-[#f6fbff] shadow-[0_16px_28px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[rgba(125,235,209,0.3)] hover:text-[#bbfff0]",
        ghost: "text-[#dbe5f2] hover:bg-[rgba(23,35,58,0.78)]",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-[10px] px-4",
        lg: "h-12 px-6 text-sm",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          "focus-visible:shadow-[0_0_0_3px_rgba(42,216,160,.15)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
