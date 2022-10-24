import type {NextPage} from 'next'
import {Footer} from "../../components/common/footer";
import {HeaderVideo} from "../../components/common/header-video";
import {SectionProfessions} from "../../components/professions/section-professions";

const TouristHolidays: NextPage = ({data}: any) => {
    return (
        <>
            <HeaderVideo banner={data.background_img.url}
                         content={data.content}
                         video={data.background_video}/>
            <SectionProfessions data={data}/>
            <Footer/>
        </>
    )
}

export default TouristHolidays

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/tourist-holidays`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}