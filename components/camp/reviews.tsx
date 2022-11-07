import styles from '../../styles/camp/reviews.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {SlideVideo} from "./slide-video";
import {SlideImage} from "./slide-image";

const Reviews = ({data}: any) => {

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
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
        <>
            <h2 className={styles.title}>Отзывы</h2>
            <Carousel
                slidesToSlide={1}
                className={styles.carousel}
                swipeable
                focusOnSelect={false}
                arrows
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
        </>
    )
}

export default Reviews