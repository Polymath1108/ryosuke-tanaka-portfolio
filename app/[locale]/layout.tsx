import type React from "react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { ThemeProvider } from "@/components/theme-provider"
import { CardLightFlowInit } from "@/components/card-light-flow-init"
import { LocaleLang } from "@/components/locale-lang"
import { Analytics } from "@vercel/analytics/next"
import { getSiteUrl } from "@/lib/seo"
import "../globals.css"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return {}
  const t = await getTranslations({ locale, namespace: "metadata" })
  const siteUrl = getSiteUrl()
  const localePath = `/${locale}`
  const canonicalUrl = `${siteUrl}${localePath}`

  const languageAlternates = Object.fromEntries(
    routing.locales.map((altLocale) => [altLocale, `${siteUrl}/${altLocale}`]),
  )

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": `${siteUrl}/${routing.defaultLocale}`,
        ...languageAlternates,
      },
    },
    keywords: [
      "Satoshi Naru",
      "Satoshi Naru portfolio",
      "Senior Full-Stack AI Engineer",
      "AI ML LLM Engineer Tokyo",
      "Generative AI Engineer",
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonicalUrl,
      siteName: "Satoshi Naru Portfolio",
      type: "website",
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: "@satoshi_naru",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages}>
        <LocaleLang />
        {children}
        <CardLightFlowInit />
      </NextIntlClientProvider>
      <Analytics />
    </ThemeProvider>
  )
}
