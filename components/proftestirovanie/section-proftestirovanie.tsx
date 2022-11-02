import React from "react";
import {Section} from "../common/section";
import styles from '../../styles/proftestirovanie/section-proftestirovanie.module.css'
import {Test} from "./test";
import Reviews from "../camp/reviews";
import {Forms} from "../common/forms";

const SectionProftestirovanie = ({data}: any) => {

    return (<Section>
            <div className={styles.testsBox}>
                {data.tests.map((item: any, index: any) => <Test key={index} data={item}/>)}
            </div>
            <div className={styles.testingBox}>
                <h3 className={styles.titleInner}>{data.why_title}</h3>
                <div>
                    {data.list_questions.map((item: any, index: any) => {
                            return <div key={index} className={styles.whyItem}>
                                <div className={styles.whyNumber}>
                                    <span>{index + 1}</span>
                                </div>
                                <div className={styles.whyText}>
                                    <div className={styles.whyTitle}>
                                        {item.question}
                                    </div>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        }
                    )}
                </div>
            </div>
            <div className={styles.testingBox}>
                <h3 className={styles.titleInner}>Консультанты выбора профессий</h3>
                {data.consultants.map((item: any, index: any) => {
                        return <div key={index} className={styles.consultantBox}>
                            <div className={styles.consImg}>
                                <img src={item.img.url} alt={item.img.alt}/>
                            </div>
                            <div className={styles.consName}>
                                <div className={styles.name}>
                                    {item.title}
                                </div>
                                <div className={styles.status}>
                                    {item.job_title}
                                </div>
                            </div>
                            <div className={styles.consText}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    }
                )}
            </div>
            <Reviews data={{
                "camps": [
                    {
                        "term_id": 11,
                        "name": "Лагерь навыков",
                        "slug": "skills",
                        "description": "Наши смены для младших школьников! В течение каждой смены мы прокачиваем самые важные и базовые навыки — коммуникация, самоорганизация и управление эмоциями. А еще на каждой смене есть ключевой навык, на который будет сделан дополнительный акцент, например на развитие творческого мышление или командной работы. Занятия по навыкам проходят в игровой форме, таким образом ребята не скучают и всегда вовлечены в процесс.",
                        "count": 1,
                        "camp_card": [
                            {
                                "ID": 13,
                                "post_title": "3 смена. 16 июля-5 августа",
                                "post_slug": "nazvanie",
                                "thumbnail": {
                                    "url": "https://alex-volkov.ru/wp-content/uploads/2022/07/photo_2022-07-31_05-17-52.jpg",
                                    "alt": "photo_2022-07-31_05-17-52"
                                },
                                "location": "Возле леса"
                            }
                        ]
                    }, {
                        "term_id": 11,
                        "name": "Лагерь навыков",
                        "slug": "skills",
                        "description": "Наши смены для младших школьников! В течение каждой смены мы прокачиваем самые важные и базовые навыки — коммуникация, самоорганизация и управление эмоциями. А еще на каждой смене есть ключевой навык, на который будет сделан дополнительный акцент, например на развитие творческого мышление или командной работы. Занятия по навыкам проходят в игровой форме, таким образом ребята не скучают и всегда вовлечены в процесс.",
                        "count": 1,
                        "camp_card": [
                            {
                                "ID": 13,
                                "post_title": "3 смена. 16 июля-5 августа",
                                "post_slug": "nazvanie",
                                "thumbnail": {
                                    "url": "https://alex-volkov.ru/wp-content/uploads/2022/07/photo_2022-07-31_05-17-52.jpg",
                                    "alt": "photo_2022-07-31_05-17-52"
                                },
                                "location": "Возле леса"
                            }
                        ]
                    }]
            }}/>
            <div className={styles.formStepsBox}>
                <h3 className={styles.titleInner}>Оформить заявку</h3>
                <div className={styles.formOrderBox}>
                    <Forms/>
                    <div className={styles.formSteps}>
                        <h4>{data.step_form.steps_form_title}</h4>
                        <ul>
                            {data.step_form.steps_form_items.map((el: any, index: number) => {
                                return <li key={index}>{el}</li>
                            })}
                        </ul>
                        <div style={{
                            background: `url(${data.step_form.img_steps_form.url}) no-repeat center center`,
                            backgroundSize: 'cover'
                        }}
                             className={styles.formStepImg}/>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default SectionProftestirovanie