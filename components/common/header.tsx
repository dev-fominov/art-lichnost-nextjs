import styles from "../../styles/common/header.module.css";
import React from "react";

interface HeaderProps  {
    children: React.ReactNode
    banner: string
}

export const Header = ({children, banner}:HeaderProps) => {
    return (<header className={styles.header} style={{
            background: `url(${banner}) no-repeat center center`,
            minHeight: '884px',
            backgroundSize: 'cover',
            height: '100vh'
        }}>
            {children}
        </header>
    )
}

