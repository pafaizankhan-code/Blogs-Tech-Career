import { Link } from 'react-router-dom'

export default function BannerCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-ink h-72 sm:h-80 shadow-xl shadow-black/15 hover:shadow-2xl hover:shadow-black/25 hover:-translate-y-1 transition-all duration-300"
    >
      <img
        src={post.cover}
        alt={post.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-black/10" />
      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-brand text-white text-[10px] font-medium tracking-wider uppercase">
        {post.category}
      </span>
      <div className="relative h-full flex flex-col justify-end p-4 text-white">
        <h3 className="font-display text-base md:text-lg font-semibold leading-tight line-clamp-2 mb-2.5 tracking-tight group-hover:text-brand-200 transition">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-[11px] text-white/75 whitespace-nowrap">
          <time dateTime={post.dateISO}>{post.date}</time>
          <span aria-hidden className="w-1 h-1 rounded-full bg-white/40" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  )
}
