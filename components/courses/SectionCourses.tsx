import { Section } from "../common/Section";
import styles from '../../styles/courses/section-courses.module.css'
import CarouselCourses from "./CarouselCourses";
import SliderProfessions from "../professions/SliderProfessions";
import { Forms } from "../common/Forms";
import { A } from "../common/A";

export const SectionCourses = ({ data }: any) => {
    return (
        <Section>
            <div className={styles.boxContent}>
                <h3 className={styles.titleInner}>Старт запуска группы</h3>
                <div className={styles.boxCourse}>
                    {data.launch_group.map((item: any, index: any) => {
                        return item.count && <div key={index}
                            className={styles.itemSkill}>
                            <div className={styles.title}>
                                {item.name}
                            </div>
                            <ul className={styles.listSkills}>
                                {item.camp_card.map((item: any, index: any) => <li key={index}>
                                    {item.availability_seats
                                        ?
                                        <span style={{ background: '#30aa33' }} className={styles.onstock}>Есть места</span>
                                        :
                                        <span style={{ background: '#eb3535' }} className={styles.onstock}>Нет места</span>}
                                    <div className={styles.boxAlex}>
                                        <A href={`/courses/${item.post_slug}`} text={
                                            <div className={item.availability_seats
                                                ? styles.titleGreen
                                                : styles.titleRed}>
                                                <span style={{ textDecoration: 'underline' }}>{item.post_title}</span>
                                                <span>{item.ages}</span>
                                            </div>
                                        } />
                                    </div>
                                </li>)}
                            </ul>
                        </div>
                    })}
                </div>
            </div>
            {data.courses.map((item: any) => <CarouselCourses key={item.term_id} data={item} />)}
            <div className={styles.boxContent}>
                <h3 className={styles.titleInner}>О курсах</h3>
                <div className={styles.prozhivanieDescription}
                    dangerouslySetInnerHTML={{ __html: data.about_courses.description }} />
                <SliderProfessions data={data.about_courses.video_courses} />
            </div>
            <div className={styles.boxContent}>
                <h3 className={styles.titleInner}>Оформить заявку</h3>
                <div className={styles.formOrderBox}>
                    <Forms confirm={data.link_to_oferta} hiddenText={`Общая заявка на курсы`} />
                    <div className={styles.formSteps}>
                        <h4>{data.step_form.steps_form_title}</h4>
                        <ul>
                            {data.step_form.steps_form_items.map((el: any, index: number) => <li key={index}>{el}</li>)}
                        </ul>
                        <div style={{
                            background: `url(${data.step_form.img_steps_form.url}) no-repeat center center`,
                            backgroundSize: 'cover'
                        }}
                            className={styles.formStepImg} />
                    </div>
                </div>
            </div>
        </Section>
    )
}

