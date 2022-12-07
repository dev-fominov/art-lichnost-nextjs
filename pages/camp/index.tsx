import type {NextPage} from 'next'
import {Footer} from "../../components/common/Footer";
import {SectionCamp} from "../../components/camp/SectionCamp";
import Filter from "../../components/camp/Filter";
import {HeaderVideo} from "../../components/common/HeaderVideo";
import Meta from "../../services/Meta";

const Camp: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
            <HeaderVideo banner={data.background_img.url}
                         content={data.content}
                         video={data.background_video}/>
            <Filter data={data.filter}/>
            <SectionCamp data={data}/>
            <Footer/>
        </>
    )
}

export default Camp

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/camp`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}