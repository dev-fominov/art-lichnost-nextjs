import {Field, Form, Formik} from "formik";
import styles from "../../styles/common/forms.module.css";

export const MerchForm = () => {
    return (<div className={styles.formBlock}>
            <h4 className={styles.titleInnerForm}>Заполните форму заявки</h4>
            <div>
                <Formik
                    initialValues={{parentsName: "", surname: "", phone: '', assent: true}}
                    onSubmit={(values, {setSubmitting, setStatus}) => {
                        setSubmitting(false)
                    }}
                    /* validationSchema={loginFormSchema}*/>
                    {({isSubmitting}) => (
                        <Form>
                            <div>
                                <Field className={styles.form} type={'text'} name={'parentsName'}
                                       placeholder={'Имя родителя'}/>
                            </div>
                            <div>
                                <Field className={styles.form} type={'text'} name={'surname'}
                                       placeholder={'Фамилия родителя'}/>
                            </div>
                            <div>
                                <Field className={styles.form} type={'tel'} name={'phone'} placeholder={'Телефон'}/>
                            </div>
                            <button className={styles.submitButton} type={'submit'} disabled={isSubmitting}>Оставить
                                заявку
                            </button>
                            <div className={styles.confirmForm}>
                                <Field className={styles.checkbox} type={'checkbox'} name={'assent'}/>
                                <label className={styles.checkboxLabel} htmlFor={'assent'}>Я согласен с обработкой и
                                    хранением указанных здесь персональных данных</label>
                                <br/>
                            </div>
                            <span
                                className={styles.formDisclaimer}>Контактные данные не будут переданы третьим лицам</span>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )


}