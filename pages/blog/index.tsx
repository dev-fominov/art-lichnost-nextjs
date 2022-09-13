import type {NextPage} from 'next'
import {Footer} from "../../components/common/footer";
import {HeaderBlog} from "../../components/blog/header-blog";
import {SectionBlog} from "../../components/blog/section-blog";

const Blog: NextPage = ({data}:any) => {
    return (
        <>
            <HeaderBlog banner={'https://art-lichnost.ru/wp-content/uploads/2022/03/rectangle-1-1.jpg'} content={'regrgeg'}/>
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