import {Section} from "../common/Section";
import styles from '../../styles/project/section-issledovanie.module.css'

export const SectionIssledovanie = ({data}: any) => {
    return (
        <Section>
            <div className={styles.boxList}>
                <div className={styles.list}>
                    <div className={styles.titleRed}>{data.studies.title_hh}</div>
                    <div className={styles.description}>{data.studies.description_hh}</div>
                </div>
                <div className={styles.list}>
                    <div className={styles.title}>{data.studies.title_art}</div>
                    <div className={styles.description}>{data.studies.description_art}</div>
                </div>
            </div>
            <div className={styles.boxList}>
                {data.staff.map((item: any, index: any) => <div key={index} className={styles.itemStaff}>
                    <div className={styles.top}>
                        <div className={styles.image}>
                            <img src={item.photo.url} alt={item.photo.alt}/>
                        </div>
                        <div className={styles.rightInfo}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.position}>{item.position}</div>
                        </div>
                    </div>
                    <div className={styles.bottom}><p><span/>{item.description}</p></div>
                </div>)}
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.study_description.title}</div>
                <div className={styles.contentDescription}>
                    <div className={styles.left}>{data.study_description.description}</div>
                    <div className={styles.right}>
                        <img src={data.study_description.img.url} alt={data.study_description.img.alt}/>
                    </div>
                </div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.thanks_block.title}</div>
                <ul className={styles.contentLi}>
                    {data.thanks_block.list.map((item: any, index: any) => <li key={index}>
                        {item}
                    </li>)}
                </ul>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.introduction_block.title}</div>
                <ul className={styles.contentList}>
                    {data.introduction_block.list.map((item: any, index: any) => <li key={index}>
                        <span>{item.title}</span>
                        <img src={item.img.url} alt={item.img.alt}/>
                    </li>)}
                </ul>
            </div>
            <div className={styles.boxList}>
                <img className={styles.imgBlock} src={data.img_block.url} alt={data.img_block.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.important_criteria.title}</div>
                <div className={styles.description}
                     dangerouslySetInnerHTML={{__html: data.important_criteria.description}}/>
                <img className={styles.imgFull} src={data.important_criteria.img.url}
                     alt={data.important_criteria.img.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.important_criteria_teen.title}</div>
                <img className={styles.imgFull} src={data.important_criteria_teen.img.url}
                     alt={data.important_criteria_teen.img.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.soft_skills.title}</div>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: data.soft_skills.description}}/>
                <div className={styles.content}>
                    <img src={data.soft_skills.img.url} alt={data.soft_skills.img.alt}/>
                    <div className={styles.text}>{data.soft_skills.text}</div>
                </div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.skills_assessment.title}</div>
                <div className={styles.descriptionGray}>{data.skills_assessment.description}</div>
                <img className={styles.imgFull} src={data.skills_assessment.img.url}
                     alt={data.skills_assessment.img.alt}/>
                <div className={styles.descriptionGray}>{data.skills_assessment.text}</div>
                <div className={styles.descriptionGray}>{data.skills_assessment.description2}</div>
                <img className={styles.imgFull} src={data.skills_assessment.img2.url}
                     alt={data.skills_assessment.img2.alt}/>
                <div className={styles.descriptionGray}>{data.skills_assessment.description3}</div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.work_direction.title}</div>
                <div className={styles.descriptionGray}>{data.work_direction.description}</div>
                <img className={styles.imgFull} src={data.skills_assessment.img.url}
                     alt={data.skills_assessment.img.alt}/>
                <div className={styles.descriptionGray}>{data.work_direction.description2}</div>
                <img className={styles.imgFull} src={data.work_direction.img2.url} alt={data.work_direction.img2.alt}/>
                <div className={styles.descriptionGray}>{data.work_direction.description3}</div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.contentBox}>
                    <div className={styles.leftBox}>
                        <div className={styles.titleBlack}>{data.feedback.title}</div>
                        <div className={styles.description}
                             dangerouslySetInnerHTML={{__html: data.feedback.description}}/>
                        <img src={data.feedback.img.url} alt={data.feedback.img.alt}/>
                    </div>
                    <div className={styles.rightBox}>
                        <img src={data.feedback.img2.url} alt={data.feedback.img2.alt}/>
                    </div>
                </div>
                <div style={{marginTop: '30px'}} className={styles.titleBlack}>{data.feedback.title2}</div>
                <div className={styles.descriptionGray}>{data.feedback.description2}</div>
                <img className={styles.imgFull} src={data.feedback.img3.url} alt={data.feedback.img3.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.hire.title}</div>
                <div className={styles.descriptionGray}>{data.hire.description}</div>
                <img className={styles.imgFull} src={data.hire.img.url}
                     alt={data.hire.img.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.popular_skills.title}</div>
                <div className={styles.description}
                     dangerouslySetInnerHTML={{__html: data.popular_skills.description}}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.where_to_work.title}</div>
                <div className={styles.descriptionGray}>{data.where_to_work.description}</div>
                <img className={styles.imgFull} src={data.where_to_work.img.url}
                     alt={data.where_to_work.img.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.position.title}</div>
                <div className={styles.descriptionGray}>{data.position.description}</div>
                <img className={styles.imgFull} src={data.position.img.url}
                     alt={data.position.img.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.occupation.title}</div>
                <div className={styles.descriptionGray}>{data.occupation.description}</div>
                <img className={styles.imgFull} src={data.occupation.img.url}
                     alt={data.occupation.img.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.skills.title}</div>
                <div className={styles.descriptionGray}>{data.skills.description}</div>
                <img className={styles.imgFull} src={data.skills.img.url}
                     alt={data.skills.img.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.skills.title_diligence}</div>
                <div className={styles.descriptionGray}>{data.skills.description_diligence}</div>
                <img className={styles.imgFull} src={data.skills.img_diligence.url}
                     alt={data.skills.img_diligence.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.skills.title_logical_thinking}</div>
                <div className={styles.descriptionGray}>{data.skills.description_logical_thinking}</div>
                <img className={styles.imgFull} src={data.skills.img_logical_thinking.url}
                     alt={data.skills.img_logical_thinking.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.skills.title_self_criticism}</div>
                <div className={styles.descriptionGray}>{data.skills.description_self_criticism}</div>
                <img className={styles.imgFull} src={data.skills.img_self_criticism.url}
                     alt={data.skills.img_self_criticism.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.skills.title_erudition}</div>
                <div className={styles.descriptionGray}>{data.skills.description_erudition}</div>
                <img className={styles.imgFull} src={data.skills.img_erudition.url}
                     alt={data.skills.img_self_criticism.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.skills.title_intuition}</div>
                <div className={styles.descriptionGray}>{data.skills.description_intuition}</div>
                <img className={styles.imgFull} src={data.skills.img_intuition.url}
                     alt={data.skills.img_self_criticism.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.skills.title_еvaluation}</div>
                <img className={styles.imgFull} src={data.skills.img_еvaluation.url}
                     alt={data.skills.img_еvaluation.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.contentBox}>
                    <div className={styles.leftBox}>
                        <div className={styles.titleBlack}>{data.teenager_at_work.title}</div>
                        <div className={styles.description}
                             dangerouslySetInnerHTML={{__html: data.teenager_at_work.description}}/>
                    </div>
                    <div className={styles.rightBoxImg}>
                        <img className={styles.img1} src={data.teenager_at_work.img1.url}
                             alt={data.teenager_at_work.img1.alt}/>
                        <img className={styles.img2} src={data.teenager_at_work.img2.url}
                             alt={data.teenager_at_work.img2.alt}/>
                        <img className={styles.img3} src={data.teenager_at_work.img3.url}
                             alt={data.teenager_at_work.img3.alt}/>
                    </div>
                </div>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.employment_benefits.title}</div>
                <div className={styles.descriptionGray}>{data.employment_benefits.description}</div>
                <img className={styles.imgFull} src={data.employment_benefits.img.url}
                     alt={data.employment_benefits.img.alt}/>
            </div>
            <div className={styles.boxList}>
                <div className={styles.titleBlack}>{data.employment_disadvantages.title}</div>
                <div className={styles.descriptionGray}>{data.employment_disadvantages.description}</div>
                <img className={styles.imgFull} src={data.employment_disadvantages.img.url}
                     alt={data.employment_disadvantages.img.alt}/>
            </div>
        </Section>
    )
}

