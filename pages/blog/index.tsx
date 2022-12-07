import type {NextPage} from 'next'
import {Footer} from "../../components/common/Footer";
import {HeaderVideo} from "../../components/common/HeaderVideo";
import {SectionBlog} from "../../components/blog/SectionBlog";
import Meta from "../../services/Meta";

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
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/blogs`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}