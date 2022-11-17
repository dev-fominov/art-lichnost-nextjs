import type {NextPage} from 'next'
import {Footer} from "../components/common/footer";
import {SectionPsychologist} from "../components/psychologist/section-psychologist";
import {HeaderVideo} from "../components/common/header-video";
import Head from "next/head";

const Psychologist: NextPage = ({data}: any) => {
    return (
        <>
            <Head>
                <title>
                    Психолог - Центр развития детей и выбора профессии АртЛичность
                </title>
            </Head>
            <HeaderVideo banner={data.banner.url}
                         content={data.content}
                         video={data.id_video}/>
            <SectionPsychologist data={data}/>
            <Footer/>
        </>
    )
}

export default Psychologist

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/psychologist`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}