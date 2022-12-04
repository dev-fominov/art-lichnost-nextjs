import {Section} from "../common/section";
import Program from "./program";
import Reviews from "./reviews";
import Merch from "./merch";
import Docs from "./docs";

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

