import React from "react";
import {Section} from "../common/section";
import {Description} from "./description";
import styles from '../../styles/professions/section-professions.module.css'
import SliderProfessions from "./slider-professions";
import {CustomAccordion} from "../common/accordion";
import {Forms} from "../common/forms";
import {A} from "../common/A";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const SectionProfessions = ({data}: any) => {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
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
    return (<Section>
            <Description img={data.description_img}
                         video={data.description_video}
                         text={data.description_text}/>
            <div className={styles.reasonsProgram}>
                <h1 className={styles.titleInner}>Выбрать смену и профессию</h1>
                <ul className={styles.tablist}>
                    {/* {data.shift_selection.map((el: any, index: number) => <li key={index}>
                        {el}
                    </li>)}*/}
                </ul>
            </div>


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
            <div className={styles.faqBox}>
                <h3 className={styles.titleInner}>Часто задаваемые вопросы</h3>
                <CustomAccordion data={data.faq}/>
            </div>
            <div className={styles.reasonsProgram}>
                <h3 className={styles.titleInner}>Оформить заявку</h3>
                <div className={styles.formOrderBox}>
                    <Forms/>
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
            <div className={styles.reasonsProgram}>
                <h1 className={styles.titleInner}>Прошедшие смены</h1>
                <Carousel
                    slidesToSlide={1}
                    className={styles.carousel}
                    swipeable
                    focusOnSelect={false}
                    arrows
                    ssr
                    itemClass="image-item"
                    infinite
                    responsive={responsive}
                >
                    {data.past_shifts.map((el: any, index: number) => <div key={index}
                                                                           className={styles.carouselCard}>
                            <A href={`/smena/${el.slug}`} text={<div
                                className={styles.boxImg}
                                style={{
                                    background: `url(${el.thumbnail_url.url}) no-repeat center center`,
                                    backgroundSize: `cover`
                                }}>
                            </div>}/>
                            <div className={styles.boxLink}>
                                <h3 className={styles.postTitle}>{el.title}</h3>
                                <A href={`/smena/${el.slug}`} text={'Узнать больше'}/>
                            </div>
                        </div>
                    )}
                </Carousel>
            </div>
        </Section>
    )
}

