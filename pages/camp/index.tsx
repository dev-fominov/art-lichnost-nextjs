import type {NextPage} from 'next'
import {HeaderCamp} from "../../components/camp/header-camp";
import {Footer} from "../../components/common/footer";
import {SectionCamp} from "../../components/camp/section-camp";
import Filter from "../../components/camp/filter";
import React from "react";

// <<<<<<< HEAD
// const Index: NextPage = () => {
//   return (
//     <div>CAMP</div>
//   )
// =======
const Camp: NextPage = ({data}: any) => {
    return (
        <>
            <HeaderCamp banner={data.background_img.url} content={data.content} video={data.background_video}/>
            <Filter data={data.filter}/>
            <SectionCamp data={data}/>
            <Footer/>
        </>
    )
// >>>>>>> mainPage
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