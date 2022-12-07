import type {NextPage} from 'next'
import {Footer} from "../../components/common/Footer";
import FilterCourses from "../../components/courses/FilterCourses";
import {HeaderVideo} from "../../components/common/HeaderVideo";
import {Container} from "../../components/common/Container";
import {SectionCourses} from "../../components/courses/SectionCourses";
import styles from '../../styles/courses/section-courses.module.css';
import Meta from "../../services/Meta";

const Courses: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
            <HeaderVideo banner={data.background_img.url}
                         content={data.content}
                         video={data.background_video}/>
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