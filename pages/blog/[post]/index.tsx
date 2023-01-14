import {HeaderGreen} from "../../../components/common/HeaderGreen";
import {Section} from "../../../components/common/Section";
import styles from '../../../styles/blog/post.module.css'
import {Footer} from "../../../components/common/Footer";
import {NextPage} from "next";
import Meta from "../../../services/Meta";
import {pageAPI} from "../../../api/api";

const Post: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={data.metadata}/>
            <HeaderGreen title={data.title}/>
            <Section>
                <div>
                    <h3 className={styles.title}>{data.title}</h3>
                    <div className={styles.content} dangerouslySetInnerHTML={{__html: data.content}}/>
                </div>
            </Section>
            <Footer/>
        </>
    )
}

export default Post

export async function getStaticPaths() {
    const data =  await pageAPI.blogs()
    const paths = data.posts.map((item: any) => ({
        params: { post: item.slug },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps(context: any) {
    const data =  await pageAPI.post(context.params.post)
    return {
        props: {
            data
        },
        revalidate: 60,
    };
}