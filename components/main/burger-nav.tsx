import React, {useEffect, useRef, useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai'
import styles from '../../styles/main/burger-nav.module.css'
import {A} from "../common/A";
import Link from "next/link";
import {BurgerNavModule} from "./burger-nav-module";
import {clickOutside} from "../common/clickOutside";


function BurgerNav() {
    const wrapperRef = useRef(null);
    let [menuIsOpen, setMenuIsOpen] = useState(false)
    const burgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    clickOutside(wrapperRef, () => {
        setMenuIsOpen(false);
    });
    return (
        <div className={styles.burgerNav}>
            <div ref={wrapperRef}
                 className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                <BurgerNavModule menuIsOpen={menuIsOpen} title={<A text={'Лагерь'} href={'/camp'}/>}>
                    <A text={'Лагерь профессий'}
                       href={'/camp/professions'}/>
                    <A text={'Лагерь навыков'}
                       href={'/camp/skills'}/>
                    <A text={'Туристические каникулы'}
                       href={'/camp/tourist-holidays'}/>
                    <A text={'Мерч'} href={'/merch'}/>
                </BurgerNavModule>
                <div className={styles.itemTitle}><A text={'Курсы'} href={'/courses'}/></div>
                <BurgerNavModule menuIsOpen={menuIsOpen}
                                 title={<A text={'Профтестирование'} href={'/proftestirovanie'}/>}>
                    <A text={'Онлайн-тестирование'} href={{
                        pathname: '/proftestirovanie/[testirovanie]',
                        query: {testirovanie: 'online-test',}
                    }}/>
                    <A text={'Офлайн-тестирование'} href={{
                        pathname: '/proftestirovanie/[testirovanie]',
                        query: {testirovanie: 'offline-test',}
                    }}/>
                </BurgerNavModule>
                <BurgerNavModule menuIsOpen={menuIsOpen} title={<A text={'О нас'} href={'/about'}/>}>
                    <A text={'О компании'} href={'/about'}/>
                    <A text={'Команда'} href={'/team'}/>
                    <A text={'Проекты'} href={'/projects'}/>
                    <A text={'Вакансии'} href={'/vacancies'}/>
                </BurgerNavModule>
                <BurgerNavModule menuIsOpen={menuIsOpen} title={<A text={'Ещё'} href={'#!'}/>}>
                    <A text={'Психолог'} href={'/psychologist'}/>
                    <A text={'Блоги'} href={'/blog'}/>
                </BurgerNavModule>
                <div className={styles.itemTitle}><A text={'Контакты'} href={"/contacts"}/></div>
                <div className={styles.contact}>
                    <Link href={"tel:+78125079790"}><a target="_blank">(812) 507-97-90</a></Link>
                    <span>Санкт-Петербург</span>
                </div>
            </div>
            <div onClick={burgerBtnClick} className={styles.burgerBtn}>{menuIsOpen ?
                <AiOutlineClose style={{color: '#30AA33'}}/> :
                <GiHamburgerMenu/>}</div>
        </div>
    );
}

export default BurgerNav;



