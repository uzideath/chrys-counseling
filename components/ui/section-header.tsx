import type { ReactNode } from "react"

interface SectionHeaderProps {
  badge: string
  title: ReactNode
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ badge, title, description, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center max-w-3xl mx-auto" : ""} mb-16 ${className}`}>
      <div className="inline-block bg-[#041c53]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[#041c53] mb-4">
        {badge}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-[#041c53] leading-tight">{title}</h2>
      {description && <p className="text-gray-600 mt-6 text-lg">{description}</p>}
    </div>
  )
}

