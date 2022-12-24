import type { NextPage } from 'next'
import { Footer } from "../components/common/Footer";
import { HeaderGreen } from "../components/common/HeaderGreen";
import { SectionMerch } from "../components/merch/SectionMerch";
import styles from "./../styles/merch/merch.module.css";
import Meta from "../services/Meta";
import { pageAPI } from "../api/api";

const Merch: NextPage = ({ data }: any) => {
    return (
        <>
            <Meta meta={data.metadata} />
            <HeaderGreen title={<div className={styles.contentTitle} dangerouslySetInnerHTML={{ __html: data.title }} />} />
            <SectionMerch data={data} />
            <Footer />
        </>
    )
}

export default Merch

export async function getStaticProps() {
    const data = await pageAPI.merch()
    return {
        props: {
            data
        }
    };
}