import {HeaderGreen} from "../../../components/common/HeaderGreen";
import {Section} from "../../../components/common/Section";
import styles from '../../../styles/documents/documents.module.css'
import {Footer} from "../../../components/common/Footer";
import {NextPage} from "next";
import Meta from "../../../services/Meta";
import {pageAPI} from "../../../api/api";

const Slug: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={data.metadata}/>
            <HeaderGreen title={data.title}/>
            <Section>
                <div>
                    <h1 className={styles.title}>{data.title}</h1>
                    <div className={styles.content} dangerouslySetInnerHTML={{__html: data.content}}/>
                </div>
            </Section>
            <Footer/>
        </>
    )
}

export default Slug

export async function getServerSideProps(context: any) {
    const data = await pageAPI.contract(context.params.slug)
    return {
        props: {
            data
        }
    };
}