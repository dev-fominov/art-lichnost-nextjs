import { HeaderGreen } from "../../../components/common/HeaderGreen";
import { Footer } from "../../../components/common/Footter";
import { NextPage } from "next";
import { SectionCourse } from "../../../components/course/SectionCourse";
import Meta from "../../../services/Meta";
import { pageAPI } from "../../../api/api";

const Course: NextPage = ({ data }: any) => {
    return (
        <>
            <Meta meta={data.metadata} />
            <HeaderGreen title={data.title} />
            <SectionCourse data={data} />
            <Footer />
        </>
    )
}

export default Course

export async function getStaticPaths() {
    const data = await pageAPI.courses()
    const pathsArr = data.launch_group.map((item: any) => (
        item.camp_card.map((el: any) => ({
            params: { course: el.post_slug },
        }))
    ))
    const paths = pathsArr.flat()
    return { paths, fallback: false }
}

export async function getStaticProps(context: any) {
    const data = await pageAPI.course(context.params.course)
    return {
        props: {
            data
        }
    };
}