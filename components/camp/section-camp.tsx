import React from "react";
import {Section} from "../common/section";
import Program from "./program";

export const SectionCamp = ({data}: any) => {
    return (<Section>
            {data.camps.map((el:any)=> <Program key={el.id} data={el}/>)}
        </Section>
    )
}

