import styles from '../../styles/camp/filter.module.css'

const Filter = ({data}: any) => {
    return (
        <div className={styles.filter}>
            <h2 className={styles.title}>Подобрать смену</h2>
            <div className={styles.filterBox}>
                <div className={styles.programsFilter}>
                    <div className={styles.programsFilterLeft}>
                    </div>
                    <div className={styles.programsFilterRight}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter