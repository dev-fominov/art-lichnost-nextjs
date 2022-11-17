import type {NextPage} from 'next'
import {Footer} from "../components/common/footer";
import {SectionContacts} from "../components/contacts/section-contacts";
import {HeaderGreen} from "../components/common/header-green";
import Head from "next/head";

const Contacts: NextPage = ({data}: any) => {
    return (
        <>
            <Head>
                <title>
                    Контакты - Центр развития детей и выбора профессии АртЛичность
                </title>
            </Head>
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

<<<<<<< HEAD
  return {
    props: {
      data
    },
    revalidate: 10,
  };
=======
    return {
        props: {
            data
        }
    };
>>>>>>> mainPage
}