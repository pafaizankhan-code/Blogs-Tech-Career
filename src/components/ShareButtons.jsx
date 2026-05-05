export default function ShareButtons({ url, title }) {
  const enc = (s) => encodeURIComponent(s)
  const links = [
    {
      label: 'Twitter',
      icon: 'X',
      href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
    },
    {
      label: 'LinkedIn',
      icon: 'in',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    },
    {
      label: 'WhatsApp',
      icon: 'wa',
      href: `https://wa.me/?text=${enc(title + ' ' + url)}`,
    },
    {
      label: 'Facebook',
      icon: 'fb',
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    },
  ]

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-ink-soft/60 font-semibold mb-3">
        Share
      </p>
      <div className="flex gap-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Share on ${l.label}`}
            className="w-10 h-10 grid place-items-center rounded-full border border-black/10 text-ink-soft hover:bg-brand hover:text-white hover:border-brand transition text-xs font-bold"
          >
            {l.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
