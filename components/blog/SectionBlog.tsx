import {Section} from "../common/Section";
import styles from '../../styles/blog/section-blog.module.css'
import {ItemBlog} from "./ItemBlog";

export const SectionBlog = ({data}: any) => {
    return (
        <Section>
            <div className={styles.contentBlogs}>
                {data.posts.map((item: any) => <ItemBlog key={item.id} item={item}/>)}
            </div>
        </Section>
    )
}

