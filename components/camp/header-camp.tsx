import React from "react";
import {Navbar} from "../main/navbar";
import {Header} from "../common/header";
import {InfoHead} from "../main/info-head";


export const HeaderCamp = ({banner, content, video}: any) => {

    const VIDEO_WIDTH = 1920;
    const VIDEO_HEIGHT = 1080;

    return video
        ? <div className="video-background">
            <iframe
                width={VIDEO_WIDTH}
                height={VIDEO_HEIGHT}
                src={`https://www.youtube.com/embed/${video}?autoplay=1&controls=0&rel=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
            <Navbar/>
            <InfoHead content={content}/>
        </div>
        : <Header banner={banner}>
            <Navbar/>
            <InfoHead content={content}/>
        </Header>
}