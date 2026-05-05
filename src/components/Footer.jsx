import { MAIN_SITE, SERVICE_LINKS } from '../data/posts'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* TOP ROW — brand + tagline + CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-12 border-b border-white/10">
          <div className="flex flex-col gap-3">
            {/* <Logo variant="footer" size="md" /> */}
            <div></div>
            <p className="text-sm text-white/60 max-w-md leading-relaxed">
              Insights from{' '}
              <a
                href={MAIN_SITE}
                target="_blank"
                rel="noreferrer"
                className="text-brand hover:underline"
              >
                Tech Career IT Solutions LLP
              </a>{' '}
              — a web development &amp; digital marketing agency in Ahmedabad.
            </p>
          </div>
          <a
            href={`${MAIN_SITE}contact`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-full bg-brand hover:bg-brand-600 text-white text-sm font-medium transition shadow-md shadow-brand/20"
          >
            Start a Project
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* SERVICES INLINE */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="text-xs tracking-[0.2em] uppercase text-white/50 font-semibold mr-2">
            Services
          </span>
          {SERVICE_LINKS.map((s, i) => (
            <span key={s.href} className="flex items-center gap-x-5">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-white/75 hover:text-brand transition"
              >
                {s.label}
              </a>
              {i < SERVICE_LINKS.length - 1 && (
                <span aria-hidden className="text-white/25">·</span>
              )}
            </span>
          ))}
        </div>

        {/* BOTTOM LEGAL */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Tech Career IT Solutions LLP — Ahmedabad, India.</p>
          <a
            href={MAIN_SITE}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand transition inline-flex items-center gap-1.5"
          >
            techcareer.site
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
