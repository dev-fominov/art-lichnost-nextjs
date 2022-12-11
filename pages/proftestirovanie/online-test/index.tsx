import {Footer} from "../../../components/common/Footer";
import {Navbar} from "../../../components/main/Navbar";
import {InfoHead} from "../../../components/main/InfoHead";
import {Header} from "../../../components/common/Header";
import styles from "../../../styles/proftestirovanie/testirovanie.module.css";
import {Container} from "../../../components/common/Container";
import SectionTestirovanie from "../../../components/proftestirovanie/SectionTestirovanie";
import {NextPage} from "next";
import Meta from "../../../services/Meta";
import {pageAPI} from "../../../api/api";

const OnlineTest: NextPage = ({data}: any) => {

    const VIDEO_WIDTH = 1920;
    const VIDEO_HEIGHT = 1080;

    return (
        <>
            <Meta meta={{}}/>
            {data.id_video
                ? <div className="video-background">
                    <iframe
                        width={VIDEO_WIDTH}
                        height={VIDEO_HEIGHT}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        src={`https://www.youtube.com/embed/${data.id_video}?autoplay=1&controls=0&rel=0&showinfo=0&mute=1&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fart-lichnost.vercel.app&widgetid=1`}
                    />
                    <Navbar/>
                    <InfoHead content={data.content}/>
                    <Container>
                        <div>
                            {data.benefits.map((item: any, index: any) => <div className={styles.itemLabel}
                                                                               key={index}
                                                                               style={data.id_page === 54
                                                                                   ? {
                                                                                       color: '#FF822E',
                                                                                       border: '1px solid #FF822E'
                                                                                   }
                                                                                   : {}}>
                                {item}
                            </div>)}
                        </div>
                    </Container>
                </div>
                : <Header banner={data.banner.url}>
                    <Navbar/>
                    <InfoHead content={data.content}/>
                    <Container>
                        <div className={styles.benefits}>
                            {data.benefits.map((item: any, index: any) => <div className={styles.itemLabel}
                                                                               key={index}
                                                                               style={data.id_page === 54
                                                                                   ? {
                                                                                       color: '#FF822E',
                                                                                       border: '1px solid #FF822E'
                                                                                   }
                                                                                   : {}}>
                                {item}
                            </div>)}
                        </div>
                    </Container>
                </Header>}
            <SectionTestirovanie data={data}/>
            <Footer/>
        </>
    )
}

export default OnlineTest

export async function getStaticProps() {
    const data =  await pageAPI.onlineTest()
    return {
        props: {
            data
        }
    };
}

