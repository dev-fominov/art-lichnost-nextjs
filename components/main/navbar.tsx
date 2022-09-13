import styles from "../../styles/main/navbar.module.css";
import {A} from "../common/A";
import Link from "next/link";
import {Container} from "../common/container";
import {FaVk, FaYoutube} from 'react-icons/fa'
import {GrFacebookOption} from 'react-icons/gr'
import {Dropdown} from "../common/dropdown";
import BurgerNav from "./burger-nav";

export const Navbar = () => {
    return (<div className={styles.headTop}>
        <Container>
            <div className={styles.headTopInner}>
                <div className={styles.logo}>
                    <A href={'/'}
                       text={<img
                           src={'https://art-lichnost.ru/wp-content/themes/art_person_1/img/logo-aleksandr.svg'}/>}/>
                </div>
                <BurgerNav/>
                <div className={styles.menu}>
                    <div className={styles.menuItems}>
                        <Dropdown title={'Лагерь'} path={'/camp'} itemMenu={campMenu}/>
                        <Dropdown title={'Курсы'} path={'/courses'}/>
                        <Dropdown title={'Профтестирование'} path={'/programmes/proftestirovanie_school'} itemMenu={programmesMenu}/>
                        <Dropdown title={'О нас'} path={'/about'} itemMenu={aboutMenu}/>
                        <Dropdown title={'Ещё'} path={'#!'} itemMenu={blogsMenu}/>
                        <Dropdown title={'Контакты'} path={"/contacts"}/>
                    </div>
                </div>
                <div className={styles.contact}>
                    <Link href={"tel:+78125079790"}><a target="_blank">(812) 507-97-90</a></Link>
                    <p>Санкт-Петербург</p>
                    <div className={styles.socialHead}>
                        <Link href={"https://vk.com/artlichnost"}><a target="_blank"><FaVk/></a></Link>
                        <Link href={"https://www.facebook.com/ARTLICHNOST"}><a
                            target="_blank"><GrFacebookOption/></a></Link>
                        <Link href={"https://www.youtube.com/user/ArtLichnost"}><a
                            target="_blank"><FaYoutube/></a></Link>
                    </div>
                </div>
            </div>
        </Container>
    </div>)
}

const campMenu = [{path: '/programs/4-smena-2', text: 'Лагерь профессий',},
    {path: '/programs/3-smena', text: 'Лагерь навыков'},
    {path: '/programs/3-smena-14-dnej-31-iyulya-13-avgusta-copy', text: 'Туристические каникулы'},
    {path: '/merch', text: 'Мерч'},]

const programmesMenu = [{path: '/tests/online-test', text: 'Онлайн-тестирование',},
    {path: '/tests/offline-test', text: 'Офлайн-тестирование'},]

const aboutMenu = [{path: '/about', text: 'О компании',},
    {path: '/team', text: 'Команда'},
    {path: '/projects', text: 'Проекты'},
    {path: '/jobs', text: 'Вакансии'}]

const blogsMenu = [{path: '/psychologist', text: 'Психолог',},
    {path: '/blog', text: 'Блоги'}]


