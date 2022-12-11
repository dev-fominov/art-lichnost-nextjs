import type {NextPage} from 'next'
import {Footer} from "../../components/common/Footer";
import {HeaderVideo} from "../../components/common/HeaderVideo";
import {SectionBlog} from "../../components/blog/SectionBlog";
import Meta from "../../services/Meta";
import {pageAPI} from "../../api/api";

const Blog: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
            <HeaderVideo banner={data.background_img.url} content={data.content} video={data.background_video}/>
            <SectionBlog data={data}/>
            <Footer/>
        </>
    )
}

export default Blog

export async function getStaticProps() {
    const data =  await pageAPI.blogs()
    return {
        props: {
            data
        }
    };
}