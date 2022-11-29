import styles from "../../styles/main/big-links.module.css";
import {A} from "../common/A";

export const BigLinks = () => {
    return (
        <div className={styles.boxBigLinks}>
            <A href={"/camp"} text={<><span>Программа</span> ЛАГЕРЬ</>}/>
            <A href={"/courses"} text={'КУРСЫ НАВЫКОВ'}/>
            <A href={"/proftestirovanie"} text={'ПРОФТЕСТИРОВАНИЕ'}/>
        </div>)
}