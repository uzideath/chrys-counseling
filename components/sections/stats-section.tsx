import type React from "react"
import { Clock, Heart, Award, Shield } from "lucide-react"

interface StatItemProps {
  label: string
  value: string
  icon: React.ElementType
}

function StatItem({ label, value, icon: Icon }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-[#041c53]/10 flex items-center justify-center mb-3">
        <Icon className="text-[#041c53]" size={24} />
      </div>
      <div className="font-bold text-2xl md:text-3xl text-[#041c53]">{value}</div>
      <div className="text-gray-500 text-sm mt-1">{label}</div>
    </div>
  )
}

export function StatsSection() {
  const stats = [
    { label: "Years Experience", value: "30+", icon: Clock },
    { label: "Satisfied Clients", value: "5,000+", icon: Heart },
    { label: "Success Rate", value: "95%", icon: Award },
    { label: "Certified Therapists", value: "20+", icon: Shield },
  ]

  return (
    <div className="relative z-20 container mx-auto px-4">
      <div className="bg-white rounded-xl shadow-xl -mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 border border-gray-100">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} />
        ))}
      </div>
    </div>
  )
}

