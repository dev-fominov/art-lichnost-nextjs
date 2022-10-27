import styles from './../../styles/courses/section-courses.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Card from "../camp/card";

const CarouselCourses = ({data}: any) => {
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
    return (<div className={styles.box}>
            <h2 className={styles.titleProf}>{data.name.toUpperCase()}</h2>
            <div className={styles.description}>
                {data.description}
            </div>
            {data.count > 3
                ? <Carousel
                    slidesToSlide={1}
                    swipeable
                    focusOnSelect={false}
                    arrows
                    ssr
                    itemClass={styles.carousel}
                    infinite
                    responsive={responsive}
                >
                    {data.camp_card.map((el: any) => <Card key={el.ID} data={el}/>)}
                </Carousel>
                :  <div className={styles.card}>{data.camp_card.map((el: any) => <Card key={el.ID} data={el}/>)}</div>}
        </div>
    )
}

export default CarouselCourses