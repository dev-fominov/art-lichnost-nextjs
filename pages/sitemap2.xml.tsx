import { GetServerSideProps } from "next"
import * as fs from 'fs'
import { baseURLSite } from "../api/api"

const Sitemap2 = () => {
	return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

	const staticPaths = [
		'https://art-lichnost.ru/about',
		'https://art-lichnost.ru/blog',
		'https://art-lichnost.ru/camp',
		'https://art-lichnost.ru/contacts',
		'https://art-lichnost.ru/contract',
		'https://art-lichnost.ru/courses',
		'https://art-lichnost.ru/documents',
		'https://art-lichnost.ru',
		'https://art-lichnost.ru/merch',
		'https://art-lichnost.ru/proftestirovanie',
		'https://art-lichnost.ru/projects',
		'https://art-lichnost.ru/psychologist',
		'https://art-lichnost.ru/team',
		'https://art-lichnost.ru/vacancies',
	]

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

// const staticPaths = fs
// 	.readdirSync("pages")
// 	.filter(staticPage => {
// 		return ![
// 			"api",
// 			"_app.tsx",
// 			"404.tsx",
// 			"sitemap.xml.tsx",
// 			"sitemap1.xml.tsx",
// 			"sitemap2.xml.tsx",
// 			"sitemap3.xml.tsx",
// 		].includes(staticPage)
// 	})
// 	.map(staticPagePath => {
// 		return `${baseURLSite}/${staticPagePath.split('.')[0]}`
// 	})

export default Sitemap2