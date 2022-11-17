import type {NextPage} from 'next'
import {Footer} from "../components/common/footer";
import {HeaderVideo} from "../components/common/header-video";
import SectionAbout from "../components/about/section-about";
import Head from "next/head";

const About: NextPage = ({data}: any) => {
    return (
        <>
            <Head>
                <title>
                    О нас - Центр развития детей и выбора профессии АртЛичность
                </title>
            </Head>
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