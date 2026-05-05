// Inject id="..." into <h2> tags and return the heading list for TOC.
export function processContent(html) {
  if (!html) return { html: '', headings: [] }
  let i = 0
  const headings = []
  const processed = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/g,
    (match, attrs, inner) => {
      if (/\sid=/.test(attrs)) {
        const idMatch = attrs.match(/id="([^"]+)"/)
        if (idMatch) headings.push({ id: idMatch[1], text: stripTags(inner) })
        return match
      }
      const id = `h-${i++}`
      headings.push({ id, text: stripTags(inner) })
      return `<h2 id="${id}"${attrs}>${inner}</h2>`
    }
  )
  return { html: processed, headings }
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, '').trim()
}
