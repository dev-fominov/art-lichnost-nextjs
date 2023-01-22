import { GetServerSideProps } from "next"
import * as fs from 'fs'
import { baseURLSite } from "../api/api"

const Sitemap2 = () => {
	return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

	const allPaths = [...staticPaths]
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPaths.map(url => (
		`<url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>`
	)).join("")}
  </urlset>
`
	res.setHeader('Content-Type', 'text/xml')
	res.write(sitemap)
	res.end()

	return {
		props: {}
	}
}

const staticPaths = fs
	.readdirSync("pages")
	.filter(staticPage => {
		return ![
			"api",
			"_app.tsx",
			"404.tsx",
			"_document.js",
			"sitemap.xml.tsx",
			"sitemap1.xml.tsx",
			"sitemap2.xml.tsx",
			"sitemap3.xml.tsx",
		].includes(staticPage)
	})
	.map(staticPagePath => {
		return `${baseURLSite}/${staticPagePath.split('.')[0]}`
	})

export default Sitemap2