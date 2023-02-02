import styles from '../../styles/camp/description.module.css'
import { Section } from "../common/Section";

const Description = ({ }: any) => {

	const data = [
		{
			title: 'ПРОФЕССИИ',
			description: 'В лагере профессий ребенок сможет на практике понять из чего состоит конкретная деятельность',
		},
		{
			title: 'НАВЫКИ',
			description: 'В академии навыков дети осваивают самые важные для будущего навыки через игровую модель.',
		},
		{
			title: 'COMMUNITY',
			description: 'В комьюнити подростки развиваются в кругу единомышленников, берут вызовы и помогают друг другу.',
		},
	]


	return (
		<Section>
			<div className={styles.descriptionBox}>
				{data.map((item: any, index: any) => {
					const color = item.title === 'ПРОФЕССИИ'
						? '#30AA33'
						: item.title === 'НАВЫКИ'
							? '#7B8BFF'
							: '#EB3535'
					return <div key={index} className={styles.itemBox} style={{ border: `1px solid ${color}` }}>
						<div className={styles.titleBox}>
							<div className={styles.title} style={{ backgroundColor: color }}>{item.title.toUpperCase()}</div>
						</div>
						<div className={styles.description}>{item.description}</div>
					</div>
				})}
			</div>
		</Section>
	)
}

export default Description