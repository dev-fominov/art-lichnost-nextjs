import {Section} from "../common/Section";
import styles from '../../styles/contacts/section-contacts.module.css'
import Link from "next/link";
import {SliderContacts} from "./SliderContacts";
import {MyPlacemark} from "./Map";

export const SectionContacts = ({data}: any) => {
    return (
        <Section>
            <div className={styles.titleInner} dangerouslySetInnerHTML={{__html: data.content}}/>
            <div className={styles.contactFields}>
                <div className={styles.itemField}>
                    <Link href={data.phone}>
                        <a target="_blank">{data.phone}</a>
                    </Link>
                </div>
                <div className={styles.itemField}>
                    <Link href={data.e_mail}>
                        <a target="_blank">{data.e_mail}</a>
                    </Link>
                </div>
                <div className={styles.itemField}>
                    {data.working_hours}
                </div>
            </div>
            <SliderContacts arrImg={data.gallery_contacts}/>
            <div className={styles.mapBox}>
                <div className={styles.itemMapBg}>
                    <img src={data.image_ofise.url}
                         alt={data.image_ofise.alt}
                         draggable={"false"}/>
                </div>
                <div className={styles.itemMap}>
                    <MyPlacemark/>
                </div>
            </div>
        </Section>
    )
}

