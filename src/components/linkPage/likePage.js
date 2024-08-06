import { useEffect, useState } from 'react'
import styles from './linkPage.module.css'


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
            <h1>Trwa przekierowywanie{dots}</h1>
        </article>
    )
}

export default LinkPage