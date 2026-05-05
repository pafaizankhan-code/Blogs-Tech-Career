import { MAIN_SITE } from '../data/posts'

export default function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 my-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink text-white p-10 md:p-20 isolate">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute right-10 top-10 hidden md:block num-badge text-[10rem] font-light leading-none text-white/5 select-none">
          ✦
        </div>

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand text-xs font-medium mb-6 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            TECH CAREER IT SOLUTIONS LLP
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] mb-6 tracking-tight">
            Ready to grow your business{' '}
            <span className="italic-display text-brand">online?</span>
          </h2>
          <p className="text-white/75 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            We design and build custom websites, e-commerce stores, mobile apps, and digital
            marketing engines for businesses in Ahmedabad and beyond. Let's talk about your
            project.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${MAIN_SITE}contact`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-brand hover:bg-brand-600 text-white font-medium transition shadow-lg shadow-brand/30"
            >
              Start a Project
              <span aria-hidden>→</span>
            </a>
            <a
              href={MAIN_SITE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 hover:border-brand hover:text-brand text-white/90 font-medium transition"
            >
              Visit techcareer.site
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
