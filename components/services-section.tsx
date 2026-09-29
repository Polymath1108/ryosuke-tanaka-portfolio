"use client"

import { ArrowRight, Rocket, CreditCard, Brain, Workflow, Smartphone, Server } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/section-heading"

const serviceIcons = [
  Rocket,
  CreditCard,
  Brain,
  Workflow,
  Smartphone,
  Server,
]

export function ServicesSection() {
  const t = useTranslations("services")
  const items = t.raw("items") as Array<{
    title: string
    subtitle: string
    description: string
    skills: string[]
    projectAnchor: string
  }>

  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow={t("whatIDo")} title={t("title")} intro={t("intro")} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((service, index) => {
            const Icon = serviceIcons[index] ?? Rocket
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_12px_32px_-20px_rgba(26,26,26,0.35)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-foreground">{service.title}</h3>
                <p className="mt-1 text-sm text-brand">{service.subtitle}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--skill-border)] bg-[var(--skill-bg)] px-2.5 py-1 text-xs leading-none text-[var(--skill-text)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={`#projects-${service.projectAnchor}`}
                  className="mt-5 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-brand"
                >
                  {t("viewProjects")}
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
