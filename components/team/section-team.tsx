import {Section} from "../common/section";
import styles from "../../styles/team/section-team.module.css";
import {IoIosArrowRoundDown} from "react-icons/io";
import SliderTeam from "./slider-team";
import SliderTeamPhoto from "./slider-team-photo";
import {A} from "../common/A";
import {AccordionTeam} from "./accordionTeam";

const SectionTeam = ({data}: any) => {
    return (
        <Section>
            <div className={styles.teamBox}>
                <div className={styles.title}>{data.ideology.title}</div>
                <div className={styles.description}>
                    <div dangerouslySetInnerHTML={{__html: data.ideology.description}}/>
                </div>
            </div>
            <div className={styles.teamBox}>
                <div className={styles.title}>{data.principles.title}</div>
                <AccordionTeam data={data.principles.list_principles}/>
            </div>
            <div className={styles.teamBox}>
                <div className={styles.title}>{data.team_manager.title}</div>
                <SliderTeam data={data.team_manager.list_team}/>
            </div>
            <div className={styles.teamBox}>
                <div className={styles.title}>{data.team_psiholog.title}</div>
                <SliderTeam data={data.team_psiholog.list_team}/>
            </div>
            <div className={styles.teamBox}>
                <div className={styles.title}>{data.team_leadership.title}</div>
                <div className={styles.description}>{data.team_leadership.description}</div>
                <SliderTeamPhoto data={data.team_leadership.list_team}/>
            </div>
            <div className={styles.teamBox}>
                <div className={styles.title}>{data.team_counselors.title}</div>
                <div className={styles.tags}>
                    {data.team_counselors.list_tags.map((item: any, index: any) => <div key={index}
                                                                                        className={styles.tagItem}>
                        {item}
                    </div>)}
                </div>
                <div className={styles.description}>{data.team_counselors.description}</div>
                <SliderTeamPhoto data={data.team_counselors.list_team}/>
            </div>
            <div className={styles.teamBox}>
                <div className={styles.leaders}>
                    <div className={styles.leftBox}>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.trebovaniya}>
                            {data.team_leaders.requirements.map((item: any, index: any) => <div key={index}
                                                                                                className={styles.requirements}>
                                {item}
                            </div>)}
                        </div>
                        <div className={styles.descriptionLeaders}>{data.team_leaders.description}</div>
                        <div className={styles.obyazannost}>
                            {data.team_leaders.duties.map((item: any, index: any) => <div key={index}
                                                                                          className={styles.tagItem}
                                                                                          style={{margin: '5px 0'}}>
                                {item}
                            </div>)}
                        </div>
                    </div>
                    <div className={styles.rightBox}>
                        <img src={data.team_leaders.img.url} alt={data.team_leaders.img.alt}/>
                    </div>
                </div>
            </div>
            <div className={styles.teamBox}>
                <div className={styles.title}>Стать частью команды</div>
                <div className={styles.jobsBox}>
                    <div className={styles.contentComand}>
                        <div className={styles.left}>
                            <div className={styles.title2}>Кого мы ждем и что предлагаем?</div>
                            <div className={styles.description2}>{data.part_team.who_waiting}</div>
                            <A href={`/vacancies`} text={'Посмотреть все вакансии'}/>
                        </div>
                        <div className={styles.right}>
                            <A href={
                                {
                                    pathname: '/vacancies/[job]',
                                    query: {job: 'vozhatyj-v-lager',},
                                }}
                               text={'Вожатый в лагерь'}/>
                        </div>
                    </div>
                    <div className={styles.contentComand}>
                        <div className={styles.left}>
                            <div className={styles.description2}>{data.part_team.no_vacancies}</div>
                        </div>
                        <div className={styles.right}>
                            <span>Напишите нам – {data.part_team.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default SectionTeam

