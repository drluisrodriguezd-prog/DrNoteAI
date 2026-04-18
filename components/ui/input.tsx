import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[12px] border border-[rgba(160,178,204,0.16)] bg-[linear-gradient(180deg,rgba(11,17,27,0.98)_0%,rgba(7,11,18,0.98)_100%)] px-4 py-3 text-sm text-[#f6fbff] transition-all duration-200 placeholder:text-[#74829a] focus-visible:border-[#2ad8a0] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(42,216,160,.15)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
