import React from "react";
import styles from "../../styles/common/section.module.css";
import { Container } from "./container";

interface SectionProps  {
    children: React.ReactNode
}

export const Section = ({children}:SectionProps) => {
    return (<section className={styles.homeBoxes}>
            <Container>
            {children}
            </Container>
        </section>
    )
}

