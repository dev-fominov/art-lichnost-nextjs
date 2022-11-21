import Carousel from "react-multi-carousel";
import styles from '../../styles/team/slider-team-photo.module.css'
import "react-multi-carousel/lib/styles.css";
import {ButtonGroup} from "../common/button-group";

const SliderTeamPhoto = ({data}: any) => {

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1,
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
            items: 1,
            partialVisibilityGutter: 30
        }
    }
    return (data.lenght > 1
            ? <div className={styles.containerBtn}>
                <Carousel slidesToSlide={1}
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
                    {data.map((item: any, index: number) => <div key={index} className={styles.slide}>
                        <img src={item.url} alt={item.alt} draggable={false}/>
                    </div>)}
                </Carousel>
            </div>
            : data.map((item: any, index: number) => <div key={index} className={styles.slide}>
                <img src={item.url} alt={item.alt} draggable={false}/>
            </div>)
    )
}

export default SliderTeamPhoto