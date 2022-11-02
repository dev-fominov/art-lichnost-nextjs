import styles from "../../styles/common/header-green.module.css";
import React from "react";
import {Navbar} from "../main/navbar";
import {Container} from "./container";

export const HeaderGreen = ({title}:any) => {
    return (<header className={styles.headerGreen}>
            <Navbar/>
            <Container>
                <div className={styles.title}>{title}</div>
            </Container>
        </header>
    )
}

