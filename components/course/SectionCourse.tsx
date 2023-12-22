import { Section } from "../common/Section";
import styles from '../../styles/course/section-course.module.css'
import { Forms } from "../common/Forms";

export const SectionCourse = ({ data }: any) => {

	return (
		<Section>
			<div className={styles.boxContent}>
				<div className={styles.title}>
					{/* {data.description_course.title} */}
				</div>
				<div className={styles.description}>
					{data.description_course?.description}
				</div>
				<div className={styles.age}>
					{data.description_course?.ages}
				</div>
			</div>
			<div className={styles.boxContent}>
				<div className={styles.boxCoursesDots}>
					<div className={styles.left}>
						<div className={styles.title}>
							{data.description_course.title}
						</div>
						<ul>
							{data.description_course.list_problem.map((item: any, index: any) => <li key={index}>
								{item}
							</li>)}
						</ul>
					</div>
					<div className={styles.right}>
						<img src={data.description_course.img.url} alt={data.description_course.img.alt} />
					</div>
				</div>
			</div>
			<div className={styles.boxContent}>
				<div className={styles.boxCoursesProgramm}>
					<div className={styles.leftProgramm}>
						<div className={styles.title}>
							{data.what_we_do.to_do_title}
						</div>
						<ul>
							{data.what_we_do.to_do_list.map((item: any, index: any) => <li
								key={index}>— {item}</li>)}
						</ul>
					</div>
					<div className={styles.rightProgramm}>
						<div className={styles.title}>
							{data.what_we_do.course_outcome_title}
						</div>
						<ul>
							{data.what_we_do.course_outcome_list.map((item: any, index: any) => <li key={index}>
								<span>{index + 1}</span> {item}
							</li>)}
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.boxContent}>
				<ul className={styles.aboutCourse}>
					{data.what_we_do.about_course.map((item: any, index: any) => <li key={index}>
						{item}
					</li>)}
				</ul>
			</div>
			<div className={styles.boxContent}>
				<div className={styles.boxCoursesUser}>
					<div className={styles.leftUser}>
						<div className={styles.leftContent}>
							<div className={styles.leftBox}>
								<img src={data.educator.photo.url} alt={data.educator.photo.alt} />
							</div>
							<div className={styles.rightBox}>
								<div className={styles.title}>
									{data.educator.name}
								</div>
								<div className={styles.description}>
									{data.educator.position}
								</div>
							</div>
						</div>
					</div>
					<div className={styles.rightUser}>
						<div className={styles.title}>
							Стоимость
						</div>
						<div style={{ 'display': 'flex', 'marginBottom': '20px' }}>
							{data.educator.price && <div style={{ 'width': '50%'}}>
								<div className={styles.price} style={{ 'margin': '0px 10px 5px 0px', 'width': 'max-content' }}>
									{data.educator.price} рублей
								</div>
								{data.educator.description1 && <span className={styles.description}>{data.educator.description1}</span>}
							</div>}
							{data.educator.price2 && <div style={{ 'width': '50%'}}>
								<div className={styles.price} style={{ 'margin': '0px 0px 5px 0px', 'width': 'max-content' }}>
									{data.educator.price2} рублей
								</div>
								{data.educator.description2 && <span className={styles.description}>{data.educator.description2}</span>}
							</div>}
						</div>
						<div className={styles.description}>
							{data.educator.one_time_fee
								? '*стоимость можно разбить на две равные части'
								: ''}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.boxContent}>
				<h3 className={styles.title}>Оформить заявку</h3>
				<div className={styles.formOrderBox}>
					<Forms titleForForm={data.title} confirm={data.link_to_oferta} hiddenText={`Заявка на курс '${data.title}'`} />
					<div className={styles.formSteps}>
						<h4>{data.step_form.steps_form_title}</h4>
						<ul>
							{data.step_form.steps_form_items.map((el: any, index: number) => <li key={index}>{el}</li>)}
						</ul>
						<div style={{
							background: `url(${data.step_form.img_steps_form.url}) no-repeat center center`,
							backgroundSize: 'cover'
						}}
							className={styles.formStepImg} />
					</div>
				</div>
			</div>
		</Section>
	)
}

