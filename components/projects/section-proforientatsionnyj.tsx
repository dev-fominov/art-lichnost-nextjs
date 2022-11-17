import React from "react";
import {Section} from "../common/section";
import styles from '../../styles/project/section-proforientatsionnyj.module.css'
import ItemCard from "../about/item-card";

export const SectionProforientatsionnyj = ({data}: any) => {
    return (<Section>
            <div className={styles.boxList}>
                <div className={styles.title}>{data.project_numbers.title}</div>
                <div className={styles.contentBox}>
                    {data.project_numbers.list.map((item: any, index: any) => <div key={index}
                                                                                   className={styles.itemFirst}>
                        <img src={item.icon.url} alt={item.icon.alt}/>
                        <div className={styles.itemTitle}>{item.qty}</div>
                        <div className={styles.itemDescription}>{item.description}</div>
                    </div>)}
                </div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.title}>{data.important.title}</div>
                <div className={styles.contentBox}>
                    {data.important.list.map((item: any, index: any) => <div key={index}
                                                                             className={styles.itemArr}>
                        <div className={styles.itemDescriptionArr}>{item}</div>
                    </div>)}
                </div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.title}>{data.history.title}</div>
                <div className={styles.history}>
                    <div className={styles.leftBox}>
                        <p dangerouslySetInnerHTML={{__html: data.history.description}}/>
                    </div>
                    <div className={styles.rightBox}>
                        <img src={data.history.img.url} alt={data.history.img.alt}/>
                    </div>
                </div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.title}>{data.what_convention.title}</div>
                <div className={styles.contentBox}>
                    {data.what_convention.list.map((item: any, index: any) => <div key={index}
                                                                                   className={styles.itemDescriptionRedBorder}>
                            {item}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.title}>{data.what_do.title}</div>
                <div className={styles.contentBoxCard}>
                    {data.what_do.list.map((item: any, index: any) => <div key={index} className={styles.card}>
                        <div className={styles.itemTitleCard}>
                            <span className={styles.count}>{index+1}</span>
                            <span className={styles.titleCard}>{item.title_item}</span>
                        </div>
                        <img src={item.img_item.url} alt={item.img_item.alt}/>
                        <div className={styles.itemDescriptionCard}>
                            {item.list_item.map((item: any, index: any) => <p key={index}>{item}</p>)}
                        </div>
                    </div>)}
                </div>
            </div>
        </Section>
    )
}

