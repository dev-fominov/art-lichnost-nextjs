import type { NextPage } from 'next'
import {HeaderContacts} from "../components/contacts/header-contacts";
import {Footer} from "../components/common/footer";
import {SectionContacts} from "../components/contacts/section-contacts";

const Contacts: NextPage = ({data}:any) => {
  return (
    <>
      <HeaderContacts/>
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