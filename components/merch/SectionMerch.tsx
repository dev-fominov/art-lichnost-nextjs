import {Section} from "../common/Section";
import styles from "./../../styles/merch/merch.module.css";
import {ItemMerch} from "./ItemMerch";

export const SectionMerch = ({data}: any) => {

    return (
        <Section>
            <div className={styles.merchPage}>
                <h3 className={styles.titleMerch}>{data.description.title_merch}</h3>
                <ul className={styles.merchDescription}>
                    {data.description.description_merch.map((item: any, index: any) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div className={styles.pageCard}>
                {data.merch.map((item: any, index: any) => <ItemMerch key={index} data={item}/>)}
            </div>
        </Section>
    )
}

