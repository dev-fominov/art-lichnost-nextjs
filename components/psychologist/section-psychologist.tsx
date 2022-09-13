import React from "react";
import {Section} from "../common/section";
import styles from '../../styles/psychologist/section-psychologist.module.css'


export const SectionPsychologist = ({data}: any) => {
    return (<Section>
            <div className={styles.questionBlock}>
                <div className={styles.questionTitle}>
                    {data.title_first}
                </div>
                <div className={styles.answerBlock}>
                    <div className={styles.answerFor}>
                        <h2>
                            <span></span>
                        </h2>
                        <ul></ul>
                        <div></div>
                    </div>
                    <div className={styles.answerFor}>
                        <h2>
                            <span></span>
                        </h2>
                        <ul></ul>
                        <div></div>
                    </div>

                </div>
            </div>
        </Section>
    )
}

