import {HeaderGreen} from "../../../../components/common/HeaderGreen";
import {Section} from "../../../../components/common/Section";
import {Footer} from "../../../../components/common/Footer";
import Docs from "../../../../components/camp/Docs";
import Meta from "../../../../services/Meta";
import styles from "../../../../styles/camp/docs.module.css";

const DocsPage = ({data}: any) => {

    return (
        <>
            <Meta meta={{}}/>
            <HeaderGreen title={data.title}/>
            <Section>
                <div className={styles.docs}>
                    <h3 className={styles.titleInner}>{data.subtitle_docs}</h3>
                    <div className={styles.medicalBlock} dangerouslySetInnerHTML={{__html: data.content}}/>
                </div>
                <Docs title={'Посмотреть другое'}
                      data={data.docs}/>
            </Section>
            <Footer/>
        </>
    )
}

export default DocsPage

export async function getServerSideProps(context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/docs/${context.params.docs}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}
