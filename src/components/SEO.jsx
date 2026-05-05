import {
  BASE_URL,
  SITE_NAME,
  COMPANY,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
} from '../data/posts'

/**
 * React 19 native document metadata.
 * Renders <title>, <meta>, <link rel="canonical">, <script type="application/ld+json">
 * Search engines and social crawlers pick these up.
 */
export default function SEO({
  title,
  description,
  path = '/',
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Web Development & Digital Marketing Insights`
  const url = `${BASE_URL}${path}`
  const allKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])].join(', ')

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author || COMPANY} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && type === 'article' && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  )
}
