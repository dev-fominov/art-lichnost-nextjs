import { GetServerSideProps } from "next"

const Sitemap = () => {
	return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
	<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<sitemap>
			<loc>https://art-lichnost.ru/sitemap1.xml</loc>
		</sitemap>
		<sitemap>
			<loc>https://art-lichnost.ru/sitemap2.xml</loc>
		</sitemap>
		<sitemap>
			<loc>https://art-lichnost.ru/sitemap3.xml</loc>
		</sitemap>
	</sitemapindex>
`
	res.setHeader('Content-Type', 'text/xml')
	res.write(sitemap)
	res.end()

	return {
		props: {}
	}
}

export default Sitemap