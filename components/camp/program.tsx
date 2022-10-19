import styles from './../../styles/camp/program.module.css'
import {A} from "../common/A";
import Card from "./card";

const Program = ({data}: any) => {
    return (
        <div>
            <div><A href={`camp/${data.slug}`} text={<h2 className={styles.title}>{data.name}
                <span>Программа</span>
            </h2>}/>
            <p className={styles.description}>{data.description}</p></div>
            <div className={styles.cards}>
                {data.count > 0 && data.camp_card.map((el:any)=> <Card key={el.ID} data={el}/>)}
            </div>
        </div>
    )
}

export default Program