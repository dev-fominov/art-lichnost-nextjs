import styles from "../../styles/main/navbar.module.css";
import {A} from "../common/A";
import Link from "next/link";
import {Container} from "../common/Container";
import {FaVk, FaYoutube} from 'react-icons/fa'
import {GrFacebookOption} from 'react-icons/gr'
import {Dropdown} from "../common/Dropdown";
import BurgerNav from "./BurgerNav";
import logo from "../common/img/logo.png"
import Image from 'next/image'

export const Navbar = () => {
    return (
        <div className={styles.headTop}>
            <Container>
                <div className={styles.headTopInner}>
                    <div className={styles.logo}>
                        <A href={'/'}
                           text={<Image width={158}
                                        height={48}
                                        src={logo}
                                        alt={'logo'}/>}/>
                    </div>
                    <BurgerNav/>
                    <div className={styles.menu}>
                        <div className={styles.menuItems}>
                            <Dropdown title={'Лагерь'} path={'/camp'} itemMenu={campMenu}/>
                            <Dropdown title={'Курсы'} path={'/courses'}/>
                            <Dropdown title={'Профтестирование'} path={'/proftestirovanie'}
                                      itemMenu={programmesMenu}/>
                            <Dropdown title={'О нас'} path={'/about'} itemMenu={aboutMenu}/>
                            <Dropdown title={'Ещё'} path={'/psychologist'} itemMenu={blogsMenu}/>
                            <Dropdown title={'Контакты'} path={"/contacts"}/>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <Link href={"tel:+78127010919"}>
                            <a target="_blank">(812) 701-09-19</a>
                        </Link>
                        <p>Санкт-Петербург</p>
                        <div className={styles.socialHead}>
                            <Link href={"https://vk.com/artlichnost"}>
                                <a target="_blank"><FaVk/></a>
                            </Link>
                            <Link href={"https://www.facebook.com/ARTLICHNOST"}>
                                <a target="_blank"><GrFacebookOption/></a>
                            </Link>
                            <Link href={"https://www.youtube.com/user/ArtLichnost"}>
                                <a target="_blank"><FaYoutube/></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>)
}

const campMenu = [
    {path: '/camp/professions', text: 'Лагерь профессий',},
    {path: '/camp/skills', text: 'Академия навыков'},
    {path: '/camp/art-community', text: 'ART Community'},
    {path: '/merch', text: 'Мерч'},]

const programmesMenu = [
    {
        path: {
            pathname: '/proftestirovanie/[testirovanie]',
            query: {testirovanie: 'online-test',}
        },
        text: 'Онлайн-тестирование'
    },
    {
        path: {
            pathname: '/proftestirovanie/[testirovanie]',
            query: {testirovanie: 'offline-test',}
        },
        text: 'Офлайн-тестирование'
    },
]

const aboutMenu = [{path: '/about', text: 'О компании',},
    {path: '/team', text: 'Команда'},
    {path: '/projects', text: 'Проекты'},
    {path: '/vacancies', text: 'Вакансии'}]

const blogsMenu = [{path: '/psychologist', text: 'Психолог',},
    {path: '/blog', text: 'Блоги'}]


