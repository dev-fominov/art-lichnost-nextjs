import {Field, Form, Formik} from "formik";
import styles from "../../styles/common/forms.module.css";
import {A} from "./A";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";

export const Forms = ({confirm, sandmail_url, pageName}: any) => {
    return (<div className={styles.formBlock}>
            <h4 className={styles.titleInnerForm}>Заполните форму заявки</h4>
            <div>
                <Formik
                    initialValues={
                        {
                            parentsName: "",
                            childName: "",
                            birthdate: '',
                            userEmail: '',
                            userPhone: '',
                            assent: true,
                            confirm: true,
                        }}
                    validate={values => {
                        const errors = {} as any;
                        if (!values.userEmail) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={async (values, {setSubmitting}) => {
                       /* const res = await fetch(sandmail_url, {
                            method: 'GET',
                            body: JSON.stringify({
                                parentsName: values.parentsName,
                                childName: values.childName,
                                birthdate: values.birthdate,
                                userEmail: values.userEmail,пше 
                                userPhone: values.userPhone,
                                pageName: pageName,
                            }),
                        })*/
                        setSubmitting(false)
                    }}
                    /* validationSchema={loginFormSchema}*/>
                    {({isSubmitting, values, setFieldValue}) => (
                        <Form>
                            <div>
                                <Field className={styles.form} type={'text'} name={'parentsName'}
                                       placeholder={'Фамилия и имя родителя'}/>
                            </div>
                            <div>
                                <Field className={styles.form} type={'text'} name={'childName'}
                                       placeholder={'Фамилия и имя ребенка'}/>
                            </div>
                            <div>
                                <label className={styles.birthdateLabel} htmlFor="birthdate">Дата рождения
                                    ребенка</label>
                                <Field className={styles.form} type={'date'} name={'birthdate'}
                                       timezone="[[timezone]]"/>
                            </div>
                            <div>
                                <Field className={styles.form} type={'text'} name={'userEmail'} placeholder={'Email'}/>
                            </div>
                            <div>
                                <Field className={styles.form} type={'tel'} name={'userPhone'} placeholder={'Телефон'}/>
                            </div>
                            <button className={styles.submitButton} type={'submit'} disabled={isSubmitting}>Оставить
                                заявку
                            </button>
                            <div className={styles.confirmForm}>
                                <div className={styles.radioLabel} onClick={() => {
                                    setFieldValue('assent', !values.assent)
                                }}> {values.assent === true
                                    ? <div className={styles.radioTrue}/>
                                    : <div className={styles.radioFalse}/>}
                                </div>
                                <label className={styles.checkboxLabel} htmlFor={'assent'}>
                                    Я согласен с обработкой и
                                    хранением указанных здесь персональных данных</label>
                                <br/>
                            </div>
                            {confirm && <div className={styles.confirmForm} style={{marginTop: '8px'}}>
                              <div className={styles.radioLabel} onClick={() => {
                                  setFieldValue('confirm', !values.confirm)
                              }}> {values.confirm === true
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
                            <span
                                className={styles.formDisclaimer}>Контактные данные не будут переданы третьим лицам</span>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )


}