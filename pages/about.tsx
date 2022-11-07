import type {NextPage} from 'next'
import {Footer} from "../components/common/footer";
import {HeaderVideo} from "../components/common/header-video";
import SectionAbout from "../components/about/section-about";

const About: NextPage = ({data}: any) => {
    return (
        <>
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