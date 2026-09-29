"use client"

import { Brain, Code2, Cloud, Award } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/section-heading"

const skillIcons = [Brain, Code2, Cloud]

export function SkillsSection() {
  const t = useTranslations("skills")
  const groups = t.raw("groups") as Array<{ title: string; skills: string[] }>
  const certifications = t.raw("certifications") as Array<{ name: string; issuer: string }>

  return (
    <section id="skills" className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow={t("expertise")} title={t("title")} intro={t("intro")} />

        <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = skillIcons[index] ?? Brain
            return (
              <article key={group.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <Icon className="h-4 w-4 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-block rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <article className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Award className="h-4 w-4 text-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{t("certificationsTitle")}</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-xl border border-border bg-background p-4">
                <p className="text-[15px] font-medium text-foreground">{cert.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
