import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel, AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from '../../styles/team/section-team.module.css'
import {IoIosArrowRoundDown, IoIosArrowRoundUp} from "react-icons/io";

export const AccordionTeam = ({data}: any) => {

    return <div>
        <Accordion allowZeroExpanded className={styles.accordion}>
            {data.map((item: any, index: any) => (
                <AccordionItem className={styles.principleItem} key={index}>
                    <AccordionItemHeading className={styles.item}>
                        <AccordionItemButton className={styles.box}>
                            <AccordionItemState>
                                {({expanded}) => <>
                                    <span>{item.title}</span>
                                    {expanded
                                        ? <IoIosArrowRoundUp className={styles.arrow}/>
                                        : <IoIosArrowRoundDown className={styles.arrow}/>}
                                </>}
                            </AccordionItemState>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className={styles.contentItem}>{item.description}</p>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
}