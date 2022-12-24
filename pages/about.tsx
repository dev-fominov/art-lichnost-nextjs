import type { NextPage } from 'next'
import { Footer } from "../components/common/Footter";
import { HeaderVideo } from "../components/common/HeaderVideo";
import SectionAbout from "../components/about/SectionAbout";
import Meta from "../services/Meta";
import { pageAPI } from "../api/api";

const About: NextPage = ({ data }: any) => {
    return (
        <>
            <Meta meta={data.metadata} />
            <HeaderVideo banner={data.banner.url}
                content={data.content}
                video={data.id_video} />
            <SectionAbout data={data} />
            <Footer />
        </>
    )
}

export default About

export async function getStaticProps() {
    const data = await pageAPI.about()
    return {
        props: {
            data
        }
    };
}