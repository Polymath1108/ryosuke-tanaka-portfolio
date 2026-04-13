import { setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getSiteUrl } from "@/lib/seo"

type Props = { params: Promise<{ locale: string }> }

export default async function LocaleHome({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const siteUrl = getSiteUrl()
  const profileUrl = `${siteUrl}/${locale}`

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Satoshi Naru",
    alternateName: "成 聡志",
    url: profileUrl,
    image: `${siteUrl}/favicon.ico`,
    jobTitle: "Senior Full-Stack AI / ML / LLM Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Independent Consultant",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "The University of Tokyo",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Nagoya University",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/naru-satoshi-2856923a0/",
      "https://github.com/polymath1108",
      "https://x.com/satoshi_naru?s=21",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Full-Stack Development",
      "MLOps",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Satoshi Naru Portfolio",
    url: siteUrl,
    inLanguage: locale === "ja" ? "ja-JP" : "en-US",
    about: {
      "@type": "Person",
      name: "Satoshi Naru",
    },
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
