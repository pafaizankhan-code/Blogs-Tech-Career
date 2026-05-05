import { useEffect, useState } from 'react'

export default function TableOfContents({ headings }) {
  const [active, setActive] = useState(headings[0]?.id)

  useEffect(() => {
    if (!headings.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-100px 0px -70% 0px', threshold: 0 }
    )
    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  if (!headings.length) return null

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-ink-soft/60 font-semibold mb-4">
        On this page
      </p>
      <ul className="space-y-1 border-l border-black/10">
        {headings.map((h) => {
          const isActive = active === h.id
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block pl-4 -ml-px py-1.5 text-sm transition border-l-2 ${
                  isActive
                    ? 'border-brand text-brand font-medium'
                    : 'border-transparent text-ink-soft/70 hover:text-ink hover:border-ink-soft/30'
                }`}
              >
                {h.text}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
