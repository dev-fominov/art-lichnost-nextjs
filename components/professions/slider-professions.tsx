import Carousel from "react-multi-carousel";
import styles from '../../styles/professions/slide-prozhivaniya.module.css'
import "react-multi-carousel/lib/styles.css";
import {SlideProzhivaniya} from "./slide-prozhivaniya";

const SliderProfessions = ({data}: any) => {

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
        <div>
            <Carousel
                slidesToSlide={1}
                swipeable
                focusOnSelect={false}
                className={styles.container}
                arrows
                ssr
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