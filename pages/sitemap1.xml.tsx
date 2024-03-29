import { GetServerSideProps } from "next"

const Sitemap1 = () => {
	return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const otherPaths = [
		'https://art-lichnost.ru'
	]

	const allPaths = [...otherPaths]
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

export default Sitemap1