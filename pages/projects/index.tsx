import type {NextPage} from 'next'
import {Footer} from "../../components/common/footer";
import {HeaderVideo} from "../../components/common/header-video";
import {Section} from "../../components/common/section";
import styles from '../../styles/projects/projects.module.css'
import {A} from "../../components/common/A";
import Meta from "../../services/Meta";

const Projects: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
            <HeaderVideo banner={data.banner.url}
                         content={data.content}
                         video={data.id_video}/>
            <Section>
                <div className={styles.contentProjects}>
                    {data.projects.map((item: any, index: any) => <div key={index} className={styles.itemProject}>
                        <div className={styles.left}>
                            <div className={styles.comment}>{item.type_project}</div>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.leftBox}>{item.description}</div>
                            <A className={styles.link}
                               href={
                                   {
                                       pathname: '/projects/[project]',
                                       query: {project: item.slug,},
                                   }}
                               text={'Узнать больше'}/>
                        </div>
                        <div className={styles.right}>
                            <img src={item.img.url} alt={item.img.alt}/>
                        </div>
                    </div>)}
                </div>
            </Section>
            <Footer/>
        </>
    )
}

export default Projects

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/projects`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}