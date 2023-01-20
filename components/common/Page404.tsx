import {Container} from "./Container";
import {A} from "./A";
import styles from '../../styles/Home.module.css'

const Page404 = () => {
    return (
        <>
            <Container>
                <div className={styles.contentBox}>
                    <h2>Возможно, она была перемещена, или вы неверно указали адрес страницы.</h2>
                    <div className={styles.lickBox}>
                        <A href={'/'} text={'Перейти на главную'} className={styles.lick}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Page404