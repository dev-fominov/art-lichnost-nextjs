import type {NextPage} from 'next'
import {Header} from "../components/common/header";
import {Navbar} from "../components/main/navbar";
import {BigLinks} from "../components/main/big-links";
import {InfoHead} from "../components/main/info-head";
import {Section} from "../components/common/section";
import {Container} from "../components/common/container";
import {HomeItem} from "../components/main/home-item";
import {Footer} from "../components/common/footer";

const Home: NextPage = ({data}: any) => {
    return (<>
            <Header banner={data.banner.url}>
                <Navbar/>
                <BigLinks/>
                <InfoHead content={data.content}/>
            </Header>
            <Section>
                <Container>
                    {data.sections.map((item: any, index: number) => <HomeItem key={index} id={index} item={item}/>)}
                </Container>
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