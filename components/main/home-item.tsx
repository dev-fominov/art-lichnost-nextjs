import styles from "../../styles/main/home-item.module.css";
import {A} from "../common/A";

export const HomeItem = ({item, id}: any) => {
    return (
        <div className={styles.boxHomeItem}>
            <div className={styles.boxHomeItemLeft}>
                <A href={'/camp'} text={<div className={styles.boxHomeItemLeftImg}
                                             style={{
                                                 background: `url(${item.image_section.url}) no-repeat center center`,
                                                 backgroundSize: `cover`
                                             }}/>}/>
                <div className={styles.boxHomeItemLink}>
                    {id === 0 ? <span>Программа</span> : null}
                    <h3>
                        <div dangerouslySetInnerHTML={{__html: item.title_section_card}}/>
                    </h3>
                    <A href={`/${item.link_to_page_section}`} text={'Узнать больше'}/>
                </div>
            </div>
            <div className={styles.boxHomeItemRight}>
                <A href={`/${item.link_to_page_section}`} text={<>
                    {id === 0 ? <span className="small">Программа</span> : null}
                    <h2>{item.title_section_description}</h2></>
                }/>
                <p>{item.description_section}</p>
            </div>
        </div>

    )
}