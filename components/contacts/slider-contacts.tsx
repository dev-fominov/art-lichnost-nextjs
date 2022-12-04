import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../../styles/contacts/slider-contact.module.css'
import {ButtonGroup} from "../common/button-group";

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
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 20
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 1,
        partialVisibilityGutter: 30
    }
}

export const SliderContacts = ({arrImg}: any) => {
    return (
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
                      deviceType={"tablet"}>
                {arrImg.map((img: any, index: number) => <img style={{width: "100%", height: "100%"}}
                                                              draggable={false}
                                                              key={index}
                                                              src={img.url}
                                                              alt={img.alt}/>
                )}
            </Carousel>
        </div>)
}

