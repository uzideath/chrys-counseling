import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { GradientButton } from "@/components/ui/gradient-button"

interface ProgramCardProps {
  title: string
  description: string
  icon: string
}

function ProgramCard({ title, description, icon }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-2">
      <div className="w-16 h-16 rounded-2xl bg-[#041c53]/10 flex items-center justify-center mb-6 text-2xl transform transition-transform group-hover:scale-110 group-hover:bg-[#041c53]/15">
        <span>{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-[#041c53] mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link href="#" className="text-[#e3b306] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
        Read More <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

interface PricingPlanProps {
  title: string
  price: string
  period: string
  features: string[]
  cta: string
  highlighted?: boolean
}

function PricingPlan({ title, price, period, features, cta, highlighted = false }: PricingPlanProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
        highlighted
          ? "border-2 border-[#e3b306] shadow-xl relative z-10"
          : "border border-gray-200 shadow-lg hover:shadow-xl"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#e3b306] text-[#041c53] font-bold px-4 py-1 rounded-full text-sm shadow-lg">
          Most Popular
        </div>
      )}

      <div
        className={`p-8 ${
          highlighted ? "bg-gradient-to-br from-[#041c53] to-[#041c53]/90 text-white" : "bg-[#041c53]/5"
        }`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-end gap-1 mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className={`text-sm ${highlighted ? "opacity-80" : "text-gray-600"}`}>/ {period}</span>
        </div>
      </div>

      <div className="p-8 bg-white">
        <ul className="space-y-4 mb-8">
          {features.map((feature, j) => (
            <li key={j} className="flex items-start gap-3">
              <div className="relative mt-1">
                <div className="absolute inset-0 bg-[#e3b306]/20 rounded-full blur-sm"></div>
                <CheckCircle className="text-[#041c53] relative z-10" size={18} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <GradientButton color={highlighted ? "secondary" : "primary"} className="w-full">
          {cta} <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
        </GradientButton>
      </div>
    </div>
  )
}

export function ProgramsSection() {
  const programCards = [
    {
      title: "Teens",
      description: "Specialized support for adolescents navigating the challenges of growing up.",
      icon: "👦",
    },
    {
      title: "Young Adults",
      description: "Guidance for those transitioning to independence and adult responsibilities.",
      icon: "👩",
    },
    {
      title: "Adults",
      description: "Comprehensive therapy addressing the complex needs of adult life.",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Family",
      description: "Strengthening relationships and improving communication within family units.",
      icon: "👨‍👩‍👧‍👦",
    },
  ]

  const pricingPlans = [
    {
      title: "Subscription-Based",
      price: "$490",
      period: "Month",
      features: [
        "4 Weekly Live Sessions",
        "Video, Call, Chat, or In-Person",
        "Anytime Messaging",
        "Auto-Renewal",
        "Credit Card Payment Only",
      ],
      cta: "Get Started",
    },
    {
      title: "Goal-Oriented Based",
      price: "$2000",
      period: "16 sessions",
      features: [
        "Personalized Client Needs",
        "Structured Plans",
        "Measurable Progress",
        "Flexible Approach",
        "Supportive Guidance",
      ],
      cta: "See All Programs",
      highlighted: true,
    },
    {
      title: "Pay-As-You-Go Care",
      price: "$145",
      period: "Visit",
      features: [
        "Individual or Family 1-hour Session",
        "Traditional Therapy",
        "Video, Call, Chat, or In-Person",
        "Charged to Card on File",
        "Personalized Sessions",
      ],
      cta: "Get Started",
    },
  ]

  return (
    <section id="programs" className="py-24 container mx-auto">
      <SectionHeader
        badge="Our Programs"
        title={
          <>
            Let's Find a Program that is <span className="text-[#e3b306]">Right for You</span>
          </>
        }
        description="We'll support you in selecting the most suitable program for your unique needs and circumstances."
      />

      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {programCards.map((card, i) => (
          <ProgramCard key={i} {...card} />
        ))}
      </div>

      <div className="relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#e3b306]/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#041c53]/10 blur-3xl"></div>

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[#041c53] mb-12 text-center">
            Offered <span className="text-[#e3b306]">Programs</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <PricingPlan key={i} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

