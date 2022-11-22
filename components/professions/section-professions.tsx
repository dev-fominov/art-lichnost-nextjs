import React, {useEffect, useState} from "react";
import {Section} from "../common/section";
import {Description} from "./description";
import styles from '../../styles/professions/section-professions.module.css'
import SliderProfessions from "./slider-professions";
import {CustomAccordion} from "../common/accordion";
import {Forms} from "../common/forms";
import {A} from "../common/A";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ButtonGroup} from "../common/button-group";
import {useRouter} from "next/router";
import load from "../common/img/load.gif";
import Image from "next/image";
import logo from "../common/img/logo.png";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const SectionProfessions = ({data}: any) => {
    const router = useRouter()
    const {slug} = router.query

    const [slugProfi, setSlugProfi] = useState(data.shift_selection[0].slug)
    const [smena, setSmena] = useState({receivedData: false as any, loading: false})
    const [showModal, updateShowModal] = useState('');
    const [hiddenText, setHiddenText] = useState('');

    const responsive = {
        desktopFull: {
            breakpoint: {
                max: 3000,
                min: 1200
            },
            items: 4,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: {
                max: 1200,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 709,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30,
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 709
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    }

    useEffect(() => {
        data.shift_selection[0].slug && getSmena(data.shift_selection[0].slug)
        if (typeof slug !== 'undefined') {
            setSlugProfi(slug)
            getSmena(slug)
        }
    }, [slug])


    const getSmena = async (slug: any) => {
        setSmena({...smena, loading: true})
        const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/camp-changes/?camp=${data.id_page === 10
            ? 'professions'
            : data.id_page === 11
                ? 'skills'
                : 'tourist-holidays'}&slug=${slug}`)
        setSmena({receivedData: await res.json(), loading: false})
    }

    return (<Section>
            <Description img={data.description_img}
                         video={data.description_video}
                         text={data.description_text}/>
            {data.shift_selection && <div className={styles.reasonsProgram}>
              <h1 className={styles.titleInner}>Выбрать смену и профессию</h1>
              <ul className={styles.tablist}>
                  {data.shift_selection.map((el: any, index: number) => <li key={index}
                                                                            style={{
                                                                                backgroundColor: `${el.slug === slugProfi
                                                                                    ? '#30aa33'
                                                                                    : '#ffffff'}`
                                                                            }}
                                                                            onClick={() => {
                                                                                setSlugProfi(el.slug)
                                                                                getSmena(el.slug)
                                                                            }}>
                      <span style={{
                          color: `${el.slug === slugProfi
                              ? '#ffffff'
                              : '#000000'}`
                      }}>
                          {el.title}
                      </span>
                  </li>)}
              </ul>
                {smena.receivedData && <>
                  <div className={styles.sysProfi}>
                    <span className={styles.sistems}>Система PROFI</span>
                    <ul className={styles.listSkills}>
                        {smena.loading
                            ? <div className={styles.load}>
                                <Image width={100}
                                       priority={true}
                                       height={115}
                                       src={load}
                                       alt={'logo'}/>
                            </div>
                            : smena.receivedData.profi.card.map((item: any, index: any) => <li
                                key={index}>
                                {item.seats
                                    ? <span style={{background: '#30aa33'}} className={styles.onstock}>Есть места</span>
                                    : <span style={{background: '#eb3535'}} className={styles.onstock}>Нет места</span>}
                                <div className={styles.boxAlex}>
                                    <div onClick={() => updateShowModal(item.title)}
                                         className={item.seats
                                             ? styles.titleGreen
                                             : styles.titleRed}>
                                              <span style={{textDecoration: 'underline'}}>
                                                  {item.title}
                                              </span>
                                        <span>{item.age_title}</span>
                                    </div>
                                </div>
                                {showModal === item.title && <Modal styles={{
                                    modal: {position: 'relative', borderRadius: '40px', padding: 0},
                                    closeButton: {position: "absolute", top: '15px', right: '15px'}
                                }}
                                                                    open={showModal === item.title}
                                                                    onClose={() => updateShowModal('')}
                                                                    closeOnEsc
                                                                    center>
                                  <div className={styles.modalFlex}>
                                    <div className={styles.boxImgModal}>
                                      <img src={item.thumbnail_url.url} alt={item.thumbnail_url.alt}/>
                                    </div>
                                    <div className={styles.desc}>
                                      <div className={styles.boxAges}>
                                          {item.ages.map((item: any, index: any) => <div key={index} className={styles.ageMiniBox}>
                                              {item} лет
                                          </div>)}
                                      </div>
                                      <h6>Навык</h6>
                                      <h4>{item.title}</h4>
                                      <ul className={styles.descUl}>
                                        <li className={styles.descLi}>{item.period}</li>
                                        <li className={styles.descLi}>{item.location}</li>
                                      </ul>
                                      <p><div dangerouslySetInnerHTML={{__html: item.description}}/></p>
                                    </div>
                                  </div>
                                    {/*  <Forms confirm={data.link_to_oferta} hiddenText={`Заявка на ${data.id_page === 54
                  ? 'онлайн-тестирование'
                  : 'офлайн-тестирование'} для ${hiddenText}`}/>*/}
                                </Modal>}
                            </li>)}
                    </ul>
                    <div
                      className={styles.sistemsDescription}>{smena.receivedData.profi.description}</div>
                  </div>
                    {/* <div className={styles.bottomTab}>
                    <span className={styles.price}>Цена без учета сертификата — {+smena.receivedData.profi.price + +smena.receivedData.profi.price_certificate} рублей</span>
                    <span className={styles.price}>Размер компенсации (сертификата) — {smena.receivedData.profi.price_certificate}</span>
                  </div>*/}
                  <div className={styles.bottomTab}>
                    <span className={styles.price}>{smena.receivedData.price} руб</span>
                  </div>
                </>}
            </div>}
            <div className={styles.reasonsProgram}>
                <h3 className={styles.titleInner}>5 причин, почему нужно поехать в лагерь:</h3>
                <div className={styles.reasonBox}>
                    <div className={styles.answerBlock}>
                        <div className={styles.answerFor}>
                            <h2>
                            <span className={styles.circleForParents}>
                                {data.benefits_parents.length}
                            </span>
                                Для родителей
                            </h2>
                            <ul className={styles.listForParents}>
                                {data.benefits_parents.map((el: any, index: number) => <li key={index}>{el}</li>)}
                            </ul>
                        </div>
                        <div className={styles.answerFor}>
                            <h2>
                            <span className={styles.circleForKids}>
                                {data.benefits_children.length}
                            </span>
                                Для детей
                            </h2>
                            <ul className={styles.listForKids}>
                                {data.benefits_children.map((el: any, index: number) => {
                                    return <li key={index}>{el}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mesta_prozhivaniya}>
                <h3 className={styles.titleInner}>{data.prozhivanie_title}</h3>
                <div className={styles.prozhivanieDescription}
                     dangerouslySetInnerHTML={{__html: data.prozhivanie_description}}/>
                <SliderProfessions data={data.mesta_prozhivaniya}/>
            </div>
            <div className={styles.programDescription}>
                <div className={styles.whatText}>
                    <h3 className={styles.titleInner}>{data.programm_title}</h3>
                    <ul>
                        {data.programm.map((item: any, index: number) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.whatImg} style={{
                    background: `url(${data.programm_img.url}) no-repeat center center`,
                    backgroundSize: `cover`
                }}/>
            </div>
            {data.daily_regime && <div className={styles.modeDay}>
              <h3 className={styles.titleInner}>{data.daily_regime_title}</h3>
              <div className={styles.modeItem}>
                  {data.daily_regime && data.daily_regime.map((item: any, index: number) => <p key={index}>{item}<br/>
                  </p>)}
              </div>
            </div>}
            <div className={styles.priceBox}>
                <h3 className={styles.titleInner}>{data.includ_title}</h3>
                <div className={styles.priceIclude}
                     dangerouslySetInnerHTML={{__html: data.includ_content}}/>
            </div>
            {data.faq && <div className={styles.faqBox}>
              <h3 className={styles.titleInner}>Часто задаваемые вопросы</h3>
              <CustomAccordion data={data.faq}/>
            </div>}
            <div className={styles.reasonsProgram}>
                <h3 className={styles.titleInner}>Оформить заявку</h3>
                <div className={styles.formOrderBox}>
                    <Forms confirm={data.link_to_oferta} hiddenText={`Общая заявка со страницы ${data.id_page === 12
                        ? 'ТУРИСТИЧЕСКИЕ КАНИКУЛЫ'
                        : data.id_page === 11
                            ? 'ЛАГЕРЬ НАВЫКОВ'
                            : 'ЛАГЕРЬ ПРОФЕССИЙ'}`}/>
                    <div className={styles.formSteps}>
                        <h4>{data.request_title}</h4>
                        <ul>
                            {data.request.map((el: any, index: number) => {
                                return <li key={index}>{el}</li>
                            })}
                        </ul>
                        <div style={{
                            background: `url(${data.request_img.url}) no-repeat center center`,
                            backgroundSize: 'cover'
                        }}
                             className={styles.formStepImg}/>
                    </div>
                </div>
            </div>
            {data.past_shifts.length > 0 && <div className={styles.reasonsProgram}>
              <h1 className={styles.titleInner}>Прошедшие смены</h1>
              <div className={styles.containerBtn}>
                <Carousel slidesToSlide={1}
                          className={styles.carousel}
                          swipeable
                          focusOnSelect={false}
                          arrows={false}
                          renderButtonGroupOutside={true}
                          customButtonGroup={<ButtonGroup/>}
                          ssr
                          itemClass="image-item"
                          infinite
                          responsive={responsive}
                >
                    {data.past_shifts.map((el: any, index: number) => <div key={index}
                                                                           className={styles.carouselCard}>
                            <A href={`/camp/smena/${el.slug}`} text={<div
                                className={styles.boxImg}
                                draggable={false}
                                style={{
                                    background: `url(${el.thumbnail_url.url}) no-repeat center center`,
                                    backgroundSize: `cover`
                                }}>
                            </div>}/>
                            <div className={styles.boxLink}>
                                <h3 className={styles.postTitle}>{el.title}</h3>
                                <A href={`/camp/smena/${el.slug}`} text={'Узнать больше'}/>
                            </div>
                        </div>
                    )}
                </Carousel>
              </div>
            </div>}
        </Section>
    )
}

