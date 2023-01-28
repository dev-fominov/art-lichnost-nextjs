import { HeaderGreen } from "../components/common/HeaderGreen";
import { Footer } from "../components/common/Footer";
import Page404 from "../components/common/Page404";
import { NextPage } from "next";
import { pageAPI } from "../api/api";

const Custom404: NextPage = ({ data }: any) => {
	return (
		<>
			<HeaderGreen title={'404. СТРАНИЦА НЕ НАЙДЕНА'} />
			<Page404 data={data} />
			<Footer />
		</>
	)
}

export default Custom404

export async function getStaticProps() {
	const data = await pageAPI.camp()
	return {
		props: {
			data
		},
		revalidate: 3600,
	};
}