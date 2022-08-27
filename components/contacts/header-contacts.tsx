import styles from "../../styles/contacts/header-contacts.module.css";
import React from "react";
import {Navbar} from "../main/navbar";
import {Container} from "../common/container";


export const HeaderContacts = () => {
    return (<header className={styles.header}>
            <Navbar/>
            <Container>
                <div className={styles.title}>Контакты</div>
            </Container>
        </header>
    )
}