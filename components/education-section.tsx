"use client"

import { GraduationCap } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/section-heading"

export function EducationSection() {
  const t = useTranslations("education")
  const items = t.raw("items") as Array<{
    degree: string
    university: string
    period: string
  }>

  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow={t("background")} title={t("title")} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((edu) => (
            <article key={edu.degree} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                  <GraduationCap className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
                  <p className="mt-1 text-[15px] text-muted-foreground">{edu.university}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
