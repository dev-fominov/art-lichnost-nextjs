import type {NextPage} from 'next'
import {Footer} from "../../components/common/footer";
import FilterCourses from "../../components/courses/filter-courses";
import {HeaderVideo} from "../../components/common/header-video";
import {Container} from "../../components/common/container";
import {SectionCourses} from "../../components/courses/section-courses";
import styles from '../../styles/courses/section-courses.module.css';

const Courses: NextPage = ({data}: any) => {
    return (
        <>
            <HeaderVideo banner={data.background_img.url} content={data.content} video={data.background_video}/>
            <Container>
                <div className={styles.boxDescription}>
                    <div className={styles.description}>{data.description}</div>
                </div>
            </Container>
            <FilterCourses data={data.filter}/>
            <SectionCourses data={data}/>
            <Footer/>
        </>
    )
}

export default Courses

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/courses`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}