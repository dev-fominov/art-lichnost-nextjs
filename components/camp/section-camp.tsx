import React from "react";
import {Section} from "../common/section";
import Program from "./program";
import Reviews from "./reviews";
import Merch from "./merch";
import Docs from "./docs";

export const SectionCamp = ({data}: any) => {
    return (<Section>
            {data.camps.map((el:any)=> <Program key={el.term_id} data={el}/>)}
            <Reviews data={data}/>
            <Merch data={data.merch}/>
            <Docs data={data.docs} title={'Забронировал, что дальше?'}/>
        </Section>
    )
}

