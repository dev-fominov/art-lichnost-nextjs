import { GetServerSideProps } from "next"
import * as fs from 'fs'
import { baseURLSite, pageAPI } from "../api/api";

const Sitemap = () => {
	return null
}
export default Sitemap

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const otherPaths = [
		'https://art-lichnost.ru/camp/skills',
		'https://art-lichnost.ru/camp/art-community',
		'https://art-lichnost.ru/camp/professions',
		'https://art-lichnost.ru/proftestirovanie/online-test',
		'https://art-lichnost.ru/proftestirovanie/offline-test',
	]
	const dynamicPaths = await getAllProducts()
	const allPaths = [...staticPaths, ...otherPaths, ...dynamicPaths]
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
			"sitemap.xml.tsx",
		].includes(staticPage)
	})
	.map(staticPagePath => {
		return `${baseURLSite}/${staticPagePath.split('.')[0]}`
	})


async function getAllProducts() {
	const data = await pageAPI.blogs()
	const pathsBlogs = await data.posts.map((item: any) => `${baseURLSite}/blogs/${item.slug}`)

	const dataDocs = await pageAPI.camp()
	const pathsDocs = await dataDocs.docs.map((item: any) => `${baseURLSite}/camp/docs/${item.slug}`)

	const dataProfessions = await pageAPI.professions()
	const pathsProfessions = await dataProfessions.past_shifts.map((item: any) => `${baseURLSite}/professions/${item.slug}`)

	const dataSkills = await pageAPI.skills()
	const pathsSkills = await dataSkills.past_shifts.map((item: any) => `${baseURLSite}/skills/${item.slug}`)

	const dataArtCommunity = await pageAPI.artCommunity()
	const pathsArtCommunity = await dataArtCommunity.past_shifts.map((item: any) => `${baseURLSite}/art-community/${item.slug}`)

	const dataCourses = await pageAPI.courses()
	const pathsArrCourses = await dataCourses.launch_group.map((item: any) => {
		return item.camp_card.map((el: any) => `${baseURLSite}/courses/${el.post_slug}`)
	})
	const pathsCourses = await pathsArrCourses.flat()

	const dataProjects = await pageAPI.projects()
	const pathsProjects = dataProjects.projects.map((item: any) => `${baseURLSite}/projects/${item.slug}`)

	const dataVacancies = await pageAPI.vacancies()
	const pathsVacancies = dataVacancies.vacancies.map((item: any) => `${baseURLSite}/vacancies/${item.slug}`)

	return [
		...pathsBlogs,
		...pathsDocs,
		...pathsProfessions,
		...pathsSkills,
		...pathsArtCommunity,
		...pathsCourses,
		...pathsProjects,
		...pathsVacancies
	]
}