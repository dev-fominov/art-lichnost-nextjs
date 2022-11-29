import styles from "../../styles/camp/filter.module.css";
import {useRef, useState} from "react";
import {IoIosArrowRoundDown, IoIosArrowRoundUp} from "react-icons/io";
import {clickOutside} from "../common/clickOutside";

export const Select = ({data, setFieldValue, name, title}: any) => {
    const wrapperRef = useRef(null);

    const [openSelect, setOpenSelect] = useState(false)

    clickOutside(wrapperRef, () => setOpenSelect(false))

    return (
        <div className={styles.filterSelect}>
            <div className={styles.itemFilter}
                 ref={wrapperRef}
                 onClick={() => setOpenSelect(!openSelect)}>
                {name}
                {openSelect
                    ? <IoIosArrowRoundUp className={styles.arrow}/>
                    : <IoIosArrowRoundDown className={styles.arrow}/>}
            </div>
            <ul className={openSelect ? styles.ulSortActive : styles.ulSort}>
                {data.map((el: any) => <li onClick={() => setFieldValue(title, {name: el.name, slug: el.slug})}
                                           key={el.id}>
                    <label className={styles.radioLabel}>
                        {name === el.name
                            ? <div className={styles.radioTrue}/>
                            : <div className={styles.radioFalse}/>}
                        {el.name}
                    </label>
                </li>)}
            </ul>
        </div>)
}