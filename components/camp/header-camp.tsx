import React from "react";
import {Navbar} from "../main/navbar";
import {Header} from "../common/header";
import {InfoHead} from "../main/info-head";
import dynamic from 'next/dynamic';
import styles from "../../styles/common/header.module.css";
// @ts-ignore
const YoutubeBackground = dynamic(() => import('react-youtube-background'), {
    ssr: false,
})

export const HeaderCamp = ({banner, content, video}: any) => {
    // console.log(video)
    return video
        // @ts-ignore
        ? <YoutubeBackground videoId={video} className={styles.header}>
            <Navbar/>
            <InfoHead content={content}/>
        </YoutubeBackground>
        : <Header banner={banner}>
            <Navbar/>
            <InfoHead content={content}/>
        </Header>

}