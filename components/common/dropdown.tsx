import {useState} from "react";
import styles from "../../styles/common/dropdown.module.css";
import {A} from "./A";

interface DropdownType {
    title: string
    path: string
    itemMenu?: Array<{ path: string, text: string }>
}

export const Dropdown = ({title, path, itemMenu}: DropdownType) => {
    const [click, setClick] = useState(false)

    return <div onMouseEnter={() => setClick(true)}
                onMouseLeave={() => setClick(false)}>
        <div className={styles.dropdownMenuTitle}>
            <A className={click ? styles.dropdownMenuLinkActive : styles.dropdownMenuLink} href={path} text={title}/>
        </div>
        {itemMenu && click && <ul
          className={click ? styles.dropdownMenuClicked : styles.dropdownMenu}>
            {itemMenu.map((item: any, index: number) => {
                return <li className={styles.itemlink} key={index}>
                    <A href={item.path} text={item.text}/>
                </li>
            })}
        </ul>}
    </div>
}

