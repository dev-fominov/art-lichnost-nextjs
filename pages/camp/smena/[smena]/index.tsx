import {HeaderGreen} from "../../../../components/common/HeaderGreen";
import {Footer} from "../../../../components/common/Footer";
import {NextPage} from "next";
import {Section} from "../../../../components/common/Section";
import styles from "../../../../styles/camp/smena.module.css";
import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import {ButtonGroup} from "../../../../components/common/ButtonGroup";
import Meta from "../../../../services/Meta";
import {pageAPI} from "../../../../api/api";

const responsive = {
    desktopFull: {
        breakpoint: {
            max: 3000,
            min: 1200
        },
        items: 4,
        partialVisibilityGutter: 40
    },
    desktop: {
        breakpoint: {
            max: 1200,
            min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 700,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 20,
        centerMode: false
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 700
        },
        items: 3,
        partialVisibilityGutter: 30
    }
}

const Smena: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={data.metadata}/>
            <HeaderGreen title={data.title}/>
            <Section>
                <div className={styles.containerBtn}
                     style={{
                         paddingBottom: '30px',
                         position: 'relative'
                     }}
                >
                    <Carousel slidesToSlide={1}
                              swipeable
                              focusOnSelect={true}
                              arrows={false}
                              renderButtonGroupOutside={true}
                              customButtonGroup={<ButtonGroup/>}
                              showDots
                              renderDotsOutside
                              dotListClass={styles.dots}
                              itemClass={styles.carousel}
                              ssr
                              infinite
                              responsive={responsive}
                              deviceType={"tablet"}
                    >
                        {data.photo_slider.map((img: any, index: number) =>
                                                   <div key={index} className={styles.slideBox}>
                                                       <img style={{width: "100%", height: "100%"}}
                                                            src={img[0]}
                                                            draggable={false}
                                                            alt={img[1]}/>
                                                   </div>
                        )}
                    </Carousel>
                </div>
            </Section>
            <Footer/>
        </>
    )
}

export default Smena

export async function getStaticPaths() {
    const data1 = await pageAPI.professions()
    const data2 = await pageAPI.skills()
    const data3 = await pageAPI.touristHolidays()
    const paths1 = data1.past_shifts.map((item: any) => ({
            params: {smena: item.slug},
        }
    ))
    const paths2 = data2.past_shifts.map((item: any) => ({
            params: {smena: item.slug},
        }
    ))
    const paths3 = data3.past_shifts.map((item: any) => ({
            params: {smena: item.slug},
        }
    ))
    const paths = [...paths1,...paths2,...paths3]
    return {paths, fallback: false}
}

export async function getStaticProps(context: any) {
    const data = await pageAPI.smena(context.params.smena)
    return {
        props: {
            data
        }
    };
}