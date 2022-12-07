import {Section} from "../common/Section";
import styles from "../../styles/vacancies/section-vacancies.module.css";
import {A} from "../common/A";
import Link from "next/link";

export const SectionVacancies = ({data}: any) => {

    return (<Section>
            <div className={styles.content}>
                {data.vacancies.map((item: any, index: any) => <div key={index} className={styles.item}>
                    <div className={styles.left}>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.leftBox}>
                            <div className={styles.excerpt}>{item.description}</div>
                            <div className={styles.rightBox}>
                                {item.benefits.map((item: any, index: any) => <div key={index}
                                                                                   className={styles.benefit}>
                                    {item}</div>)}
                            </div>
                        </div>
                        <A className={styles.link}
                           href={
                               {
                                   pathname: '/vacancies/[job]',
                                   query: {job: item.slug,},
                               }}
                           text={'Узнать больше'}/>
                    </div>
                    <div className={styles.right}>
                        <img src={item.img.url} alt={item.img.C}/>
                    </div>
                </div>)}
            </div>
            <div className={styles.footerJobs}>
                <div className={styles.leftFooterJobs}>
                    <img src={data.no_vacancies.img.url} alt={data.no_vacancies.img.alt}/>
                </div>
                <div className={styles.rightFooterJobs}>
                    <div className={styles.title}>{data.no_vacancies.title}</div>
                    <div className={styles.contentJob}>{data.no_vacancies.description}</div>
                    <Link href={`mailto:${data.no_vacancies.email}`}>
                        <a className={styles.email} target="_blank">{data.no_vacancies.email}</a>
                    </Link>
                </div>
            </div>
        </Section>
    )
}

