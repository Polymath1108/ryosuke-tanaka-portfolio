"use client"

import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/section-heading"

export function ExperienceSection() {
  const t = useTranslations("experience")
  const items = t.raw("items") as Array<{
    company: string
    role: string
    period: string
    location: string
    highlights: string[]
  }>

  return (
    <section id="experience" className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow={t("career")} title={t("title")} intro={t("intro")} />

        <ol className="space-y-4">
          {items.map((exp) => (
            <li key={exp.company + exp.role}>
              <article className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm text-brand">
                  {exp.company}
                  <span className="ml-2 font-normal text-muted-foreground">{exp.location}</span>
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
