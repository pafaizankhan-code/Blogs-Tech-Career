import { STATS, MAIN_SITE } from '../data/posts'

export default function StatsBar() {
  return (
    <section className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((s) => (
            <div key={s.label} className="border-l border-white/10 pl-5 md:pl-6">
              <div className="num-badge text-4xl md:text-6xl font-light tracking-tight text-brand mb-2">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/70 max-w-xl">
            Numbers from{' '}
            <span className="text-white font-medium">Tech Career IT Solutions LLP</span> — a
            web development &amp; digital marketing agency in Ahmedabad.
          </p>
          <a
            href={MAIN_SITE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand hover:text-white transition text-sm font-medium"
          >
            See our work on techcareer.site
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
