import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { AboutSection } from "@/components/sections/about-section"
import { MissionSection } from "@/components/sections/mission-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <MissionSection />
      <ProgramsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

