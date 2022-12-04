import {HeaderGreen} from "../../../components/common/header-green";
import {Section} from "../../../components/common/section";
import styles from '../../../styles/documents/documents.module.css'
import {Footer} from "../../../components/common/footer";
import {NextPage} from "next";
import React from "react";
import Meta from "../../../services/Meta";

const Slug: NextPage = ({data}: any) => {

    return (
        <>
            <Meta meta={{}}/>
            <HeaderGreen title={data.title}/>
            <Section>
                <div>
                    <h1 className={styles.title}>{data.title}</h1>
                    <div className={styles.content} dangerouslySetInnerHTML={{__html: data.content}}/>
                </div>
            </Section>
            <Footer/>
        </>
    )
}

export default Slug

export async function getServerSideProps(context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/${context.params.slug}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}