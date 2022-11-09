import type {NextPage} from 'next'
import {Footer} from "../../components/common/footer";
import {HeaderVideo} from "../../components/common/header-video";
import {SectionBlog} from "../../components/blog/section-blog";

const Blog: NextPage = ({data}: any) => {
    return (
        <>
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