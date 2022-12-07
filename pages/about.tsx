import type {NextPage} from 'next'
import {Footer} from "../components/common/Footer";
import {HeaderVideo} from "../components/common/HeaderVideo";
import SectionAbout from "../components/about/SectionAbout";
import Meta from "../services/Meta";

const About: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
            <HeaderVideo banner={data.banner.url}
                         content={data.content}
                         video={data.id_video}/>
            <SectionAbout data={data}/>
            <Footer/>
        </>
    )
}

export default About

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/about`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}