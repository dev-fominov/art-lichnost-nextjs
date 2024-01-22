import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel, AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from '../../styles/common/accordion.module.css'
import {IoIosArrowRoundDown, IoIosArrowRoundUp} from "react-icons/io";
import {useState} from "react";

export const CustomAccordion = ({data}: any) => {
    const [openAllAccordion, setOpenAllAccordion] = useState(false)

    return (
        <div>
            <Accordion allowZeroExpanded className={styles.accordion}>
                {data.map((item: any, index: number) => (
                    <AccordionItem
                        className={(index < 3) ? styles.accordionItem : openAllAccordion ? styles.accordionItem : styles.accordionItemNull} key={index}>
                        <AccordionItemHeading className={styles.itemHeading}>
                            <AccordionItemButton className={styles.btn}>
                                <AccordionItemState>
                                    {({expanded}) => <> <h3>{item.question}</h3>
                                        {expanded
                                            ? <IoIosArrowRoundUp className={styles.icon}/>
                                            : <IoIosArrowRoundDown className={styles.icon}/>}
                                    </>}
                                </AccordionItemState>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>{item.answer}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className={styles.showMore}
                 onClick={() => setOpenAllAccordion(!openAllAccordion)}>
                {openAllAccordion ? 'Скрыть обратно' : 'Посмотреть еще'}
            </div>
        </div>)
}