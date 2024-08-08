import { useEffect, useRef, useState } from 'react'
import styles from './linkSuccess.module.css'
import Copy2Icon from '../../assets/svg/copy2Icon'

let timeout1,timeout2,timeout3,timeout4,timeout5,timeout6 

function LinkSuccess(props)
{

    const h1ref = useRef()
    const h2ref = useRef()
    const pRef = useRef()
    const buttonRef = useRef()
    const infoRef = useRef()

    const [displayInfo,setDisplayInfo] = useState(false)

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
            clearTimeout(timeout5)
            clearTimeout(timeout6)
        }
    },[])

    const copyAddress = async()=>
    {

        navigator.clipboard.writeText(props.shortedLink)
        setDisplayInfo(true)
        
    }


    useEffect(()=>{

        timeout6 = setTimeout(()=>{
            if(infoRef.current)
            {
                infoRef.current.classList.add(styles.animation)

            }
        },1500)

        timeout5 = setTimeout(() => {
            setDisplayInfo(false)
            if(infoRef.current)
            {
                infoRef.current.classList.remove(styles.animation)

            }
        }, 2000);

    },[displayInfo])

    return(
        <article className={styles.article}>

            <h1 ref={h1ref}>Oto twój skrócony Link</h1>

            <h2 ref={h2ref}>{props.shortedLink}
                <button className={styles.autoCopy} onClick={copyAddress}>
                    <Copy2Icon cl={styles.icon}/>
                    {displayInfo?<span className={styles.info} ref={infoRef}>
                        Skopiowano!
                        <span></span>
                    </span>:null}
                </button>
            </h2>

            <p ref={pRef}>Skopiuj go i wklejaj aby łatwiej dostawać się do swoich ulubionych stron</p>

            <button ref={buttonRef} onClick={e=>props.successHandler(false)}>Utwórz nowy Link</button>

        </article>
    )
}

export default LinkSuccess