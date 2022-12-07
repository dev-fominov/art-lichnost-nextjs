import styles from './../../styles/camp/merch.module.css'
import {A} from "../common/A";
import Image from 'next/image'

const Merch = ({data}: any) => {
    return (
        <div className={styles.merch}>
            <div className={styles.leftBox}>
                <div className={styles.title}>
                    {data.title}
                </div>
                <p>{data.description}</p>
                <A href={`/merch`} text={'Узнать больше'}/>
            </div>
            <div className={styles.rightBox}>
                <Image  layout="fill"
                        quality={50}
                        src={data.image.url}
                        alt={data.image.alt}/>
            </div>
        </div>
    )
}

export default Merch