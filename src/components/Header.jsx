import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { MAIN_SITE } from '../data/posts'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/#categories', label: 'Categories' },
    { to: '/#latest', label: 'Latest' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-lg bg-brand text-white grid place-items-center font-display font-bold text-lg shadow-sm group-hover:shadow-brand/30 group-hover:shadow-lg transition">
            TC
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Tech Career <span className="text-brand">.blog</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-brand' : 'text-ink-soft hover:text-brand'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={MAIN_SITE}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-ink-soft hover:text-brand transition"
          >
            Main Site &nbsp;↗
          </a>
        </nav>

        <a
          href={`${MAIN_SITE}contact`}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-white text-sm font-medium hover:bg-brand transition"
        >
          Hire Tech Career
          <span aria-hidden>→</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-5 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-soft py-1"
              >
                {item.label}
              </NavLink>
            ))}
            <a href={MAIN_SITE} target="_blank" rel="noreferrer" className="text-sm font-medium text-ink-soft py-1">
              Main Site ↗
            </a>
            <a
              href={`${MAIN_SITE}contact`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-ink text-white text-sm font-medium"
            >
              Hire Tech Career →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
