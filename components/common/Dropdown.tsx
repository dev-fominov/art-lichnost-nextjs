import { useState } from "react";
import styles from "../../styles/common/dropdown.module.css";
import { A } from "./A";

export const Dropdown = ({ title, path, itemMenu }: any) => {
    const [click, setClick] = useState(false)

    return (
        <div onMouseEnter={() => setClick(true)}
            onMouseLeave={() => setClick(false)}>
            <div className={styles.dropdownMenuTitle}>
                <A className={click ? styles.dropdownMenuLinkActive : styles.dropdownMenuLink}
                    href={path}
                    text={title} />
            </div>
            {itemMenu && click && <ul className={click ? styles.dropdownMenuClicked : styles.dropdownMenu}>
                {itemMenu.map((item: any, index: number) => <li className={styles.itemlink}
                    key={index}>
                    <A href={item.path} text={item.text} />
                </li>
                )}
            </ul>}
        </div>)
}

