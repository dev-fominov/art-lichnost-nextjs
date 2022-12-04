import type {NextPage} from 'next'
import {Footer} from "../components/common/footer";
import {HeaderGreen} from "../components/common/header-green";
import {SectionMerch} from "../components/merch/section-merch";
import styles from "./../styles/merch/merch.module.css";
import Meta from "../services/Meta";

const Merch: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{title: ' Мерч - Центр развития детей и выбора профессии АртЛичность'}}/>
            <HeaderGreen title={<div className={styles.contentTitle} dangerouslySetInnerHTML={{__html: data.title}}/>}/>
            <SectionMerch data={data}/>
            <Footer/>
        </>
    )
}

export default Merch

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/merch`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}