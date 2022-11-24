import {Field, Form, Formik} from "formik";
import styles from "../../styles/common/forms.module.css";
import {A} from "./A";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import React from "react";
// @ts-ignore
import MaskedInput from "react-text-mask";

export const Forms = ({confirm, hiddenText}: any) => {
    const [showModal, setShowModal] = React.useState(false)
    const [showLoading, setShowLoading] = React.useState(false)
    const showModalHandler = () => setShowModal(false)

    const phoneNumberMask = [
        '+',
        '7',
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
    ];

    return (<div className={styles.formBlock}>
            <h4 className={styles.titleInnerForm}>Заполните форму заявки</h4>
            <div>
                <Formik
                    initialValues={
                        {
                            parentsName: '',
                            childName: '',
                            birthdate: '',
                            userEmail: '',
                            userPhone: '',
                            assent: true,
                            confirm: true,
                        }}
                    validate={values => {
                        const errors = {} as any;
                        if (!values.userEmail) {

                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)
                        ) {
                            errors.userEmail = 'Некорректный email адрес';
                        }
                        return errors;
                    }}
                    onSubmit={async (values, {setSubmitting, resetForm}) => {
                        setShowLoading(true)
                        resetForm()
                        const res = await fetch('https://alex-volkov.ru/wp-json/art/v1/send-mail/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                parentsName: values.parentsName,
                                childName: values.childName,
                                birthdate: values.birthdate,
                                userEmail: values.userEmail,
                                userPhone: values.userPhone,
                                hiddenText: hiddenText,
                            }),
                        }).then((res) => {
                                setShowLoading(false)
                                setShowModal(true)
                                setTimeout(() => {
                                    setShowModal(false)
                                    return
                                }, 3000)
                            }
                        )
                        setSubmitting(false)
                    }}
                    /* validationSchema={loginFormSchema}*/>
                    {({
                          isSubmitting,
                          values,
                          setFieldValue,
                          errors,
                          handleChange,
                          handleBlur,
                      }) => (
                        <Form>
                            <div>
                                <Field className={styles.form}
                                       required
                                       type={'text'}
                                       name={'parentsName'}
                                       placeholder={'Фамилия и имя родителя'}/>
                            </div>
                            <div>
                                <Field className={styles.form}
                                       required
                                       type={'text'}
                                       name={'childName'}
                                       placeholder={'Фамилия и имя ребенка'}/>
                            </div>
                            <div>
                                <label className={styles.birthdateLabel} htmlFor="birthdate">Дата рождения
                                    ребенка</label>
                                <Field className={styles.form}
                                       required
                                       type={'date'}
                                       name={'birthdate'}
                                       timezone="[[timezone]]"/>
                            </div>
                            <div>
                                <Field className={styles.form}
                                       required
                                       type={'text'} name={'userEmail'}
                                       placeholder={'Email'}/>
                            </div>
                            <div>
                                <Field required
                                       type={'tel'}
                                       name={'userPhone'}
                                       placeholder={'Телефон'}
                                       render={({field}: any) => (
                                           <MaskedInput
                                               {...field}
                                               required
                                               mask={phoneNumberMask}
                                               id="userPhone"
                                               placeholder='Телефон'
                                               type="tel"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               className={styles.form}
                                           />
                                       )}
                                />
                            </div>
                            <button className={styles.submitButton}
                                    style={{cursor: `${!values.assent || !values.confirm ? 'no-drop': 'pointer'}`}}
                                    type={'submit'}
                                    disabled={!values.assent || !values.confirm}>
                                {showLoading ? 'Загрузка...' : 'Оставить заявку'}
                            </button>
                            <div className={styles.confirmForm} onClick={() => {
                                setFieldValue('assent', !values.assent)
                            }}>
                                <div className={styles.radioLabel}> {values.assent === true
                                    ? <div className={styles.radioTrue}/>
                                    : <div className={styles.radioFalse}/>}
                                </div>
                                <label className={styles.checkboxLabel} htmlFor={'assent'}>
                                    Я согласен с обработкой и
                                    хранением указанных здесь персональных данных</label>
                                <br/>
                            </div>
                            {confirm && <div className={styles.confirmForm}
                                             style={{marginTop: '8px'}}
                                             onClick={() => {
                                                 setFieldValue('confirm', !values.confirm)
                                             }}>
                              <div className={styles.radioLabel}> {values.confirm === true
                                  ? <div className={styles.radioTrue}/>
                                  : <div className={styles.radioFalse}/>}
                              </div>
                              <label className={styles.checkboxLabel} htmlFor={'assent'}>
                                <p>Нажимая на кнопку, вы соглашаетесь с</p>
                                <A href={{
                                    pathname: '/documents/[slag]',
                                    query: {slag: confirm,},
                                }}
                                   text={'договором оферты'}/>
                              </label>
                              <br/>
                            </div>}
                            <span className={styles.formDisclaimer}>
                                Контактные данные не будут переданы третьим лицам
                            </span>
                            <div className={styles.formError}>{errors.userEmail}</div>
                        </Form>
                    )}
                </Formik>
            </div>
            {showModal && <Modal styles={{
                modal: {position: 'relative', borderRadius: '40px', padding: 0, background: "none"},
                closeButton: {position: "absolute", top: '15px', right: '15px'},
            }}
                                 open={showModal}
                                 onClose={showModalHandler}
                                 closeOnEsc
                                 center>
              <div className={styles.modal}>
                Заявка отправлена,<br/> мы свяжемся с Вами в ближайшее время
              </div>
            </Modal>}
        </div>
    )


}