import styles from "../../styles/common/header-green.module.css";
import {Navbar} from "../main/Navbar";
import {Container} from "./Container";

export const HeaderGreen = ({title}: any) => {
    return (
        <header className={styles.headerGreen}>
            <Navbar/>
            <Container>
                <div className={styles.title}>{title}</div>
            </Container>
        </header>
    )
}

