import {Field, Form, Formik } from "formik";
import styles from "../../styles/common/forms.module.css";

export const Forms = () => {
 return (<div className={styles.formBlock}>
         <h4 className={styles.titleInnerForm}>Заполните форму заявки</h4>
         <div>
             <Formik
                 initialValues={{parentsName: "", childName: "", birthdate: '', email: '', phone:'', assent: true}}
                 validate={values => {
                     const errors = {} as any;
                     if (!values.email) {
                         errors.email = 'Required';
                     } else if (
                         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                     ) {
                         errors.email = 'Invalid email address';
                     }
                     return errors;
                 }}
                 onSubmit={(values,{setSubmitting, setStatus}) => {
                     setSubmitting(false)
                 }}
               /* validationSchema={loginFormSchema}*/>
                 {({isSubmitting}) => (
                     <Form>
                         <div>
                             <Field className={styles.form} type={'text'} name={'parentsName'} placeholder={'Фамилия и имя родителя'}/>
                         </div>
                         <div>
                             <Field className={styles.form} type={'text'} name={'childName'} placeholder={'Фамилия и имя ребенка'}/>
                         </div>
                         <div>
                             <label className={styles.birthdateLabel} htmlFor="birthdate">Дата рождения ребенка</label>
                             <Field className={styles.form} type={'date'} name={'birthdate'} timezone="[[timezone]]"/>
                         </div>
                         <div>
                             <Field className={styles.form} type={'text'} name={'email'} placeholder={'Email'}/>
                         </div>
                         <div>
                             <Field className={styles.form} type={'tel'} name={'phone'} placeholder={'Телефон'}/>
                         </div>
                         <button className={styles.submitButton} type={'submit'} disabled={isSubmitting}>Оставить заявку</button>
                         <div className={styles.confirmForm}>
                             <Field className={styles.checkbox} type={'checkbox'} name={'assent'}/>
                             <label className={styles.checkboxLabel}  htmlFor={'assent'}>Я согласен с обработкой и хранением указанных здесь персональных данных</label>
                             <br/>
                         </div>
                         <span className={styles.formDisclaimer}>Контактные данные не будут переданы третьим лицам</span>
                     </Form>
                 )}
             </Formik>
         </div>
     </div>
 )


}