import { posts, BASE_URL } from '../src/data/posts.js'
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const today = new Date().toISOString().split('T')[0]

const urls = [
  { loc: `${BASE_URL}/`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
  ...posts.map((p) => ({
    loc: `${BASE_URL}/blog/${p.slug}`,
    lastmod: p.dateISO || today,
    changefreq: 'monthly',
    priority: '0.8',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml, 'utf8')
console.log(`✓ sitemap.xml generated with ${urls.length} URLs`)
