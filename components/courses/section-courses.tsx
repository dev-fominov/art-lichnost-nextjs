import React from "react";
import {Section} from "../common/section";
import styles from '../../styles/courses/section-courses.module.css'
import CarouselCourses from "./carousel-courses";
import SliderProfessions from "../professions/slider-professions";
import {Forms} from "../common/forms";

export const SectionCourses = ({data}: any) => {
    return (<Section>
            <div style={{color: 'red', fontWeight: 800, marginBottom: '50px'}}>Старт запуска группы</div>
            {data.courses.map((item: any) => <CarouselCourses key={item.term_id} data={item}/>)}
            <div className={styles.mesta_prozhivaniya}>
                <h3 className={styles.titleInner}>О курсах</h3>
                <div className={styles.prozhivanieDescription}
                     dangerouslySetInnerHTML={{__html: data.about_courses.description}}/>
                <SliderProfessions data={data.about_courses.video_courses}/>
                <div className={styles.form}>
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
            </div>
        </Section>
    )
}

