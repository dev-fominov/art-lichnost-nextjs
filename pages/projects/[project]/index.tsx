import type {NextPage} from 'next'
import {Footer} from "../../../components/common/footer";
import {HeaderVideo} from "../../../components/common/header-video";
import React from "react";
import {HeaderGreen} from "../../../components/common/header-green";
import {SectionIssledovanie} from "../../../components/projects/section-issledovanie";
import {SectionProforientatsionnyj} from "../../../components/projects/section-proforientatsionnyj";
import Head from "next/head";

const Project: NextPage = ({data}: any) => {
    return (
        <>
            {data.id_page === 12056
                ? <>
                    <Head>
                        <title>
                            Ценности современных подростков ожидание работадателей
                        </title>
                    </Head>
                    <HeaderVideo banner={data.banner.url} content={data.content} video={data.id_video}/>
                    <SectionIssledovanie data={data}/>
                    <Footer/>
                </>
                : <>
                    <Head>
                        <title>
                            {data.title + '- Центр развития детей и выбора профессии АртЛичность'}
                        </title>
                    </Head>
                    <HeaderGreen title={data.title}/>
                    <SectionProforientatsionnyj data={data}/>
                    <Footer/>
                </>}
        </>)
}

export default Project

export async function getServerSideProps(context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/projects/${context.params.project}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}