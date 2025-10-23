import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-24 w-full rounded-lg border-2 border-[#E5E5E5] dark:border-[#1A1A1A] bg-transparent px-4 py-3 text-sm font-medium transition-colors outline-none resize-none",
        "placeholder:text-[#737373] placeholder:font-normal",
        "focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
