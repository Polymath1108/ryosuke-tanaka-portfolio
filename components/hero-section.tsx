"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

const statKeys = ["years", "systems", "reduction", "certs"] as const

export function HeroSection() {
  const t = useTranslations("hero")
  const tStats = useTranslations("hero.stats")

  const stats = [
    { value: `${new Date().getFullYear() - 2016}+`, key: statKeys[0] },
    { value: "20+", key: statKeys[1] },
    { value: "30-45%", key: statKeys[2] },
    { value: "3", key: statKeys[3] },
  ]

  return (
    <section className="relative bg-background pt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="text-xs font-medium tracking-wide text-muted-foreground">{t("available")}</span>
            </div>

            <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-snug text-muted-foreground sm:text-xl">
              {t("subtitleLine1")} {t("subtitleLine2")} {t("subtitleLine3")}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t("bio")}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{t("location")}</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-foreground px-6 text-background hover:bg-foreground/85"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("viewServices")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent px-6 text-foreground hover:bg-secondary"
                asChild
              >
                <a href="/resume.pdf" download="Ryosuke_Tanaka_Resume.pdf">
                  <Download className="h-4 w-4" />
                  {t("downloadResume")}
                </a>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] bg-secondary shadow-[0_20px_50px_-24px_rgba(26,26,26,0.35)]">
              <img
                src="/Ryosuke%20Tanaka.png"
                alt={t("title")}
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
              />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.key} className="bg-card px-5 py-6">
              <dt className="text-xs text-muted-foreground">{tStats(stat.key)}</dt>
              <dd className="mt-2 font-display text-3xl tracking-tight text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
