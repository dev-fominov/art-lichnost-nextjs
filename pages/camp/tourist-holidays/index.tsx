import {Footer} from "../../../components/common/Footer";
import {HeaderVideo} from "../../../components/common/HeaderVideo";
import {SectionProfessions} from "../../../components/professions/SectionProfessions";
import Meta from "../../../services/Meta";
import {pageAPI} from "../../../api/api";

const TouristHolidays = ({data}: any) => {
    return (
        <>
            <Meta meta={data.metadata}/>
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
    const data =  await pageAPI.touristHolidays()
    return {
        props: {
            data
        }
    };
}

