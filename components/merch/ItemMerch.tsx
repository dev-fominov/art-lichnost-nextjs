import styles from "./../../styles/merch/item-merch.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {CgArrowLongRight} from "react-icons/cg";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {useState} from "react";
import {MerchForm} from "./MerchForm";

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


export const ItemMerch = ({data}: any) => {
    const [showModal, updateShowModal] = useState(false);
    const showModalHandler = () => updateShowModal(!showModal)
    const noSize = data.size.every((item: any) => item.stock === 0)

    return (
        <div className={styles.item}>
            {data.gallery.length > 1
                ? <div className={styles.containerBtn}>
                    <Carousel slidesToSlide={1}
                              containerClass="carousel-container"
                              className={styles.carousel}
                              swipeable
                              focusOnSelect={false}
                              arrows={false}
                              showDots={true}
                              ssr
                              itemClass="image-item"
                              infinite
                              responsive={responsive}
                    >
                        {data.gallery.map((item: any, index: any) => <div key={index} className={styles.slide}>
                            <img draggable={false} src={item.url} alt={item.alt}/>
                        </div>)}
                    </Carousel>
                </div>
                : <div className={styles.slide}>
                    <img draggable={false} src={data.gallery[0].url} alt={data.gallery[0].alt}/>
                </div>}
            <div className={styles.itemContent}>
                <div className={styles.contentTitle}>
                    {data.title}
                </div>
                <div className={styles.contentDescription}>
                    {data.description}
                </div>
                <div className={styles.boxAbsolute}>
                    <div className={styles.sizes}>
                        {data.size.map((item: any, index: any) => {
                            return <div key={index} className={item.stock ? styles.sizeTitle : styles.noSizeTitle}>
                                {item.title}
                            </div>
                        })}
                    </div>
                    <div className={styles.availableBox}>
                        <CgArrowLongRight className={noSize ? styles.noSizeArrow : styles.arrow}/>
                        {noSize
                            ? <span className={styles.noSizeAvailableTitle}>Нет в наличии</span>
                            : <span className={styles.availableTitle}>Есть в наличии</span>}
                    </div>
                    <div className={styles.priceMerch}>
                        {data.price}
                    </div>
                    <button onClick={() => showModalHandler()} className={styles.btn}>
                        Оставить заявку
                    </button>
                </div>
            </div>
            {showModal && <Modal styles={{
                modal: {position: 'relative', borderRadius: '40px', padding: 0},
                closeButton: {position: "absolute", top: '15px', right: '15px'}
            }}
                                 open={showModal}
                                 onClose={showModalHandler}
                                 closeOnEsc
                                 center>
              <MerchForm hiddenText={data.title}/>
            </Modal>}
        </div>
    )
}
