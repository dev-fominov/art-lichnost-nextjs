import {HeaderGreen} from "../../../components/common/header-green";
import {Section} from "../../../components/common/section";
import styles from '../../../styles/vacancies/job.module.css';
import {Footer} from "../../../components/common/footer";
import React from "react";
import {A} from "../../../components/common/A";
import SliderJobPhoto from "../../../components/vacancies/slider-job-photo";
import Head from "next/head";

const Job = ({data}: any) => {
    return (
        <>
            <Head>
                <title>
                    {data.title + '- Центр развития детей и выбора профессии АртЛичность'}
                </title>
            </Head>
            <HeaderGreen title={data.title}/>
            <Section>
                <div className={styles.boxContent}>
                    <div className={styles.title}>{data.first_block.title}</div>
                    <ul className={styles.content}>
                        {data.first_block.first_list.map((item: any, index: any) => <li key={index}>
                            {item}
                        </li>)}
                    </ul>
                </div>
                <div className={styles.boxContent}>
                    <div className={styles.title}>{data.second_block.title}</div>
                    <ul className={styles.content}>
                        {data.second_block.second_list.map((item: any, index: any) => <li key={index}>
                            {item}
                        </li>)}
                    </ul>
                </div>
                <div className={styles.boxContent}>
                    <div className={styles.title}>{data.third_block.title}</div>
                    <div className={styles.content}>
                        {data.third_block.third_list.map((item: any, index: any) => <div key={index}
                                                                                         className={styles.benefit}>
                            {item}
                        </div>)}
                    </div>
                </div>
                <div className={styles.boxContent}>
                    <SliderJobPhoto data={data.third_block.img_list}/>
                </div>
                <div className={styles.boxContent}>
                    <div className={styles.title}>Отправить резюме</div>
                    <div className={styles.boxGreen}>
                        <div className={styles.content}>
                            <div className={styles.left}>{data.send_resume.title}</div>
                            <div className={styles.right}>
                                <div className={styles.box}>Связаться с нами: <br/>
                                    <A className={styles.link}
                                       href={`mailto:$  {data.send_resume.email}`}
                                       text={data.send_resume.email}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer/>
        </>
    )
}

export default Job

export async function getServerSideProps(context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/vacancies/${context.params.job}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}