import styles from './footer.module.css'
import img from '../../assets/img/shortifyLogo.png'
function Footer()
{

    const getYear = ()=>
    {
        const date = new Date()
        return date.getFullYear()
    }

    return(
        <footer className={styles.footer}>

            <div className={styles.logo}>
                <img src={img}/>
                <h2><mark>Shortify {getYear()}<sup>&#169;</sup></mark> - Wszelkie Prawa Zastrzeżone</h2>
            </div>

            <div className={styles.docs}>
                <ul>
                    <li>Regulamin</li>
                    <li>Polityka Cookies</li>
                    <li>Prawa</li>
                    <li>Ochrona Danych</li>
                    <li>Bezpieczeństwo</li>
                </ul>

                <ul>
                    <li>Forum</li>
                    <li>Rozwój</li>
                    <li>Działania</li>
                    <li>Kontakt</li>
                    <li>Zgłoszenia</li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer