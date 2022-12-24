import type { NextPage } from 'next'
import { Footer } from "../components/common/Footter";
import { SectionContacts } from "../components/contacts/SectionContacts";
import { HeaderGreen } from "../components/common/HeaderGreen";
import Meta from "../services/Meta";
import { pageAPI } from "../api/api";

const Contacts: NextPage = ({ data }: any) => {
    return (
        <>
            <Meta meta={data.metadata} />
            <HeaderGreen title={'Контакты'} />
            <SectionContacts data={data} />
            <Footer />
        </>
    )
}

export default Contacts

export async function getStaticProps() {
    const data = await pageAPI.contacts()
    return {
        props: {
            data
        }
    };
}