import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { GradientButton } from "@/components/ui/gradient-button"

interface MissionCardProps {
  title: string
  description: string
  icon: string
}

function MissionCard({ title, description, icon }: MissionCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group transform transition-transform hover:-translate-y-2">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#041c53] to-[#041c53]/80 flex items-center justify-center mb-6 text-2xl transform transition-transform group-hover:scale-110">
        <span className="text-white">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-[#041c53] mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export function MissionSection() {
  const missionCards = [
    {
      title: "Our Story",
      description:
        "Founded on the belief that everyone deserves quality mental health care, CHRYS Counseling has been a trusted provider for over three decades.",
      icon: "📖",
    },
    {
      title: "Our Mission & Vision",
      description:
        "We're committed to making mental health services accessible and affordable while maintaining the highest standards of care.",
      icon: "🔭",
    },
    {
      title: "Our Values",
      description:
        "Compassion, Excellence, Flexibility, and Integrity guide everything we do as we work to improve the mental well-being of our clients.",
      icon: "💎",
    },
  ]

  const therapyTags = ["Cognitive Behavioral Therapy", "Mindfulness", "Solution-Focused", "Trauma-Informed"]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <SectionHeader
          badge="Our Mission"
          title={
            <>
              Unlocking Professional Grade <span className="text-[#e3b306]">Mental Health Support</span>
            </>
          }
          description="Our mission is to provide accessible, affordable, and effective mental health services to everyone who needs them."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {missionCards.map((card, i) => (
            <MissionCard key={i} {...card} />
          ))}
        </div>

        <div className="mt-20 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#041c53] to-[#041c53]/90 opacity-95"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e3b306]/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#e3b306]/5 blur-3xl"></div>
          </div>

          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Led by Evidence-Based Practices</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Our therapeutic modalities are backed by extensive research and proven to be effective for a wide
                  range of mental health concerns. We continuously update our approaches based on the latest scientific
                  findings.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {therapyTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <GradientButton size="lg">
                  Learn More <ArrowRight size={18} />
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

