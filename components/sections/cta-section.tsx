import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"

interface StatItemProps {
  label: string
  value: string
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-[#e3b306] mb-2">{value}</div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  )
}

export function CTASection() {
  const stats = [
    { label: "Satisfaction Rate", value: "98%" },
    { label: "Clients Helped", value: "5,000+" },
    { label: "Certified Therapists", value: "20+" },
    { label: "Years of Experience", value: "30+" },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041c53] via-[#041c53]/95 to-[#041c53]/90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e3b306]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#e3b306]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Transform Your Mental Well-Being <span className="text-[#e3b306]">Today</span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
          Take the first step toward a healthier, happier you. Our team of experienced therapists is ready to support
          you on your journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <GradientButton size="xl">
            Sign Up Now <ArrowRight size={20} />
          </GradientButton>
          <Button
            variant="outline"
            className="border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white h-16 px-10 text-lg"
          >
            Contact Us
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

