import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Read posts.js as text instead of importing it.
// posts.js imports image assets (.png) which Node cannot resolve at the module level —
// only Vite's bundler understands those. We just need slug + dateISO + BASE_URL,
// so a tiny regex parse is robust and side-effect free.
const postsPath = resolve(__dirname, '../src/data/posts.js')
const src = readFileSync(postsPath, 'utf8')

const baseUrlMatch = src.match(/BASE_URL\s*=\s*["']([^"']+)["']/)
const BASE_URL = baseUrlMatch ? baseUrlMatch[1] : 'https://blogs.techcareer.site'

const slugs = [...src.matchAll(/^\s*slug:\s*["']([^"']+)["']/gm)].map((m) => m[1])
const dates = [...src.matchAll(/^\s*dateISO:\s*["']([^"']+)["']/gm)].map((m) => m[1])

const today = new Date().toISOString().split('T')[0]

const urls = [
  { loc: `${BASE_URL}/`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
  ...slugs.map((slug, i) => ({
    loc: `${BASE_URL}/blog/${slug}`,
    lastmod: dates[i] || today,
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
