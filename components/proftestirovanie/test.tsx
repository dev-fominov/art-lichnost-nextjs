import styles from "../../styles/proftestirovanie/test.module.css";
import React from "react";
import {A} from "../common/A";

export const Test = ({data}: any) => {
    return (<div className={styles.test}>
        <div style={{
            background: `url(${data.img_test.url}) no-repeat center center`,
            backgroundSize: 'cover'
        }}
             className={styles.testImg}/>
        <div className={styles.testText}>
            <A className={data.title === "Офлайн-тест" ? styles.testLabel : styles.testLabelColor}
               text={data.title}
               href={`/proftestirovanie/${data.link_to_page}`}/>
            <span className={styles.dates}>{data.for_whom}</span>
            <span className={styles.dates}>Ближайшая дата: {data.upcoming_dates}</span>
            <span className={styles.address}>Адрес: {data.address}</span>
            <span className={styles.price}>Цена: {data.price}</span>
            <A className={styles.link} href={`/proftestirovanie/${data.link_to_page}`} text={'Узнать больше'}/>
        </div>
    </div>)
}