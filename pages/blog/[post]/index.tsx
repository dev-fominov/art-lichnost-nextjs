import {HeaderGreen} from "../../../components/common/header-green";
import {Section} from "../../../components/common/section";
import styles from '../../../styles/blog/post.module.css'
import {useRouter} from "next/router";
import {Footer} from "../../../components/common/footer";

const Post = ({data}:any) => {

    return (<div>
            <HeaderGreen title={data.title}/>
            <Section>
                <div>
                    <h3 className={styles.title}>{data.title}</h3>
                     <div className={styles.content} dangerouslySetInnerHTML={{__html: data.content}}/>
                </div>
            </Section>
            <Footer/>
        </div>
    )
}

export default Post

export async function getServerSideProps (context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/blogs/${context.params.post}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}