import {HeaderGreen} from "../components/common/HeaderGreen";
import {Footer} from "../components/common/Footer";
import Page404 from "../components/common/Page404";

const Custom404 = () => {
    return (
        <>
            <HeaderGreen title={'404. СТРАНИЦА НЕ НАЙДЕНА'}/>
            <Page404/>
            <Footer/>
        </>
    )
}

export default Custom404