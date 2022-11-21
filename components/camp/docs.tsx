import styles from './../../styles/camp/docs.module.css'
import {A} from "../common/A";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ButtonGroup} from "../common/button-group";

const Docs = ({data, title}: any) => {
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
    return (<div className={styles.docs}>
            <h2 className={styles.title}>{title}</h2>
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
                    {data.map((el: any) => <div key={el.id} className={styles.boxItem}>
                        <h3>{el.title}</h3>
                        <p>{el.subtitle}</p>
                        <A href={{
                            pathname: '/camp/docs/[docs]',
                            query: {docs: el.slug,},
                        }}
                           text={'Узнать больше'}/>
                    </div>)}
                </Carousel>
            </div>
        </div>
    )
}

export default Docs