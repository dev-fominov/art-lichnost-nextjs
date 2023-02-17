import React, { useState } from "react";


import s from '../../styles/camp/testdrive.module.css'
import Modal from "react-responsive-modal";
import { Forms } from "../common/Forms";




export const Testdrive = ({ data }: any) => {

	const [showModal, updateShowModal] = useState(false);
	// const [hiddenText, setHiddenText] = useState('');
	const showModalHandler = () => updateShowModal(!showModal);

	return (
		<>
			<div className={s.test_drive_section}>
				<div className={s.left}>
					<div className={s.subtitle}>{data.subtitle}</div>
					<div className={s.title}>{data.title}</div>
					<div className={s.description}>{data.opisanie_test}</div>
					<div className={s.box1}>
						<div className={s.title_box}>Условия участия</div>
						<div className={s.description_box}>{data.usloviya_uchastiya}</div>
					</div>
					<div className={s.box2}>
						<div className={s.title_box}>Адрес</div>
						<div className={s.description_box}>{data.adres_test}</div>
					</div>
				</div>
				<div className={s.right}>
					<div className={s.box3}>
						<div className={s.title_box}>Для кого?</div>
						<ul className={s.listForKids}>
							{data.dlya_kogo.map((el: any, index: number) => {
								return <li key={index}>{el}</li>
							})}
						</ul>
					</div>
					<div className={s.box4}>
						<div className={s.btn}>
							<button className={s.btnRed} onClick={() => {
								showModalHandler()
							}}>Записаться
							</button>
						</div>
						<div className={s.text}>{data.zapis_na_test}</div>
					</div>
				</div>
			</div>
			{showModal && <Modal styles={{
				modal: { position: 'relative', borderRadius: '40px', padding: 0 },
				closeButton: { position: "absolute", top: '15px', right: '15px' }
			}}
				open={showModal}
				onClose={showModalHandler}
				closeOnEsc
				center>
				<Forms titleForForm={`Тест-драйв лагеря`} confirm={data.link_to_oferta} hiddenText={`Заявка на тест-драйв лагеря`} />
			</Modal>}
		</>
	)
}