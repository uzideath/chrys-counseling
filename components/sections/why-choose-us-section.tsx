import type React from "react"
import { Award, MessageCircle, Shield, Heart, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { GradientButton } from "@/components/ui/gradient-button"

interface FeatureProps {
  title: string
  description: string
  icon: React.ElementType
}

function Feature({ title, description, icon: Icon }: FeatureProps) {
  return (
    <div className="flex gap-6 group">
      <div className="relative">
        <div className="absolute inset-0 bg-[#e3b306]/20 rounded-2xl blur-sm group-hover:bg-[#e3b306]/30 transition-colors"></div>
        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center relative z-10 shadow-lg transform transition-transform group-hover:scale-110">
          <Icon className="text-[#041c53]" size={28} />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#041c53] mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export function WhyChooseUsSection() {
  const features = [
    {
      title: "Evidence-Based Practices",
      description: "We use scientifically validated methods to ensure effective outcomes for our clients.",
      icon: Award,
    },
    {
      title: "Flexible Delivery",
      description: "Our services are available in multiple formats—in-office, online, or via mobile platforms.",
      icon: MessageCircle,
    },
    {
      title: "Experienced Providers",
      description: "Our licensed therapists have specific training in evidence-based therapy approaches.",
      icon: Shield,
    },
    {
      title: "Affordable and Accessible",
      description: "We offer competitive pricing tailored to school-age family budgets.",
      icon: Heart,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <SectionHeader
          badge="Why Choose Us"
          title={
            <>
              Why <span className="text-[#e3b306]">CHRYS</span>
            </>
          }
          description="We stand apart through our commitment to quality, accessibility, and evidence-based care."
        />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, i) => (
            <Feature key={i} {...feature} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <GradientButton color="primary" size="xl">
            Sign Up Now <ArrowRight size={20} />
          </GradientButton>
        </div>
      </div>
    </section>
  )
}

