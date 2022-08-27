import React from "react";
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
            partialVisibilityGutter: 30
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
    return <Carousel
        className={styles.carousel}
        ssr
        itemClass="image-item"
        infinite
        responsive={responsive}
        deviceType={"mobile"}
    >
        {arrImg.map((img: any, index: number) => <img
                style={{width: "100%", height: "100%"}}
                key={index}
                src={img.url}
                alt={img.alt}
            />
        )}
    </Carousel>
}

