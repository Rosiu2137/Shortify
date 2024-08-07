import { useEffect, useRef } from 'react'
import styles from './linkSuccess.module.css'
import Copy2Icon from '../../assets/svg/copy2Icon'

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

        return ()=>
        {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
            clearTimeout(timeout3)
            clearTimeout(timeout4)
        }
    },[])

    const copyAddress = async()=>
    {

        navigator.clipboard.writeText(props.shortedLink)
        alert("Tekst skopiowany")
        
    }

    return(
        <article className={styles.article}>

            <h1 ref={h1ref}>Oto twój skrócony Link</h1>

            <h2 ref={h2ref}>{props.shortedLink}<button className={styles.autoCopy} onClick={copyAddress}><Copy2Icon cl={styles.icon}/><span className={styles.info}>Skopiowano!</span></button></h2>

            <p ref={pRef}>Skopiuj go i wklejaj aby łatwiej dostawać się do swoich ulubionych stron</p>

            <button ref={buttonRef} onClick={e=>props.successHandler(false)}>Utwórz nowy Link</button>

        </article>
    )
}

export default LinkSuccess