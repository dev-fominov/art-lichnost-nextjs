import type {NextPage} from 'next'
import {Footer} from "../../components/common/Footer";
import {Navbar} from "../../components/main/Navbar";
import {InfoHead} from "../../components/main/InfoHead";
import {Header} from "../../components/common/Header";
import {BigLinksProf} from "../../components/proftestirovanie/BigLinksProf";
import SectionProftestirovanie from "../../components/proftestirovanie/SectionProftestirovanie";
import Meta from "../../services/Meta";
import {pageAPI} from "../../api/api";

const Proftestirovanie: NextPage = ({data}: any) => {

    const VIDEO_WIDTH = 1920;
    const VIDEO_HEIGHT = 1080;

    return (
        <>
            <Meta meta={data.metadata}/>
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
                    <BigLinksProf/>
                    <InfoHead content={data.content}/>
                </div>
                : <Header banner={data.banner.url}>
                    <Navbar/>
                    <BigLinksProf/>
                    <InfoHead content={data.content}/>
                </Header>}
            <SectionProftestirovanie data={data}/>
            <Footer/>
        </>
    )
}

export default Proftestirovanie

export async function getServerSideProps() {
    const data =  await pageAPI.proftestirovanie()
    return {
        props: {
            data
        }
    };
}