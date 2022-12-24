import styles from "../../styles/main/big-links.module.css";
import {A} from "../common/A";

export const BigLinksProf = () => {
    return (
        <div className={styles.boxBigLinks}>
            <A href={"/proftestirovanie/online-test"} text={'ОНЛАЙН-ТЕСТ'}/>
            <A href={"/proftestirovanie/offline-test"} text={'ОФЛАЙН-ТЕСТ (СПБ)'}/>
        </div>)
}