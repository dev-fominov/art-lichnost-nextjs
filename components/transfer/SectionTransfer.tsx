import { Section } from "../common/Section";
import styles from '../../styles/contacts/section-contacts.module.css'
import { Forms } from "../common/FormsTransfer";
import { useRef } from "react";

export const SectionTransfer = ({ data }: any) => {
	// console.log(data)
	const ref = useRef<null | HTMLDivElement>(null);
	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<Section>
			<div className={styles.transferContainer}>

				<div className={styles.btn_title_down} onClick={() => handleClick()}>Оставить заявку на трансфер</div>

				<div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />

				<div ref={ref} className={styles.transferBox}>
					<Forms titleForForm={`Оставить заявку на трансфер`} transfer_po_marshrutu={data.transfer_po_marshrutu} transfer_po_marshrutu_2={data.transfer_po_marshrutu_2} vklyuchit_v_formu_camp={data.vklyuchit_v_formu_camp} vklyuchit_v_formu_city={data.vklyuchit_v_formu_city} opisanie_dlya_transfera_do_lagerya={data.opisanie_dlya_transfera_do_lagerya} opisanie_dlya_transfera_v_city={data.opisanie_dlya_transfera_v_city} stoimost_uslug={data.stoimost_uslug} confirm={data.link_to_oferta} hiddenText={`Оставить заявку на трансфер`} />
				</div>

			</div>
		</Section>
	)
}

