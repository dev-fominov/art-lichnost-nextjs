import {A} from "./A";
import styles from '../../styles/Home.module.css'
import { Section } from "./Section";

const Page404 = () => {
    return (
        <>
            <Section>
                <div className={styles.contentBox}>
                    <h2>Возможно, она была перемещена, или вы неверно указали адрес страницы.</h2>
                    <div className={styles.lickBox}>
                        <A href={'/'} text={'Перейти на главную'} className={styles.lick}/>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Page404