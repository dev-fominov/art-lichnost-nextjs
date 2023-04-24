import { Field, Form, Formik } from "formik";
import styles from "../../styles/common/forms.module.css";
import { A } from "./A";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import React from "react";
// @ts-ignore
import MaskedInput from "react-text-mask";
import { appAPI, baseURLSite } from "../../api/api";
import { useRouter } from "next/router";

export const Forms = ({ confirm, hiddenText, titleForForm, transfer_po_marshrutu, transfer_po_marshrutu_2, transfer_po_marshrutu_3, transfer_po_marshrutu_4 }: any) => {
	const [showModal, setShowModal] = React.useState(false)
	const [showLoading, setShowLoading] = React.useState(false)
	const { asPath } = useRouter();
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
		<h4 className={styles.titleInnerForm}>Оставить заявку на трансфер</h4>
		<div>
			<Formik
				initialValues={
					{
						parentsName: '',
						childName: '',
						birthdate: '',
						userEmail: '',
						userPhone: '',
						transfer_po_marshrutu: '',
						transfer_po_marshrutu_2: '',
						assent: false,
						confirm: false,
					}}
				validate={values => {
					const errors = {} as any;
					if (!values.userEmail) {

					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)) {
						errors.userEmail = 'Некорректный email адрес';
					} else if (values.transfer_po_marshrutu.length <= 0 || values.transfer_po_marshrutu_2.length <= 0 ) {
						errors.transfer_po_marshrutu = 'Заполните все поля'
					}
					return errors;
				}}


				onSubmit={async (values, { setSubmitting, resetForm }) => {
					setShowLoading(true)
					resetForm()
					await appAPI.commonFormTransfer(JSON.stringify({
						parentsName: values.parentsName,
						childName: values.childName,
						birthdate: values.birthdate,
						userEmail: values.userEmail,
						userPhone: values.userPhone,
						hiddenText: hiddenText,
						titleForForm: titleForForm,
						transfer_po_marshrutu: values.transfer_po_marshrutu,
						transfer_po_marshrutu_2: values.transfer_po_marshrutu_2,
						assent: values.assent,
						confirm: values.confirm,
						linkForForm: baseURLSite + asPath.split('?')[0]
					})
					).then((data) => {
						console.log(data)
						setShowLoading(false)
						setShowModal(true)
						setTimeout(() => {
							setShowModal(false)

							return
						}, 3000)
					}
					)
					setSubmitting(false)
				}}>
				{({
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
								name={'childName'}
								placeholder={'ФИО ребенка'} />
						</div>
						<div>
							<label className={styles.birthdateLabel} htmlFor="birthdate">
								Дата рождения ребенка
							</label>
							<Field className={styles.form}
								required
								type={'date'}
								name={'birthdate'}
								timezone="[[timezone]]" />
						</div>
						<div>
							<Field className={styles.form}
								required
								type={'text'}
								name={'parentsName'}
								placeholder={'ФИО родителя/законного представителя'} />
						</div>
						<div>
							<Field required
								type={'tel'}
								name={'userPhone'}
								placeholder={'Телефон родителя/законного представителя'}
								render={({ field }: any) => (
									<MaskedInput
										{...field}
										required
										mask={phoneNumberMask}
										id="userPhone"
										placeholder='Телефон родителя/законного представителя'
										type="tel"
										onChange={handleChange}
										onBlur={handleBlur}
										className={styles.form}
									/>
								)}
							/>
						</div>
						<div>
							<Field className={styles.form}
								required
								type={'text'} name={'userEmail'}
								placeholder={'E-mail родителя/законного представителя'} />
						</div>
						<div className={styles.select}>
							<label className={styles.birthdateLabel} htmlFor="transfer_po_marshrutu">
								Трансфер по маршруту до лагеря (СПб, Выборгское шоссе, 5 до ДОЛ Золотая Долина)
							</label>
							<Field as="select" name="transfer_po_marshrutu">
								<option value="no_route">Выберите смену</option>
								{transfer_po_marshrutu.map((el: any, i: any) => <option key={i} value={el}>{el}</option>)}
							</Field>
						</div>
						<div className={styles.select}>
							<label className={styles.birthdateLabel} htmlFor="transfer_po_marshrutu_2">
								Трансфер по маршруту в город (ДОЛ Золотая Долина до СПб, Выборгское шоссе, 5)
							</label>
							<Field as="select" name="transfer_po_marshrutu_2">
								<option value="no_route">Выберите смену</option>
								{transfer_po_marshrutu_2.map((el: any, i: any) => <option key={i} value={el}>{el}</option>)}
							</Field>
						</div>
						<span className={styles.birthdateLabel}>Стоимость услуг в одну сторону составляет 250 (двести пятьдесят) рублей.</span>
						<button className={styles.submitButton}
							style={{ cursor: `${!values.assent || !values.confirm || Object.keys(errors).length > 0 ? 'no-drop' : 'pointer'}` }}
							type={'submit'}
							disabled={!values.assent || !values.confirm || Object.keys(errors).length > 0}>
							{showLoading ? 'Загрузка...' : 'Оставить заявку'}
						</button>
						<div className={styles.confirmForm}
							onClick={() => setFieldValue('assent', !values.assent)}>
							<div className={styles.radioLabel}>
								{values.assent === true
									? <div className={styles.radioTrue} />
									: <div className={styles.radioFalse} />}
							</div>
							<label className={styles.checkboxLabel} htmlFor={'assent'}>
								Я согласен с обработкой и
								хранением указанных здесь персональных данных
							</label>
							<br />
						</div>
						{confirm && <div className={styles.confirmForm}
							style={{ marginTop: '8px' }}
							onClick={() => {
								setFieldValue('confirm', !values.confirm)
							}}>
							<div className={styles.radioLabel}>
								{values.confirm === true
									? <div className={styles.radioTrue} />
									: <div className={styles.radioFalse} />}
							</div>
							<label className={styles.checkboxLabel} htmlFor={'assent'}>
								<p>С условиями <A href={{
									pathname: '/contract/[slug]',
									query: { slug: confirm, },
								}}
									text={'договора оферты'} />  ознакомлен и согласен</p>
							</label>
							<br />
						</div>}
						<span className={styles.formDisclaimer}>
							Контактные данные не будут переданы третьим лицам
						</span>
						<div className={styles.formError}>{errors.userEmail}</div>
						<div className={styles.formError}>{errors.transfer_po_marshrutu}</div>

					</Form>
				)}
			</Formik>
		</div>
		{showModal && <Modal styles={{
			modal: { position: 'relative', borderRadius: '40px', padding: 0, background: "none" },
			closeButton: { position: "absolute", top: '15px', right: '15px' },
		}}
			open={showModal}
			onClose={showModalHandler}
			closeOnEsc
			center>
			<div className={styles.modal}>
				Заявка отправлена,<br /> мы свяжемся с Вами в ближайшее время
			</div>
		</Modal>}
	</div>
	)
}