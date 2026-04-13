import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import { getSiteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const now = new Date()

  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
  }))
}
