import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-lg border-2 border-[#E5E5E5] dark:border-[#1A1A1A] bg-transparent px-4 py-3 text-sm font-medium transition-colors outline-none",
        "placeholder:text-[#737373] placeholder:font-normal",
        "focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:border-0 file:bg-transparent file:text-sm file:font-semibold",
        className
      )}
      {...props}
    />
  )
}

export { Input }
