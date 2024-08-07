import { useEffect, useRef, useState } from 'react'
import styles from './linkPage.module.css'
import img from '../../assets/img/shortifyLogo.png'
import LoadingIcon from '../../assets/svg/loadingIcon'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import serverAddress from '../serverAddress'

function LinkPage()
{
    let [dots,setDots] = useState("")
    const [error,setError] = useState('')
    const [usersLink,setUsersLink] = useState()
    const linkRef = useRef()

    const navigation = useNavigate()

    const link = useParams()

    const forwarding = async()=>
    {
        try
        {
            setError('')
            const response = await axios.get(`${serverAddress}/${link.id}.json`)
            const usersLink = (Object.values(response.data))[0].link
            setUsersLink(usersLink)
        }
        catch(ex)
        {
            console.log(ex)
            setError("Niestety, nie dopasowaliśmy wpisanego adresu do linku w naszej bazie danych. Sprawdź poprawność pisowni adresu")
        }
    }


    useEffect(()=>{
        forwarding()
    },[])

    useEffect(()=>{


        setTimeout(() => {
            setDots(dots+=".")
            if(dots.length == 4)
            {
                setDots('')
            }
        }, 400);
        
    },[dots])

    useEffect(()=>{
        if(usersLink)
        {
            linkRef.current.click()
        }
    },[usersLink])

    return(
        <article className={styles.article}>

            <img src={img} className={styles.logo}/>

            {error?<h2 className={styles.error}>{error}</h2>: <LoadingIcon cl={styles.loadingIcon}/>}
           
            {!error && <h1>Trwa przekierowywanie{dots}</h1>}

            {error?<button className={styles.homeBtn} onClick={e=>navigation('/')}>Strona Główna</button>:null}

            <a className={styles.a} href={usersLink} ref={linkRef}>jebac disa</a>

        </article>
    )
}

export default LinkPage