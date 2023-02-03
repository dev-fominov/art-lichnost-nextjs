import type { NextPage } from 'next'
import * as React from "react";
import { Footer } from "../../components/common/Footer";
import { SectionCamp } from "../../components/camp/SectionCamp";
import Filter from "../../components/camp/Filter";
import Meta from "../../services/Meta";
import { ContentHeader } from "../../components/camp/ContentHeader";
import { pageAPI } from "../../api/api";
import Description from "../../components/camp/Description";
import { Container } from "../../components/common/Container";
import styles from "../../styles/camp/camp.module.css";
import { Header } from "../../components/common/Header";
import { useEffect, useState } from "react";
import GreenLine from "../../components/common/img/green-line.svg";
import BlueLine from "../../components/common/img/blue-line.svg";
import RedLine from "../../components/common/img/red-line.svg";
import RedLineTop from "../../components/common/img/red-line-top.svg";
import BlueLineTop from "../../components/common/img/blue-line-top.svg";
import GreenLineTop from "../../components/common/img/green-line-top.svg";
import { useRef } from "react";

const Camp: NextPage = ({ data }: any) => {
	const [height, setHeight] = useState(0)

	const VIDEO_WIDTH = 1920;
	const VIDEO_HEIGHT = 1080;

	useEffect(() => {
		let element = document.getElementById('container');
		const handleClick = () => {
			setHeight(element?.clientHeight as number)
		}
		if (typeof window !== 'undefined') {
			element?.addEventListener("DOMSubtreeModified", handleClick);
		}
		return () => element?.removeEventListener("DOMSubtreeModified", handleClick);
	}, [])

	const ref = useRef<null | HTMLDivElement>(null);
	const ref1 = useRef<null | HTMLDivElement>(null);
	const ref2 = useRef<null | HTMLDivElement>(null);

	const handleClick = (index: number) => {
		if (index === 0) {
			ref.current?.scrollIntoView({ behavior: 'smooth' })
		}
		if (index === 1) {
			ref1.current?.scrollIntoView({ behavior: 'smooth' })
		}
		if (index === 2) {
			ref2.current?.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div style={{ overflow: "hidden" }}>
			<Meta meta={data.metadata} />
			{data.background_video
				? <div style={{ position: "relative" }} className="video-background">
					<iframe
						width={VIDEO_WIDTH}
						height={VIDEO_HEIGHT}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						src={`https://www.youtube.com/embed/${data.background_video}?autoplay=1&controls=0&rel=0&showinfo=0&mute=1&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fart-lichnost.ru&widgetid=1`}
					/>
					<ContentHeader handleClick={handleClick} />
				</div>
				: <Header banner={data.background_img.url}>
					<ContentHeader />
				</Header>}
			<div id={'container'} className={styles.lineContainer}>
				<div className={styles.lineBoxTop}>
					<RedLineTop className={styles.redLineTop} />
					<BlueLineTop className={styles.blueLineTop} />
					<GreenLineTop className={styles.greenLineTop} />
				</div>
				<div className={styles.lineBox}>
					<Container>
						{data.camps[0].count > 0 &&
							<GreenLine className={styles.greenLine} height={`${height - 2800}`} />}
						{data.camps[1].count > 0 && <BlueLine className={styles.blueLine} height={`${height - 2470}`} />}
						{data.camps[2].count > 0 && <RedLine className={styles.redLine} height={`${height - 1700}`} />}
					</Container>
				</div>
				{/* <div >rew0</div>
				<div >rew1</div>
				<div ref={ref2}>rew2</div> */}
				<Description data={''} />
				<Filter data={data.filter} />
				<SectionCamp propsRef={ref} propsRef1={ref1} propsRef2={ref2} data={data} />
			</div>
			<Footer />
		</div>
	)
}

export default Camp

export async function getServerSideProps() {
	const data = await pageAPI.camp()
	return {
		props: {
			data
		}
	};
}