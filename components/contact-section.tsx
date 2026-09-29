"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/section-heading"

const contactItems = [
  { key: "email" as const, icon: Mail, href: "mailto:rich.alpha444@gmail.com", display: "rich.alpha444@gmail.com", external: false },
  { key: "github" as const, icon: Github, href: "https://github.com/polymath1108", display: "@polymath1108", external: true },
]

type Status = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const fieldClass =
    "h-11 rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:border-brand focus-visible:ring-brand/20"

  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow={t("getStarted")} title={t("title")} intro={t("intro")} />

        <div className="grid items-stretch gap-4 md:grid-cols-5">
          <div className="rounded-2xl border border-border bg-card p-6 md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    {t("name")}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t("namePlaceholder")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={fieldClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    {t("email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={fieldClass}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("messagePlaceholder")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[140px] rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:border-brand focus-visible:ring-brand/20"
                  required
                />
              </div>
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full rounded-full bg-foreground text-base text-background hover:bg-foreground/85 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</>
                ) : (
                  t("sendMessage")
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-4 md:col-span-2">
            {contactItems.map((item) => (
              <div key={item.key} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                    <item.icon className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t(item.key)}</p>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-[15px] text-foreground transition-colors hover:text-brand"
                    >
                      {item.display}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
