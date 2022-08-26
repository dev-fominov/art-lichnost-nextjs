import React from "react";
import styles from "../../styles/common/section.module.css";

interface SectionProps  {
    children: React.ReactNode
}

export const Section = ({children}:SectionProps) => {
    return (<section className={styles.homeBoxes}>
            {children}
        </section>
    )
}

