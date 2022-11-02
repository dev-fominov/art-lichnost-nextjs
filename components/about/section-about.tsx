import {Section} from "../common/section";
import styles from "../../styles/about/section-about.module.css";
import {A} from "../common/A";
import ItemCard from "./item-card";

const SectionAbout = ({data}: any) => {
    return (<Section>
            <div className={styles.aboutBox}>
                <div className={styles.title}>{data.our_records.title}</div>
                <div className={styles.contentBox}>
                    {data.our_records.list_records.map((item: any, index: any) => <div key={index}
                                                                                       className={styles.itemFirst}>
                        <img src={item.img.url} alt={item.img.alt}/>
                        <div className={styles.itemTitle}>{item.title}</div>
                        <div className={styles.itemDescription}>{item.description}</div>
                    </div>)}
                </div>
            </div>
            <div className={styles.aboutBox}>
                <div className={styles.title}>{data.our_mission.title}</div>
                <div className={styles.contentBox}>
                    {data.our_mission.list_mission.map((item: any, index: any) => <div key={index}
                                                                                       className={styles.itemArr}>
                        <div className={styles.itemDescriptionArr}>{item}</div>
                    </div>)}
                </div>
            </div>
            <div className={styles.aboutBox}>
                <div className={styles.title}>{data.our_history.title}</div>
                <div className={styles.history}>
                    <div className={styles.leftBox}>
                        <div dangerouslySetInnerHTML={{__html: data.our_history.description}}/>
                    </div>
                    <div className={styles.rightBox}>
                        <img src={data.our_history.img.url} alt={data.our_history.img.alt}/>
                    </div>
                </div>
            </div>
            <div className={styles.aboutBox}>
                <div className={styles.title}>Цели компании</div>
                {data.our_targets.map((item: any, index: any) => <div key={index} className={styles.contentBox}>
                    <div className={styles.itemDescriptionRedBorder}>{item}</div>
                </div>)}
            </div>
            <div className={styles.aboutBox}>
                <div className={styles.title}>Наши награды и достижения</div>
                <div className={styles.awardsBox}>
                    {data.our_awards.map((item: any, index: any) => <div key={index} className={styles.awardsItem}>
                        <div className={styles.itemNag1}>{item.year}</div>
                        <div className={styles.itemNag2}>{item.award}</div>
                    </div>)}
                </div>
            </div>
            <div className={styles.aboutBox}>
                <div className={styles.contentBoxCard}>
                    {data.our_successes.map((item: any, index: any) => <ItemCard key={index} index={index + 1}
                                                                                 data={item}/>)}
                </div>
            </div>
        </Section>
    )
}

export default SectionAbout

