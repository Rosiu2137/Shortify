import styles from './articlesStyle.module.css'

function About()
{
    return(
        <article className={styles.article} id="about">
            <h2>O nas</h2>
            <p>
            Shortify powstało z myślą o tych, którzy pragną efektywnie zarządzać swoimi linkami, udostępniać je w bardziej zwięzłej formie i jednocześnie śledzić ich skuteczność. Rozumiemy, jak ważne jest, aby linki były nie tylko funkcjonalne, ale także estetyczne i łatwe do zapamiętania.
            </p>
            <p>
            Niezależnie od tego, czy jesteś marketerem, blogerem, przedsiębiorcą czy zwykłym użytkownikiem internetu, Shortify jest tutaj, aby pomóc Ci efektywnie zarządzać i udostępniać linki. Dołącz do naszej społeczności i zobacz, jak skracanie linków może stać się prostsze i bardziej efektywne.
            </p>
            <blockquote className={styles.blockQuote}>
                <mark>Shortify</mark> – skracaj linki, rozszerzaj możliwości!
            </blockquote>
        </article>
    )
}

export default About