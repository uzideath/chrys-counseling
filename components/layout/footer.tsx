import Image from "next/image"
import Link from "next/link"
import { FooterLinkGroup } from "@/components/ui/footer-link-group"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = ["Twitter", "Facebook", "Instagram", "LinkedIn"]

  const linkGroups = [
    {
      title: "Programs",
      links: ["Teens", "Young Adults", "Adults", "Family", "Subscription-Based", "Goal-Oriented", "Pay-As-You-Go"],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Story",
        "Mission & Values",
        "Evidence-Based Practices",
        "Why CHRYS",
        "Careers",
        "Contact",
      ],
    },
    {
      title: "Legal",
      links: ["Policies and Procedures", "Terms of Use", "Privacy Policy", "HIPAA Compliance", "Accessibility"],
    },
  ]

  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo2.png"
                alt="CHRYS Counseling"
                width={200}
                height={70}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Providing accessible, personalized, and stigma-free mental health care for over 30 years.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#041c53]/10 flex items-center justify-center hover:bg-[#041c53] hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                </Link>
              ))}
            </div>
          </div>

          {linkGroups.map((group, i) => (
            <FooterLinkGroup key={i} title={group.title} links={group.links} />
          ))}
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; {currentYear} CHRYS Counseling. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-[#041c53] text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#041c53] text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#041c53] text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

