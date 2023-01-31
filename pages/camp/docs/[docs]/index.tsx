import { HeaderGreen } from "../../../../components/common/HeaderGreen";
import { Section } from "../../../../components/common/Section";
import { Footer } from "../../../../components/common/Footer";
import Docs from "../../../../components/camp/Docs";
import Meta from "../../../../services/Meta";
import styles from "../../../../styles/camp/docs.module.css";
import { pageAPI } from "../../../../api/api";
import Image from "next/image";

const DocsPage = ({ data }: any) => {
	console.log(data)
	return (
		<>
			<Meta meta={data.metadata} />
			<HeaderGreen title={data.title} />
			<Section>
				<div className={styles.docs}>
					<h3 className={styles.titleInner}>{data.subtitle_docs}</h3>
					<div className={styles.medicalBlock} dangerouslySetInnerHTML={{ __html: data.content }} />
				</div>
				<div className={styles.docs}>
					<h3 className={styles.titleInner}>{data.medSpravki.title}</h3>

					<div className={styles.imgBox}>
						<img src={data.medSpravki['img-med']} alt="" />
					</div>

				</div>

				<div className={styles.docsSection}>
					<ul className={styles['medical-info-table']}>
						<li className={styles['head-info-table']}>
							<div className={styles['item-head']}>Название справки</div>
							<div className={styles['item-head']}>Где берут?</div>
							<div className={styles['item-head']}>Когда?</div>
							<div className={styles['item-head']}>Комментарий</div>
						</li>
						<li className={styles['body-info-table']}>
							<div className={styles['item-table-count']}>1</div>
							<div className={styles['item-table-title']}>Форма 079 – У <br />Справка на школьника, отъезжающего в лагерь</div>
							<div className={styles['item-table-loc']}>В школе (медкабинет)</div>
							<div className={styles['item-table-time']}>Последняя учебная неделя до выезда на смену</div>
							<div className={styles['item-table-comm']}>Должно быть указано отсутствие карантина в школе и в классе. Печать медкабинета обязательна!</div>
						</li>
						<li className={styles['body-info-table']}>
							<div className={styles['item-table-count']}>2</div>
							<div className={styles['item-table-title']}>Форма 063 <br />Справка о прививках</div>
							<div className={styles['item-table-loc']}>В школе или в поликлинике, к которой прикреплена школа</div>
							<div className={styles['item-table-time']}>За несколько дней до выезда на смену.</div>
							<div className={styles['item-table-comm']}>Особое внимание на реакцию Манту и Корь! Срок годности реакции на туберкулез – 1 год. Прививка от кори двухкратная вакцинация, для лагеря достаточно иметь первый этап (ставят ребенку в 6 месяцев)</div>
						</li>
						<li className={styles['body-info-table']}>
							<div className={styles['item-table-count']}>3</div>
							<div className={styles['item-table-title']}>Результаты анализа на яйцеглист</div>
							<div className={styles['item-table-loc']}>В платной или городской поликлинике</div>
							<div className={styles['item-table-time']}>За несколько дней до выезда на смену. Справка действительна с летней смены.</div>
							<div className={styles['item-table-comm']}>Необходимо предоставлять анализы для детей всех возрастов.</div>
						</li>
						<li className={styles['body-info-table']}>
							<div className={styles['item-table-count']}>4</div>
							<div className={styles['item-table-title']}>Результаты анализа на энтеробиоз</div>
							<div className={styles['item-table-loc']}>В платной или городской поликлинике</div>
							<div className={styles['item-table-time']}>За несколько дней до выезда на смену. Справка действительна с летней смены.</div>
							<div className={styles['item-table-comm']}>Необходимо предоставлять анализы для детей всех возрастов.</div>
						</li>
						<li className={styles['body-info-table']}>
							<div className={styles['item-table-count']}>5</div>
							<div className={styles['item-table-title']}>Справка об эпидокружении по месту жительства</div>
							<div className={styles['item-table-loc']}>Важно! Только в городской поликлинике!</div>
							<div className={styles['item-table-time']}>За 72 часа до выезда.</div>
							<div className={styles['item-table-comm']}>Обязательна фраза «инфекционных заболеваний не зарегистрировано, в том числе Сovid`19»</div>
						</li>
					</ul>
				</div>

				<div className={styles.docsSection}>
					<h3 className={styles.titleInner}>Мы не сможем принять ребенка в лагерь, в случае если:</h3>
					<ul className={styles.medicalBlock}>
						<li>В классе есть карантин по коронавирусной инфекции;</li>
						<li>У ребенка просрочена диагностика туберкулёза (Манту/Диаскин сделаны более года назад);</li>
						<li>В школе есть карантин по ветряной оспе и ребенок НЕ болел этим заболеванием (перенесенное заболевание должно быть зафиксировано врачом);</li>
						<li>В классе есть любой другой карантин, срок которого не истекает к началу заезда;</li>
						<li>Зафиксирован карантин по месту жительства, в том числе если в квартире с ребенком совместно проживает человек с подтвержденной коронавирусной инфекцией.</li>
					</ul>
				</div>
				<div className={styles.docsSection}>
					<h3 className={styles.titleInner}>Часто задаваемые вопросы</h3>
					<div className={styles["mini-faq-box"]}>
						<div className={styles["mfb-title"]}>1. В нашей школе справки по форме 079 не выдают. Где её получить?</div>
						<div className={styles["mfb-text"]}>Справку 079 можно получить у своего педиатра (в городской или коммерческой поликлинике)</div>
					</div>
					<div className={styles["mini-faq-box"]}>
						<div className={styles["mfb-title"]}>2. Нужно ли брать 63 форму в том случае, если все прививки вписаны в форму 079?</div>
						<div className={styles["mfb-text"]}>Не нужно. Проконтролируйте, пожалуйста, чтобы все прививки (в первую очередь реакция Манту/Диаскинтест и прививка от кори) действительно были вписаны в 079 форму.</div>
					</div>
					<div className={styles["mini-faq-box"]}>
						<div className={styles["mfb-title"]}>3. Мы не успели поставить вовремя реакцию Манту! Что мы можем сделать?</div>
						<div className={styles["mfb-text"]}>Кроме реакции Манту/Диаскин-тест, можно предоставить Флюорографию-справку (на ребенка с 14 лет) или заключение фтизиатра о допуске ребёнка в лагерь или временный медотвод.</div>
					</div>
					<div className={styles["mini-faq-box"]}>
						<div className={styles["mfb-title"]}>4. Подробнее о прививке от кори:</div>
						<div className={styles["mfb-text"]}>Ребёнок должен быть привит от кори по возрасту (двукратная вакцинация), а при отклонении от прививочного календаря – иметь результат анализа крови на антитела к кори со значением IgG>0,18 или медотвод или заверенный педиатром отказ от прививок.</div>
					</div>
					<div className={styles["mini-faq-box"]}>
						<div className={styles["mfb-title"]}>5. А можно ли копию прививочного сертификата вам предоставить?</div>
						<div className={styles["mfb-text"]}>Да, можно, при условии, что копия данного сертификата заверена в медпункте школы или в городской поликлинике.</div>
					</div>
					<div className={styles["mini-faq-box"]}>
						<div className={styles["mfb-title"]}>6. Почему справку об эпидокружении нельзя взять в платной поликлинике?</div>
						<div className={styles["mfb-text"]}>Вся информация об инфекционных заболеваниях стекается только в государственные поликлиники.</div>
					</div>
					<div className={styles["mini-faq-box"]}>
						<div className={styles["mfb-title"]}>7. Ребенок прописан по одному адресу, а проживает по-другому. Где брать справку об эпидокружении?</div>
						<div className={styles["mfb-text"]}>Данную справку вы получаете по месту жительства в городской поликлинике.</div>
					</div>
					<div className={styles["mini-faq-box"]}>
						<div className={styles["mfb-title"]}>8. Нужно ли ребенку сдавать ПЦР-тест для заезда в лагерь?</div>
						<div className={styles["mfb-text"]}>Нет, сдавать тест ребенку не требуется.</div>
					</div>
				</div>

				<Docs title={'Посмотреть другое'}
					data={data.docs} />
			</Section>
			<Footer />
		</>
	)
}

export default DocsPage

/*export async function getStaticPaths() {
		const data = await pageAPI.camp()
		const paths = data.docs.map((item: any) => ({
				params: {docs: item.slug},
		}))
		return {paths, fallback: false}
}*/

export async function getServerSideProps(context: any) {
	const data = await pageAPI.docs(context.params.docs)
	return {
		props: {
			data
		}
	};
}
