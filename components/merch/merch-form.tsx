import {Field, Form, Formik} from "formik";
import styles from "../../styles/common/forms.module.css";
import {Modal} from "react-responsive-modal";
import "react-responsive-modal/styles.css";
// @ts-ignore
import MaskedInput from "react-text-mask";
import {useState} from "react";

export const MerchForm = ({hiddenText}: any) => {
    const [showModal, setShowModal] = useState(false)
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

    return (
        <div className={styles.formBlock}>
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
                    }}>
                    {({
                          setFieldValue,
                          values,
                          handleChange,
                          handleBlur
                      }) => (
                        <Form>
                            <div>
                                <Field required
                                       className={styles.form}
                                       type={'text'}
                                       name={'parentsName'}
                                       placeholder={'Имя родителя'}/>
                            </div>
                            <div>
                                <Field required
                                       className={styles.form}
                                       type={'text'}
                                       name={'childName'}
                                       placeholder={'Фамилия родителя'}/>
                            </div>
                            <div>
                                <Field required
                                       className={styles.form}
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
                                       )}/>
                            </div>
                            <button className={styles.submitButton}
                                    type={'submit'}
                                    style={{cursor: `${!values.assent ? 'no-drop' : 'pointer'}`}}
                                    disabled={!values.assent}>
                                Оставить
                                заявку
                            </button>
                            <div className={styles.confirmForm} onClick={() => setFieldValue('assent', !values.assent)}>
                                <div className={styles.radioLabel}>
                                    {values.assent === true
                                        ? <div className={styles.radioTrue}/>
                                        : <div className={styles.radioFalse}/>}
                                </div>
                                <label className={styles.checkboxLabel} htmlFor={'assent'}>
                                    Я согласен с обработкой и
                                    хранением указанных здесь персональных данных
                                </label>
                                <br/>
                            </div>
                            <span
                                className={styles.formDisclaimer}>Контактные данные не будут переданы третьим лицам</span>
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