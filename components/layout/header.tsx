import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/ui/nav-link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#041c53]/90 to-[#041c53]/0 backdrop-blur-sm">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-1"></div>
            <Image
              src="/logo2.png"
              alt="CHRYS Counseling"
              width={240}
              height={80}
              className="h-16 w-auto relative z-10"
              priority
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#programs">Programs</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <Button className="relative overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#e3b306] to-[#e3b306]/90 transition-all duration-300 transform group-hover:scale-105"></span>
          <span className="relative text-[#041c53] font-medium z-10">Sign Up Now</span>
        </Button>
      </div>
    </header>
  )
}

