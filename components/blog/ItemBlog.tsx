import styles from "../../styles/blog/item-blog.module.css";
import Link from "next/link";

export const ItemBlog = ({item}: any) => {
    return (
        <div className={styles.boxItemBlogs}>
            <div className={styles.boxItemBlogsColumn}>
                <div className={styles.imgBox}
                     style={{
                         background: `url(${item.get_the_post_thumbnail_url}) no-repeat center center`,
                         backgroundSize: `cover`
                     }}/>
                <div className={styles.info}>
                    <div className={styles.title}>
                        {item.title}
                    </div>
                    <div className={styles.excerpt}>
                        {item.the_excerpt}
                    </div>
                    <Link href={
                        {
                            pathname: '/blog/[post]',
                            query: {post: item.slug,},
                        }
                    }>
                        <a className={styles.more}>
                            Узнать больше
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}