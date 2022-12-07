import {HeaderGreen} from "../../../components/common/HeaderGreen";
import {Section} from "../../../components/common/Section";
import styles from '../../../styles/vacancies/job.module.css';
import {Footer} from "../../../components/common/Footer";
import {A} from "../../../components/common/A";
import SliderJobPhoto from "../../../components/vacancies/SliderJobPhoto";
import Meta from "../../../services/Meta";

const Job = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
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