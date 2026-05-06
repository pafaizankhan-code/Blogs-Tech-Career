import { Link } from 'react-router-dom'

export default function BlogCard({ post, variant = 'default', index }) {
  if (variant === 'featured') {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group block relative overflow-hidden rounded-3xl bg-ink h-110 md:h-140"
      >
       
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10" />
        {typeof index === 'number' && (
          <span className="absolute top-7 right-7 num-badge text-5xl md:text-6xl font-light text-white/90">
            0{index + 1}
          </span>
        )}
        <div className="relative h-full flex flex-col justify-end p-7 md:p-10 text-white">
          <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-brand text-xs font-medium mb-4">
            {post.category}
          </span>
          <h3 className="font-display text-2xl md:text-[2.5rem] font-medium leading-[1.08] mb-3 max-w-3xl group-hover:text-brand-300 transition tracking-tight">
            {post.title}
          </h3>
          <p className="text-white/75 max-w-2xl line-clamp-2 mb-5 text-sm md:text-base">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-white/60">
            <span className="font-medium">{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link to={`/blog/${post.slug}`} className="group flex gap-4 items-start">
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-lg shrink-0"
        />
        <div className="min-w-0">
          <span className="text-xs text-brand font-medium">{post.category}</span>
          <h4 className="font-display text-base md:text-lg font-medium leading-snug mt-1 group-hover:text-brand transition line-clamp-2">
            {post.title}
          </h4>
          <p className="text-xs text-ink-soft/60 mt-1.5">
            {post.date} · {post.readTime}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-black/5 bg-white hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-16/10 overflow-hidden bg-zinc-100 relative">
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          className="w-full h-full object-contain group- transition-transform duration-500"
        />
       
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs mb-3">
          <span className="px-2.5 py-1 rounded-full bg-brand-50 text-brand font-medium">
            {post.category}
          </span>
          <span className="text-ink-soft/50">{post.readTime}</span>
        </div>
        <h3 className="font-display text-xl font-semibold leading-snug mb-2.5 group-hover:text-brand transition line-clamp-2 tracking-tight">
          {post.title}
        </h3>
        <p className="text-sm text-ink-soft/70 leading-relaxed mb-5 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between text-xs text-ink-soft/60 pt-4 border-t border-black/5">
          <span className="font-medium">{post.author}</span>
          <span className="inline-flex items-center gap-1 group-hover:text-brand transition">
            Read <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
