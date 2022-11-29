import styles from '../../styles/camp/slide-image.module.css'
import React from "react";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const SlideImage = ({data}: any) => {
    const [openImage, setOpenImage] = React.useState(false)
    const [openImage2, setOpenImage2] = React.useState(false)

    const showModalHandler = () => setOpenImage(!openImage)
    const showModalHandler2 = () => setOpenImage2(!openImage2)

    return (
        <div className={styles.slideBox}>
            <div className={styles.textReviewBox} onClick={showModalHandler}>
                <img src={data.url_img} alt="image"/>
            </div>
            <div className={styles.textReviewBox} onClick={showModalHandler2}>
                <img src={data.url_img_2} alt="image"/>
            </div>
            {openImage && <Modal styles={{
                modal: {borderRadius: '40px', padding: 0},
                closeButton: {display: 'none'}
            }}
                                 open={openImage}
                                 onClose={showModalHandler}
                                 closeOnEsc
                                 center>
              <div className={styles.boxModal} onClick={showModalHandler}/>
              <div className={styles.boxModal} onClick={showModalHandler2}>
                <img src={data.url_img} alt="image"/>
              </div>
            </Modal>}
            {openImage2 && <Modal styles={{
                modal: {borderRadius: '40px', padding: 0},
                closeButton: {display: 'none'}
            }}
                                  open={openImage2}
                                  onClose={showModalHandler2}
                                  closeOnEsc
                                  center>
              <div className={styles.boxModal} onClick={showModalHandler2}>
                <img src={data.url_img_2} alt="image"/>
              </div>
            </Modal>}
        </div>)
}