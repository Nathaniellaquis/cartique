"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 items-center rounded-lg border-2 border-[#E5E5E5] dark:border-[#1A1A1A] transition-all outline-none",
        "data-[state=checked]:bg-black dark:data-[state=checked]:bg-white data-[state=checked]:border-black dark:data-[state=checked]:border-white",
        "data-[state=unchecked]:bg-[#F5F5F5] dark:data-[state=unchecked]:bg-[#1A1A1A]",
        "focus-visible:ring-2 focus-visible:ring-[#D4AF37]/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-5 rounded-md bg-white dark:bg-black ring-0 transition-transform",
          "data-[state=checked]:translate-x-[calc(100%-4px)] data-[state=unchecked]:translate-x-0.5",
          "data-[state=checked]:bg-white dark:data-[state=checked]:bg-black"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
