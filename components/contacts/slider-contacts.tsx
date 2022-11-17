import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../../styles/contacts/section-contacts.module.css'

export const SliderContacts = ({arrImg}: any) => {
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
    return <Carousel slidesToSlide={1}
                     className={styles.carousel}
                     swipeable
                     focusOnSelect={false}
                     arrows
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
}

