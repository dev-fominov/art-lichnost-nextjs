import type {NextPage} from 'next'
import {Footer} from "../components/common/footer";
import {Header} from "../components/common/header";
import {Navbar} from "../components/main/navbar";
import {InfoHead} from "../components/main/info-head";
import {SectionPsychologist} from "../components/psychologist/section-psychologist";

const Psychologist: NextPage = ({data}:any) => {
  return (
    <>
        <Header banner={'https://art-lichnost.ru/wp-content/uploads/2022/03/3dc231223ac9bf8d44bfbc648e105680.jpeg'}>
            <Navbar/>
            <InfoHead content={data.content}/>
        </Header>
      <SectionPsychologist data={data}/>
      <Footer/>
    </>
  )
}

export default Psychologist

export async function getStaticProps() {
  const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/psychologist`)
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}