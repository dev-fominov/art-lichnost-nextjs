import Carousel from "react-multi-carousel";
import styles from '../../styles/professions/slide-prozhivaniya.module.css'
import "react-multi-carousel/lib/styles.css";
import {SlideProzhivaniya} from "./SlideProzhivaniya";
import {ButtonGroup} from "../common/ButtonGroup";
import {useEffect, useState} from "react";

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

const SliderProfessions = ({data}: any) => {
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
    },[data.length])

    return (
            <div className={styles.containerBtn}>
                <Carousel slidesToSlide={1}
                          swipeable
                          focusOnSelect={false}
                          className={styles.container}
                          ssr
                          arrows={false}
                          renderButtonGroupOutside={showButton}
                          customButtonGroup={showButton ? <ButtonGroup/> : <></>}
                          itemClass="image-item"
                          infinite
                          responsive={responsive}
                >
                    {data.map((item: any, index: number) => <SlideProzhivaniya key={index} data={item}/>)}
                </Carousel>
        </div>
    )
}

export default SliderProfessions