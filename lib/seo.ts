const DEFAULT_SITE_URL = "https://satoshi-naru.vercel.app"

export const getSiteUrl = () => {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)

  const normalizedUrl = (envUrl ?? DEFAULT_SITE_URL).replace(/\/+$/, "")

  return normalizedUrl
}
