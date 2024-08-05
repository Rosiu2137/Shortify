import styles from './nav.module.css'
import logo from '../../assets/img/shortifyLogo.png'
import { useEffect, useRef, useState } from 'react'
function Nav()
{

    const [displayLogo,setDisplayLogo] = useState(false)
    const navRef = useRef()
    const logoRef = useRef()

    const windowScroll = (e)=>
    {
        if(navRef.current.offsetTop>document.querySelector("#header").clientHeight)
        {
            setDisplayLogo(true)
        }
        else
        {
            setDisplayLogo(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",windowScroll)
    },[])

    useEffect(()=>{

        if(displayLogo)
        {
            logoRef.current.classList.add(styles.logoDisplay)
        }
        else
        {
            logoRef.current.classList.remove(styles.logoDisplay)
        }

    },[displayLogo])

    const logoClicked = ()=>
    {
        if(displayLogo)
        {
            window.scrollTo(0,0)
        }
    }


    return(
        <nav className={styles.nav} ref={navRef}>

                <div className={styles.logo} ref={logoRef} onClick={logoClicked}>
                    <img src={logo}></img>
                </div>

                <ul>
                    <li>
                        Jak to działa?
                    </li>
                    <li>
                        Po co skracać?
                    </li>
                    <li>
                        O nas
                    </li>
                </ul>
            </nav>
    )
}

export default Nav