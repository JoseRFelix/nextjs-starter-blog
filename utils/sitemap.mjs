import fs from 'fs'
import { globby } from 'globby';
import matter from 'gray-matter';
import { readFile } from 'fs/promises';
const { siteMetadata } = JSON.parse(
  await readFile(
    new URL('../config/seo.json', import.meta.url)
  )
);



;(async () => {
  const pages = await globby([
    'pages/*.js',
    'content/posts/**/*.md',
    '!pages/_*.js',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {

                if (page.search('.md') >= 1 && fs.existsSync(page)) {
                  const source = fs.readFileSync(page, 'utf8')
                  const fm = matter(source)
                  if (fm.data.draft) {
                    return
                  }
                  if (fm.data.canonicalUrl) {
                    return
                  }
                }
                const path = page
                  .replace('pages/', '/')
                  .replace('content/posts', '/posts')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.md', '')
                  .replace('/rss.xml', '')
                const route = path === '/index' ? '' : path

                // remove subfolders from the route
                const routePath = route.split('/').slice(0, 3).join('/')


                if (page.search('pages/404.') > -1 || page.search(`pages/posts/[slug].`) > -1) {
                  return
                }
                return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${routePath}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  fs.writeFileSync('public/sitemap.xml', sitemap)
})()