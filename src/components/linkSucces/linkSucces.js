import { useEffect, useRef } from 'react'
import styles from './linkSuccess.module.css'

let timeout1,timeout2,timeout3,timeout4

function LinkSuccess(props)
{

    const h1ref = useRef()
    const h2ref = useRef()
    const pRef = useRef()
    const buttonRef = useRef()

    useEffect(()=>{
        timeout1 = setTimeout(()=>{
            h1ref.current.classList.add(styles.animate)
        },200)
        timeout2 = setTimeout(()=>{
            pRef.current.classList.add(styles.animate)
        },400)
        timeout3 = setTimeout(()=>{
            h2ref.current.classList.add(styles.animate)
        },600)
        timeout4 = setTimeout(()=>{
           buttonRef.current.classList.add(styles.animate)
        },1000)
    },[])

    return(
        <article className={styles.article}>

            <h1 ref={h1ref}>Oto twój skrócony Link</h1>

            <h2 ref={h2ref}>http://localhost:3000/</h2>

            <p ref={pRef}>Skopiuj go i wklejaj aby łatwiej dostawać się do swoich ulubionych stron</p>

            <button ref={buttonRef} onClick={e=>props.successHandler(false)}>Utwórz nowy Link</button>

        </article>
    )
}

export default LinkSuccess