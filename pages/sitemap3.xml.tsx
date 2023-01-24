import { GetServerSideProps } from "next"
import { baseURLSite, pageAPI } from "../api/api"

const Sitemap3 = () => {
	return null
}


export const getServerSideProps: GetServerSideProps = async ({ res }) => {

	const dynamicPaths = await getAllProducts()
	const allPaths = [...dynamicPaths]
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

async function getAllProducts() {
	const data = await pageAPI.blogs()
	const pathsBlogs = await data.posts.map((item: any) => `${baseURLSite}/blogs/${item.slug}`)

	const dataDocs = await pageAPI.camp()
	const pathsDocs = await dataDocs.docs.map((item: any) => `${baseURLSite}/camp/docs/${item.slug}`)

	const dataProfessions = await pageAPI.professions()
	const pathsProfessions = await dataProfessions.past_shifts.map((item: any) => `${baseURLSite}/camp/smena/${item.slug}`)

	const dataProfessionsPage = await pageAPI.professions()
	const pathsProfessionsPage = await dataProfessionsPage.shift_selection.map((item: any) => `${baseURLSite}/camp/professions?slug=${item.slug}`)

	const dataSkills = await pageAPI.skills()
	const pathsSkills = await dataSkills.past_shifts.map((item: any) => `${baseURLSite}/camp/smena/${item.slug}`)

	const dataSkillsPage = await pageAPI.skills()
	const pathsSkillsPage = await dataSkillsPage.shift_selection.map((item: any) => `${baseURLSite}/camp/skills?slug=${item.slug}`)

	const dataArtCommunity = await pageAPI.artCommunity()
	const pathsArtCommunity = await dataArtCommunity.past_shifts.map((item: any) => `${baseURLSite}/camp/smena/${item.slug}`)

	const dataArtCommunityPage = await pageAPI.artCommunity()
	const pathsArtCommunityPage = await dataArtCommunityPage.shift_selection.map((item: any) => `${baseURLSite}/camp/art-community?slug=${item.slug}`)

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
		...pathsProfessionsPage,
		...pathsSkills,
		...pathsSkillsPage,
		...pathsArtCommunity,
		...pathsArtCommunityPage,
		...pathsCourses,
		...pathsProjects,
		...pathsVacancies
	]
}

export default Sitemap3