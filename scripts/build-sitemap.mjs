#!/usr/bin/env node
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const siteUrl = 'https://thedavidweng.github.io/site'
const today = new Date().toISOString().slice(0, 10)

const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/canvas-cli/', changefreq: 'monthly', priority: '0.8' },
  { path: '/zenodo-cli/', changefreq: 'monthly', priority: '0.8' },
  { path: '/monarchmoney-cli/', changefreq: 'monthly', priority: '0.8' },
  { path: '/flickr-cli/', changefreq: 'monthly', priority: '0.8' },
  { path: '/money/', changefreq: 'monthly', priority: '0.8' },
]

const urls = pages
  .map(
    (p) => `  <url>
    <loc>${siteUrl}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const outPath = join(import.meta.dirname, '..', 'public', 'sitemap.xml')
writeFileSync(outPath, xml)
console.log(`Generated sitemap.xml with ${pages.length} URLs`)
