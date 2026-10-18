import type { ReactNode } from 'react'

type SectionIntroProps = {
  eyebrow: string
  title: ReactNode
  copy?: string
  align?: 'left' | 'split'
}

export function SectionIntro({ eyebrow, title, copy, align = 'left' }: SectionIntroProps) {
  return (
    <header className={`section-intro section-intro--${align}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </header>
  )
}
