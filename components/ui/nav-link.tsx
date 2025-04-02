import Link from "next/link"
import type { ReactNode } from "react"

interface NavLinkProps {
  href: string
  children: ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="text-white/90 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e3b306] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

