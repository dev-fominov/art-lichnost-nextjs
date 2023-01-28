import { A } from "./A";
import styles from '../../styles/Home.module.css'
import { Section } from "./Section";
import { pageAPI } from "../../api/api";
import Program from "../camp/Program";
import { NextPage } from "next";

const Page404 = ({ data }: any) => {
	return (
		<>
			<Section>
				<div className={styles.contentBox}>
					<h2>Зато найдены новые смены в лагерь</h2>
					{data.camps.map((el: any) => el.count > 0
						? <Program key={el.term_id} data={el} />
						: <></>)}
				</div>
			</Section>
		</>
	)
}

export default Page404