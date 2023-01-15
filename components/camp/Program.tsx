import styles from './../../styles/camp/program.module.css'
import {A} from "../common/A";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ButtonGroup} from "../common/ButtonGroup";
import React, {useEffect, useState} from "react";

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
            max: 709,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 709
        },
        items: 2,
        partialVisibilityGutter: 30
    }
}

const Program = ({data}: any) => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let width = window.innerWidth
            if (data.count < 2) {
                if (width < 708) {
                    setShowButton(true)
                }
            } else {
                if (data.count < 3) {
                    if (width < 1023) {
                        setShowButton(true)
                    }
                } else {
                    if (data.count < 4) {
                        if (width < 1199) {
                            setShowButton(true)
                        }
                    } else {
                        setShowButton(true)
                    }
                }
            }
        }
    }, [data.length])

<<<<<<< HEAD

=======
>>>>>>> mainPage
    return (
        <div className={styles.programBox}>
            <div>
                <A href={`camp/${data.slug}`} text={
                    <h2 className={styles.title}
                        style={{
                            color: `${data.term_id === 11
                                ? '#30AA33'
                                : data.term_id === 10
                                    ? '#FF822E'
                                    : '#EB3535'}`
                        }}>
                        {data.name.toUpperCase()}
                        <span>Программа</span>
                    </h2>}/>
                <p className={styles.description}>
                    {data.description}
                </p>
            </div>
            {data.count >= 3
                ? <div className={styles.containerBtn}>
                    <Carousel slidesToSlide={1}
                              swipeable
                              focusOnSelect={false}
                              arrows={false}
                              renderButtonGroupOutside={showButton}
                              customButtonGroup={showButton ? <ButtonGroup/> : <></>}
                              ssr
                              itemClass="image-item"
                              infinite
                              responsive={responsive}>
                        {data.camp_card.map((el: any, index: any) => <Card key={index}
                                                                           term_id={data.term_id}
                                                                           carouselCard={true}
                                                                           data={el}/>)}
                    </Carousel>
                </div>
                : <div className={styles.cards}>
                    {data.camp_card.map((el: any, index: any) => <Card key={index}
                                                                       term_id={data.term_id}
                                                                       data={el}/>)}
                </div>}
        </div>
    )
}

export default Program