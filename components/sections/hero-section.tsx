import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#041c53]/95 via-[#041c53]/90 to-[#041c53]/85 text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg?height=1080&width=1920"
          alt="Background"
          fill
          className="object-cover mix-blend-overlay opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#041c53]/80 via-[#041c53]/70 to-[#041c53]/60"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#e3b306]/10 blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#e3b306]/5 blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-12 py-16 md:py-28 mt-16">
        <div className="flex flex-col justify-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-block bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium">
              Mental Health Support
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transform Your <span className="text-[#e3b306]">Mental Well-Being</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mt-6 max-w-xl leading-relaxed">
              Personalized support that adapts to your lifestyle. Accessible, stigma-free mental health care with proven
              results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <GradientButton size="lg">
              Sign Up Now <ChevronRight size={18} />
            </GradientButton>
            <Button
              variant="outline"
              className="border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white h-14 px-8"
            >
              Learn More
            </Button>
          </div>

          <HeroCommunityBadge />
        </div>

        <HeroImage />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

function HeroCommunityBadge() {
  return (
    <div className="flex items-center gap-6 mt-8 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
      <div className="flex -space-x-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full border-2 border-white/70 overflow-hidden shadow-lg transform transition-transform hover:scale-110 hover:z-10"
          >
            <Image
              src={`/placeholder.svg?height=100&width=100&text=${i}`}
              alt="Client"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div>
        <p className="font-medium">Join our active healthy community</p>
        <div className="flex items-center gap-1 text-white/70 text-sm mt-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="text-[#e3b306] fill-[#e3b306]" size={14} />
            ))}
          </div>
          <span>5.0 (200+ reviews)</span>
        </div>
      </div>
    </div>
  )
}

function HeroImage() {
  return (
    <div className="relative hidden md:block">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#e3b306]/30 to-[#e3b306]/5 blur-3xl"></div>

      <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 border border-white/10">
        <Image
          src="/design1.webp?height=600&width=500"
          alt="Mental wellness"
          width={500}
          height={600}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#041c53]/80 via-transparent to-transparent"></div>

        <HeroImageBadge position="top-right" text="Healthy Mind" />
        <HeroImageBadge position="bottom-left" text="Healthy Body" />

        <GradientButton className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-6 shadow-lg">
          Get Started <ChevronRight size={16} />
        </GradientButton>
      </div>
    </div>
  )
}

interface HeroImageBadgeProps {
  position: "top-right" | "bottom-left"
  text: string
}

function HeroImageBadge({ position, text }: HeroImageBadgeProps) {
  const positionClasses = {
    "top-right": "top-6 right-6 animate-pulse",
    "bottom-left": "bottom-24 left-6",
  }

  return (
    <div
      className={`absolute ${positionClasses[position]} bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20 shadow-lg`}
    >
      <div className="w-2 h-2 bg-[#e3b306] rounded-full"></div>
      <span className="font-medium">{text}</span>
    </div>
  )
}

