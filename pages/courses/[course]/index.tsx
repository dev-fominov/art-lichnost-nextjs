import {HeaderGreen} from "../../../components/common/HeaderGreen";
import {Footer} from "../../../components/common/Footer";
import {NextPage} from "next";
import {SectionCourse} from "../../../components/course/SectionCourse";
import Meta from "../../../services/Meta";
import {pageAPI} from "../../../api/api";

const Course: NextPage = ({data}: any) => {

    return (
        <>
            <Meta meta={{}}/>
            <HeaderGreen title={data.title}/>
            <SectionCourse data={data}/>
            <Footer/>
        </>
    )
}

export default Course

export async function getServerSideProps(context: any) {
    const data =  await pageAPI.course(context.params.course)
    return {
        props: {
            data
        }
    };
}