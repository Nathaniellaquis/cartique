import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] active:scale-95",
  {
    variants: {
      variant: {
        // Primary: Glass with gold border
        default: "bg-white/10 backdrop-blur-2xl border-2 border-[#D4AF37] text-white rounded-2xl hover:bg-white/15 hover:shadow-xl hover:shadow-[#D4AF37]/40",
        // Secondary: Subtle glass
        outline: "bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-white/20",
        // Tertiary: Ghost
        ghost: "bg-transparent text-white rounded-2xl hover:bg-white/5",
        // Destructive
        destructive: "bg-red-500/20 border border-red-500/30 text-red-400 rounded-2xl hover:bg-red-500/30",
        // Success
        success: "bg-green-500/20 border border-green-500/30 text-green-400 rounded-2xl hover:bg-green-500/30",
        // Gold solid
        gold: "bg-[#D4AF37] text-black rounded-2xl hover:bg-[#E5C158] hover:shadow-xl hover:shadow-[#D4AF37]/40",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
