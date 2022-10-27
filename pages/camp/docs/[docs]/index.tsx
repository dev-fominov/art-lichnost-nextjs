import {HeaderGreen} from "../../../../components/common/header-green";
import {Section} from "../../../../components/common/section";
import {Footer} from "../../../../components/common/footer";
import {useRouter} from "next/router";
import Docs from "../../../../components/camp/docs";

const DocsPage = ({data}:any) => {
    const router = useRouter()
    const { docs } = router.query
    return (<div>
            <HeaderGreen title={docs}/>
            <Section>
                <div>
                    <h3>{docs}</h3>
                </div>
                <Docs title={'Посмотреть другое'}
                    data={[
                    {
                        "id": 522,
                        "slug": "mediczinskie-spravki",
                        "title": "Медицинские справки",
                        "subtitle": "Для поездки в лагерь"
                    },
                    {
                        "id": 523,
                        "slug": "algoritm-dejstvij",
                        "title": "Алгоритм действий",
                        "subtitle": "Что делать после заявки?"
                    },
                    {
                        "id": 524,
                        "slug": "dokumenty-dlya-dogovora",
                        "title": "Документы для договора",
                        "subtitle": "Что взять для подписания?"
                    },
                    {
                        "id": 525,
                        "slug": "oplata",
                        "title": "Оплата",
                        "subtitle": "Как удобнее оплатить?"
                    },
                    {
                        "id": 526,
                        "slug": "sobranie-dlya-roditelej",
                        "title": "Собрание для родителей",
                        "subtitle": "Ответы на все вопросы"
                    },
                    {
                        "id": 527,
                        "slug": "sertifikat",
                        "title": "Сертификат",
                        "subtitle": "Как получить?"
                    },
                    {
                        "id": 528,
                        "slug": "kovidnye-ogranicheniya",
                        "title": "Ковидные ограничения",
                        "subtitle": "И как с ними быть?"
                    }
                ]}/>
            </Section>
            <Footer/>
        </div>
    )
}

export default DocsPage

/*
export async function getServerSideProps (context: any) {
    const res = await fetch(`https://alex-volkov.ru/wp-json/art/v1/page/docs/${context.params.docs}`)
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}*/
