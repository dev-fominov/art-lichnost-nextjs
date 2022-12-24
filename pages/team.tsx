import type { NextPage } from 'next'
import { Footer } from "../components/common/Footter";
import { HeaderVideo } from "../components/common/HeaderVideo";
import SectionTeam from "../components/team/SectionTeam";
import Meta from "../services/Meta";
import { pageAPI } from "../api/api";

const Team: NextPage = ({ data }: any) => {
    return (
        <>
            <Meta meta={data.metadata} />
            <HeaderVideo banner={data.banner.url}
                content={data.content}
                video={data.id_video} />
            <SectionTeam data={data} />
            <Footer />
        </>
    )
}

export default Team

export async function getStaticProps() {
    const data = await pageAPI.team()
    return {
        props: {
            data
        }
    };
}