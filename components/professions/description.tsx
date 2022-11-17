import styles from "../../styles/professions/description.module.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import React from "react";

export const Description = ({ img, text, video }: any) => {
    const [openVideo, setOpenVideo] = React.useState(false)
    return (<div className={styles.descriptionBox}>
        <div className={styles.whatText}>
            <div className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className={styles.whatImg} onClick={() => setOpenVideo(true)}>
            {openVideo
                ? <iframe className={styles.descriptionVideo}
                    frameBorder="0"
                    src={`https://www.youtube.com/embed/${video}?autoplay=1&amp;autohide=1`}
                    style={{ width: '528.984px', height: '267px' }} />
                : <div className={styles.descriptionImg} style={{
                    background: `url(${img.url}) no-repeat center center`,
                    backgroundSize: `cover`
                }}><BsFillPlayCircleFill className={styles.play} /></div>}
        </div>
    </div>
    )
}