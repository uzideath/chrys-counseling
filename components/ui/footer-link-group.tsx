import Link from "next/link"

interface FooterLinkGroupProps {
  title: string
  links: string[]
}

export function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="font-bold text-[#041c53] mb-6 text-lg">{title}</h3>
      <ul className="space-y-3">
        {links.map((item, i) => (
          <li key={i}>
            <Link
              href="#"
              className="text-gray-600 hover:text-[#041c53] transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e3b306] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

