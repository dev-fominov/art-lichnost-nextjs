import type { NextPage } from 'next'
import { Footer } from "../../components/common/Footer";
import { SectionCamp } from "../../components/camp/SectionCamp";
import Filter from "../../components/camp/Filter";
import { HeaderVideo } from "../../components/common/HeaderVideo";
import Meta from "../../services/Meta";
import { pageAPI } from "../../api/api";

const Camp: NextPage = ({ data }: any) => {
    return (
        <>
            <Meta meta={data.metadata} />
            <HeaderVideo banner={data.background_img.url}
                content={data.content}
                video={data.background_video} />
            <Filter data={data.filter} />
            <SectionCamp data={data} />
            <Footer />
        </>
    )
}

export default Camp

export async function getStaticProps() {
    const data = await pageAPI.camp()
    return {
        props: {
            data
        }
    };
}