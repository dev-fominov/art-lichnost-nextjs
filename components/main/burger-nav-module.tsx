import React, {ReactNode, useEffect, useState} from "react";
import styles from "../../styles/main/burger-nav.module.css";
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";


interface BurgerNavModuleType {
    children: ReactNode
    title: ReactNode
    menuIsOpen: boolean
}

export const BurgerNavModule = ({title, children, menuIsOpen}: BurgerNavModuleType) => {
    let [itemIsOpen, setItemIsOpen] = useState(false)

    const itemBtnClick = () => {
        setItemIsOpen(!itemIsOpen)
    }

    useEffect(() => {
        if (!menuIsOpen) {
            setItemIsOpen(false)
        }
    }, [menuIsOpen])


    return (
        <div className={styles.burgerNav}>
                <div className={styles.itemTitle}>
                    {title}
                    <div onClick={itemBtnClick}>{itemIsOpen ? <AiOutlineUp/> : <AiOutlineDown/>}</div>
                </div>
                {itemIsOpen && <div className={styles.itemLink}>
                    {children}
                </div>}
        </div>
    )
}