import styles from '../../styles/camp/filter.module.css'
import {useFormik} from "formik";
import {Select} from "../camp/select";
import {Container} from "../common/container";
import {useState} from "react";
import Card from "./../camp/card";

const FilterCourses = ({data}: any) => {

    const [resFilter, setResFilter] = useState({resFilter: null, loading: false})

    const formik = useFormik({
        initialValues: {
            age: {name: "Выберите возраст", slug: ''},
            category: {name: "Выберите курс", slug: ''},
            presenter: {name: "Выберите ведущего программы", slug: ''},
        },
        onSubmit: async values => {
            setResFilter({...resFilter, loading: true})
            const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/courses/filter?course=${values.category.slug}&age=${values.age.slug}&presenter=${values.presenter.slug}`)
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
                                    Ведущий программы
                                </label>
                                <Select data={data.presenter}
                                        setFieldValue={formik.setFieldValue}
                                        name={formik.values.presenter.name}
                                        title={'presenter'}/>
                            </div>
                        </div>
                        <div className={styles.programsFilterRight}>
                            <div className={styles.programsFilterItem} style={{marginLeft: '30px'}}>
                                <label className={styles.programsFilterTitle}>
                                    <span>3</span>
                                    Курс
                                </label>
                                <Select data={data.category}
                                        setFieldValue={formik.setFieldValue}
                                        name={formik.values.category.name}
                                        title={'category'}/>
                            </div>
                            <div style={{marginLeft: '30px'}}>
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

export default FilterCourses