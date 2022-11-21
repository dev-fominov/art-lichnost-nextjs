import {Field, Form, Formik} from "formik";
import styles from "../../styles/common/forms.module.css";

export const MerchForm = ({hiddenText}: any) => {
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
                        }}
                    onSubmit={async (values, {setSubmitting}) => {
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
                        })
                        setSubmitting(false)
                    }}
                    /* validationSchema={loginFormSchema}*/>
                    {({isSubmitting, setFieldValue, values}) => (
                        <Form>
                            <div>
                                <Field className={styles.form} type={'text'} name={'parentsName'}
                                       placeholder={'Имя родителя'}/>
                            </div>
                            <div>
                                <Field className={styles.form} type={'text'} name={'childName'}
                                       placeholder={'Фамилия родителя'}/>
                            </div>
                            <div>
                                <Field className={styles.form} type={'tel'} name={'userPhone'} placeholder={'Телефон'}/>
                            </div>
                            <button className={styles.submitButton} type={'submit'} disabled={isSubmitting}>Оставить
                                заявку
                            </button>
                            <div className={styles.confirmForm} onClick={() => {
                                setFieldValue('assent', !values.assent)
                            }}>
                                <div className={styles.radioLabel} > {values.assent === true
                                    ? <div className={styles.radioTrue}/>
                                    : <div className={styles.radioFalse}/>}
                                </div>
                                <label className={styles.checkboxLabel} htmlFor={'assent'}>
                                    Я согласен с обработкой и
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