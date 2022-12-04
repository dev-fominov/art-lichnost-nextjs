import {HeaderGreen} from "../../../../components/common/header-green";
import {Footer} from "../../../../components/common/footer";
import {NextPage} from "next";
import {Section} from "../../../../components/common/section";
import styles from "../../../../styles/camp/smena.module.css";
import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import {ButtonGroup} from "../../../../components/common/button-group";
import Meta from "../../../../services/Meta";

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
            <Meta meta={{}}/>
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

export async function getServerSideProps(context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/camp/${context.params.smena}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}