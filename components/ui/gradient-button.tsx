"use client"

import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: ReactNode
  className?: string
  color?: "primary" | "secondary"
  size?: "default" | "lg" | "xl"
  onClick?: () => void
}

export function GradientButton({
  children,
  className = "",
  color = "secondary",
  size = "default",
  onClick,
}: GradientButtonProps) {
  const colorStyles = {
    primary: {
      gradient: "from-[#041c53] to-[#041c53]/90",
      text: "text-white",
    },
    secondary: {
      gradient: "from-[#e3b306] to-[#e3b306]/90",
      text: "text-[#041c53]",
    },
  }

  const sizeStyles = {
    default: "h-12",
    lg: "h-14 px-8",
    xl: "h-16 px-10 text-lg",
  }

  return (
    <Button className={cn("relative overflow-hidden group", sizeStyles[size], className)} onClick={onClick}>
      <span
        className={`absolute inset-0 w-full h-full bg-gradient-to-r ${colorStyles[color].gradient} transition-all duration-300 transform group-hover:scale-105`}
      ></span>
      <span className={`relative ${colorStyles[color].text} font-medium z-10 flex items-center gap-2`}>{children}</span>
    </Button>
  )
}

