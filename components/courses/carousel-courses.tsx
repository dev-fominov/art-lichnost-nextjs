import styles from './../../styles/courses/section-courses.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, {useEffect, useState} from "react";
import Card from "../camp/card";
import {ButtonGroup} from "../common/button-group";

const CarouselCourses = ({data}: any) => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let width = window.innerWidth
            if (data.length < 2) {
                if (width < 709) {
                    setShowButton(true)
                }
            } else {
                if (data.length < 3) {
                    if (width < 1024) {
                        setShowButton(true)
                    }
                } else {
                    if (data.length < 4) {
                        if (width < 1200) {
                            setShowButton(true)
                        }
                    } else {
                        setShowButton(true)
                    }
                }
            }
        }
    },)

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

    return (
        <div className={styles.box}>
            <h2 className={styles.titleProf}
                style={{color: `${data.name.toUpperCase() === 'HARD SKILLS' ? '#FF822E' : '#30AA33'}`}}>
                {data.name.toUpperCase()}
            </h2>
            <div className={styles.description}>
                {data.description}
            </div>
            {data.count > 3
                ? <div className={styles.containerBtn}>
                    <Carousel slidesToSlide={1}
                              swipeable
                              focusOnSelect={false}
                              arrows={false}
                              renderButtonGroupOutside={showButton}
                              customButtonGroup={showButton ? <ButtonGroup/> : <></>}
                              ssr
                              itemClass={styles.carousel}
                              infinite
                              responsive={responsive}
                    >
                        {data.camp_card.map((el: any) => <Card key={el.ID} data={el}/>)}
                    </Carousel>
                </div>
                : <div className={styles.card}>
                    {data.camp_card.map((el: any) => <Card key={el.ID} data={el}/>)}
                </div>}
        </div>
    )
}

export default CarouselCourses