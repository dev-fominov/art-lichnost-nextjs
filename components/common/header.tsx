import styles from "../../styles/common/header.module.css";
import React from "react";

interface HeaderProps  {
    children: React.ReactNode
    banner: string
}

export const Header = ({children, banner}:HeaderProps) => {
    return (<header className={styles.header} style={{
            background: `url(${banner}) center center / cover no-repeat`,
            minHeight: '884px',
            height: '100vh'
        }}>
            {children}
        </header>
    )
}

