import styles from './articlesStyle.module.css'

function WhyArticle()
{
    return(
        <article className={`${styles.article} ${styles.articleWhy}`}>
            <h2>Po co skracać linki?</h2>

            <h3> Po co skracać linki?<mark className={styles.mark}> Otóż jest kilka powodów</mark></h3>
            <p>
            Obecnie stosowane linki są Długie i trudne do udostępnienia, zwłaszcza w wiadomościach tekstowych, mediach społecznościowych czy podczas komunikacji ustnej. Skrócone linki są bardziej kompaktowe i łatwiejsze do przekazania. Krótsze linki wyglądają bardziej estetycznie i profesjonalnie, co jest ważne przy dzieleniu się nimi w materiałach marketingowych, e-mailach, prezentacjach czy postach na blogach.
            </p>
            <p>
            Skrócone linki są łatwiejsze do zapamiętania, co jest szczególnie przydatne w kampaniach reklamowych, gdzie chcesz, aby odbiorcy mogli łatwo przypomnieć sobie adres URL. Długie i skomplikowane linki są bardziej podatne na błędy podczas kopiowania i wklejania. Skrócone linki minimalizują ryzyko popełnienia błędu, co jest istotne w kontekście precyzyjnego udostępniania informacji.
            </p>
        </article>
    )
}
export default WhyArticle