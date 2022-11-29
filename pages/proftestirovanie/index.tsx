import type {NextPage} from 'next'
import {Footer} from "../../components/common/footer";
import React from "react";
import {Navbar} from "../../components/main/navbar";
import {InfoHead} from "../../components/main/info-head";
import {Header} from "../../components/common/header";
import {BigLinksProf} from "../../components/proftestirovanie/big-links-prof";
import SectionProftestirovanie from "../../components/proftestirovanie/section-proftestirovanie";
import Head from "next/head";

const Proftestirovanie: NextPage = ({data}: any) => {

    const VIDEO_WIDTH = 1920;
    const VIDEO_HEIGHT = 1080;

    return (
        <>
            <Head>
                <title>
                    Профтестирование - Центр развития детей и выбора профессии АртЛичность
                </title>
            </Head>
            {data.id_video
                ? <div className="video-background">
                    <iframe
                        width={VIDEO_WIDTH}
                        height={VIDEO_HEIGHT}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        src={`https://www.youtube.com/embed/${data.id_video}?autoplay=1&controls=0&rel=0&showinfo=0&mute=1&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fart-lichnost.vercel.app&widgetid=1`}
                    />
                    <Navbar/>
                    <BigLinksProf/>
                    <InfoHead content={data.content}/>
                </div>
                : <Header banner={data.banner.url}>
                    <Navbar/>
                    <BigLinksProf/>
                    <InfoHead content={data.content}/>
                </Header>}
            <SectionProftestirovanie data={data}/>
            <Footer/>
        </>
    )
}

export default Proftestirovanie

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/proftestirovanie`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}