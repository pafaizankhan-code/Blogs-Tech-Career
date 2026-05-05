import { useState } from 'react'
import { posts, CATEGORIES, MAIN_SITE, SERVICE_LINKS, BASE_URL, COMPANY } from '../data/posts'
import BlogCard from '../components/BlogCard'
import CTABanner from '../components/CTABanner'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import StatsBar from '../components/StatsBar'
import SEO from '../components/SEO'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = posts.filter((p) => p.featured)
  const filtered =
    activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory)

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Tech Career Blog',
    url: `${BASE_URL}/`,
    description:
      'Insights on web development, e-commerce, UI/UX, branding, and digital marketing by Tech Career IT Solutions LLP.',
    publisher: {
      '@type': 'Organization',
      name: COMPANY,
      url: MAIN_SITE,
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${BASE_URL}/blog/${p.slug}`,
      datePublished: p.dateISO,
      author: { '@type': 'Person', name: p.author },
      image: p.cover,
    })),
  }

  return (
    <main>
      <SEO
        path="/"
        description="Insights, playbooks, and case studies on web development, e-commerce, UI/UX, branding & digital marketing — by Tech Career IT Solutions LLP, a leading agency in Ahmedabad."
        keywords={[
          'web development blog',
          'digital marketing tips',
          'e-commerce playbook',
          'agency Ahmedabad blog',
        ]}
        jsonLd={blogJsonLd}
      />

      <Hero />
      <Marquee />

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-20 mb-20">
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-black/10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-brand font-semibold mb-2">
              ✦ Featured
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight">
              Editor's <span className="italic-display text-brand">picks</span>
            </h2>
          </div>
          <a
            href="#latest"
            className="hidden md:inline-flex text-sm font-medium text-ink-soft hover:text-brand transition"
          >
            View all →
          </a>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {featured.map((post, i) => (
            <BlogCard key={post.slug} post={post} variant="featured" index={i} />
          ))}
        </div>
      </section>

     
      {/* CATEGORIES */}
      <section id="categories" className="max-w-7xl mx-auto px-5 lg:px-8 mb-12">
        <div className="border-y border-black/10 py-8">
          <p className="text-xs tracking-[0.2em] uppercase text-ink-soft/60 font-semibold mb-4">
            Browse by topic
          </p>
          <div className="flex flex-wrap gap-2">
            {['All', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? 'bg-ink text-white'
                    : 'bg-zinc-100 text-ink-soft hover:bg-brand hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST GRID */}
      <section id="latest" className="max-w-7xl mx-auto px-5 lg:px-8 mb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-brand font-semibold mb-2">
              ✦ Latest
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight">
              The <span className="italic-display text-brand">latest</span> reads
            </h2>
          </div>
          <p className="text-sm text-ink-soft/60">{filtered.length} posts</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>

      {/* SERVICE INTERLINK STRIP */}
      <section className="bg-zinc-50 border-y border-black/5 py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[0.2em] uppercase text-brand font-semibold mb-3">
                ✦ What we do
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight mb-5">
                Beyond the blog —{' '}
                <span className="italic-display text-brand">we ship.</span>
              </h2>
              <p className="text-ink-soft/70 leading-relaxed mb-6 text-lg">
                Tech Career IT Solutions LLP is a full-service web development &amp; digital
                marketing agency in Ahmedabad. From custom websites to complete brand systems —
                we partner with founders who care about quality.
              </p>
              <a
                href={MAIN_SITE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all"
              >
                Explore services on techcareer.site
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {SERVICE_LINKS.map((s, i) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-5 bg-white rounded-xl border border-black/5 hover:border-brand hover:shadow-xl hover:shadow-brand/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="num-badge text-2xl font-light text-brand/60 group-hover:text-brand transition">
                      0{i + 1}
                    </span>
                    <span className="font-medium">{s.label}</span>
                  </div>
                  <span
                    aria-hidden
                    className="text-ink-soft/40 group-hover:text-brand group-hover:translate-x-1 transition-all"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
