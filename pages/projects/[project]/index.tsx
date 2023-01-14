import type {NextPage} from 'next'
import {Footer} from "../../../components/common/Footer";
import {HeaderVideo} from "../../../components/common/HeaderVideo";
import {HeaderGreen} from "../../../components/common/HeaderGreen";
import {SectionIssledovanie} from "../../../components/projects/SectionIssledovanie";
import {SectionProforientatsionnyj} from "../../../components/projects/SectionProforientatsionnyj";
import Meta from "../../../services/Meta";
import {pageAPI} from "../../../api/api";

const Project: NextPage = ({data}: any) => {
    return (
        <>
            {data.id_page === 12056
                ? <>
                    <Meta meta={data.metadata}/>
                    <HeaderVideo banner={data.banner.url} content={data.content} video={data.id_video}/>
                    <SectionIssledovanie data={data}/>
                    <Footer/>
                </>
                : <>
                    <Meta meta={data.metadata}/>
                    <HeaderGreen title={data.title}/>
                    <SectionProforientatsionnyj data={data}/>
                    <Footer/>
                </>}
        </>)
}

export default Project

export async function getStaticPaths() {
    const data = await pageAPI.projects()
    const paths = data.projects.map((item: any) => ({
        params: {project: item.slug},
    }))
    return {paths, fallback: false}
}

export async function getStaticProps(context: any) {
    const data =  await pageAPI.project(context.params.project)
    return {
        props: {
            data
        },
        revalidate: 60,
    };
}