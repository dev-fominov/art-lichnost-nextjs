import type {NextPage} from 'next'
import {Footer} from "../../components/common/Footer";
import {HeaderVideo} from "../../components/common/HeaderVideo";
import {SectionVacancies} from "../../components/vacancies/SectionVacancies";
import Meta from "../../services/Meta";

const Vacancies: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
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