import styles from './../../styles/camp/card.module.css'
import {A} from "../common/A";

const Card = ({data, carouselCard, filter, term_id}: any) => {

    return (
        <div className={filter ? styles.filter : ''}>
            <div className={carouselCard ? styles.carouselCard : styles.card}>
                <A href={data.location ? {
                    pathname: `camp/${term_id === 10
                        ? 'professions'
                        : term_id === 11
                            ? 'skills'
                            : 'tourist-holidays'}`,
                    query: {slug: data.post_slug},
                } : `courses/${data.post_slug}`}
                   text={<div className={styles.boxImg}
                              style={{
                                  background: `url(${data.thumbnail.url}) no-repeat center center`,
                                  backgroundSize: `cover`
                              }}>
                       {data.info && <div className={styles.days}>{data.info}</div>}
                   </div>}/>
                <div className={styles.boxLink}>
                    <h3 className={styles.postTitle}>{data.post_title}</h3>
                    <p className={styles.location}>{data.location || data.ages}</p>
                    <A href={data.location ? {
                        pathname: `camp/${term_id === 10
                            ? 'professions'
                            : term_id === 11
                                ? 'skills'
                                : 'tourist-holidays'}`,
                        query: {slug: data.post_slug},
                    } : `courses/${data.post_slug}`}
                       text={'Узнать больше'}/>
                </div>
            </div>
        </div>
    )
}

export default Card