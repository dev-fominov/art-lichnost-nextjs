import { Section } from "../common/Section";
import styles from '../../styles/contacts/section-contacts.module.css'
import { Forms } from "../common/FormsTransfer";

export const SectionTransfer = ({ data }: any) => {
	// console.log(data)
	return (
		<Section>
			<div className={styles.transferContainer}>

				

				<div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />

				<div className={styles.transferBox}>
					{/* <h3 style={{ marginTop: '50px' }}>Оставить заявку на трансфер</h3> */}
					<Forms titleForForm={`Оставить заявку на трансфер`} transfer_po_marshrutu={data.transfer_po_marshrutu} transfer_po_marshrutu_2={data.transfer_po_marshrutu_2} transfer_po_marshrutu_3={data.transfer_po_marshrutu_3} transfer_po_marshrutu_4={data.transfer_po_marshrutu_4} confirm={data.link_to_oferta} hiddenText={`Оставить заявку на трансфер`} />
				</div>

			</div>
		</Section>
	)
}

