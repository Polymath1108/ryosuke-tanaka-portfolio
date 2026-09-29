import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://github.com/polymath1108", icon: Github, label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/naru-satoshi-2856923a0/", icon: Linkedin, label: "LinkedIn", external: true },
  { href: "https://x.com/satoshi_naru?s=21", icon: Twitter, label: "X / Twitter", external: true },
  { href: "mailto:satoshinaru213@gmail.com", icon: Mail, label: "Email", external: false },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <p className="text-sm text-muted-foreground">
          {"© "}{new Date().getFullYear()} Ryosuke Tanaka
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
