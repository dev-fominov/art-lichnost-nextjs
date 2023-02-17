import React, { useState } from "react";
import { Section } from "../common/Section";
import styles from '../../styles/psychologist/section-psychologist.module.css'
import { Forms } from "../common/Forms";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal/dist";
import Image from 'next/image'

export const SectionPsychologist = ({ data }: any) => {
	const [showModal, updateShowModal] = useState(false);
	const [hiddenText, setHiddenText] = useState('');
	const showModalHandler = () => updateShowModal(!showModal);

	return (
		<Section>
			<div className={styles.questionBlock}>
				<div className={styles.questionTitle}>
					{data.title_first}
				</div>
				<div className={styles.answerBlock}>
					<div className={styles.answerFor}>
						<h2>
							<span className={styles.circleForKids}>
								{data.issues_addressed.for_kids.vaprosy_1.length}
							</span>
							Для детей
						</h2>
						<ul className={styles.listForKids}>
							{data.issues_addressed.for_kids.vaprosy_1.map((el: any, index: number) => {
								return <li key={index}>{el}</li>
							})}
						</ul>
						<div className={styles.btnPriceBox}>
							<div className={styles.btnOrder}>
								<button className={styles.btnRed} onClick={() => {
									setHiddenText('детей')
									showModalHandler()
								}}>Записаться
								</button>
							</div>
							<div className={styles.priceTime}>
								<div className={styles.price}>{data.issues_addressed.for_kids.price_1[0]}</div>
								<div className={styles.price}>{data.issues_addressed.for_kids.price_1[1]}</div>
							</div>
						</div>
					</div>
					<div className={styles.answerFor}>
						<h2>
							<span className={styles.circleForParents}>
								{data.issues_addressed.for_parents.vaprosy_1.length}
							</span>
							Для родителей
						</h2>
						<ul className={styles.listForParents}>
							{data.issues_addressed.for_parents.vaprosy_1.map((el: any, index: number) => {
								return <li key={index}>{el}</li>
							})}
						</ul>
						<div className={styles.btnPriceBox}>
							<div className={styles.btnOrder}>
								<button className={styles.btnRed} onClick={() => {
									setHiddenText('родителей')
									showModalHandler()
								}}>Записаться
								</button>
							</div>
							<div className={styles.priceTime}>
								<div className={styles.price}>{data.issues_addressed.for_parents.price_1[0]}</div>
								<div className={styles.price}>{data.issues_addressed.for_parents.price_1[1]}</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div>
				<div className={styles.contentPsychologist}>{data.title_psychologist_art_lichnost}</div>
				<div className={styles.contentBlock}>
					<div className={styles.itemPsychologist}>
						<div className={styles.itemPsychologistTop}>
							<div className={styles.itemPsychologistTopImage}>
								<Image layout="fill"
									quality={30}
									src={data.psihologi_art_lichnosti[0].image.url}
									alt={data.psihologi_art_lichnosti[0].image.alt} />
							</div>
							<div className={styles.itemPsychologistTopRightInfo}>
								<div
									className={styles.rightInfoTitle}>{data.psihologi_art_lichnosti[0].title_item}</div>
								<div
									className={styles.rightInfoSubTitle}>{data.psihologi_art_lichnosti[0].job_title}</div>
							</div>
						</div>
						<div className={styles.itemPsychologistBottom}>
							<p>{data.psihologi_art_lichnosti[0].description}</p>
						</div>
					</div>
					<div className={styles.itemPsychologist}>
						<div className={styles.itemPsychologistTop}>
							<div className={styles.itemPsychologistTopImage}>
								<Image layout="fill"
									quality={30}
									src={data.psihologi_art_lichnosti[1].image.url}
									alt={data.psihologi_art_lichnosti[1].image.alt} />
							</div>
							<div className={styles.itemPsychologistTopRightInfo}>
								<div
									className={styles.rightInfoTitle}>{data.psihologi_art_lichnosti[1].title_item}</div>
								<div
									className={styles.rightInfoSubTitle}>{data.psihologi_art_lichnosti[1].job_title}</div>
							</div>
						</div>
						<div className={styles.itemPsychologistBottom}>
							<p>{data.psihologi_art_lichnosti[1].description}</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h3 className={styles.titleInner}>Оформить заявку</h3>
				<div className={styles.formOrderBox}>
					<Forms titleForForm={'Психолог'} confirm={data.link_to_oferta} hiddenText={"Заявка на общую консультацию психолога"} />
					<div className={styles.formSteps}>
						<h4>{data.steps_form_title}</h4>
						<ul>
							{data.steps_form_items.map((el: any, index: number) => {
								return <li key={index}>{el}</li>
							})}
						</ul>
						<div style={{
							background: `url(${data.img_steps_form.url}) no-repeat center center`,
							backgroundSize: 'cover'
						}}
							className={styles.formStepImg} />
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
				<Forms titleForForm={`Психолог для ${hiddenText}`} confirm={data.link_to_oferta} hiddenText={`Заявка на консультацию психолога для ${hiddenText}`} />
			</Modal>}
		</Section>
	)
}

