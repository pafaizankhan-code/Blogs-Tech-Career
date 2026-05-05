import { Link } from 'react-router-dom'
import logoUrl from '../assets/logo.jpg'

/**
 * Tech Career IT Solution LLP — official logo lockup.
 * Variants:
 *   - "light"  → logo on a white rounded pill (use over brand/blue/dark backgrounds)
 *   - "dark"   → logo as-is (use over white/light backgrounds)
 *   - "footer" → same as light, optimised for small footer use
 */
export default function Logo({ variant = 'dark', size = 'md', className = '' }) {
  const onLight = variant === 'light' || variant === 'footer'

  const imgSize = {
    sm: 'h-6 md:h-7',
    md: 'h-8 md:h-9',
    lg: 'h-10 md:h-12',
  }[size]

  const padding = {
    sm: 'px-2.5 py-1.5',
    md: 'px-3 py-2',
    lg: 'px-4 py-2.5',
  }[size]

  const inner = (
    <img
      src={logoUrl}
      alt="Tech Career IT Solution LLP"
      width="2172"
      height="724"
      className={`${imgSize} w-auto select-none`}
      draggable={false}
    />
  )

  if (onLight) {
    return (
      <Link
        to="/"
        className={`inline-flex items-center bg-white rounded-xl ${padding} shadow-md shadow-black/10 hover:shadow-lg hover:-translate-y-0.5 transition-all ${className}`}
        aria-label="Tech Career IT Solution LLP — Home"
      >
        {inner}
      </Link>
    )
  }

  return (
    <Link
      to="/"
      className={`inline-flex items-center hover:opacity-85 transition ${className}`}
      aria-label="Tech Career IT Solution LLP — Home"
    >
      {inner}
    </Link>
  )
}
