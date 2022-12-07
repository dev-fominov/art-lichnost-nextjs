import styles from "../../styles/about/item-card.module.css";

const ItemCard = ({data, index}: any) => {
    return (
        <div className={styles.card}>
            <div className={styles.itemTitleCard}>
                <span className={styles.count}>{index}</span>
                <span className={styles.titleCard}> {data.title}</span>
            </div>
            <img src={data.img.url} alt={data.img.alt}/>
            <div className={styles.itemDescriptionCard}>
                {data.list_successes.map((item: any, index: any) => <p key={index}>{item}</p>)}
            </div>
        </div>
    )
}

export default ItemCard

