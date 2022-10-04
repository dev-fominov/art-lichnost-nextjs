import styles from './../../styles/camp/docs.module.css'
import {A} from "../common/A";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Docs = ({data}: any) => {
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
    return (<div className={styles.docs}>
            <h2 className={styles.title}>Забронировал, что дальше?</h2>
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
                {data.map((el: any) => <div key={el.id} className={styles.boxItem}>
                    <h3>{el.title}</h3>
                    <p>{el.subtitle}</p>
                    <A href={`/${el.slug}`} text={'Узнать больше'}/>
                </div>)}
            </Carousel>
        </div>
    )
}

export default Docs