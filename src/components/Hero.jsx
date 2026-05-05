import { useMemo, useState } from 'react'
import { posts, CATEGORIES, MAIN_SITE } from '../data/posts'
import BannerCard from './BannerCard'
import Logo from './Logo'

export default function Hero() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts
      .filter((p) => activeCategory === 'All' || p.category === activeCategory)
      .filter(
        (p) =>
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
      .slice(0, 6)
  }, [query, activeCategory])

  const tabs = ['All', ...CATEGORIES]

  return (
    <>
      <section className="relative overflow-hidden bg-brand text-white pb-44 md:pb-56">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-md h-112 md:w-136 md:h-136 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute top-20 right-32 w-72 h-72 rounded-full bg-brand-300/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-brand-700/40 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-8 md:pt-10">
          {/* Top bar: brand + Hire CTA */}
          <div className="flex items-center justify-between mb-12 md:mb-16">
            {/* <Logo variant="" size="md" /> */}
            <div></div>
            <a
              href={`${MAIN_SITE}contact`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-brand text-sm font-medium hover:bg-ink hover:text-white transition shadow-md"
            >
              Hire our team
              <span aria-hidden>→</span>
            </a>
          </div>

        
          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-medium leading-[1.05] tracking-tight max-w-5xl mb-10 md:mb-12">
            Best web development &amp; digital marketing{' '}
            <span className="italic-display">agency</span> blog of india
          </h1>

          {/* Search */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 bg-white text-ink rounded-full pl-5 pr-2 py-2 shadow-2xl shadow-black/10">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-ink-soft/60 shrink-0"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a blog..."
                className="flex-1 bg-transparent outline-hidden py-2 text-base placeholder:text-ink-soft/50 min-w-0"
              />
              <div className="hidden sm:block w-px h-7 bg-black/10" />
              <div className="relative shrink-0">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="appearance-none bg-transparent text-ink-soft text-sm font-medium pl-9 pr-8 py-2 outline-hidden cursor-pointer"
                >
                  <option value="All">All Topics</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-ink-soft/60 pointer-events-none"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-soft/60 pointer-events-none"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10 -mx-5 lg:-mx-8 px-5 lg:px-8 overflow-x-auto scrollbar-thin">
            <div className="flex items-end gap-7 md:gap-9 border-b border-white/20 min-w-max">
              {tabs.map((cat) => {
                const active = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative pb-3 text-sm md:text-base font-medium whitespace-nowrap transition ${
                      active ? 'text-white' : 'text-white/65 hover:text-white'
                    }`}
                  >
                    {cat}
                    <span
                      className={`absolute left-0 right-0 -bottom-px h-0.5 transition ${
                        active ? 'bg-white' : 'bg-transparent'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Topic chips below tabs */}
          <div className="mt-6 hidden md:flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/65">
            <span className="font-medium tracking-[0.2em] uppercase">We write about</span>
            <span aria-hidden>/</span>
            <a
              href={`${MAIN_SITE}web-development`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-sm"
            >
              Web Development
            </a>
            <span aria-hidden>·</span>
            <a
              href={`${MAIN_SITE}ecommerce`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-sm"
            >
              E-commerce
            </a>
            <span aria-hidden>·</span>
            <a
              href={`${MAIN_SITE}digital-marketing`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-sm"
            >
              Digital Marketing
            </a>
            <span aria-hidden>·</span>
            <a
              href={`${MAIN_SITE}ui-ux-design`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-sm"
            >
              UI/UX Design
            </a>
            <span aria-hidden>·</span>
            <a
              href={`${MAIN_SITE}branding`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-sm"
            >
              Branding
            </a>
          </div>
        </div>
      </section>

      {/* OVERLAPPING CARDS */}
      <section className="relative -mt-36 md:-mt-44 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-black/5">
              <p className="text-ink-soft/60 text-sm">
                No blogs match your search. Try a different keyword or topic.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {filtered.map((post) => (
                <BannerCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
