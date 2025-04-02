import type React from "react"
import { ArrowRight, MessageCircle, Calendar, CheckCircle, Play } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { GradientButton } from "@/components/ui/gradient-button"
import { Button } from "@/components/ui/button"

interface ProcessStepProps {
  title: string
  description: string
  icon: React.ElementType
  number: number
  position: "left" | "right"
}

function ProcessStep({ title, description, icon: Icon, number, position }: ProcessStepProps) {
  return (
    <div className={`flex ${position === "left" ? "md:justify-end" : "md:justify-start"}`}>
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-2 max-w-md relative">
        <div className="absolute top-8 -left-8 md:left-auto md:right-auto md:-top-8 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#041c53] to-[#041c53]/80 flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {number}
        </div>
        <div className="ml-10 md:ml-0 md:mt-10">
          <div className="w-16 h-16 rounded-2xl bg-[#041c53]/10 flex items-center justify-center mb-6 group-hover:bg-[#041c53]/15 transition-colors">
            <Icon className="text-[#041c53]" size={28} />
          </div>
          <h3 className="text-xl font-bold text-[#041c53] mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ScheduleCalendar() {
  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h4 className="font-medium text-white text-lg">April 2025</h4>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-white/30 bg-white/10 hover:bg-white/20 text-white"
          >
            <ArrowRight className="rotate-180 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-white/30 bg-white/10 hover:bg-white/20 text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div key={i} className="text-sm text-white/70">
            {day}
          </div>
        ))}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className={`aspect-square flex items-center justify-center rounded-full text-sm cursor-pointer transition-all duration-200 ${
              i === 9 ? "bg-[#e3b306] text-[#041c53] font-medium" : "text-white hover:bg-white/20"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  const steps = [
    {
      title: "Contact Us",
      description: "Reach out via website, call, or our app to begin your journey.",
      icon: MessageCircle,
    },
    {
      title: "Initial Consultation",
      description: "Meet with a therapist to discuss your needs and goals.",
      icon: Calendar,
    },
    {
      title: "Choose a Program",
      description: "Select the program that best fits your needs and preferences.",
      icon: CheckCircle,
    },
    {
      title: "Begin Therapy",
      description: "Start your sessions and track your progress over time.",
      icon: Play,
    },
  ]

  return (
    <section id="how-it-works" className="py-24 container mx-auto">
      <SectionHeader
        badge="Process"
        title={
          <>
            How It <span className="text-[#e3b306]">Works</span>
          </>
        }
        description="Our streamlined process makes getting the help you need simple and straightforward."
      />

      <div className="relative">
        <div className="absolute hidden md:block left-1/2 top-1/4 h-[60%] w-0.5 bg-gradient-to-b from-[#041c53]/30 to-[#041c53]/5 transform -translate-x-1/2"></div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {steps.map((step, i) => (
            <ProcessStep key={i} {...step} number={i + 1} position={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-[#041c53] to-[#041c53]/90 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e3b306]/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#e3b306]/5 blur-3xl"></div>
          </div>

          <div className="relative z-10 p-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Book Your Schedule</h3>
              <p className="text-white/80 text-lg mb-8">
                Our flexible scheduling system allows you to book appointments that fit your busy life. Cancel or
                reschedule within 24 hours via our app.
              </p>
              <GradientButton size="lg">
                Schedule Now <ArrowRight size={18} />
              </GradientButton>
            </div>
            <ScheduleCalendar />
          </div>
        </div>
      </div>
    </section>
  )
}

