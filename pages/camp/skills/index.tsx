import {Footer} from "../../../components/common/footer";
import {HeaderVideo} from "../../../components/common/header-video";
import {SectionProfessions} from "../../../components/professions/section-professions";
import Head from "next/head";

const Skills = ({data}: any) => {
    return (
        <>
            <Head>
                <title>
                   Лагерь навыков - Центр развития детей и выбора профессии АртЛичность
                </title>
            </Head>
            <HeaderVideo banner={data.background_img.url}
                         content={data.content}
                         video={data.background_video}/>
            <SectionProfessions data={data}/>
            <Footer/>
        </>
    )
}

export default Skills

export async function getStaticProps () {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/skills`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}

