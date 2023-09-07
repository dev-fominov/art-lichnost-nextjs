import { Section } from "../common/Section";
import Program from "./Program";
import Reviews from "./Reviews";
import Merch from "./Merch";
import Docs from "./Docs";
import { Testdrive } from "./Testdrive";

export const SectionCamp = (props: any) => {
	const propsRef = props.propsRef
	const propsRef1 = props.propsRef1
	const propsRef2 = props.propsRef2
	const data = props.data

	

	return (
		<Section>
			{data.camps.map((el: any, index: number) => {
			let camps_card = el.camp_card.filter((el:any) => el.add_page_to_site)
				return (
					camps_card.length > 0
						? <Program
							key={el.term_id}
							data={el}
							propsRef={propsRef}
							propsRef1={propsRef1}
							propsRef2={propsRef2}
							index={index}
						/>
						: <></>)
			})}

			{data.test_drive.checkbox && <Testdrive data={data.test_drive} />}
			<Reviews data={data.reviews} />
			<Merch data={data.merch} />
			<Docs data={data.docs} title={'Забронировал, что дальше?'} />
		</Section>
	)
}

