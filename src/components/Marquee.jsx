const ITEMS = [
  'Web Development',
  'E-commerce',
  'UI/UX Design',
  'Mobile Apps',
  'Digital Marketing',
  'Branding',
  'SEO',
  'Custom Websites',
  'Shopify',
  'WordPress',
  'React',
]

export default function Marquee() {
  const list = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-y border-black/10 bg-white py-5">
      <div className="flex gap-12 marquee-track whitespace-nowrap">
        {list.map((item, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl font-semibold tracking-tight flex items-center gap-12"
          >
            <span className="text-ink">{item}</span>
            <span className="text-brand text-3xl md:text-5xl leading-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
