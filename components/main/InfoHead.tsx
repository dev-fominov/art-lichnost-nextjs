import styles from "../../styles/main/info-head.module.css";
import {Container} from "../common/Container";

interface InfoHeadProps  {
    content: string
}

export const InfoHead = ({content}:InfoHeadProps) => {
    return(
        <div className={styles.boxInfoHead}>
            <Container>
                <div className={styles.title} dangerouslySetInnerHTML={{__html: content}}/>
            </Container>
        </div>
    )
}
