import type { NextPage } from 'next'
import { Footer } from "../components/common/Footter";
import { SectionPsychologist } from "../components/psychologist/SectionPsychologist";
import { HeaderVideo } from "../components/common/HeaderVideo";
import Meta from "../services/Meta";
import { pageAPI } from "../api/api";

const Psychologist: NextPage = ({ data }: any) => {
    return (
        <>
            <Meta meta={data.metadata} />
            <HeaderVideo banner={data.banner.url}
                content={data.content}
                video={data.id_video} />
            <SectionPsychologist data={data} />
            <Footer />
        </>
    )
}

export default Psychologist

export async function getStaticProps() {
    const data = await pageAPI.psychologist()
    return {
        props: {
            data
        }
    };
}