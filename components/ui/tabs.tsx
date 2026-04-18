"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-auto w-full flex-wrap items-center gap-2 rounded-[18px] border border-[rgba(160,178,204,0.16)] bg-[linear-gradient(180deg,rgba(18,28,46,0.9)_0%,rgba(8,13,24,0.96)_100%)] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex min-w-[92px] items-center justify-center rounded-[12px] px-3 py-2.5 text-sm text-[#a8b5c9] transition-all duration-200 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(42,216,160,.15)] data-[state=active]:border data-[state=active]:border-[rgba(160,178,204,0.16)] data-[state=active]:bg-[linear-gradient(180deg,#202b3f_0%,#151d2e_58%,#0b111b_100%)] data-[state=active]:text-[#f6fbff] data-[state=active]:shadow-[0_16px_28px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)]",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-4 focus-visible:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
