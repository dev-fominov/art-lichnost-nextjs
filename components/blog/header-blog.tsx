import React from "react";
import {Navbar} from "../main/navbar";
import {Header} from "../common/header";
import {InfoHead} from "../main/info-head";


export const HeaderBlog = ({banner, content}: any) => {
    return (<Header banner={banner}>
            <Navbar/>
            <InfoHead content={'<h1>БЛОГИ</h1>\n <p>Курсы профессий и развития навыков помогут ребенку стать успешным в будущем.</p>\n'}/>
        </Header>
    )
}