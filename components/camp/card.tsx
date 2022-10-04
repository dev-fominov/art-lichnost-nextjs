import styles from './../../styles/camp/card.module.css'
import {A} from "../common/A";

const Card = ({data}: any) => {
    return (
        <div className={styles.card}>
            <A href={`/camp/${data.post_slug}`} text={<div
                className={styles.boxImg}
                style={{
                    background: `url(${data.thumbnail.url}) no-repeat center center`,
                    backgroundSize: `cover`
                }}>
                <div className={styles.days}>9 дней</div>
            </div>}/>
            <div className={styles.boxLink}>
                <h3 className={styles.postTitle}>{data.post_title}</h3>
                <p className={styles.location}>{data.location}</p>
                <A href={`/camp/${data.post_slug}`} text={'Узнать больше'}/>
            </div>
        </div>
    )
}

export default Card