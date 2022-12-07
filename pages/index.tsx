import type {NextPage} from 'next'
import {Header} from "../components/common/Header";
import {Navbar} from "../components/main/Navbar";
import {BigLinks} from "../components/main/BigLinks";
import {InfoHead} from "../components/main/InfoHead";
import {Section} from "../components/common/Section";
import {HomeItem} from "../components/main/HomeItem";
import {Footer} from "../components/common/Footer";
import Meta from "../services/Meta";

const Home: NextPage = ({data}: any) => {
    return (
        <>
            <Meta meta={{}}/>
            <Header banner={data.banner.url}>
                <Navbar/>
                <BigLinks/>
                <InfoHead content={data.content}/>
            </Header>
            <Section>
                {data.sections.map((item: any, index: number) => <HomeItem key={index} id={index} item={item}/>)}
            </Section>
            <Footer/>
        </>
    )
}

export default Home

export async function getStaticProps() {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/home`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}