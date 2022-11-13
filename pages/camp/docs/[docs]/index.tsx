import {HeaderGreen} from "../../../../components/common/header-green";
import {Section} from "../../../../components/common/section";
import {Footer} from "../../../../components/common/footer";
import Docs from "../../../../components/camp/docs";
import styles from "../../../../styles/camp/docs.module.css";
import Head from "next/head";
import React from "react";

const DocsPage = ({data}: any) => {

    return (
        <>
            <Head>
                <title>
                    {data.title + '- Центр развития детей и выбора профессии АртЛичность'}
                </title>
            </Head>
            <HeaderGreen title={data.title}/>
            <Section>
                <div className={styles.docs}>
                    <h3 className={styles.titleInner}>{data.subtitle_docs}</h3>
                    <div className={styles.medicalBlock} dangerouslySetInnerHTML={{__html: data.content}}/>
                </div>
                <Docs title={'Посмотреть другое'}
                      data={data.docs}/>
            </Section>
            <Footer/>
        </>
    )
}

export default DocsPage

export async function getServerSideProps(context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/docs/${context.params.docs}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}
