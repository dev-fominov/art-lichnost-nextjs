import styles from '../../styles/team/slide-item.module.css'
import React from "react";

export const SlideItem = ({data}: any) => {
    return <div className={styles.slideBox}>
        <img src={data.img.url} alt={data.img.alt}/>
        <div className={styles.name}>{data.title}</div>
        <div className={styles.description}>{data.description}</div>
    </div>
}