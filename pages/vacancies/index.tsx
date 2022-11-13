import type {NextPage} from 'next'
import {Footer} from "../../components/common/footer";
import {HeaderVideo} from "../../components/common/header-video";
import {SectionVacancies} from "../../components/vacancies/section-vacancies";
import Head from "next/head";

const Vacancies: NextPage = ({data}: any) => {
    return (
        <>
            <Head>
                <title>
                    Вакансии - Центр развития детей и выбора профессии АртЛичность
                </title>
            </Head>
            <HeaderVideo banner={data.banner.url}
                         content={data.content}
                         video={data.id_video}/>
            <SectionVacancies data={data}/>
            <Footer/>
        </>
    )
}

export default Vacancies

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/vacancies`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}