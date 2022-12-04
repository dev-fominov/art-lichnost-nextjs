import {HeaderGreen} from "../../../components/common/header-green";
import {Footer} from "../../../components/common/footer";
import {NextPage} from "next";
import {SectionCourse} from "../../../components/course/section-course";
import Meta from "../../../services/Meta";

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
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/courses/${context.params.course}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}