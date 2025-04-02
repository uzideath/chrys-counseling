import Image from "next/image"
import { Play, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { GradientButton } from "@/components/ui/gradient-button"

export function AboutSection() {
  const features = ["Flexible Options", "Anytime, Anywhere Access", "Measurable Outcomes", "Tailored Care Plans"]

  return (
    <section id="about" className="py-24 container mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <AboutImage />

        <div className="space-y-8">
          <SectionHeader
            badge="About Us"
            title={
              <>
                You Deserve to be <span className="text-[#e3b306]">Mentally Healthy</span>
              </>
            }
            centered={false}
          />

          <p className="text-gray-600 text-lg leading-relaxed">
            Discover the heart behind our mental health platform. At our core, we are a compassionate community of
            experts dedicated to guiding you on your journey to emotional well-being and resilience.
          </p>

          <div className="space-y-6 mt-8">
            <h3 className="text-2xl font-bold text-[#041c53]">We are a Trusted Provider of Mental Health Care</h3>
            <p className="text-gray-600">
              With over 30 years of experience, CHRYS Counseling is committed to evidence-based therapy that delivers
              measurable results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {features.map((item, i) => (
                <FeatureItem key={i} text={item} />
              ))}
            </div>

            <GradientButton color="primary" className="mt-8">
              More About Us <ArrowRight size={16} />
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutImage() {
  return (
    <div className="relative">
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#e3b306]/20"></div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#041c53]/10"></div>

      <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(4,28,83,0.2)] group">
        <div className="absolute inset-0 flex items-center justify-center bg-[#041c53]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <Button
            variant="outline"
            className="rounded-full w-20 h-20 flex items-center justify-center border-2 border-white/70 bg-white/10 hover:bg-white/20 transform transition-transform group-hover:scale-110"
          >
            <Play className="text-white ml-1" size={30} />
          </Button>
        </div>
        <Image
          src="/mental.jpg?height=600&width=500"
          alt="Therapy session"
          width={500}
          height={600}
          className="w-full object-cover aspect-[4/5] transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 shadow-lg">
          <div className="w-2 h-2 bg-[#e3b306] rounded-full"></div>
          <span className="text-white font-medium">Therapy Session</span>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="absolute inset-0 bg-[#e3b306]/20 rounded-full blur-sm group-hover:bg-[#e3b306]/30 transition-colors"></div>
        <CheckCircle className="text-[#041c53] relative z-10" size={22} />
      </div>
      <span className="font-medium">{text}</span>
    </div>
  )
}

