import styles from './welcome.module.css'

function Welcome()
{
    return(
        <p className={styles.welcome}>
            <span>Witamy na </span><mark className={styles.mark}>Shortify</mark> – Twoim niezawodnym narzędziu do skracania linków w internecie! Naszym celem jest uproszczenie i usprawnienie sposobu, w jaki dzielisz się informacjami online. Jesteśmy zespołem pasjonatów technologii, którzy wierzą, że proste rozwiązania mogą przynieść największe korzyści.
        </p>
    )
}

export default Welcome