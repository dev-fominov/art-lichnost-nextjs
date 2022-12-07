import type {NextPage} from 'next'
import {Footer} from "../components/common/Footer";
import {SectionContacts} from "../components/contacts/SectionContacts";
import {HeaderGreen} from "../components/common/HeaderGreen";
import Meta from "../services/Meta";

const Contacts: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
            <HeaderGreen title={'Контакты'}/>
            <SectionContacts data={data}/>
            <Footer/>
        </>
    )
}

export default Contacts

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/contacts`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}