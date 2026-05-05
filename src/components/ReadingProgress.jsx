import { useEffect, useState } from 'react'

export default function ReadingProgress({ targetRef }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function update() {
      const el = targetRef?.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const pct = Math.min(100, Math.max(0, (scrolled / total) * 100))
      setProgress(pct)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [targetRef])

  return <div className="reading-progress" style={{ width: `${progress}%` }} aria-hidden />
}
