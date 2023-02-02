import styles from "../../styles/camp/filter.module.css";
import {useRef, useState} from "react";
import {IoIosArrowRoundDown, IoIosArrowRoundUp} from "react-icons/io";
import {useOutsideClick} from "../../hooks/useOutsideClick";

export const Select = ({data, setFieldValue, name, title}: any) => {
    const wrapperRef = useRef(null);

    const [openSelect, setOpenSelect] = useState(false)

    useOutsideClick(wrapperRef, () => {
        setTimeout(()=>{
            setOpenSelect(false)
        }, 500)
    })

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
                {data.map((el: any, index: any) => <li onClick={() => setFieldValue(title, {name: el.name, slug: el.slug})}
                                           key={index}>
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