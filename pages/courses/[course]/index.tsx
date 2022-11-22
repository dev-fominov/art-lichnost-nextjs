import {HeaderGreen} from "../../../components/common/header-green";
import {Footer} from "../../../components/common/footer";
import {NextPage} from "next";
import {SectionCourse} from "../../../components/course/section-course";
import Head from "next/head";
import React from "react";

const Course: NextPage = ({data}: any) => {

    return (
        <>
            <Head>
                <title>
                    {data.title + '- Центр развития детей и выбора профессии АртЛичность'}
                </title>
            </Head>
            <HeaderGreen title={data.title}/>
            <SectionCourse data={data}/>
            <Footer/>
        </>
    )
}

export default Course

export async function getServerSideProps(context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/courses/${context.params.course}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}