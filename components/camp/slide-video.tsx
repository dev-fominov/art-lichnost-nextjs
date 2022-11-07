import styles from '../../styles/camp/reviews.module.css'
import {AiOutlinePlayCircle} from "react-icons/ai";
import React from "react";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const SlideVideo = ({data}: any) => {
    const [openVideo, setOpenVideo] = React.useState(false)

    const showModalHandler = () => setOpenVideo(!openVideo)

    return <div className={styles.slideBox}
                onClick={showModalHandler}
                style={{
                    background: `url(${data.url_img}) no-repeat center center`,
                    backgroundSize: `cover`
                }}>
        <AiOutlinePlayCircle className={styles.play}/>
        {openVideo && <Modal styles={{
            modal: {borderRadius: '40px', padding: 0},
            closeButton: {display: 'none'}
        }}
                             open={openVideo}
                             onClose={showModalHandler}
                             closeOnEsc
                             center>
          <iframe className={styles.video}
                  frameBorder="0"
                  src={`https://www.youtube.com/embed/${data.id_video}?autoplay=1&amp;autohide=1`}
                  style={{width: '300px', height: '535px'}}/>
        </Modal>}
    </div>
}