import styles from './header.module.css'
import logo from '../../assets/img/shortifyLogo.png'
function Header()
{
    return(
        <header className={styles.header} id="header">
            <div className={styles.logo}>
                <img src={logo} />
            </div>

            
        </header>
    )
}

export default Header