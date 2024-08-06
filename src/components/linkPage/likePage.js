import { useEffect, useState } from 'react'
import styles from './linkPage.module.css'
import img from '../../assets/img/shortifyLogo.png'
import LoadingIcon from '../../assets/svg/loadingIcon'

function LinkPage()
{
    let [dots,setDots] = useState("")


    useEffect(()=>{
        setTimeout(() => {
            setDots(dots+=".")
            if(dots.length == 4)
            {
                setDots('')
            }
        }, 400);
        
    },[dots])



    return(
        <article className={styles.article}>

            <img src={img} className={styles.logo}/>

            <LoadingIcon cl={styles.loadingIcon}/>

            <h1>Trwa przekierowywanie{dots}</h1>
        </article>
    )
}

export default LinkPage