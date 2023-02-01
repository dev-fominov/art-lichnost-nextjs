import {Navbar} from "../main/Navbar";
import {Container} from "../common/Container";
import styles from "../../styles/camp/camp.module.css";
import GreenLineMob from "../../components/common/img/green-line-mob.svg";
import RedLineMob from "../../components/common/img/red-line-mob.svg";
import BlueLineMob from "../../components/common/img/blue-line-mob.svg";
import RedLineTop from "../../components/common/img/red-line-top.svg";
import BlueLineTop from "../../components/common/img/blue-line-top.svg";
import GreenLineTop from "../../components/common/img/green-line-top.svg";
import * as React from "react";

export const ContentHeader = () => {

    const titleArr = ['ПРОФЕССИИ', 'НАВЫКИ', 'COMMUNITY']

    return (
        <>
            <Navbar/>
            <div className={styles.lineBoxMob}>
                <RedLineMob height="722" className={styles.redLineMob}/>
                <BlueLineMob className={styles.blueLineMob}/>
                <GreenLineMob width="750" className={styles.greenLineMob}/>
            </div>
            <Container>
                <div className={styles.lineBoxTop}>
                    <RedLineTop height={`100vh`} className={styles.redLineTop}/>
                    <BlueLineTop height={`100vh`} className={styles.blueLineTop}/>
                    <GreenLineTop height={`100vh`} className={styles.greenLineTop}/>
                </div>
            </Container>
            <Container>
                <div className={styles.contentBox}>
                    <div className={styles.heading}>ЛАГЕРЬ ДЛЯ ДЕТЕЙ 7-17 ЛЕТ – это...</div>
                    <div className={styles.content}>
                        {titleArr.map((item: any, index: any) => {
                            const color = item === 'ПРОФЕССИИ'
                                ? '#30AA33'
                                : item === 'НАВЫКИ'
                                    ? '#7B8BFF'
                                    : '#EB3535'
                            const style = item === 'ПРОФЕССИИ'
                                ? styles.titleGreen
                                : item === 'НАВЫКИ'
                                    ? styles.titleBlue
                                    : styles.titleRed
                            return <div key={index} className={styles.itemBox}>
                                <div className={styles.titleBox}>
                                    <div className={`${styles.title} ${style}`}
                                         style={{backgroundColor: color}}>
                                        {item.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </Container>
        </>
    )
}