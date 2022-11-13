import {Footer} from "../../../components/common/footer";
import {Navbar} from "../../../components/main/navbar";
import {InfoHead} from "../../../components/main/info-head";
import {Header} from "../../../components/common/header";
import styles from "../../../styles/proftestirovanie/testirovanie.module.css";
import {Container} from "../../../components/common/container";
import SectionTestirovanie from "../../../components/proftestirovanie/section-testirovanie";
import Head from "next/head";
import React from "react";

const Testirovanie = ({data}: any) => {

    const VIDEO_WIDTH = 1920;
    const VIDEO_HEIGHT = 1080;

    return (
        <> <Head>
            <title>
                {data.id_page === 54 ? 'Онлайн-тест 7-11 класс' : 'Оффлайн-тест'} +
                {'- Центр развития детей и выбора профессии АртЛичность'}
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
                    <InfoHead content={data.content}/>
                    <Container>
                        <div>
                            {data.benefits.map((item: any, index: any) => <div className={styles.itemLabel}
                                                                               key={index}
                                                                               style={data.id_page === 54
                                                                                   ? {
                                                                                       color: '#FF822E',
                                                                                       border: '1px solid #FF822E'
                                                                                   }
                                                                                   : {}}>
                                {item}
                            </div>)}
                        </div>
                    </Container>
                </div>
                : <Header banner={data.banner.url}>
                    <Navbar/>
                    <InfoHead content={data.content}/>
                    <Container>
                        <div className={styles.benefits}>
                            {data.benefits.map((item: any, index: any) => <div className={styles.itemLabel}
                                                                               key={index}
                                                                               style={data.id_page === 54
                                                                                   ? {
                                                                                       color: '#FF822E',
                                                                                       border: '1px solid #FF822E'
                                                                                   }
                                                                                   : {}}>
                                {item}
                            </div>)}
                        </div>
                    </Container>
                </Header>}
            <SectionTestirovanie data={data}/>
            <Footer/>
        </>
    )
}

export default Testirovanie

export async function getServerSideProps(context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/${context.params.testirovanie}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}

