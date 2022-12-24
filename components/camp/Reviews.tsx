import styles from '../../styles/camp/reviews.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {SlideVideo} from "./SlideVideo";
import {SlideImage} from "./SlideImage";
import {ButtonGroup} from "../common/ButtonGroup";

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

const Reviews = ({data}: any) => {
    return (
        <>
            <h2 className={styles.title}>Отзывы</h2>
            <div className={styles.containerBtn}>
                <Carousel slidesToSlide={1}
                          className={styles.carousel}
                          swipeable
                          focusOnSelect={false}
                          arrows={false}
                          renderButtonGroupOutside={true}
                          customButtonGroup={<ButtonGroup/>}
                          ssr
                          itemClass="image-item"
                          infinite
                          responsive={responsive}
                >
                    {data.map((el: any, index: any) => el.id_video
                        ? <SlideVideo key={index} data={el}/>
                        : <SlideImage key={index} data={el}/>
                    )}
                </Carousel>
            </div>
        </>
    )
}

export default Reviews