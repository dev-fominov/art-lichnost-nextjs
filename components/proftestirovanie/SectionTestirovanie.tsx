import React, {useState} from "react";
import {Section} from "../common/Section";
import styles from '../../styles/proftestirovanie/section-testirovanie.module.css'
import {Forms} from "../common/Forms";
import {CustomAccordion} from "../common/Accordion";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";


const SectionTestirovanie = ({data}: any) => {
    const [showModal, updateShowModal] = useState(false)
    const [hiddenText, setHiddenText] = useState('')
    let color = data.id_page === 54 ? {color: '#FF822E'} : {}

    const showModalHandler = () => updateShowModal(!showModal)

    const pageName = data.id_page === 54 ? 'Онлайн-тестирование' : 'Офлайн-тестирование'

    return (<Section>
            <div className={styles.medicalBlock}>
                <h3 className={styles.titleInner}>{data.need_test[0].title}</h3>
                <ul>
                    {data.need_test[0].list.map((item: any, index: any) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div className={styles.testBlock}>
                {data.type_of_test.map((item: any, index: any) => <div key={index} className={styles.orderTest}>
                    <span style={color}>Тесты</span>
                    <h4 style={color}>{item.for_whom}</h4>
                    <p>{item.title}</p>
                    <ul className={styles.listFor}>
                        {item.list_descr.map((el: any, index: number) => <li key={index}>{el}</li>)}
                    </ul>
                    <div className={styles.btnPriceBox}>
                        <div className={styles.btnOrder}>
                            <button className={styles.btnRed}
                                    onClick={() => {
                                        setHiddenText(item.for_whom)
                                        showModalHandler()
                                    }}>
                                Записаться
                            </button>
                        </div>
                        <div className={styles.priceTime}>
                            <div className={styles.price}>
                                {item.price}
                            </div>
                            <div className={styles.price}>
                                {item.time}
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className={styles.medicalBlock}>
                <h3 className={styles.titleInner}> Как проводится онлайн-тестирование?</h3>
                {data.stages_test.map((item: any, index: any) => <div key={index} className={styles.stepItem}>
                    <div className={styles.stepImg}>
                        <span style={data.id_page === 54 ? {backgroundColor: '#FF822E',} : {}}>{index + 1}</span>
                        <img src={item.img.url} alt={item.img.alt}/>
                    </div>
                    <div className={styles.stepDesc}>
                        <div className={styles.stepTitle}>
                            {item.title}
                        </div>
                        <div className={data.id_page === 54 ? styles.stepTextColor : styles.stepText}>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>)}
            </div>
            {data.what_need.need_list && <div className={styles.medicalBlock}>
              <h3 className={styles.titleInner}>{data.what_need.title}</h3>
              <div className={styles.boxWhatNeed}>
                <div className={styles.needItem}>
                  <div className={styles.needInfo}>
                      {data.what_need.description}
                  </div>
                  <div className={styles.needInfoSmall}>
                      {data.what_need.description_2}
                  </div>
                </div>
                <ul>
                    {data.what_need.need_list.map((el: any, index: number) => <li key={index}>{el}</li>)}
                </ul>
              </div>
            </div>}
            <div className={styles.medicalBlock}>
                <h3 className={styles.titleInner}>Консультанты выбора профессий</h3>
                {data.consultants.map((item: any, index: any) => {
                        return <div key={index} className={styles.consultantBox}>
                            <div className={styles.consImg}>
                                <img src={item.img.url} alt={item.img.alt}/>
                            </div>
                            <div className={styles.consName}>
                                <div className={styles.name}>
                                    {item.name}
                                </div>
                                <div className={styles.status}>
                                    {item.job_title}
                                </div>
                            </div>
                            <div className={styles.consText}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    }
                )}
            </div>
            <div className={styles.medicalBlock}>
                <h3 className={styles.titleInner}>Часто задаваемые вопросы</h3>
                <CustomAccordion data={data.faq}/>
            </div>
            <div className={styles.formStepsBox}>
                <h3 className={styles.titleInner}>Оформить заявку</h3>
                <div className={styles.formOrderBox}>
                    <Forms titleForForm={pageName} confirm={data.link_to_oferta} hiddenText={`Общая заявка на ${pageName}`}/>
                    <div className={styles.formSteps}>
                        <h4>{data.step_form.steps_form_title}</h4>
                        <ul>
                            {data.step_form.steps_form_items.map((el: any, index: number) => <li key={index}>{el}</li>)}
                        </ul>
                        <div style={{
                            background: `url(${data.step_form.img_steps_form.url}) no-repeat center center`,
                            backgroundSize: 'cover'
                        }}
                             className={styles.formStepImg}/>
                    </div>
                </div>
            </div>
            {showModal && <Modal styles={{
                modal: {position: 'relative', borderRadius: '40px', padding: 0},
                closeButton: {position: "absolute", top: '15px', right: '15px'}
            }}
                                 open={showModal}
                                 onClose={showModalHandler}
                                 closeOnEsc
                                 center>
              <Forms titleForForm={`${pageName} для ${hiddenText}`} confirm={data.link_to_oferta} hiddenText={`Заявка на ${pageName} для ${hiddenText}`}/>
            </Modal>}
        </Section>
    )
}

export default SectionTestirovanie