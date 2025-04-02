import { SectionHeader } from "@/components/ui/section-header"

interface TestimonialProps {
  quote: string
  name: string
  role: string
}

function Testimonial({ quote, name, role }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-2">
      <div className="mb-6 text-[#e3b306]">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11L8 17H5L7 11H5V5H11V11H10ZM18 11L16 17H13L15 11H13V5H19V11H18Z" fill="currentColor" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#041c53]/10 flex items-center justify-center">
          <span className="text-[#041c53] font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-bold text-[#041c53]">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "CHRYS Counseling helped me develop coping strategies that have transformed how I handle stress and anxiety. I'm forever grateful.",
      name: "Sarah J.",
      role: "Client for 2 years",
    },
    {
      quote:
        "The flexibility of their programs made it possible for me to get the help I needed while balancing work and family. The therapists are compassionate and skilled.",
      name: "Michael T.",
      role: "Goal-Oriented Program",
    },
    {
      quote:
        "After trying several other services, CHRYS Counseling was the only one that truly understood my needs. Their evidence-based approach made all the difference.",
      name: "Rebecca L.",
      role: "Subscription Client",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <SectionHeader
          badge="Testimonials"
          title={
            <>
              What Our <span className="text-[#e3b306]">Clients Say</span>
            </>
          }
          description="Hear from people who have transformed their lives with our support."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Testimonial key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

