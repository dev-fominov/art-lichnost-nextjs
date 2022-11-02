import styles from '../../styles/professions/slide-prozhivaniya.module.css'
import {AiOutlinePlayCircle} from "react-icons/ai";
import React from "react";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const SlideProzhivaniya = ({data}: any) => {
    const [openVideo, setOpenVideo] = React.useState(false)

    const showModalHandler = () => setOpenVideo(!openVideo)

    return <div className={styles.slideBox}
                onClick={showModalHandler}
                style={{
                    background: `url(${data.oblozhka ? data.oblozhka.url : data.img.url}) no-repeat center center`,
                    backgroundSize: `cover`
                }}>
        <AiOutlinePlayCircle className={styles.play}/>
        <div className={styles.descriptionBox}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.description}>{data.description}</div>
        </div>
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