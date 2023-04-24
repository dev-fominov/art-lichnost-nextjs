import type {NextPage} from 'next'
import {Footer} from "../components/common/Footer";
import {SectionTransfer} from "../components/transfer/SectionTransfer";
import {HeaderGreen} from "../components/common/HeaderGreen";
import {pageAPI} from "../api/api";

const Transfer: NextPage = ({data}: any) => {
	// console.log(data)
    return (
        <>
            <HeaderGreen title={'Трансфер'}/>
            <SectionTransfer data={data}/>
            <Footer/>
        </>
    )
}

export default Transfer

export async function getStaticProps() {
    const data =  await pageAPI.transfer()
    return {
        props: {
            data
        },
        revalidate: 60,
    };
}