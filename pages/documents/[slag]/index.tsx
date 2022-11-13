import {HeaderGreen} from "../../../components/common/header-green";
import {Section} from "../../../components/common/section";
import styles from '../../../styles/documents/documents.module.css'
import {Footer} from "../../../components/common/footer";
import {NextPage} from "next";
import Head from "next/head";
import React from "react";

const Slag: NextPage = ({data}:any) => {

    return (
        <>
            <Head>
                <title>
                    {data.title + '- Центр развития детей и выбора профессии АртЛичность'}
                </title>
            </Head>
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

export default Slag

export async function getServerSideProps (context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/${context.params.slag}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}