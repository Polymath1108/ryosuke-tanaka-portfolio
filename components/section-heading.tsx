type SectionHeadingProps = {
  eyebrow: string
  title: string
  intro?: string
}

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  )
}
