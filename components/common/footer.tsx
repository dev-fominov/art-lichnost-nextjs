import React from "react";
import styles from "../../styles/common/footer.module.css";
import { A } from "./A";
import { Container } from "./container";
import Link from "next/link";
import { FaVk, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import logo from "./img/logo.png";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footBoxes}>
                    <div className={styles.footLogo}>
                        <A href={'/'}
                            text={<Image width={158}
                                height={48}
                                src={logo}
                                alt={'logo'} />} />
                        <div className={styles.footLogolinks}>
                            <A href={{
                                pathname: '/documents/[slag]',
                                query: { slag: 'privacy-policy', },
                            }}
                                text={'Политика конфиденциальности'} />
                            <A href={{
                                pathname: '/documents/[slag]',
                                query: { slag: 'user-agreement', },
                            }}
                                text={'Пользовательское соглашение'} />
                        </div>
                    </div>
                    <div className={styles.footMenu}>
                        <ul>
                            <li><A href={"/camp"} text={'Лагерь'} />
                                <ul>
                                    <li><A href={'/camp/professions'}
                                        text={'Лагерь профессий'} /></li>
                                    <li><A href={'/camp/skills'}
                                        text={'Лагерь навыков'} /></li>
                                    <li><A href={'/camp/tourist-holidays'}
                                        text={'Туристические каникулы'} /></li>
                                    <li><A href={"/merch"} text={'Мерч'} /></li>
                                </ul>
                            </li>
                            <li><A href={"/courses"} text={'Курсы'} /></li>
                            <li><A href={"/proftestirovanie"} text={'Профтестирование'} />
                                <ul>
                                    <li><A href={{
                                        pathname: '/proftestirovanie/[testirovanie]',
                                        query: { testirovanie: 'online-test', }
                                    }} text={'Онлайн-тестирование'} /></li>
                                    <li><A href={{
                                        pathname: '/proftestirovanie/[testirovanie]',
                                        query: { testirovanie: 'offline-test', }
                                    }} text={'Офлайн-тестирование'} /></li>
                                </ul>
                            </li>
                            <li><A href={"#"} target="_blank" text={'Еще'} />
                                <ul>
                                    <li><A href={"/psychologist"} text={'Психолог'} /></li>
                                    <li><A href={"/blog"} text={'Блоги'} /></li>
                                </ul>
                            </li>
                            <li><A href={"/about"} text={'О нас'} />
                                <ul>
                                    <li><A href={"/about"} text={'О компании'} /></li>
                                    <li><A href={"/team"} text={'Команда'} /></li>
                                    <li><A href={"/projects"} text={'Проекты'} /></li>
                                    <li><A href={"/vacancies"} text={'Вакансии'} /></li>
                                    <li><A href={"/contacts"} text={'Контакты'} /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.copy}>
                        <p>Санкт-Петербург</p>
                        <p>ArtLichnost Все права защищены. 2022</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

