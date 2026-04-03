import { Github, Linkedin, Facebook, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/polymath1108", icon: Github, label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/naru-satoshi-2856923a0/", icon: Linkedin, label: "LinkedIn", external: true },
  { href: "https://www.facebook.com/share/1Hi3P8BHny/?mibextid=wwXIfr", icon: Facebook, label: "Facebook", external: true },
  { href: "https://x.com/satoshi_naru?s=21", icon: Twitter, label: "X / Twitter", external: true },
  { href: "mailto:satoshinaru213@gmail.com", icon: Mail, label: "Email", external: false },
]

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {"© "}{new Date().getFullYear()} Satoshi Naru. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted-foreground hover:text-[#84c11f] transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
