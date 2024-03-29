import { Navbar } from "../main/Navbar";
import { Container } from "../common/Container";
import styles from "../../styles/camp/camp.module.css";
import GreenLineMob from "../../components/common/img/green-line-mob.svg";
import RedLineMob from "../../components/common/img/red-line-mob.svg";
import BlueLineMob from "../../components/common/img/blue-line-mob.svg";
import * as React from "react";

export const ContentHeader = (props: any) => {
	
	const titleArr = ['ПРОФЕССИИ', 'НАВЫКИ', 'COMMUNITY']

	const handleClick = (index: number) => {
		props.handleClick(index)
	}
	
	return (
		<>
			<Navbar />
			<div className={styles.lineBoxMob}>
				<RedLineMob height="722" className={styles.redLineMob} />
				<BlueLineMob className={styles.blueLineMob} />
				<GreenLineMob width="750" className={styles.greenLineMob} />
			</div>
			<Container>
				<div className={styles.contentBox}>
					<h1 className={styles.heading}>Детский лагерь в Ленобласти 7-17 лет</h1>
					<div className={styles.headingSub}>Старт продаж лета — февраль 2024</div>
					<div className={styles.content}>
						{titleArr.map((item: any, index: any) => {
							const color = item === 'ПРОФЕССИИ'
								? '#30AA33'
								: item === 'НАВЫКИ'
									? '#7B8BFF'
									: '#EB3535'
							const style = item === 'ПРОФЕССИИ'
								? styles.titleGreen
								: item === 'НАВЫКИ'
									? styles.titleBlue
									: styles.titleRed
							return <div key={index} className={styles.itemBox}>
								<div className={styles.titleBox}>
									<div
										className={`${styles.title} ${style}`}
										style={{ backgroundColor: color }}
										onClick={() => handleClick(index)}
									>
										{item.toUpperCase()}
									</div>
								</div>
							</div>
						})}
					</div>
				</div>
			</Container>
		</>
	)
}