import type {NextPage} from 'next'
import {Footer} from "../components/common/footer";
import {HeaderVideo} from "../components/common/header-video";
import SectionTeam from "../components/team/section-team";
import Head from "next/head";

const Team: NextPage = ({data}: any) => {
    return (
        <>
            <Head>
                <title>
                    Команда - Центр развития детей и выбора профессии АртЛичность
                </title>
            </Head>
            <HeaderVideo banner={data.banner.url}
                         content={data.content}
                         video={data.id_video}/>
            <SectionTeam data={data}/>
            <Footer/>
        </>
    )
}

export default Team

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/team`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}