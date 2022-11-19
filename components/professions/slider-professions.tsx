import Carousel from "react-multi-carousel";
import styles from '../../styles/professions/slide-prozhivaniya.module.css'
import "react-multi-carousel/lib/styles.css";
import {SlideProzhivaniya} from "./slide-prozhivaniya";
import {ButtonGroup} from "../common/button-group";

const SliderProfessions = ({data}: any) => {

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
            <div className={styles.containerBtn}>
                <Carousel slidesToSlide={1}
                          swipeable
                          focusOnSelect={false}
                          className={styles.container}
                          ssr
                          arrows={false}
                          renderButtonGroupOutside={true}
                          customButtonGroup={<ButtonGroup/>}
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