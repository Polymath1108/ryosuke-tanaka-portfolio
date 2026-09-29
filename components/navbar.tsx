"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Download, Menu, X } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"

const navHrefs = [
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const

export function Navbar() {
  const t = useTranslations("nav")
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--nav-border)] bg-[var(--nav)] backdrop-blur-md">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight text-foreground">
            Ryosuke Tanaka
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navHrefs.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(key)}
              </a>
            ))}
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              className="h-9 rounded-full bg-foreground px-4 text-background hover:bg-foreground/85"
              asChild
            >
              <a href="/resume.pdf" download="Ryosuke_Tanaka_Resume.pdf">
                <Download className="h-4 w-4" />
                {t("resume")}
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              type="button"
              className="rounded-full p-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navHrefs.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {t(key)}
              </a>
            ))}
            <Button
              className="mt-3 w-full rounded-full bg-foreground text-background hover:bg-foreground/85"
              asChild
            >
              <a href="/resume.pdf" download="Ryosuke_Tanaka_Resume.pdf">
                <Download className="h-4 w-4" />
                {t("downloadResume")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

function LanguageSwitcher() {
  const locale = useLocale()

  return (
    <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs">
      <Link
        href="/"
        locale="en"
        className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
          locale === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </Link>
      <Link
        href="/"
        locale="ja"
        className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
          locale === "ja" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        JA
      </Link>
    </div>
  )
}
