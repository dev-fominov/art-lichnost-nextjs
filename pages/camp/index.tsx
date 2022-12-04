import type {NextPage} from 'next'
import {Footer} from "../../components/common/footer";
import {SectionCamp} from "../../components/camp/section-camp";
import Filter from "../../components/camp/filter";
import React from "react";
import {HeaderVideo} from "../../components/common/header-video";
import Meta from "../../services/Meta";

const Camp: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
            <HeaderVideo banner={data.background_img.url}
                         content={data.content}
                         video={data.background_video}/>
            <Filter data={data.filter}/>
            <SectionCamp data={data}/>
            <Footer/>
        </>
    )
}

export default Camp

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/camp`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}