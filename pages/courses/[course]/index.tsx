import {HeaderGreen} from "../../../components/common/header-green";
import {Footer} from "../../../components/common/footer";
import {NextPage} from "next";
import {SectionCourse} from "../../../components/course/section-course";

const Course: NextPage = ({data}: any) => {

    return (<>
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