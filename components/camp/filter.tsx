import styles from '../../styles/camp/filter.module.css'
import {useFormik} from "formik";
import {Select} from "./select";
import {Container} from "../common/container";
import {useState} from "react";
import Card from "./card";

const Filter = ({data}: any) => {

    const [resFilter, setResFilter] = useState({resFilter: null, loading: false})

    const formik = useFormik({
        initialValues: {
            age: {name: "Выберите возраст", slug: ''},
            section: {name: "Выберите профессию или навык", slug: ''},
            period: {name: "Выберите даты", slug: ''},
            certificate: 1
        },
        onSubmit: async values => {
            setResFilter({...resFilter, loading: true})
            const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/camp/filter?certificate=${values.certificate}&age=${values.age.slug}&section=${values.section.slug}&period=${values.period.slug}`)
            await setResFilter({resFilter: await res.json(), loading: false})
        },
    })
    return (
        <div className={styles.filter}>
            <h2 className={styles.title}>Подобрать смену</h2>
            <Container>
                <div className={styles.filterBox}>

                    <form className={styles.programsFilter} onSubmit={formik.handleSubmit}>
                        <div className={styles.programsFilterLeft}>
                            <div className={styles.programsFilterItem}>
                                <label className={styles.programsFilterTitle}>
                                    <span>1</span>
                                    Возраст
                                </label>
                                <Select data={data.age}
                                        setFieldValue={formik.setFieldValue}
                                        name={formik.values.age.name}
                                        title={'age'}/>
                            </div>
                            <div className={styles.programsFilterItem}>
                                <label className={styles.programsFilterTitle}>
                                    <span>2</span>
                                    Период
                                </label>
                                <Select data={data.period}
                                        setFieldValue={formik.setFieldValue}
                                        name={formik.values.period.name}
                                        title={'period'}/>
                            </div>
                            <div className={styles.programsFilterItem}>
                                <label className={styles.programsFilterTitle}>
                                    <span>3</span>
                                    Профессия или навык
                                </label>
                                <Select data={data.section}
                                        setFieldValue={formik.setFieldValue}
                                        name={formik.values.section.name}
                                        title={'section'}/>
                            </div>
                        </div>
                        <div className={styles.programsFilterRight}>
                            <div className={styles.certificate}>
                                <div className={styles.certificateTitle}>Наличие сертификата</div>
                                <ul className={styles.certificateCheckboxes}>
                                    <li className={styles.radioLabel} onClick={() => {
                                        formik.setFieldValue('certificate', 1)
                                    }}> {formik.values.certificate === 1
                                        ? <div className={styles.radioTrue}/>
                                        : <div className={styles.radioFalse}/>}
                                        С сертификатом
                                    </li>
                                    <li className={styles.radioLabel} onClick={() => {
                                        formik.setFieldValue('certificate', 2)
                                    }}>{formik.values.certificate === 2
                                        ? <div className={styles.radioTrue}/>
                                        : <div className={styles.radioFalse}/>}
                                        Без сертификата
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <button type={"submit"} className={styles.btnRed}>
                                    {resFilter.loading ? 'Загрузка...' : 'Подобрать'}
                                </button>
                                <button type={"button"} onClick={() => {
                                    formik.resetForm()
                                    setResFilter({resFilter: null, loading: false})
                                }}
                                        className={styles.btnGrey}>Сбросить фильтр
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className={styles.resFilter}>
                        {!!resFilter.resFilter
                            ? ((resFilter.resFilter as Array<any>).length
                                ? (resFilter.resFilter as Array<any>).map((el: any) => <Card key={el.id}
                                                                                             filter={true}
                                                                                             data={el}/>)
                                : <span>Нет результатов</span>)
                            : null}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Filter