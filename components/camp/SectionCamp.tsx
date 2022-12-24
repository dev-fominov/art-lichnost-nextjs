import {Section} from "../common/Section";
import Program from "./Program";
import Reviews from "./Reviews";
import Merch from "./Merch";
import Docs from "./Docs";

export const SectionCamp = ({data}: any) => {
    return (
        <Section>
            {data.camps.map((el: any) => el.count > 0
                ? <Program key={el.term_id} data={el}/>
                : <></>)}
            <Reviews data={data.reviews}/>
            <Merch data={data.merch}/>
            <Docs data={data.docs} title={'Забронировал, что дальше?'}/>
        </Section>
    )
}

