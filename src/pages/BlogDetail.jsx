import { useEffect, useMemo, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import {
  getPostBySlug,
  getRelatedPosts,
  MAIN_SITE,
  SERVICE_LINKS,
  BASE_URL,
  COMPANY,
} from '../data/posts'
import { processContent } from '../data/contentUtils'
import BlogCard from '../components/BlogCard'
import CTABanner from '../components/CTABanner'
import SEO from '../components/SEO'
import ReadingProgress from '../components/ReadingProgress'
import TableOfContents from '../components/TableOfContents'
import ShareButtons from '../components/ShareButtons'
import Logo from '../components/Logo'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const articleRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const processed = useMemo(
    () => (post ? processContent(post.content) : { html: '', headings: [] }),
    [post]
  )

  if (!post) return <Navigate to="/" replace />

  const related = getRelatedPosts(slug, 3)
  const url = `${BASE_URL}/blog/${slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: COMPANY,
      url: MAIN_SITE,
      logo: {
        '@type': 'ImageObject',
        url: 'https://techcareer.site/logo.png',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords?.join(', '),
    articleSection: post.category,
  }

  return (
    <main>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${slug}`}
        keywords={post.keywords || []}
        image={post.cover}
        type="article"
        publishedTime={post.dateISO}
        modifiedTime={post.dateISO}
        author={post.author}
        jsonLd={articleJsonLd}
      />
      <ReadingProgress targetRef={articleRef} />

      <article ref={articleRef} className="max-w-7xl mx-auto px-5 lg:px-8 pt-6 md:pt-8">
        {/* BRAND ROW */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-black/10">
          {/* <Logo variant="dark" size="sm" /> */}
          <div></div>
          <a
            href={`${MAIN_SITE}contact`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-white text-sm font-medium hover:bg-brand transition"
          >
            Hire our team
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* BREADCRUMB */}
        <nav className="text-xs text-ink-soft/60 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-brand">
            Blog
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink-soft">{post.category}</span>
        </nav>

        {/* TITLE */}
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand text-xs font-medium mb-5">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-ink-soft/70 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-soft/60 pb-8 border-b border-black/10">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-brand text-white grid place-items-center text-xs font-semibold">
                {post.author
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </span>
              <span className="font-medium text-ink">{post.author}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-ink-soft/40" />
            <time dateTime={post.dateISO}>{post.date}</time>
            <span className="w-1 h-1 rounded-full bg-ink-soft/40" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* COVER */}
        <div className="mt-10 mb-12 rounded-2xl overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-75 md:h-125 object-cover"
          />
        </div>

        {/* CONTENT + SIDEBAR */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <div
              className="prose-blog max-w-none"
              dangerouslySetInnerHTML={{ __html: processed.html }}
            />

            {/* INLINE PROMO */}
            <div className="my-14 p-7 md:p-10 rounded-2xl bg-linear-to-br from-brand to-brand-700 text-white relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative">
                <p className="text-xs tracking-[0.2em] uppercase opacity-80 mb-2">
                  About the author
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-3 tracking-tight">
                  Tech Career IT Solutions LLP
                </h3>
                <p className="opacity-90 leading-relaxed mb-5 max-w-2xl">
                  We're a web development &amp; digital marketing agency in Ahmedabad delivering
                  custom websites, e-commerce stores, UI/UX design, mobile apps, and branding
                  for businesses serious about growth.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`${MAIN_SITE}contact`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-brand font-medium hover:bg-ink hover:text-white transition"
                  >
                    Start a Project →
                  </a>
                  <a
                    href={MAIN_SITE}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/10 font-medium transition"
                  >
                    techcareer.site
                  </a>
                </div>
              </div>
            </div>

            {/* TAGS + SHARE */}
            <div className="flex flex-wrap items-end justify-between gap-6 pt-8 border-t border-black/10">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-ink-soft/60 font-semibold mb-3">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {(post.keywords || []).slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-zinc-100 text-xs text-ink-soft hover:bg-brand hover:text-white cursor-default transition"
                    >
                      #{t.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
              <ShareButtons url={url} title={post.title} />
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-10">
            <div className="lg:sticky lg:top-6 space-y-10">
              <TableOfContents headings={processed.headings} />

              <div className="p-6 rounded-2xl bg-ink text-white">
                <p className="text-xs tracking-[0.2em] uppercase text-brand font-semibold mb-3">
                  ✦ Need help?
                </p>
                <h4 className="font-display text-2xl font-medium mb-3 leading-snug tracking-tight">
                  Let our team handle it.
                </h4>
                <p className="text-sm text-white/70 mb-5 leading-relaxed">
                  Tech Career builds custom websites, stores, and marketing engines for
                  businesses in Ahmedabad and worldwide.
                </p>
                <a
                  href={`${MAIN_SITE}contact`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full justify-center items-center gap-2 px-4 py-3 rounded-full bg-brand hover:bg-brand-600 text-white font-medium transition"
                >
                  Book a Free Consult →
                </a>
              </div>

              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-ink-soft/60 font-semibold mb-4">
                  Our Services
                </p>
                <ul className="space-y-1">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between p-3 rounded-lg hover:bg-brand-50 transition"
                      >
                        <span className="text-sm font-medium text-ink-soft group-hover:text-brand">
                          {s.label}
                        </span>
                        <span className="text-ink-soft/40 group-hover:text-brand">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-black/10">
                <p className="text-xs tracking-[0.2em] uppercase text-brand font-semibold mb-2">
                  More from techcareer.site
                </p>
                <h4 className="font-display text-lg font-medium mb-3 leading-snug">
                  Explore our portfolio of work.
                </h4>
                <a
                  href={MAIN_SITE}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-brand hover:underline"
                >
                  Visit main site →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mb-12">
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-black/10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-brand font-semibold mb-2">
              ✦ Keep reading
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight">
              Related <span className="italic-display text-brand">articles</span>
            </h2>
          </div>
          <Link
            to="/"
            className="hidden md:inline-flex text-sm font-medium text-ink-soft hover:text-brand transition"
          >
            All posts →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
