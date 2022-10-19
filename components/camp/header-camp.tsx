import React from "react";
import {Navbar} from "../main/navbar";
import {Header} from "../common/header";
import {InfoHead} from "../main/info-head";


export const HeaderCamp = ({banner, content, video}: any) => {
<<<<<<< HEAD
    // console.log(video)
=======

    const VIDEO_WIDTH = 1920;
    const VIDEO_HEIGHT = 1080;

>>>>>>> mainPage
    return video
        ? <div className="video-background">
            <iframe
                width={VIDEO_WIDTH}
                height={VIDEO_HEIGHT}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                src={`https://www.youtube.com/embed/${video}?autoplay=1&controls=0&rel=0&showinfo=0&mute=1&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fart-lichnost.vercel.app&widgetid=1`}
            ></iframe>
            <Navbar/>
            <InfoHead content={content}/>
        </div>
        : <Header banner={banner}>
            <Navbar/>
            <InfoHead content={content}/>
        </Header>
}